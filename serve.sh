docker run --rm\
  --volume="$(pwd -W):/srv/jekyll" \
  -p 4000:4000 \
  -p 35729:35729 \
  -it \
  jekyll/jekyll \
  jekyll serve --force_polling --livereload