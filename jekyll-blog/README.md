# Jekyll Static Blog

A clean and responsive static blog built with Jekyll, featuring modern design and excellent readability.

## Features

- 📱 Fully responsive design
- 🎨 Clean and modern interface
- 📝 Blog-aware with post management
- 🚀 Fast loading times (static files)
- 🔒 Secure (no database)
- 💻 Easy to customize

## Prerequisites

- Ruby (version 2.5.0 or higher)
- RubyGems
- GCC and Make

## Installation

1. Navigate to the jekyll-blog directory:
   ```bash
   cd jekyll-blog
   ```

2. Install Jekyll and bundler:
   ```bash
   gem install jekyll bundler
   ```

3. Install dependencies:
   ```bash
   bundle install
   ```

4. Build and serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

5. Open your browser and visit:
   ```
   http://localhost:4000
   ```

## Project Structure

```
jekyll-blog/
├── _config.yml           # Site configuration
├── _layouts/             # Page layouts
│   ├── default.html      # Default layout
│   └── post.html         # Blog post layout
├── _includes/            # Reusable components
│   ├── header.html       # Site header
│   └── footer.html       # Site footer
├── _posts/               # Blog posts
│   ├── 2026-01-02-welcome-to-jekyll.md
│   ├── 2026-01-01-responsive-web-design.md
│   └── 2025-12-30-react-hooks-guide.md
├── assets/
│   └── css/
│       └── style.css     # Main stylesheet
├── index.html            # Home page
├── about.md              # About page
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

## Creating New Posts

To create a new blog post:

1. Create a new file in the `_posts` directory
2. Name it with the format: `YYYY-MM-DD-title.md`
3. Add front matter at the top:

```markdown
---
layout: post
title: "Your Post Title"
date: 2026-01-02 10:00:00 -0000
author: Your Name
tags: [tag1, tag2]
---

Your content here...
```

## Customization

### Site Configuration

Edit `_config.yml` to customize:
- Site title and description
- Author information
- URL and baseurl
- Permalink structure

### Styling

Modify `assets/css/style.css` to change:
- Colors and fonts
- Layout and spacing
- Responsive breakpoints
- Component styles

### Layouts

Customize layouts in the `_layouts` directory:
- `default.html` - Base layout for all pages
- `post.html` - Layout for blog posts

## Deployment

### GitHub Pages

1. Push your Jekyll site to a GitHub repository
2. Go to repository Settings → Pages
3. Select your branch and root folder
4. Your site will be published at `https://username.github.io/repository-name/`

### Other Hosting

Jekyll generates static files in the `_site` directory. You can deploy these files to:
- Netlify
- Vercel
- AWS S3
- Any static hosting service

To build for production:
```bash
bundle exec jekyll build
```

## Writing Content

### Markdown Support

Jekyll uses Markdown for content. Supported features include:

- Headers
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Blockquotes
- Links and images
- Tables

### Code Highlighting

Use fenced code blocks with language specification:

````markdown
```javascript
function hello() {
    console.log("Hello, world!");
}
```
````

## Development

### Live Reload

Jekyll includes live reload by default. Changes to files will automatically refresh your browser.

### Draft Posts

Store draft posts in `_drafts` folder (without dates in filename). View drafts with:
```bash
bundle exec jekyll serve --drafts
```

## Best Practices

1. **Use descriptive filenames** for posts
2. **Optimize images** before adding them
3. **Write meaningful commit messages**
4. **Test locally** before deploying
5. **Keep posts organized** with tags and categories

## Responsive Design

The blog is fully responsive with breakpoints at:
- Mobile: < 480px
- Tablet: 768px
- Desktop: 1024px+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

## License

MIT

## Support

For issues or questions about Jekyll, visit the [Jekyll GitHub repository](https://github.com/jekyll/jekyll).
