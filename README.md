# hotel

Увидеть данный проект в действии можно на Github Pages перейдя [по этой ссылке](https://injashkin.github.io/hotel).

Данный проект является учебным. Я его написал с нуля выполняя задания от [FSD](https://rizzoma.com/topic/d5c429337bcaa70548fb5aeedee6d92b/0_b_8ndo_78h6s/). Также, я старался следовать правилам, написанным [здесь](https://github.com/fullstack-development/front-end-best-practices). Еще я заглядывал в [этот проект](https://github.com/fullstack-development/flat-starter-kit), чтобы понять некоторые техники верстки, а структуру файлов и каталогов этого проекта я перенял в свой учебный проект.

## Шрифты

- [Использование шрифтов в данном проекте](./src/theme/fonts/README.md)

- [Руководство по Material Icons от Google](https://google.github.io/material-design-icons/)

## Webpack

Шаблон Webpack я взял готовый из [репозитория GitHub](https://github.com/vedees/webpack-template). Были удалены настройки для Vue и теперь адаптирую под данный проект.

## Структура проекта

## NPM модули

- [jquery.maskedinput](https://github.com/digitalBush/jquery.maskedinput) - Маска ввода для HTML элемента input. Данный плагин больше не поддерживается разработчиком. Есть аналог данному плагину [Cleave.js](https://github.com/nosir/cleave.js)

- []() -

### Модули для Webpack

- [copy-webpack-plugin]() -

- [file-loader](https://github.com/webpack-contrib/file-loader) - разрешает `import/require()` для файла, указанного в url-адресе и отправляет файл в выходной каталог.

- [html-webpack-plugin]() -

- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) - извлекает CSS в отдельные файлы. Он создает CSS-файл для каждого JS-файла, содержащего CSS. Рекомендуется комбинировать `mini-css-extract-plugin` с `sass-loader`

- [node-sass](https://github.com/sass/node-sass) - компилирует .scss файлы в css

- [sass](https://github.com/sass/dart-sass) - компилирует .scss файлы в css. ПОМОЕМУ, МОЖНО УДАЛИТЬ

- [sass-loader](https://github.com/webpack-contrib/sass-loader) - Загружает файл Sass/SCSS и компилирует его в CSS. Для работы требуется `node-sass` или `sass` (Dart Sass). `sass-loader` совместно с `mini-css-extract-plugin` конвертирует scss в css и минифицируя выводит в файл css.

- [sass-resources-loader](https://github.com/shakacode/sass-resources-loader) - позволяет использовать общие переменные и миксины во всех стилях SCSS, не импортируя их вручную в каждый файл.

- [style-loader](https://github.com/webpack-contrib/style-loader) - встраивает css код в файл HTML. `style-loader` рекомендуется использовать с `css-loader`

- [resolve-url-loader](https://github.com/bholloway/resolve-url-loader) - преобразует относительные пути в URL() в исходном файле.
