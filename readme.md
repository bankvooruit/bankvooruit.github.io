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
