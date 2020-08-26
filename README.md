# Demo Frontend

### Contribute to the project

Create a new branch based on staging to develop your feature.

```
git checkout staging
git pull origin staging

git checkout -b <BRANCH_NAME>
```

Once your feature is finished, create your Pull Request on BitBucket. Don't forget to describe your feature in the PR and test it correctly.

Essential commands to test:
```
npm run lint:show
npm run test -- --watchAll=false
npm run build
```

___@simonmeyerrr___ reviews and merges features and monitor the automatic deployment.

### Automatic deploy

Automatic deployments take place when the `master` or `staging` is updated with CodeBuild.

A message to report the success or failure of the build is sent to Discord in the `#deployment` channel.

### Manual deploy

```
npm run build
aws-vault exec clipinlay -- sls deploy --verbose --stage dev --region eu-west-1
```
