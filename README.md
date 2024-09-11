# The Mozart Musical Dice Game

## A recreation of Mozart's classic game of dice and music

This game is being created as an educational tool to show the different ways music can be pieced together. It can be played in your web browser [here.](https://kenny-designs.github.io/mozartDiceGame/dist/)

  <p align="center">
    <img src="./app/img/mozartUI.jpg" width=188 height=313 />
    <br>
    <i>Portrait view UI</i>
    <br><br>
    <img src="./app/img/mozartUIHorizontal.png" width=683 height=384 />
    <br>
    <i>Landscape view UI</i>
  </p>

## Editing the Code

If you wish to make changes to the code, you'll need to have several things first. In particular, you will need npm. I recommend
downloading [Node.js](https://nodejs.org/en/) for it comes prepackaged with it.

I also make use of [Gulp](https://gulpjs.com/) for building the program. You will need to install it with npm along with any other
dependencies you may be prompted to install.

To build with Gulp, be sure to run 'gulp' on the command line where the 'gulpfile.js' is located. From there, open the index.html file in
the dist folder. If you have any questions please be sure to contact me and I'll help the best I can.

I can be reached at alexanderman2004@yahoo.com. Please be sure to reference the game in the title when sending emails.

### Prerequisites

- Git
- nvm (Node Version Manager)
- Node.js 11 (specific version required)
- npm
- Gulp 3 (or any version below 4)
- Python (for running a local server)

### Setting Up the Project

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/mozartDiceGame.git
   cd mozartDiceGame
   ```

2. Use the correct Node.js version:

   ```
   nvm install 11
   nvm use 11
   ```

3. Install Gulp (if not already installed):

   ```
   npm install --global gulp-cli
   npm install -g gulp@3.9.1
   ```

4. Install dependencies:
   ```
   npm install
   ```

### Development Workflow

1. Ensure you're using Node.js 11:

   ```
   nvm use 11
   ```

2. Create a new branch for your feature:

   ```
   git checkout -b feature-branch-name
   ```

3. Make your changes in the `app` directory.

4. To build the project:

   ```
   gulp
   ```

5. To preview the website, start a local server:

   ```
   cd dist
   python -m http.server
   ```

   Then open a browser and go to `http://localhost:8000`

6. Commit your changes:

   ```
   git add .
   git commit -m "Your commit message"
   ```

7. Push your changes to GitHub:
   ```
   git push origin feature-branch-name
   ```

---

Thank you and I hope you enjoy!
