# KASDD Interactive Learning Notebook

An interactive web-based study guide for **CSGE603130 — Introduction to Artificial Intelligence and Data Science** (KASDD), Final Exam Review. Covers all four core topics (Probability/Bayes, Linear Models, Clustering, Neural Networks) plus 60+ past UAS exercises with step-by-step solutions.

## What's included

| File | Purpose |
|------|---------|
| `index.html` | Landing page with topic cards |
| `probability.html` | Likelihood, Bayes' theorem, MLE for 9 distributions, Naive Bayes |
| `linear-models.html` | Linear/Logistic/Softmax regression, GD, L1/L2 regularization |
| `clustering.html` | K-Means, K-Medoids, hierarchical, distance metrics, Silhouette |
| `neural-networks.html` | MLP architecture, all 11 activations, backpropagation recipe |
| `exercises.html` | Interactive quizzes — 60+ problems from past UAS exams |
| `cheatsheet.html` | Printable one-page formula reference |
| `styles.css` | Editorial-style CSS (Fraunces serif + IBM Plex Sans + JetBrains Mono) |
| `main.js` | Interactivity (math rendering, quiz logic, filters, TOC highlighting) |

Math is rendered with **KaTeX** loaded from a CDN; no build step needed.

## How to use it

1. Open `index.html` directly in any modern browser. That's it.
2. Click any topic card to dive into the theory.
3. Hit "Exercises" to practice — click an option to see if you're right, click "Show solution" for step-by-step working.
4. Print the cheatsheet (Ctrl+P or ⌘P) for the night before the exam.

## Deploy to GitHub Pages (free)

1. Create a new GitHub repository (e.g. `kasdd-notebook`).
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/kasdd-notebook.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Source", select **Deploy from a branch**, pick `main` branch, `/ (root)` folder, save.
5. After ~1 minute, your site is live at `https://YOUR_USERNAME.github.io/kasdd-notebook/`.

That's it — no build step, no framework, just static HTML+CSS+JS.

## Local viewing

Just double-click `index.html`. Since everything is static, no server needed. If you want a local server anyway:

```bash
# Python 3
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Customization tips

- **Theme colors:** all four topics have their own accent color defined in `styles.css` under `:root`. Change `--accent-prob`, `--accent-linear`, etc. to taste.
- **Fonts:** swap the Google Fonts import line in any HTML page's `<head>`.
- **Add a quiz question:** copy any `<div class="exercise">` block in `exercises.html` and edit. The `data-correct="N"` attribute on `<ul class="options">` marks the correct option (zero-indexed); use `-1` for "show solution only".

## Credits

Content derived from the KASDD course materials and UAS exam papers (2021, 2021/22, 2022, 2023, 2023/24). NBA examples for intuition. Math rendered with KaTeX. Built for night-before-the-exam pragmatism.

Good luck on the UAS! 🎓
