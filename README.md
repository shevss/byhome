build prod:
ng build --configuration production --aot

upload to deployment git hub
npx angular-cli-ghpages --dir=dist/beitYehiel/browser

or(then change url)
npx angular-cli-ghpages --dir=dist/beitYehiel
