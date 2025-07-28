## Project Stuff
1. DTOs in the models (angular) need to match the DTOs in the Models->DTO coming from the spring boot back end project. 
2. 


## Useful Angular Commands:
To create a component named player-card (using Angular's recommended kebab-case naming convention) inside the 
src/app/components directory, use the Angular CLI command:

```bash
  ng generate component components/player-card
```
Generates 4 files:
- player-card.component.ts (component class)
- player-card.component.html (template)
- player-card.component.css (styles)
- player-card.component.spec.ts (test file)

To create a TypeScript interface for your backend DTOs in an Angular project, 
you can use the Angular CLI to generate the file structure

```bash
  ng generate interface models/UserPageDto
```
Generates: 
- Create a file: src/app/models/user-page-dto.ts
- Add a basic interface skeleton

```typescript
export interface UserPageDto {
  // Define properties here
}
```




## Cool CSS Stuff
- object-fit: contain
  - Ensures the image scales to fit the container's width and height without cropping. The entire image will be visible, and whitespace may appear if the aspect ratios don't match.
- position: absolute for the image
  - Positions the image to fill the .PlayerCard container, overriding any default inline behavior.
- max-width and max-height
  - Prevents the image from exceeding the container's size.
- Optional Zoom on Hover
  - Adds a subtle zoom effect when hovering over the card.

```css
 /* Image styling to fit container */
.CardImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensures the whole image is visible */
  max-width: 100%;
  max-height: 100%;
  transition: transform 0.3s ease;
}
```
