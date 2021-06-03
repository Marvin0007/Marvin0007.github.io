// URLS
function redirectHttpToHttps() {

var httpURL= window.location.hostname + window.location.pathname;

var httpsURL=https+ "://" + httpURL;

window.location = httpsURL;
}

redirectHttpToHttps();
var refer = "C:/Users/Marvin/Desktop/Personal Web/Main Template/images"
let windowDimensions = { width: window.innerWidth, height: window.innerHeight };
window.addEventListener(
  "resize",
  () => {
    windowDimensions = { width: window.innerWidth, height: window.innerHeight };
  },
  !1
);
const HAMBURGER = document.querySelector("#hamburger"),
  MAIN_NAV = document.querySelector("#main-nav");
let navIsOpen = !1;
const navOpenClose = () => {
  navIsOpen
    ? (HAMBURGER.classList.replace("hamburger--open", "hamburger"),
      MAIN_NAV.classList.replace("main-nav--open", "main-nav"))
    : (HAMBURGER.classList.replace("hamburger", "hamburger--open"),
      MAIN_NAV.classList.replace("main-nav", "main-nav--open"));
};
HAMBURGER.addEventListener(
  "click",
  () => {
    navIsOpen
      ? (HAMBURGER.classList.replace("hamburger--open", "hamburger"),
        MAIN_NAV.classList.replace("main-nav--open", "main-nav"))
      : (HAMBURGER.classList.replace("hamburger", "hamburger--open"),
        MAIN_NAV.classList.replace("main-nav", "main-nav--open")),
      (navIsOpen = !navIsOpen);
  },
  !1
);
const NAV_LINKS = document.querySelectorAll("#main-nav ul li");
NAV_LINKS.forEach((e) => {
  e.addEventListener(
    "click",
    () => {
      HAMBURGER.classList.replace("hamburger--open", "hamburger"),
        MAIN_NAV.classList.replace("main-nav--open", "main-nav"),
        (navIsOpen = !1);
    },
    !1
  );
});
const createClassElement = (e, t, a) => {
  const n = document.createElement(e);
  return t && n.classList.add(t), a && (n.textContent = a), n;
},
  createImg = (e, t, a) => {
    const n = document.createElement("img");
    return a && n.classList.add(a), (n.src = e), n.setAttribute("alt", t), n;
  },
  createLanguageContainer = (e, t) => {
    const a = t.replace("lang_", "").replace("_", " "),
      n = createClassElement("div", "lang-container"),
      o = createImg(e, a, "");
    n.appendChild(o);
    const l = createClassElement("p", "", a);
    return n.appendChild(l), n;
  },
  createExternalButton = (e, t, a) => {
    const n = createClassElement("a", t);
    return (
      a &&
      (n.setAttribute("href", a),
        n.setAttribute("target", "_blank"),
        n.setAttribute("rel", "noreferrer noopenner")),
      (n.textContent = e),
      n
    );
  },
  openProjectCard = (e) => {
    e.parentElement.classList.value.includes("--open")
      ? e.parentElement.classList.remove("project-card-wrapper--open")
      : e.parentElement.classList.add("project-card-wrapper--open");
  },
  PROJECT_CARDS_ARRAY = [],
  PROJECT_CARDS_CONTAINER = document.querySelector("#project-cards-container"),
  createProjectCard = (e, t, a, n, o, l, r, s, i, c, d) => {
    const p = s + 1 < 10 ? `0${s + 1}` : `${s + 1}`,
      m = createClassElement("div", "project-card-wrapper"),
      u = createClassElement("div", "project-card");
    u.setAttribute("onclick", "openProjectCard(this); return false;"),
      m.appendChild(u);
    const A = createClassElement("div", "project-number", p);
    u.appendChild(A);
    const C = createClassElement("div", "");
    u.appendChild(C);
    const h = createClassElement("h1", "project-title", t);
    u.appendChild(h);
    const E = createClassElement("h3", "project-type", a);
    u.appendChild(E);
    const _ = createClassElement("div", "project-details");
    m.appendChild(_);
    const g = createImg(l, "project logo", "project-logo");
    _.appendChild(g);
    const R = createClassElement("div", "project-screenshot-wrapper");
    _.appendChild(R);
    const L = createImg(o, "project sreenshot", "project-screenshot");
    R.appendChild(L);
    const y = createClassElement("h3", "");
    _.appendChild(y);
    const S = createClassElement("div", "project-text");
    (S.innerHTML = n), _.appendChild(S);
    const b = createClassElement("div", "created-with");
    _.appendChild(b);
    const O = createClassElement("h3", "", "Created With");
    b.appendChild(O),
      r.forEach((e) => {
        const t = createLanguageContainer(e[1].imgix_url, e[0]);
        b.appendChild(t);
      });
    const v = createClassElement("div", "buttons");
    _.appendChild(v);
    const I = d
      ? createExternalButton("Visit Site", "button")
      : createExternalButton("Visit Site", "button", i);
    v.appendChild(I);
    // const w = createExternalButton("View On Github", "button--secondary", c);
    // v.appendChild(w);
    let N = createClassElement("div", "development-modal");
    N.setAttribute("id", `modal-${e}`);
    let D = createClassElement("p");
    (D.textContent =
      "I'm currently working on this site so some or all of the features may not work."),
      N.appendChild(D);
    let f = createClassElement("p");
    (f.textContent =
      "Do you want to try and visit anyway? You can always come back!"),
      N.appendChild(f);
    let P = document.createElement("button");
    P.classList.add("button--danger"),
      P.classList.add("button"),
      (P.textContent = "NO"),
      P.addEventListener(
        "click",
        () => {
          (N.style.visibility = "hidden"), (N.style.top = "-300vh");
        },
        !1
      ),
      N.appendChild(P);
    let T = createExternalButton("YES", "button--secondary", i);
    if (
      (T.classList.add("button"),
        N.appendChild(T),
        I.addEventListener(
          "click",
          () => {
            if (d) {
              let t = document.querySelector(`#modal-${e}`);
              console.log(t),
                (t.style.visibility = "visible"),
                (t.style.top = "0.5rem");
            }
          },
          !1
        ),
        _.appendChild(N),
        _.appendChild(N),
        d)
    ) {
      let e = createClassElement(
        "div",
        "under-development-banner",
        "Under Development"
      );
      _.appendChild(e);
    }
    PROJECT_CARDS_ARRAY.push(m), PROJECT_CARDS_CONTAINER.appendChild(m);
  },
  BLOG_CARDS_CONTAINER = document.querySelector("#blog-list"),
  createBlogCard = (e, t, a, n, o, l) => {
    const r = createClassElement("div", "blog-post-card");
    r.setAttribute("id", `blog-${e}`);
    const s = createClassElement("div", "image-container");
    r.appendChild(s);
    const i = createClassElement("img");
    (i.src = a), i.setAttribute("alt", t), s.appendChild(i);
    const c = createClassElement("h1", "blog-title", t);
    r.appendChild(c);
    const d = createClassElement("div", "blog-tags");
    r.appendChild(d),
      n.forEach((e) => {
        let t = createClassElement(
          "span",
          `tag--${e.toLowerCase()}`,
          "Styled" === e ? "Styled Components" : e
        );
        t.classList.add("tag"), d.appendChild(t);
      });
    const p = createClassElement("p", "blurb", o);
    r.appendChild(p);
    const m = createClassElement("button", "button--secondary", "READ MORE");
    m.setAttribute("value", e),
      m.addEventListener(
        "click",
        () => {
          r.classList.value.includes("blog-post-card--open")
            ? (r.classList.remove("blog-post-card--open"),
              (m.textContent = "READ MORE"))
            : (r.classList.add("blog-post-card--open"),
              (m.textContent = "CLOSE"));
        },
        !1
      ),
      r.appendChild(m);
    const u = createClassElement("article", "blog-content");
    (u.innerHTML = l), r.appendChild(u);
    const A = createClassElement("button", "button--secondary", "Back To Top");
    A.addEventListener(
      "click",
      () => {
        s.scrollIntoView();
      },
      !1
    ),
      u.appendChild(A),
      BLOG_CARDS_CONTAINER.appendChild(r);
  };
