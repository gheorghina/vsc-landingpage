# VSC

### Setup

Install Ruby and Jekyll

- https://wiki.archlinux.org/title/Ruby#RubyGems 
- https://jekyllrb.com/

```
sudo apt-get install rubygems
sudo gem install bundler jekyll
sudo bundle install
bundle exec jekyll serve
```

### Contact functionality

It is using [Formspree](https://formspree.io/create/jekyllthemes) which handles up to 50 submissions per month for free. 

This can be replaced with different solutions

### Deployment

#### Enable Production Build

```
JEKYLL_ENV='production' bundle exec jekyll build
```

### Emails

Email are being generated and sent via https://formspree.io/forms/
