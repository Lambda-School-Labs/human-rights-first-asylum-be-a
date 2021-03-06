## Product Mission and Goals

Human Rights First (HRF) is a non-profit, nonpartisan, 501(c)(3), international human rights organization based in New York, Washington D.C., Houston, and Los Angeles. [HRF](https://www.humanrightsfirst.org/asylum) works to link immigration attorneys and advocates with asylum seekers and provide those attorneys with resources to best represent their clients. Our application leverages historical data to better inform advocates of a judge’s past decisions. The hope is that advocates for asylum seekers can use our tools to tailor their arguments before a particular judge and maximize their client's chances of receiving asylum.

## Architecture and Team Roles

[Architecture](reference/architecture.png)

[To get started](api/README.md)

[API documentation](api/APIDOC.md)

## Our Role

- Database changes: Removed newCase table with that change all cases approved and pending stored in the same table with a status tag(approved or pending). Database seeds match with the schema.
- Superuser role added. Superuser can add, remove, and edit users.
- Users be able to edit their information including email address, name, etc.
- Superuser and admins have more item in navigation bar that new items leads to admin only features such as manage users and approve cases.
- Back-End be able to programatically upload files to s3 bucket
- Currently, some endpoints require authentication. In the future, auth will need to be added to all endpoints however it has not been done yet to make it easier for the entire team to work with the data.
- Authentication middleware `./middleware/authRequired.js` is fully functional needs to be added to each endpoints which needs authentication.
- The `.env.sample` file contains all of the environment variables needed and where to find the values in order to run the project locally.
- There`s a API endpoint implemented by previous teams called [Swagger docs](https://asylum-a-api.herokuapp.com/api-docs/) API information in these documantation is not accurate. Swagger docs needs to be cleaned from code. For accurate and up-to-date API documantation please refer to [this file](APIDOC.md)

## Codebases

[Front-End](https://github.com/Lambda-School-Labs/human-rights-first-asylum-fe-a)

Uses NodeJS to create the web-based user interface for uploading case documents, managing users, and viewing data in the form of tables and visualizations.

[Back-End](https://github.com/Lambda-School-Labs/human-rights-first-asylum-be-a)

Uses Javascript, Express, and Postgres to manage databases containing tables for users, judges, and cases.

[Data Science](https://github.com/Lambda-School-Labs/Lambda-School-Labs-human-rights-first-asylum-ds-a)

This part of the application uses optical character recognition (OCR) to convert pdf images into text data that can be searched via natural language processing (NLP) techniques. Key data, which we refer to as structured fields, are extracted from the text data and sent to the back-end for storage.

## Known Bugs

Please see [KnownDefects](KnownDefects.md) file

## Contributors

### Labs33

|                                                                                                                                 |                                                                                                                                     |                                                                                                                            |
| :-----------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
|                                          [Senih Aydin](https://github.com/aydinsenih)                                           |                                          [Christina Melchor](https://github.com/c-melchor)                                          |                                         [Cameron Mirza](https://github.com/cmirza)                                         |
| [<img src="https://avatars.githubusercontent.com/u/35286437?v=4" width = "200" align="center"/>](https://github.com/aydinsenih) |   [<img src="https://avatars.githubusercontent.com/u/71955286?v=4" width = "200" align="center"/>](https://github.com/c-melchor)    | [<img src="https://avatars.githubusercontent.com/u/7876859?v=4" width = "200" align="center"/>](https://github.com/cmirza) |
|                                          [Rees Harper](https://github.com/reesharper)                                           |                                        [Matthew Justice](https://github.com/JusticeMatthew)                                         |
| [<img src="https://avatars.githubusercontent.com/u/70249966?v=4" width = "200" align="center"/>](https://github.com/reesharper) | [<img src="https://avatars.githubusercontent.com/u/72817096?v=4" width = "200" align="center"/>](https://github.com/JusticeMatthew) |

### Labs29 - Team A

|                                                                                                                                          |                                                                                                                                         |                                                                                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
|                                               [Ava Wingfield](https://github.com/avawing)                                                |                                                 [Tom Bauer](https://github.com/TBau23)                                                  |                                                  [Ryan Lee](https://github.com/SassyFatCat)                                                  |
| [<img src="https://ca.slack-edge.com/ESZCHB482-W014G4L7R1P-5e90ae004407-512" width = "200" align="center"/>](https://github.com/avawing) | [<img src="https://ca.slack-edge.com/ESZCHB482-W015P694SUV-84c590ba765c-512" width = "200" align="center"/>](https://github.com/TBau23) | [<img src="https://ca.slack-edge.com/ESZCHB482-W014G4N2FEV-9b9fece7a4af-512" width = "200" align="center"/>](https://github.com/SassyFatCat) |
|                                          [Linkedin](https://www.linkedin.com/in/avawingfield/)                                           |                                           [Linkedin](https://www.linkedin.com/in/tombauer11/)                                           |                                             [Linkedin](https://www.linkedin.com/in/sassyfatcat/)                                             |

<br />

### Labs30 - Team A

|                                                                                                                                                                               |                                                                                                                                                                              |                                                                                                                                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                [Tzong-Lian Tsay](https://github.com/tzonglian)                                                                |                                                               [Trevor Beadle](https://github.com/TrevorBeadle)                                                               |                                                                [Reuben Palumbo](https://github.com/reubenPalumbo)                                                                 |
| [<img src="https://avatars.githubusercontent.com/u/68922354?s=460&u=93ce3bbc5de94dd89246239b70828545b5dcac5e&v=4" width = "200" align="center"/>](https://github.com/avawing) | [<img src="https://avatars.githubusercontent.com/u/66217015?s=460&u=bc4a490d18d80167985a032f5ca86b9193124a6c&v=4" width = "200" align="center"/>](https://github.com/TBau23) | [<img src="https://avatars.githubusercontent.com/u/68444266?s=460&u=ff38ccc9dcb83047c2134ce9852e0dfef1fae8fb&v=4" width = "200" align="center"/>](https://github.com/SassyFatCat) |
|                                                                [Linkedin](https://www.linkedin.com/in/tltsay/)                                                                |                                                       [Linkedin](https://www.linkedin.com/in/trevor-beadle-1850481b6/)                                                       |                                                              [Linkedin](https://www.linkedin.com/in/reuben-palumbo/)                                                              |
|                                                                                                                                                                               |                                                                                                                                                                              |                                                                                                                                                                                   |
|                                                                [Anna Brander](https://github.com/aelise17264)                                                                 |                                                              [Maycie Morris](https://github.com/maycie-morris)                                                               |                                                                   [Lynda Santiago](https://github.com/lyntechi)                                                                   |
| [<img src="https://avatars.githubusercontent.com/u/66019108?s=460&u=b98ac38b13155691c2189b10914cff7a092ab5a5&v=4" width = "200" align="center"/>](https://github.com/avawing) | [<img src="https://avatars.githubusercontent.com/u/67204638?s=460&u=57c9c3585fd3326f80ce34c02cbb7939a3ddc0fa&v=4" width = "200" align="center"/>](https://github.com/TBau23) | [<img src="https://avatars.githubusercontent.com/u/64440403?s=460&u=ebd52037cfa31421477942f041a43a6ef88267ca&v=4" width = "200" align="center"/>](https://github.com/SassyFatCat) |
|                                                             [Linkedin](https://www.linkedin.com/in/aelise17264/)                                                              |                                                            [Linkedin](https://www.linkedin.com/in/mayciemorris/)                                                             |                                                         [Linkedin](https://www.linkedin.com/in/lynda-santiago-7b58221b4/)                                                         |
