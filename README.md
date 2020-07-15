# Github CLI

[![licence mit](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://hemersonvianna.mit-license.org/)
[![GitHub issues](https://img.shields.io/github/issues/nerdcalistenico/github-cli.svg)](https://github.com/nerdcalistenico/github-cli/issues)
![GitHub package.json version](https://img.shields.io/github/package-json/v/nerdcalistenico/github-cli.svg)
![GitHub Release Date](https://img.shields.io/github/release-date/nerdcalistenico/github-cli.svg)
![GitHub top language](https://img.shields.io/github/languages/top/nerdcalistenico/github-cli.svg)
![GitHub repo size](https://img.shields.io/github/repo-size/nerdcalistenico/github-cli.svg)
![GitHub All Releases](https://img.shields.io/github/downloads/nerdcalistenico/github-cli/total.svg)


## Prerequisites
- Node >= v12.18.2
- NPM >= v6.14.5
- Yarn >= v1.22.0 or npm install -g yarn

## .gitconfig

Git's merge commit message

```
[alias]
    mergelogmsg = "!f() { var=$(git symbolic-ref --short HEAD) && printf 'Merge branch %s into %s\n\n::SUMMARY::\nBranch %s commits:\n' $1 $var $1 > temp_merge_msg && git log --format=format:'%s' $var..$1 >> temp_merge_msg && printf '\n\nBranch %s commits:\n' $var >> temp_merge_msg && git log --format=format:'%s' $1..$var >> temp_merge_msg && printf '\n\n* * * * * * * * * * * * * * * * * * * * * * * * *\n::DETAILS::\n' >> temp_merge_msg && git log --left-right $var...$1 >> temp_merge_msg && git merge --no-ff --no-commit $1 && git commit -eF temp_merge_msg; rm -f temp_merge_msg;}; f"
```

## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

## Log

Check [Releases](https://github.com/nerdcalistenico/github-cli/releases) for detailed changelog.

## License

[MIT license](http://hemersonvianna.mit-license.org/) © Hemerson Vianna
