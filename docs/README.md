---
pageClass: home-page
# some data for the components

name: 祈风
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/renchuanmin
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com
  - title: instagram
    icon: "/icons/instagram-mono.svg"
    link: https://www.instagram.com

bio: 云南
email: rcm123666@163.com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I attended [Hogwarts School of Witchcraft and Wizardry](https://en.wikipedia.org/wiki/Hogwarts) to study witchcraft, supervised by **Dumbledore** and other professors. 

I'm trying my best to battle with Lord Voldemort, the evil Wizard that we all fear. My research area includes Defence Against the Dark Arts and other magic. :dizzy:


## News

- [Sept 1991] Attended Hogwarts
- [July 1980] Born in Godric's Hollow, West Country, England, Great Britain


## Education & Experiences

- **Hogwarts School of Witchcraft and Wizardry** <br/>
Sept 1999

## Awards & Honors

### Contests

- First place in **The Hogwarts House Cup**


<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
