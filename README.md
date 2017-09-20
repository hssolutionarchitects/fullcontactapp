# Full Contact App

## Start docker

```sh
docker-compose up
````

Verify

````
open $(curl -Ls $(docker port fullcontactapp_ngrok_1 4040)/api/tunnels/command_line | python -c 'import sys, json; print json.load(sys.stdin)["public_url"]')/fullcontact_plugin.html
````

Get the ngrok URL

```sh
curl -Ls $(docker port fullcontactapp_ngrok_1 4040)/api/tunnels/command_line | python -c 'import sys, json; print json.load(sys.stdin)["public_url"]'
````

View the traffic

````
open http://$(docker port fullcontactapp_ngrok_1 4040)
````

Edit assets/js/vars.js and set the publicHostname to the ngork url

## Configure

Go to Hootsuite Developer portal https://hootsuite.com/developers/my-apps

Create a New App, set the name and description.

Set the Icon and Logo to <ngrok url>/assets/icon16.png and <ngrok url>/assets/icon256.png respectively and press Create.

Click on the new App link.  Click the Edit button.

Set the Authentication Type to Single Sign On and set the shared secret to:
hsdemosharedsecret and press Save.

Add a New App Component with Type Plugin

Service URL: <ngrok url>/fullcontact_plugin.html
Icon URL: <ngrok url>/assets/icon30.png

## Add the App to Hootsuite

Open Hootsuite https://hootsuite.com/dashboard

Click on the App Directory in the left hand nav.  Under Developers -> My Apps
install your new App, adding to a new stream.