let projectDataLoading = !0;
const LOADING_SPINNER = document.querySelector("#spinner-container"),
  COSMIC_API_KEY = "N6C2ydBXJRnJGr5xKPQfW16ea2qANsnZoNgLzW5hXvAUIjN8FY",
  projectData = `https://api.cosmicjs.com/v1/mwwdd-blog/objects?pretty=true&hide_metafields=true&type=projects&read_key=${COSMIC_API_KEY}&limit=20&props=slug,title,content,metadata,`,
  fetchProjectData = async(e) => {
    try {
      const t = await fetch(e),
        // a = await t.json();
        a = {
          "objects": [
            {
              "slug": "workflow",
              "title": "Workflow",
              "content": "<p>This project is comprised of three Important Things. Drag and Drop, Virtualized DOM and Search Bar&nbsp;</p>",
              "metadata": {
                "under_development": false,
                // "github_url": "https://github.com/m87wheeler/luxury-real-estate-business-template",
                "project_url": "http://workflow.mohsism.me",
                "lang_svelte": {
                  "url": "https://cdn.cosmicjs.com/2fd0d330-0df7-11eb-9f4c-e15314e49fa9-svelte.png",
                  "imgix_url": "https://imgix.cosmicjs.com/2fd0d330-0df7-11eb-9f4c-e15314e49fa9-svelte.png"
                },
                "lang_javascript": {
                  "url": "https://cdn.cosmicjs.com/186a5ca0-f1c0-11ea-a3de-692d5982216c-js.png",
                  "imgix_url": "https://imgix.cosmicjs.com/186a5ca0-f1c0-11ea-a3de-692d5982216c-js.png"
                },
                "lang_scss": {
                  "url": "https://cdn.cosmicjs.com/187706d0-f1c0-11ea-a3de-692d5982216c-sass.png",
                  "imgix_url": "https://imgix.cosmicjs.com/187706d0-f1c0-11ea-a3de-692d5982216c-sass.png"
                },
                "lang_inkscape": {
                  "url": "https://cdn.cosmicjs.com/18509310-f1c0-11ea-a3de-692d5982216c-inkscape.png",
                  "imgix_url": "https://imgix.cosmicjs.com/18509310-f1c0-11ea-a3de-692d5982216c-inkscape.png"
                },
                "lang_figma": {
                  "url": "https://cdn.cosmicjs.com/18479260-f1c0-11ea-a3de-692d5982216c-figma.png",
                  "imgix_url": "https://imgix.cosmicjs.com/18479260-f1c0-11ea-a3de-692d5982216c-figma.png"
                },
                "project_icon": {
                  "url": "https://cdn.cosmicjs.com/8fd36090-0df7-11eb-9f4c-e15314e49fa9-logo.png",
                  "imgix_url": "https://imgix.cosmicjs.com/8fd36090-0df7-11eb-9f4c-e15314e49fa9-logo.png"
                },
                "project_screenshot": {
                  "url": "https://cdn.cosmicjs.com/98ed64f0-0df7-11eb-9f4c-e15314e49fa9-Mockup-UI.png",
                  "imgix_url": "https://imgix.cosmicjs.com/98ed64f0-0df7-11eb-9f4c-e15314e49fa9-Mockup-UI.png"
                },
                "project_type": "Company Website"
              }
            },
            {
              "slug": "ripple-fitness",
              "title": "Ripple Fitness",
              "content": "<p>This client runs an online fitness subscription program, powered by Trainerize. They wanted a website where they could show their potential customers what Ripple Fitness was all about, and also link them to the platform.</p><p><br></p><p>The website makes use of Gatsby, a super fast static site platform, and Contentful CMS (content management system) to allow the client to manage their own site with little need for help from a developer.</p>",
              "metadata": {
                "github_url": "https://github.com/m87wheeler/ripple-fitness",
                "project_url": "https://ripple-fitness-mwwdd.netlify.app/",
                "lang_html5": {
                  "url": "https://cdn.cosmicjs.com/1869e770-f1c0-11ea-a3de-692d5982216c-html5.png",
                  "imgix_url": "https://imgix.cosmicjs.com/1869e770-f1c0-11ea-a3de-692d5982216c-html5.png"
                },
                "lang_gatsby": {
                  "url": "https://cdn.cosmicjs.com/1871afa0-f1c0-11ea-a3de-692d5982216c-gatsby.png",
                  "imgix_url": "https://imgix.cosmicjs.com/1871afa0-f1c0-11ea-a3de-692d5982216c-gatsby.png"
                },
                "lang_styled_components": {
                  "url": "https://cdn.cosmicjs.com/186f3ea0-f1c0-11ea-a3de-692d5982216c-styled-components.png",
                  "imgix_url": "https://imgix.cosmicjs.com/186f3ea0-f1c0-11ea-a3de-692d5982216c-styled-components.png"
                },
                "lang_contentful": {
                  "url": "https://cdn.cosmicjs.com/182b30c0-f1c0-11ea-a3de-692d5982216c-contentful.png",
                  "imgix_url": "https://imgix.cosmicjs.com/182b30c0-f1c0-11ea-a3de-692d5982216c-contentful.png"
                },
                "lang_figma": {
                  "url": "https://cdn.cosmicjs.com/18479260-f1c0-11ea-a3de-692d5982216c-figma.png",
                  "imgix_url": "https://imgix.cosmicjs.com/18479260-f1c0-11ea-a3de-692d5982216c-figma.png"
                },
                "lang_inkscape": {
                  "url": "https://cdn.cosmicjs.com/18509310-f1c0-11ea-a3de-692d5982216c-inkscape.png",
                  "imgix_url": "https://imgix.cosmicjs.com/18509310-f1c0-11ea-a3de-692d5982216c-inkscape.png"
                },
                "lang_cosmic": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_typescript": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_scss": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_reactjs": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_javascript": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_css3": {
                  "url": null,
                  "imgix_url": null
                },
                "project_icon": {
                  "url": "https://cdn.cosmicjs.com/21738860-f1d1-11ea-a3de-692d5982216c-main-logo.png",
                  "imgix_url": "https://imgix.cosmicjs.com/21738860-f1d1-11ea-a3de-692d5982216c-main-logo.png"
                },
                "project_screenshot": {
                  "url": "https://cdn.cosmicjs.com/1c852c60-ee9c-11ea-a3de-692d5982216c-ripple-fitness.png",
                  "imgix_url": "https://imgix.cosmicjs.com/1c852c60-ee9c-11ea-a3de-692d5982216c-ripple-fitness.png"
                },
                "project_type": "Company Website",
                "under_development": true
              }
            },
            {
              "slug": "blue-interiors",
              "title": "Blue Interiors",
              "content": "<p>Blue Interiors is a London based freelance interior design company specialising in transitional design and a focus on function.</p><p>This site needed to showcase the work of the client and is very image heavy. The CMS used (CosmicJS) does a great job of compressing the images and reducing load time and file size, offering a better user experience.</p><p>The client is also able to track their sites performance with the integrated Google Analytics tool.</p>",
              "metadata": {
                "project_icon": {
                  "url": "https://cdn.cosmicjs.com/7c36f4e0-f1c1-11ea-a3de-692d5982216c-logo-blue.png",
                  "imgix_url": "https://imgix.cosmicjs.com/7c36f4e0-f1c1-11ea-a3de-692d5982216c-logo-blue.png"
                },
                "project_screenshot": {
                  "url": "https://cdn.cosmicjs.com/84b5cab0-f1c1-11ea-a3de-692d5982216c-Screenshot-from-2020-09-07-08-29-15.png",
                  "imgix_url": "https://imgix.cosmicjs.com/84b5cab0-f1c1-11ea-a3de-692d5982216c-Screenshot-from-2020-09-07-08-29-15.png"
                },
                "project_type": "Company Website",
                "lang_html5": {
                  "url": "https://cdn.cosmicjs.com/1869e770-f1c0-11ea-a3de-692d5982216c-html5.png",
                  "imgix_url": "https://imgix.cosmicjs.com/1869e770-f1c0-11ea-a3de-692d5982216c-html5.png"
                },
                "lang_reactjs": {
                  "url": "https://cdn.cosmicjs.com/187691a0-f1c0-11ea-a3de-692d5982216c-react.png",
                  "imgix_url": "https://imgix.cosmicjs.com/187691a0-f1c0-11ea-a3de-692d5982216c-react.png"
                },
                "lang_styled_components": {
                  "url": "https://cdn.cosmicjs.com/186f3ea0-f1c0-11ea-a3de-692d5982216c-styled-components.png",
                  "imgix_url": "https://imgix.cosmicjs.com/186f3ea0-f1c0-11ea-a3de-692d5982216c-styled-components.png"
                },
                "lang_cosmic": {
                  "url": "https://cdn.cosmicjs.com/54bd5310-f1c0-11ea-a3de-692d5982216c-cosmicjs.png",
                  "imgix_url": "https://imgix.cosmicjs.com/54bd5310-f1c0-11ea-a3de-692d5982216c-cosmicjs.png"
                },
                "lang_figma": {
                  "url": "https://cdn.cosmicjs.com/18479260-f1c0-11ea-a3de-692d5982216c-figma.png",
                  "imgix_url": "https://imgix.cosmicjs.com/18479260-f1c0-11ea-a3de-692d5982216c-figma.png"
                },
                "lang_inkscape": {
                  "url": "https://cdn.cosmicjs.com/18509310-f1c0-11ea-a3de-692d5982216c-inkscape.png",
                  "imgix_url": "https://imgix.cosmicjs.com/18509310-f1c0-11ea-a3de-692d5982216c-inkscape.png"
                },
                "lang_contentful": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_gatsby": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_typescript": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_scss": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_javascript": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_css3": {
                  "url": null,
                  "imgix_url": null
                },
                "github_url": "https://github.com/m87wheeler/blue-interiors-june-20",
                "project_url": "https://www.blue-interiors.com"
              }
            },
            {
              "slug": "photographer-portfolio",
              "title": "Photographer Portfolio",
              "content": "<p>This website was made to test out CosmicJS CMS as a legitimate photo gallery host. The site is built on ReactJS and is fully manageable by anyone.</p><p><br></p><p>This was my first time trying to create a photo gallery using both flexbox and JS, and the aim was to make sure that the images loaded both horizontally (to ensure the most recent image was first) and that there was no blank space under each image (which would happen with a flexbox only solution).</p><p><br></p><p>I&#39;d liked to have done this using only CSS but I&#39;m happy with the result.</p>",
              "metadata": {
                "github_url": "https://github.com/m87wheeler/photographer-portfolio",
                "project_url": "https://photography-portfolio-mwwdd.netlify.app/",
                "lang_html5": {
                  "url": "https://cdn.cosmicjs.com/1869e770-f1c0-11ea-a3de-692d5982216c-html5.png",
                  "imgix_url": "https://imgix.cosmicjs.com/1869e770-f1c0-11ea-a3de-692d5982216c-html5.png"
                },
                "lang_reactjs": {
                  "url": "https://cdn.cosmicjs.com/187691a0-f1c0-11ea-a3de-692d5982216c-react.png",
                  "imgix_url": "https://imgix.cosmicjs.com/187691a0-f1c0-11ea-a3de-692d5982216c-react.png"
                },
                "lang_cosmic": {
                  "url": "https://cdn.cosmicjs.com/54bd5310-f1c0-11ea-a3de-692d5982216c-cosmicjs.png",
                  "imgix_url": "https://imgix.cosmicjs.com/54bd5310-f1c0-11ea-a3de-692d5982216c-cosmicjs.png"
                },
                "lang_styled_components": {
                  "url": "https://cdn.cosmicjs.com/186f3ea0-f1c0-11ea-a3de-692d5982216c-styled-components.png",
                  "imgix_url": "https://imgix.cosmicjs.com/186f3ea0-f1c0-11ea-a3de-692d5982216c-styled-components.png"
                },
                "lang_figma": {
                  "url": "https://cdn.cosmicjs.com/18479260-f1c0-11ea-a3de-692d5982216c-figma.png",
                  "imgix_url": "https://imgix.cosmicjs.com/18479260-f1c0-11ea-a3de-692d5982216c-figma.png"
                },
                "lang_contentful": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_inkscape": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_gatsby": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_typescript": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_scss": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_javascript": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_css3": {
                  "url": null,
                  "imgix_url": null
                },
                "project_icon": {
                  "url": "https://cdn.cosmicjs.com/37015260-ed0e-11ea-a61c-9d54bbbbeb4a-Screenshot-from-2020-09-02-12-19-12.png",
                  "imgix_url": "https://imgix.cosmicjs.com/37015260-ed0e-11ea-a61c-9d54bbbbeb4a-Screenshot-from-2020-09-02-12-19-12.png"
                },
                "project_screenshot": {
                  "url": "https://cdn.cosmicjs.com/37015260-ed0e-11ea-a61c-9d54bbbbeb4a-Screenshot-from-2020-09-02-12-19-12.png",
                  "imgix_url": "https://imgix.cosmicjs.com/37015260-ed0e-11ea-a61c-9d54bbbbeb4a-Screenshot-from-2020-09-02-12-19-12.png"
                },
                "project_type": "Personal Project"
              }
            },
            {
              "slug": "my-first-portfolio",
              "title": "My First Portfolio",
              "content": "<p>This site was my first attempt at a portfolio for my work.&nbsp;</p><p>I purposefully made this site using only HTML, CSS (well...SCSS), and JavaScript. I often find myself reaching for React and wanted a place where I could continuously practice JavaScript. What better place that my own portfolio, eh?</p><p>The animation for the main logo is 100% CSS, and JavaScript is mainly used for the AJAX calls and dynamically generating the project content - along with a few other tidbits.</p><p>Unfortunately, I&#39;ve had to re-purpose the Cosmic API so the project section is empty...but you can just take a look at that here!&nbsp;</p>",
              "metadata": {
                "github_url": "https://github.com/m87wheeler/Martin-Wheeler-Web-Portfolio-Version-1",
                "project_url": "http://mwwdd-portfolio-previous.netlify.app",
                "lang_html5": {
                  "url": "https://cdn.cosmicjs.com/1869e770-f1c0-11ea-a3de-692d5982216c-html5.png",
                  "imgix_url": "https://imgix.cosmicjs.com/1869e770-f1c0-11ea-a3de-692d5982216c-html5.png"
                },
                "lang_scss": {
                  "url": "https://cdn.cosmicjs.com/187706d0-f1c0-11ea-a3de-692d5982216c-sass.png",
                  "imgix_url": "https://imgix.cosmicjs.com/187706d0-f1c0-11ea-a3de-692d5982216c-sass.png"
                },
                "lang_javascript": {
                  "url": "https://cdn.cosmicjs.com/186a5ca0-f1c0-11ea-a3de-692d5982216c-js.png",
                  "imgix_url": "https://imgix.cosmicjs.com/186a5ca0-f1c0-11ea-a3de-692d5982216c-js.png"
                },
                "lang_cosmic": {
                  "url": "https://cdn.cosmicjs.com/54bd5310-f1c0-11ea-a3de-692d5982216c-cosmicjs.png",
                  "imgix_url": "https://imgix.cosmicjs.com/54bd5310-f1c0-11ea-a3de-692d5982216c-cosmicjs.png"
                },
                "lang_figma": {
                  "url": "https://cdn.cosmicjs.com/18479260-f1c0-11ea-a3de-692d5982216c-figma.png",
                  "imgix_url": "https://imgix.cosmicjs.com/18479260-f1c0-11ea-a3de-692d5982216c-figma.png"
                },
                "lang_inkscape": {
                  "url": "https://cdn.cosmicjs.com/18509310-f1c0-11ea-a3de-692d5982216c-inkscape.png",
                  "imgix_url": "https://imgix.cosmicjs.com/18509310-f1c0-11ea-a3de-692d5982216c-inkscape.png"
                },
                "lang_contentful": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_gatsby": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_typescript": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_styled_components": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_reactjs": {
                  "url": null,
                  "imgix_url": null
                },
                "lang_css3": {
                  "url": null,
                  "imgix_url": null
                },
                "project_icon": {
                  "url": "https://cdn.cosmicjs.com/07648090-f1f5-11ea-a3de-692d5982216c-mwwdd-logo-large.png",
                  "imgix_url": "https://imgix.cosmicjs.com/07648090-f1f5-11ea-a3de-692d5982216c-mwwdd-logo-large.png"
                },
                "project_screenshot": {
                  "url": "https://cdn.cosmicjs.com/1fc0ec00-f1f5-11ea-a3de-692d5982216c-Screenshot-from-2020-09-08-18-02-32.png",
                  "imgix_url": "https://imgix.cosmicjs.com/1fc0ec00-f1f5-11ea-a3de-692d5982216c-Screenshot-from-2020-09-08-18-02-32.png"
                },
                "project_type": "Portfolio Website"
              }
            }
          ],
          "total": 5,
          "limit": 20
        };
      console.log(a);
      JSON.parse(JSON.stringify(a)).objects.forEach((e, t) => {
        const a = Object.entries(e.metadata)
          .filter((e) => "lang_" === e[0].substr(0, 5))
          .filter((e) => null !== e[1].url);
        createProjectCard(
          e.slug,
          e.title,
          e.metadata.project_type,
          e.content,
          e.metadata.project_screenshot.imgix_url,
          e.metadata.project_icon.imgix_url,
          a,
          t,
          e.metadata.project_url,
          // e.metadata.github_url,
          e.metadata.under_development
        ),
          (LOADING_SPINNER.style.display = "none"),
          (projectDataLoading = !1);
      });
    } catch (e) {
      console.log("Project Data Error", e);
    }
  };
