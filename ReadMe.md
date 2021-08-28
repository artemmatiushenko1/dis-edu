
# Розподілені інформаційні системи

Курс лекцій доступний за адресою [boldak.github.io/dis-edu/](https://boldak.github.io/dis-edu/).
Матеріал підготовлено з використанням [VuePress](https://vuepress.vuejs.org/), та стартера 
[FriendlyUser/vuepress-theme-cool-starter](https://github.com/FriendlyUser/vuepress-theme-cool-starter).

Для покращення контенту форкаємо цей репозіторій. Pull requests вітаються.

Щоб опублікувати проект у Github Pages змінюємо файл ```./deploy.sh```

```sh

#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:boldak/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/<USERNAME>/dis-edu.git master:gh-pages

cd -


```

Потім запускаємо

```bash
    npm run deploy
```

***Happy learning! Happy coding!*** 