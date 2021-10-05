# Local installation

```
bundle install
```

_Note: `sudo` might be required_

# Run locally

```
bundle exec jekyll serve --baseurl ""
```

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