fetchProjectData(projectData);
const fetchData = async (e, t, a, n, o) => {
  try {
    const n = await fetch(e),
      l = await n.json();
    await l[t].forEach((e, t) => {
      a(e, t);
    }),
      o && (o.style.display = "none");
  } catch (e) {
    console.log("ERROR:", e);
  }
};
let blogListDataLoading = !0;
const blogListData = `https://api.cosmicjs.com/v1/mwwdd-blog/objects?pretty=true&hide_metafields=true&type=blogposts&read_key=${COSMIC_API_KEY}&limit=20&props=slug,title,content,metadata,`,
  fetchedBlogListAction = (e, t) => {
    createBlogCard(
      e.slug,
      e.title,
      e.metadata.post_image.imgix_url,
      e.metadata.tags,
      e.metadata.blurb,
      e.content
    );
  };
fetchData(blogListData, "objects", fetchedBlogListAction);
const arrangeProjectCards = () => {
  let e = PROJECT_CARDS_ARRAY.length;
  for (let t = 0; t < PROJECT_CARDS_ARRAY.length; t++)
    (PROJECT_CARDS_ARRAY[t].style.zIndex = e), e--;
},
  isLoading = setInterval(() => {
    projectDataLoading ||
      (clearInterval(isLoading),
        arrangeProjectCards(),
        document.querySelector("#project-cards-container").addEventListener(
          "scroll",
          () => {
            PROJECT_CARDS_ARRAY.forEach((e, t) => {
              e.getBoundingClientRect().x <= 0.45 * windowDimensions.width
                ? (e.style.transform = "rotateY(0)")
                : (e.style.transform = "rotateY(-50deg)");
            });
          },
          !1
        ),
        (PROJECT_CARDS_ARRAY[0].style.transform = "rotateY(0)"));
  }, 500),
  prevButton = document.querySelector("#previous-project-btn"),
  nextButton = document.querySelector("#next-project-btn");
