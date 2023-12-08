# Blender Three.js Template

This is a template for creating Blender project in Three js. It includes a simple example of a cube with a texture and a video playing on a screen.

## Requirements
- Blender Project (glb/glTF Exporter)
- Texture Cycle Rendered (make sure uv map is correct)

## How Customise Objects
- Replace `roomModel.glb` in static/assets with your own model
- Replace `bakedDay.png`, `bakedNight.png` and `bakedNeutral.png` in static/assets with your own textures that have been baked in Blender

## How Customise Screens
- Replace `screen.glb` in static/assets with your own model
- Replace `video.mp4` in static/assets with your own video

## How to Run
- Run `npm install` to install dependencies
- Run `npm run dev` to start the development server

## Advanced Customisation

### Customise Assets
- Import all your assets into asset.js
- Make sure the texture is labelled correctly
- In Baked.js you can change the texture of each object by sequentially adding meshes, texture, material, and add to scene one by one

### Customise Screens
- In World.js you can add more screens by adding more screen objects in setScreens() function, by declare the model and video path

### Customise Debug
- You can create your own debug panel by adding more controls with this syntax
  ```
  if (this.debug) {
    this.debugFolder = this.debug.addFolder({
      title: 'Title',},
      expanded: [true/false],
    });
  }
  ```
- In debug folder you can add more controls with this syntax
  ```
  this.debugFolder.addInput(
    this.object,
    'property',
    { label: 'Label', min: 0, max: 1, step: 0.01 }
  );
  ```







