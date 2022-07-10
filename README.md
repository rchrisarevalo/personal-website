# Personal Website (v3.1.1)

* This website was made using React.js.
* Updates are made every week or so, depending on how busy I am.

# UPDATES (made on July 10, 2022):

* Some bug fixes were made to this website:
  * The number of hours in which the status of the progress countdown feature has last been updated has been fixed.
  * The fix was done after I had noticed that from 12 AM-6 AM, the number of hours will be displayed as "-6 minutes ago", etc.
  * The reason for this was because I am subtracting the current hour by 6 as the section updates at 6 AM each day, which led to an unintentional mathematical error on my part as I forgot to configure the state properly to accommodate the time changes and display the correct amount of hours that have passed since it updated.
  * I had since made these fixes and everything should be working well, though I cannot make any promises.

# CREDITS:
* Progress bar by nProgress (author: rstacruz)

* Light to dark theme feature (inspired by and credited to: Kevin Powell)
  * His source code can be found in: https://codepen.io/kevinpowell/pen/EMdjOV

* All code by the authors above are used under the terms and conditions of the **MIT License**.
* **Please let me know if there are any issues.**

# Copyright Notice

© 2022 Ruben Christopher Arevalo. This repository will not be copied, modified, reproduced, or distributed through unauthorized means.