let currentInView = 0;
const nextAction = () => {
  let e = PROJECT_CARDS_ARRAY[0].offsetLeft;
  if (currentInView < PROJECT_CARDS_ARRAY.length - 1) {
    let t = PROJECT_CARDS_ARRAY[currentInView + 1].offsetLeft;
    (PROJECT_CARDS_CONTAINER.scrollLeft = t - e), (currentInView += 1);
  } else (PROJECT_CARDS_CONTAINER.scrollLeft = e - 8), (currentInView = 0);
},
  previousAction = () => {
    let e = PROJECT_CARDS_ARRAY[PROJECT_CARDS_ARRAY.length - 1].offsetLeft;
    if (currentInView > 0) {
      let e = PROJECT_CARDS_ARRAY[currentInView - 1].offsetLeft;
      (PROJECT_CARDS_CONTAINER.scrollLeft = e - 8), (currentInView -= 1);
    } else
      (PROJECT_CARDS_CONTAINER.scrollLeft = e),
        (currentInView = PROJECT_CARDS_ARRAY.length - 1);
  };
let xDown = (yDown = null);
const getTouches = (e) => e.touches,
  handleTouchStart = (e) => {
    const t = getTouches(e)[0];
    (xDown = t.clientX), (yDown = t.clientY);
  },
  handleTouchMove = (e) => {
    if (!xDown || !yDown) return;
    let t = e.touches[0].clientX,
      a = e.touches[0].clientY,
      n = xDown - t,
      o = yDown - a;
    Math.abs(n) > Math.abs(o) && (n > 0 ? nextAction() : previousAction()),
      (xDown = null),
      (yDown = null);
  };
