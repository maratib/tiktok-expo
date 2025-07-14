```bash
git checkout -b clean
git add .
git commit -m "clean commit"
git checkout main
git merge clean
git push
git checkout -b add-native-wind


git add .
git commit -m "nativewind added"
git push --set-upstream origin add-native-wind


```
