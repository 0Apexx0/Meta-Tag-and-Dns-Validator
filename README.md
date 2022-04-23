# Meta-Tag-and-Dns-Validator
 A Meta Tag and Dns validator project which help to fetch meta data and dns TXT records. (followed MVC structure).
 
 ### Hosted Link : https://github.com/0Apexx0/Meta-Tag-and-Dns-Validator.git
 
 
## Library used :
- meta-gabbber
- node:dns
- express

## How to Use on local Machine
- clone this project 
- open your coding editor and terminal on same folder
- in terminal write the command " npm install"
- after installation done write another command " npm start"
- open browser and go to "http://localhost:8000/"
- you can check meta tag using meta tag checker as well as dns in dns checker
- in url input tag just write the url after "www.". For example :- if i want to find meta tag of discord so instead of "www.discord.com", i write "discord.com"
- similar for dns validator just write "discord.com" (don't need to write "www.")
- the data will be fetch on a same page with different url
- if meta tag or dns not available , it will shown that the url doesn't contain any meta tag or dns TXT record

## Screenshots 
  - homePage
  ![image](https://user-images.githubusercontent.com/89356818/164896848-43d218c1-0acb-4c0e-ba65-7cfa85973ab8.png)
  ### Meta Tag 
  - Meta Tag Validator page
  ![image](https://user-images.githubusercontent.com/89356818/164896882-b0be514a-1e62-423d-8d21-2acfa1e083b1.png)
  - meta tag checking (if exist)
  ![image](https://user-images.githubusercontent.com/89356818/164896911-0d0d4687-f824-479a-8518-bdb90bd5f22e.png)
  - meta tag checking (if custom tag not exist)
  ![image](https://user-images.githubusercontent.com/89356818/164896992-54842547-e140-4fc5-9073-8772ac3b2cd1.png)
  - meta tag checking (if tags not exits )
  - ![image](https://user-images.githubusercontent.com/89356818/164897449-d5b9d21f-faea-40aa-98c8-48cfb614fc63.png)
  ### Dns Validator
  - Dns validator page
  ![image](https://user-images.githubusercontent.com/89356818/164898764-481e1db7-242d-4c91-90fb-47f6bb7c45ed.png)
  - Dns check url for TXT record (if exist )
  ![image](https://user-images.githubusercontent.com/89356818/164902325-3ad35a8d-d61b-4897-b174-6bb70ebb15b7.png)
  - Dns check url for TXT record (if not exist )
  ![image](https://user-images.githubusercontent.com/89356818/164904053-1f497746-c160-4475-9df9-e64a1625e778.png)
  
  ## Reference Link
  - meta-grabber (documentation) link : https://www.npmjs.com/package/meta-grabber
  - node:dns (documentation) link : https://nodejs.org/api/dns.html