awaitProjectLoad = setInterval(() => {
  projectDataLoading ||
    (clearInterval(awaitProjectLoad),
      nextButton.addEventListener("click", nextAction, !1),
      prevButton.addEventListener("click", previousAction, !1),
      PROJECT_CARDS_CONTAINER.addEventListener(
        "touchstart",
        handleTouchStart,
        !1
      ),
      PROJECT_CARDS_CONTAINER.addEventListener(
        "touchmove",
        handleTouchMove,
        !1
      ));
}, 500);
let nameValid = !1,
  emailValid = !1,
  messageValid = !1;
const validateField = (e, t) => {
  let a = e.target.value;
  "text" === t && a
    ? (nameValid = !(a.length < 2))
    : "email" === t && a
      ? (emailValid = !!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(a).toLocaleLowerCase()
      ))
      : "textarea" === t && a && (messageValid = !(a.length < 10));
  const n = document.querySelector("#email-error"),
    o = document.querySelector("#name-error"),
    l = document.querySelector("#message-error");
  nameValid
    ? (o.style.height = "0")
    : ((o.style.height = "2rem"),
      (o.innerText = "Use at least two characters")),
    emailValid
      ? (n.style.height = "0")
      : ((n.style.height = "2rem"),
        (n.innerText = "Make sure this is a valid email address")),
    messageValid
      ? (l.style.height = "0")
      : ((l.style.height = "2rem"),
        (l.innerText = "How about something a bit longer?")),
    (document.querySelector("#form-submit").disabled = !(
      nameValid &&
      emailValid &&
      messageValid
    ));
},
  FORM_NAME = document.querySelector("#form-name"),
  FORM_EMAIL = document.querySelector("#form-email"),
  FORM_MESSAGE = document.querySelector("#form-message");
