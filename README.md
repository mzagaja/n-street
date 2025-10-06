# South Boston Condo Marketing Site

A lifestyle-focused Jekyll marketing website for a $799,999 2BR/2BA condo in South Boston.

## Quick Start

1. Install Jekyll and dependencies:
```bash
bundle install
```

2. Add your Meta Pixel ID in `_config.yml`:
```yaml
meta_pixel_id: "YOUR_PIXEL_ID_HERE"
```

3. Update Formspree endpoint in `_includes/lead-form.html`

4. Add property images to `/assets/images/hero/`:
   - solid-door.jpg (1920x1080)
   - patio-sunset.jpg (1920x1080)
   - modern-living.jpg (1920x1080)
   - tech-living.jpg (1920x1080)
   - location-collage.jpg (1920x1080)
   - building-twilight.jpg (1920x1080)

5. Optimize images for web:
```bash
# Install ImageMagick first
for img in assets/images/hero/*.jpg; do
  name=$(basename "$img" .jpg)
  # Desktop WebP
  convert "$img" -resize 1920x -quality 85 "assets/images/optimized/${name}-desktop.webp"
  # Mobile WebP
  convert "$img" -resize 640x -quality 85 "assets/images/optimized/${name}-mobile.webp"
done
```

6. Run the development server:
```bash
bundle exec jekyll serve --livereload
```

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in Settings > Pages
3. Select source branch (usually `main`)

### Netlify
1. Connect GitHub repository
2. Build command: `jekyll build`
3. Publish directory: `_site`
4. Add environment variables for Meta Pixel ID

## Customization

### Update Property Details
Edit `_config.yml`:
```yaml
property:
  address: "Your Address"
  price: "$XXX,XXX"
  beds: 2
  baths: 2
```

### Modify Slides
Edit `_data/slides.yml` to change headlines, features, and images.

### Change Colors
Edit `_sass/_variables.scss` to modify the color scheme.

## A/B Testing

Consider testing:
- Headlines (lifestyle vs. practical)
- CTA button text
- Image selection (modern vs. cozy)
- Price display (prominent vs. subtle)

## Performance Tips

- Keep images under 200KB
- Use WebP format when possible
- Enable browser caching
- Minify CSS/JS for production

## Tracking

The site includes:
- Meta Pixel integration
- Custom events for slide views
- Lead form tracking
- Time-on-page tracking

## Support

For questions about the condo: [your.email@realty.com]
For technical issues: [Create an issue on GitHub]
