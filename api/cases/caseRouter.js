const express = require('express');
const Cases = require('./caseModel');
const AWS = require('../../utils/AWS');
const Verify = require('../middleware/verifyDataID');
const Cache = require('../middleware/cache');
const router = express.Router();

// TODO add auth to route also - final phase

//middleware

router.use('/:id', Verify.verifyCase);

//routes

router.get('/', Cache.checkCache, (req, res) => {
  key = 'cases';
  Cases.findAll()
    .then((cases) => {
      Cache.makeCache(key, String(cases));
      res.status(200).json(cases);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', Cache.checkCache, (req, res) => {
  const id = String(req.params.id);
  const key = id + 'data';
  Cases.findById(id)
    .then((cases) => {
      Cache.makeCache(key, String(cases));
      res.status(200).json(cases);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id/original-pdf', (req, res) => {
  // * returns csv of case data
  const id = String(req.params.id);
  Cases.writeCSV(id)
    .then((cases) => {
      res.header('Content-Type', 'text/csv');
      res.attachment(`${id}_case_data.csv`);
      res.status(200).send(cases);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id/view-pdf', (req, res) => {
  const id = req.params.id;
  AWS.make_view_params(id)
    .then((params) => {
      AWS.fetch_pdf_view(params)
        .then((data) => {
          //* write file locally as temp file
          // * res.status(200).render('temp.pdf')
          res.status(200).json({ message: 'Completed', data });
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id/download-pdf', (req, res) => {
  // * returns pdf of ORIGINAL case
  const id = req.params.id;
  AWS.make_dl_params(id)
    .then((params) => {
      AWS.fetch_pdf_download(params).then((data) => {
        res.json({ message: 'Completed', data });
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id/download-csv', Cache.checkCache, (req, res) => {
  const id = String(req.params.id);
  const key = id + 'singlecsv';
  Cases.writeCSV(id)
    .then((csv) => {
      Cache.makeCache(key, String(csv));
      res.header('Content-Type', 'text/csv');
      res.attachment(`${id}_data.csv`);
      res.status(200).send(csv);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