FORM_NAME.addEventListener(
  "input",
  (e) => {
    validateField(e, "text");
  },
  !1
),
  FORM_EMAIL.addEventListener(
    "input",
    (e) => {
      validateField(e, "email");
    },
    !1
  ),
  FORM_MESSAGE.addEventListener(
    "input",
    (e) => {
      validateField(e, "textarea");
    },
    !1
  );
const enableSplash = !0,
  SPLASH_PAGE = document.querySelector("#splash-page"),
  ANIMATION_WRAPPER = document.querySelector(
    "#animated-logo-wrapper .animation-wrapper"
  ),
  ELEMS_TOP_BLOCK_FALL = document.querySelectorAll(".anim-top-block-fall"),
  ELEMS_BOTTOM_BLOCK_FALL = document.querySelectorAll(
    ".anim-bottom-block-fall"
  ),
  LEFT_DIAMOND = document.querySelector("#animated-logo-wrapper .left-diamond"),
  RIGHT_DIAMOND = document.querySelector(
    "#animated-logo-wrapper .right-diamond"
  ),
  SPLASH_PAGE_MAIN_LOGO = document.querySelector("#splash-page .main-logo"),
  animateOnLoad = () => {
    (ANIMATION_WRAPPER.style.animationName = "rotate-logo"),
      ELEMS_TOP_BLOCK_FALL.forEach(
        (e) => (e.style.animationName = "top-block-fall")
      ),
      ELEMS_BOTTOM_BLOCK_FALL.forEach(
        (e) => (e.style.animationName = "bottom-block-fall")
      ),
      (LEFT_DIAMOND.style.animationName = "left-diamond-slide"),
      (RIGHT_DIAMOND.style.animationName = "right-diamond-slide"),
      (SPLASH_PAGE_MAIN_LOGO.style.animationName = "slide-up-and-color");
  },
  playSplashPage = (e) => {
    e
      ? ((document.body.style.overflowY = "hidden"),
        window.innerWidth >= 1280 &&
        (document.body.style.padding = "0 15px 0 0"),
        (SPLASH_PAGE.style.display = "block"),
        (ANIMATION_WRAPPER.style.animationName = "rotate-logo"),
        ELEMS_TOP_BLOCK_FALL.forEach(
          (e) => (e.style.animationName = "top-block-fall")
        ),
        ELEMS_BOTTOM_BLOCK_FALL.forEach(
          (e) => (e.style.animationName = "bottom-block-fall")
        ),
        (LEFT_DIAMOND.style.animationName = "left-diamond-slide"),
        (RIGHT_DIAMOND.style.animationName = "right-diamond-slide"),
        (SPLASH_PAGE_MAIN_LOGO.style.animationName = "slide-up-and-color"),
        setTimeout(() => {
          (SPLASH_PAGE.style.opacity = "0"),
            setTimeout(() => {
              (SPLASH_PAGE.style.display = "none"),
                (document.body.style.overflowY = "scroll"),
                window.innerWidth >= 1280 &&
                (document.body.style.padding = "0");
            }, 500);
        }, 9e3))
      : (SPLASH_PAGE.style.display = "none");
  };
sessionStorage.getItem("visited")
  ? (SPLASH_PAGE.style.display = "none")
  : (playSplashPage(!0), sessionStorage.setItem("visited", !0));
