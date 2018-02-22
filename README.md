# CSS To the rescue

## What is it
A website to display your work. Not a portfolio of a single person, a portfolio of a community.

## To use

To use start with
```
npm install
```

To start the dev server
```
npm run serve
```

You will then find it at [http://localhost:3000](http://localhost:3000)

## Process

### Week 1
The project started of a bit slow. This do to my own fault. I started this project setting up my work environment. Seeing that this project was heavily reliant on CSS I wanted to implement something like a linter for this. To 1. improve my coding style and 2. create a file for the linter that matches my own coding style. Knowing that my personal prefrence is to split everything up into smaller files to keep everyting to a minimum I was planning on using SCSS mainly for the functionality to use `@import`. This meant I needed a SCSSLinter and not a CSSLinter. With this and a few other things in place ([autoprefixer](https://github.com/postcss/autoprefixer) and [Browsersync](https://www.browsersync.io/)) I started the project.

The assignment was to create a website for Marijn. This meant that the website HAD to be accessable purely by keyboard. Because this needed an approche I never needed to use before I desided to always test during. Not afterwards. This seemed the better option. I would rather do more work and more testing while building than find out afterwards that nothing works the way I intended to and end up with a product that doesn't work. While probebly the better method this did mean things sometimes took alot longer then usual.

As for CSS this week I mostly used did a bit of the basics of everything. Implemented the first "version" of the grid as well as opening the "cards" on click.

### Week 2
This week I wanted to make sure at least every component was implemented. I was able to do this for everything exept one element. The `<progress>` element. No necessarily because of time, more because I didn't really know what to do with it (in week 3 I eventually do find a use for this).

The grid also needed a bit more love so after some finetuning this was ready. The items in the grid where up next. Trying to add an animation when the items unfold. Unfortunately in the end this was done with max-height. Not something you would want to use in an animation but for now it will have to do... I did try to optimize the animation with `will-change` but this will only help up to so much. There was another optimilization I could have done but this would require me to use JavaScript which you could do if you had a good reason for this (and in my opinion this would be). Reason I didn't do it in the end had to do with time.

### Week 3
This week I extually had quite a few issues from Titus. Last week the issues I got where either things I already knew and in the mean time fixed or things I at first did not agree on or just him saying it looked good. Titus gave quite a bit more issues so started with fixing these. One of the issues was the fix my read me (which i'm doing right now). Or adding more little commits rather then a single big one or just some bug fixes (he also asked why I used autoprefixer when this wasn't necescary... so it's gone now).
