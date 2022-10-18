# How to make a simple adjustment to the website?

1. Most textual information that is shown on the website can be found in [src/gegevens](https://github.com/bankvooruit/bankvooruit.github.io/tree/master/src/gegevens). Find the file you need and open it here in github
1. At the top right, click the little pencil
1. Make your changes
1. At the bottom, underneath your file, you can see "Commit changes" with two text fields underneat. In the small one, give some explanaition on what you did (e.g. "Locatie voorstelling Ranst aangepast" = commit message). You can put a longer description in the bigger text field, but that is optional
1. Click the green button "Commit changes"
1. At the top of the page, you see a tab with a little play button next to "Actions", click here
1. You will see the message that you just typed, with an orange spinning icon next to it. Wait untill it is done spinning and turns green. Another orange spinning icon will appear with the text "pages build and deployment". Wait untill it is done spinning and turns green. The new version of the website should now be deployed, you can go check it out
1. Don't see your changes? Try refreshing. Or wait a little longer

Do you want to make changes to multiple files at once or do you want to upload images? Instead of clicking the pencil icon, try clicking the little arrow next to it and choose "Open in github.dev". Do your changes in the online IDE. Click the "source control" icon on the left, fill in your commit message and click the little check mark above the input field. That should be it, your changes will start deploying. Check the "Actions" tab to follow the progress.

# Latest build information

![CI/CD](https://github.com/bankvooruit/bankvooruit.github.io/workflows/Deploy%20Website/badge.svg)

# Local installation

```
npm install
```

# Run locally

```
npm run start
```

This will update automatically when you update your code

# Serve the build locally

```
npm install -g serve
npm run build
serve -s build
```

You need to stop the server and rebuild when you do changes to the code. Some things work when running locally, but fail in a build (e.g. routes). So it is worth testing this before publishing

# Push to this repository

## With multiple accounts on one computer

See https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/

### ...: Permission denied (publickey).

Make sure your public key is registered with the Github account of this repositories owner

### Permission to ... denied to ...

You might need to re-register your ssh key to the ssh manager of your computer

```
ssh-add ~/.ssh/id_rsa_...
```

# Publish changes

Publishing happens automatically when pushing to master

References:

- https://blog.logrocket.com/deploying-react-apps-github-pages/
- https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp
- https://create-react-app.dev/docs/deployment/#github-pages
