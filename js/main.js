// אובייקט המכיל את כל המידע על הכרטיסיות של המלצות השינה 
const cardsJsonData = {
    "sleepCards": [
        {
            "id": 1,
            "title": "שמירה על מיטה ריקה",
            "img": "emptyBed.jpg",
            "content": "נשכיב את התינוק/ת במיטה ריקה מחפצים שעלולים להוות סכנה.",
            "longContent": "יש להימנע מהשארת כריות, בובות, צעצועים רכים, שמיכות עבות או חפצים אחרים במיטה. חפצים אלו עלולים לחסום את דרכי הנשימה של התינוק/ת או להקשות לנוע בבטחה במהלך השינה.",
        },
        {
            "id": 2,
            "title": "מגן מיטה ומגן ראש",
            "img": "protect.jpg",
            "content": "נמנע מהשימוש במגן מיטה ומגן ראש.",
            "longContent": "משרד הבריאות ממליץ להימנע משימוש במגן מיטה ובמגן ראש, כיוון שהם לא מונעים חבלות ועלולים לסכן את התינוק/ת. המגנים עשויים לגרום ללכידה של ראש התינוק/ת ולהוות סיכון לחנק.",


        },
        {
            "id": 3,
            "title": "תקינות המזרן והמיטה",
            "img": "MeetTheStandard.jpg",
            "content": "נקפיד על מזרן ומיטה העומדים בדרישות התקן הרשמי.",
            "longContent": "חשוב לוודא שהמיטה והמזרן מתאימים זה לזה בצורה מושלמת, כך שלא יישארו מרווחים שעלולים לסכן את התינוק/ת. מזרן קשיח מספק תמיכה בטוחה ואינו מאפשר שקיעה, מה שמבטיח שינה בטוחה ונוחה לתינוק/ת.",
        },
        {
            "id": 4,
            "title": "שכיבה על הגב",
            "img": "sleepOnback.jpg",
            "content": "נשכיב את התינוק/ת על הגב לפני השינה, בלילה וביום.",
            "longContent": "כאשר התינוק/ת מתחיל/ה להתהפך לבד/ה לצדדים או על הבטן, אין צורך לשנות את תנוחת השינה בה בחר/ה לישון. בשלב זה ישנה מסוגלות לשנות את התנוחה במידה וישנה חוסר נוחות.",
        },
        {
            "id": 5,
            "title": "כיסוי התינוק/ת",
            "img": "saftyCover.jpg",
            "content": "נכסה את התינוק/ת בצורה הדוקה.",
            "longContent": "השמיכה צריכה לכסות את התינוק/ת עד גובה בתי השחי בלבד, ולהשאיר את הזרועות חופשיות. מומלץ למקם את התינוק/ת בשליש התחתון של המזרן, כך שהרגליים ייגעו בתחתית המיטה.",
        },
        {
            "id": 6,
            "title": "כיסוי המזרן",
            "img": "coverTheMattress.jpg",
            "content": "נשתמש בסדין נמתח והדוק שמתאים בדיוק לגודל המזרן.",
            "longContent": "חשוב לוודא שהסדין יושב בצורה חלקה וללא קפלים, כדי לשמור על נוחות ובטיחות התינוק במהלך השינה. סדין הדוק מונע ממנו להשתחרר או להתקפל, ומבטיח סביבת שינה בטוחה ונעימה.",
        },
        {
            "id": 7,
            "title": "שכבת לבוש נוספת",
            "img": "clothes.jpg",
            "content": "לבוש התינוק/ת צריך לשמור על חום הגוף ולהתאים למזג האוויר ולסביבה.",
            "longContent": "ככלל, תינוקות עד גיל חצי שנה צריכים להיות לבושים בשכבת ביגוד אחת יותר מהמבוגר הנמצא איתם באותו סביבה. עם זאת, הימנעו מהלבשה מוגזמת כדי למנוע חימום יתר של התינוק/ת.",
        },
        {
            "id": 8,
            "title": "חשיפת התינוק/ת",
            "img": "coverBabyHead.jpg",
            "content": "נשאיר את ראש ופני התינוק חשופים במהלך השינה, הן במיטה והן במנשא.",
            "longContent": "אין לכסות את ראשו או את פניו של התינוק בכובע, בקפוצ'ון או בכל דבר אחר. שמירה על חשיפת הראש והפנים מאפשרת לתינוק לנשום בצורה חופשית ובטוחה.",
        },
        {
            "id": 9,
            "title": "הרחקת המיטה מחפצים מסוכנים",
            "img": "awayFromEverything.jpg",
            "content": "נמקם את מיטת התינוק/ת הרחק מכבלי חשמל ושקעים.",
            "longContent": "כמו כן, גם מוילונות, משקיות ניילון ופלסטיק. כך נמנע מהתינוק/ת גישה לחפצים שעלולים להוות סכנה וליצור סיכון מחנק או התחשמלות.",
        },
        {
            "id": 10,
            "title": "חימום יתר",
            "img": "tempHit.jpg",
            "content": "נמנע מחימום יותר. החימום המומלץ במזגן הוא בין 22-23 מעלות צלזיוס.",
            "longContent": "חשוב גם לא לשכוח לאוורר את החדר בו ישן התינוק/ת כל יום, כדי לשמור על סביבה נוחה ומאוזנת בטמפרטורה.",
        }
    ]
}

document.addEventListener("DOMContentLoaded", function (event) {
    //החלק העליון של העמוד - תמונה ברקע עם טקסט בשתי שורות

    let activeCard = null;
    const mainContent = document.getElementById("mainContentContainer");
    const isMobile = window.innerWidth <= 600;
    
    
        // יצירת כותרות העמוד
    const headerContainer = document.createElement("div");
    headerContainer.setAttribute("id", "first-container");
    const headerContent = document.createElement("div");
    headerContainer.appendChild(headerContent);
    headerContent.setAttribute("id", "header-content");
    headerContent.style.padding = "2rem";
    const firstLineHeader = document.createElement("h2");
    const secondLineHeader = document.createElement("h5");
    firstLineHeader.innerText = "ביטחון, רוגע ושינה מתוקה";
    secondLineHeader.innerText = "יצירת סביבת שינה בטוחה לתינוק/ת";

        // יצירת כפתור הורדת צ'קליסט והודעת משוב
        const downloadButton = document.createElement("a");
        downloadButton.setAttribute("href", "files/צ'קליסט לשינה בטוחה.pdf"); // נתיב ל-PDF
        downloadButton.setAttribute("download", "safe_sleep_checklist.pdf"); // מאפשר הורדה
        downloadButton.setAttribute("class", "btn download-btn");
        downloadButton.innerText = "להורדת צ'קליסט לשינה בטוחה";
        // יצירת הודעת משוב להורדה
        const feedbackMessage = document.createElement("p");
        feedbackMessage.setAttribute("id", "download-feedback");
        feedbackMessage.style.display = "none"; // מוסתר כברירת מחדל
        feedbackMessage.innerText = "ההורדה בוצעה בהצלחה!";
        // טיפול באירוע לחיצה על כפתור ההורדה
    downloadButton.addEventListener("click", function (event) {
            feedbackMessage.style.display = "block";
            feedbackMessage.style.color = "green";
        feedbackMessage.style.visibility = "visible"; // הופכת לגלויה
        feedbackMessage.style.opacity = "1"; // משנה את השקיפות
        // הצגת הודעת משוב והסתרתה אחרי 3 שניות
        setTimeout(function() {
            feedbackMessage.style.display = "none";
            feedbackMessage.style.visibility = "hidden";
            feedbackMessage.style.opacity = "0";
        }, 3000);
    });

        headerContent.appendChild(firstLineHeader);
        headerContent.appendChild(secondLineHeader);
        headerContent.appendChild(downloadButton);
        headerContent.appendChild(feedbackMessage);

        mainContent.appendChild(headerContainer);


        // יצירת אזור החיפוש
    const searchDiv = document.createElement("div");
    searchDiv.setAttribute("class", "container p-2 p-lg-4 ");

    const searchSection = document.createElement("section");
    searchSection.setAttribute("id", "searchSectionId");
        // יצירת טופס החיפוש
    const formSearch = document.createElement("form");
    formSearch.setAttribute("class", "d-flex flex-column flex-lg-row col-lg-4 gap-2");
    formSearch.setAttribute("role", "search");
// יצירת שדה הקלט לחיפוש
    const placeholder = document.createElement("input");
    placeholder.setAttribute("class", "form-control me-2");
    placeholder.setAttribute("type", "search");
    
    placeholder.setAttribute("placeholder", "לחיפוש המלצה");
    placeholder.setAttribute("aria-label", "Search");
        // האזנה לשינויים בשדה החיפוש
    placeholder.addEventListener("keyup", function() {
        const searchTerm = placeholder.value;
         console.log(`This is the search after keyup: ${searchTerm}`);
         console.log("The search is empty, removing filter. All cards are now showing.");
        if (searchTerm === "") {
            
            closeInfoPanel();
            filterCards(searchTerm);
        }  
    });


        // יצירת כפתור החיפוש
    const btnSearch = document.createElement("button");
    btnSearch.setAttribute("class", "btn disabled");
    btnSearch.setAttribute("type", "submit");
    
    btnSearch.textContent = "חיפוש";


    searchSection.appendChild(formSearch);
    formSearch.appendChild(placeholder);
    formSearch.appendChild(btnSearch);
        // טיפול בשליחת טופס החיפוש
        formSearch.addEventListener('submit', function(e) {
            e.preventDefault(); // מונע שליחה ראשונית של הטופס - מבטל כל פעולה דפולטיבית
            const searchTerm = placeholder.value;
            console.log(searchTerm);
            filterCards(searchTerm);
        });
    
    searchDiv.appendChild(searchSection);
    mainContent.appendChild(searchDiv);
        // יצירת הכרטיסיות
    const itemsContainer = document.createElement("div");
    itemsContainer.setAttribute("id", "itemsContainer");
    const cardsList = document.createElement("ul");
    cardsList.setAttribute("class", "d-flex flex-column col-lg-10 flex-md-row justify-content-center align-content-center p-0 ");

        // יצירת הכרטיסיות מתוך המידע ב-JSON
   
    cardsJsonData.sleepCards.forEach((card, index) => {
        const listItem = document.createElement("li");
        listItem.setAttribute("class", "card mt-3 mb-3 primary recommendation-card");
        listItem.style.width = "17rem"

        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body d-flex justify-content-center flex-column p-3");

        const cardImg = document.createElement("img");
        cardImg.setAttribute("src", `img/${card.img}`);
        cardImg.setAttribute("class", "card-img-top");
        cardImg.setAttribute("alt", card.title);

        const cardTitle = document.createElement("h5");
        cardTitle.setAttribute("class", "card-title mt-5 text-start");
        cardTitle.innerText = card.title;

        const cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text mt-3");
        cardText.innerText = card.content;

        // Collapsed content
        const collapseDiv = document.createElement("div");
        collapseDiv.setAttribute("class", "collapse");
        collapseDiv.setAttribute("id", `cardContent${index}`);

        const collapsedText = document.createElement("p");
        collapsedText.setAttribute("class", "card-text");
        collapsedText.innerText = card.longContent;

        collapseDiv.appendChild(collapsedText);
        
        
      
        // Toggle button
        const toggleContainer = document.createElement("div");
        toggleContainer.setAttribute("class", "text-center mt-2");
        toggleContainer.style.cssText = `
            display: flex;
            justify-content: center;
            align-content: center;
        `

        const toggleBtn = document.createElement("button");
        toggleBtn.setAttribute("class", "bg-transparent border-0 text-decoration-none toggle-btn hover-effect");
        toggleBtn.setAttribute("type", "button");
        toggleBtn.setAttribute("data-bs-target", `#cardContent${index}`);
        toggleBtn.style.cssText = `display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &:hover {
                position:relative;
                top:0.25rem;
                transition: 0.3s ease-in-out;
            
           }
        `
        ;


        if(isMobile === true) {

            toggleBtn.setAttribute("data-bs-toggle", "collapse");
            toggleBtn.setAttribute("aria-expanded", "false");   
        }

        const toggleSpan = document.createElement("span");
        toggleSpan.setAttribute("class", "collapse-text");
        toggleSpan.innerText = "קרא עוד";

        const toggleIcon = document.createElement("span");
        toggleIcon.setAttribute("class", "material-icons-outlined");
        toggleIcon.textContent = "keyboard_arrow_down";

        toggleBtn.appendChild(toggleSpan);
        toggleBtn.appendChild(toggleIcon);
        toggleContainer.appendChild(toggleBtn);

        // Append all elements
        cardBody.appendChild(cardImg);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(collapseDiv);
        cardBody.appendChild(toggleContainer);

        listItem.appendChild(cardBody);
        cardsList.appendChild(listItem);

            if ((index + 1) % 5 === 0 && index < cardsJsonData.sleepCards.length - 1) {
                const infoPanel = document.createElement("div");
                infoPanel.setAttribute("class", "d-none d-lg-none w-100 mt-3 mb-3"); // Take full width
                infoPanel.setAttribute("id", "info-panel");
                infoPanel.style.flex = "0 0 85vw"; // Ensure it takes full width in flexbox
                infoPanel.style.backgroundColor =" var(--secondary-gray)";

                // Add your info panel content here
                infoPanel.innerHTML = `
            <div class="p-4">
                
            </div>
        `;

                cardsList.appendChild(infoPanel); 
            
            }  
            
               
    });
    itemsContainer.appendChild(cardsList);
    searchDiv.appendChild(itemsContainer);

        // לוגיקה לכפתור החיפוש - הפעלה/השבתה בהתאם לקלט
    const searchInput = document.querySelector('input[type="search"]');
    const searchButton = document.querySelector('button[type="submit"]');
    
    // ראשית - שהכפתור יהיה לא פעיל
    searchButton.disabled = true;
    searchButton.classList.add('disabled');

    // טיפול בעיצוב כפתור החיפוש - או פעיל או לא פעיל
    searchInput.addEventListener('input', function (e) {
       if (e.target.value === ""){
           filterCards(e.target.value);
       }
      
        // בדיקה אם יש ערך בשורת החיפוש עצמה
        if (this.value.trim() !== '') {
            // כפתור פעיל
            searchButton.disabled = false;
            searchButton.classList.remove('disabled');
        } else {
            // כפתור לא פעיל
            searchButton.disabled = true;
            searchButton.classList.add('disabled');
        }
    });



        // הוספת מאזיני אירועים לכפתורי "קרא עוד"
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function () {


            const card = this.closest('.recommendation-card');
            const collapseText = this.querySelector('.collapse-text');
            const arrowIcon = this.querySelector('.material-icons-outlined');
            console.log(arrowIcon);
            
            // בדיקה אם הסביבה שאנו נמצאים בה היא סביבת מובייל (משתנה גלובלי)
            if (isMobile) {
                setTimeout(() => {
                    scrollToElement(card);
                }, 300); // דיליי של 0.3 שניות
                
                
                card.classList.toggle('expanded');

                // שינוי בין 'קרא עוד' ל-'קרא פחות' על בסיס המצב
                if (this.getAttribute('aria-expanded') === 'false') {
                    collapseText.textContent = 'קרא עוד';
                    arrowIcon.textContent = 'keyboard_arrow_down';
                } else {
                    collapseText.textContent = 'קרא פחות';
                    arrowIcon.textContent = 'keyboard_arrow_up';
                }


            } else {
                // ביטול כל פונקציונליות המובייל כשאנחנו בסביבת Desktop וקריאה לפונקצייה DesktopReadMore
                event.preventDefault();
                event.stopPropagation();
                btn.removeAttribute('data-bs-toggle');
                btn.removeAttribute('data-bs-target');
                console.info("desktop environment");
                DesktopReadMore(card);
                
            }
          

        });
    });




}


);

// פונקציות עזר




function filterCards(searchTerm) {
    closeInfoPanel();
    const cards = document.querySelectorAll('.recommendation-card');
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    let visibleCards = [];

    // אם יש פאנל - מחק אותו קודם לכן
    let existingInfoPanel = document.getElementById('info-panel');
    if (existingInfoPanel) {
        existingInfoPanel.remove();
    }

    // מחק כל הודעה של אין תוצאות כל עוד פילטרנו מחדש
    const existingMessage = document.querySelector('.no-results-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // פילטור קלפים לפי פריט החיפוש
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const content = card.querySelector('.card-text').textContent.toLowerCase();
        const longContent = card.querySelector('.collapse p').textContent.toLowerCase();

        // אם החיפוש ריק או שהוא שווה לתוכן קיים בכותרת, בתוכן ובתוכן הנגלה
        if (searchTerm === '' ||
            title.includes(normalizedSearchTerm) ||
            content.includes(normalizedSearchTerm) ||
            longContent.includes(normalizedSearchTerm)) {
            // כרטיסייה תופיעה
            card.style.display = 'block';
           
        } else {
            // הסתרת מסך
            card.style.display = 'none';
        }
    });

    
    visibleCards = Array.from(cards).filter(card => {
        const style = window.getComputedStyle(card);
        return style.display !== 'none';
    });

  
    
    if (visibleCards.length === 0 && searchTerm !== '') {
        //  הצגת הודעה שלא נמצאו תוצאות 
        const cardsContainer = document.getElementById("itemsContainer");
        const noCardsFound = document.createElement("div");
        noCardsFound.classList.add('container', 'no-results-message');
        noCardsFound.style.textAlign = "center";
        const messageParagraph = document.createElement("p");
        messageParagraph.innerText = "לא נמצאו תוצאות";
        noCardsFound.appendChild(messageParagraph);
        cardsContainer.appendChild(noCardsFound);
    } else {
        // יצירת הפאנל של המידע
        createInfoPanel(visibleCards);
    }
}

// פונקציה להצגה של הפאנל מידע הנוסף
function createInfoPanel(visibleCards) {
    if (visibleCards.length === 0) return;

    const infoPanelLi = document.createElement("div");
    infoPanelLi.setAttribute("class", "d-none d-lg-none w-100 mt-3");
    infoPanelLi.setAttribute("id", "info-panel");
    infoPanelLi.style.flex = "0 0 85vw";
    infoPanelLi.style.backgroundColor = "var(--secondary-gray)";
    infoPanelLi.innerHTML = `
        <div class="p-4">
        </div>
    `;

    // מצא את הכרטיסייה האחרונה שאפשר לראות - וצור פאנל ברגע שמצאנו.
    const lastVisibleCard = visibleCards[visibleCards.length - 1];
    if (lastVisibleCard && lastVisibleCard.parentNode) {
        lastVisibleCard.parentNode.insertBefore(infoPanelLi, lastVisibleCard.nextSibling);
    }
}

// פונקציה לגלילה חלקה לאלמנט
function scrollToElement(element) {
    if (element) {
        // התחשבות בגובה סרגל הניווט הקבוע
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const padding = 20; // ריווח לנוחות
        // חישוב המיקום המדויק בדף
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight - padding;
        // ביצוע הגלילה
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

//משתנה גלובלי ראשוני לשמירת הכרטיסייה הפעילה במהלך העבודה באתר
let activeCard = null;


function DesktopReadMore(card) {
    const infoPanel = document.getElementById("info-panel");
    const currentButton = card.querySelector('.toggle-btn');
    const currentCollapseText = currentButton.querySelector('.collapse-text');
    const currentArrowIcon = currentButton.querySelector('.material-icons-outlined');

    // לחיצה על אותה כרטיסייה סוגרת את הפאנל של המידע הנוסף
    if (activeCard === card) {
        closeInfoPanel();
        card.style.boxShadow = 'none';
        infoPanel.style.boxShadow = 'none';
        activeCard = null;
        return;
    }

    // בלחיצה על כרטיסייה לא פעילה כשיש כרטיסייה פעילה - ביטול הכרטיסייה הקיימת
    if (activeCard) {
        const prevButton = activeCard.querySelector('.toggle-btn');
        const prevCollapseText = prevButton.querySelector('.collapse-text');
        const prevArrowIcon = prevButton.querySelector('.material-icons-outlined');
        activeCard.style.boxShadow = 'none';
        activeCard.style.border = 'none';
        activeCard.style.scale = '1';
        prevCollapseText.textContent = 'קרא עוד';
        prevArrowIcon.textContent = 'keyboard_arrow_down';
    }

    // עדכון סטטוס כרטיסייה שנלחצה
    activeCard = card;
    currentCollapseText.textContent = 'קרא פחות';
    currentArrowIcon.textContent = 'keyboard_arrow_up';

    // חישוב מיקומי הכרטיסיות על המסך
    const container = document.querySelector('#itemsContainer ul');
    const cards = Array.from(container.querySelectorAll('.recommendation-card'));
    const visibleCards = cards.filter(c => window.getComputedStyle(c).display !== 'none');
    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;
    const cardsPerRow = Math.floor(containerWidth / cardWidth);
    const currentIndex = visibleCards.indexOf(card);

    // משתנה בוליאני שקובע אם צריך ליצור עוד כרטיסיות
    
    const shouldCreateNewRow = visibleCards.length > cardsPerRow;

    // מציאת מיקום הפאנל בצורה רספונסיבית
    let insertAfterCard;
    if (shouldCreateNewRow) {
        // אם צריך כמה שורות כדי להכניס את הפאנל - הכנס אחרי כל כרטיסייה קיימת בשורה
        const currentRow = Math.floor(currentIndex / cardsPerRow);
        const lastCardInRowIndex = Math.min((currentRow + 1) * cardsPerRow - 1, visibleCards.length - 1);
        insertAfterCard = visibleCards[lastCardInRowIndex];
    } else {
        // אם כל הכרטיסיות בשורה אחת בלבד - הכנס רק אחרי האחרונה
        insertAfterCard = visibleCards[visibleCards.length - 1];
    }

    // מיקום הפאנל של המידע הנוסף
    if (insertAfterCard && insertAfterCard.nextSibling !== infoPanel) {
        insertAfterCard.parentNode.insertBefore(infoPanel, insertAfterCard.nextSibling);
    }

    // חיווי ויזואלי על כרטיסייה פתוחה ופאנל מידע תואם
    card.style.boxShadow = '0 0 1rem rgba(0,0,0,0.65)';
    card.style.border = '0.5rem solid rgb(37, 118, 116,0.65)';
    card.style.scale = '1.05';
    infoPanel.style.scale = '1.05';
    infoPanel.style.border = '0.5rem solid rgb(37, 118, 116,0.65)';
    infoPanel.style.boxShadow = '0 0 1rem rgba(0,0,0,0.65)';

    // ניהול הגלילה לאלמנט הנוצר
    if (shouldCreateNewRow && Math.floor(currentIndex / cardsPerRow) > 0) {
        setTimeout(() => {
            scrollToElement(infoPanel);
        }, 100);
    }

    // עדכון תוכן הפאנל מידע
    const cardTitle = card.querySelector('.card-title').textContent;
    const cardContent = card.querySelector('.card-text').textContent;
    const cardLongContent = card.querySelector('.collapse .card-text').textContent;

    const infoPanelContent = `
        <div class="p-4">
            <div class="d-flex justify-content-end">
                <span class="btn-close" onclick="closeInfoPanel()"></span>
            </div>
            <h3>${cardTitle}</h3>
            <p>${cardContent}</p>
            <p>${cardLongContent}</p>
        </div>
    `;

    // אנימציה ליצירת פאנל חדש במידה ויש אחד קיים פתוח
    if (infoPanel.classList.contains('d-lg-block')) {
        infoPanel.style.opacity = '0';
        setTimeout(() => {
            infoPanel.innerHTML = infoPanelContent;
            infoPanel.style.opacity = '1';
        }, 300);
    } else {
        infoPanel.innerHTML = infoPanelContent;
        infoPanel.classList.remove('d-lg-none');
        infoPanel.classList.add('d-lg-block');
        infoPanel.style.position = 'relative';
    }
}

// פונקציה לסגירת פאנל המידע
function closeInfoPanel() {
    const infoPanel = document.getElementById("info-panel");
    const arrow = document.querySelector('.info-arrow');

    // איפוס מצב כפתור "קרא עוד" בכרטיסייה הפעילה
    if (activeCard) {
        const button = activeCard.querySelector('.toggle-btn');
        const collapseText = button.querySelector('.collapse-text');
        const arrowIcon = button.querySelector('.material-icons-outlined');
        collapseText.textContent = 'קרא עוד';
        arrowIcon.textContent = 'keyboard_arrow_down';
    }


    // הסתרת הפאנל והסרת כל הסגנונות של הכרטיסייה הפעילה
    infoPanel.classList.remove('d-lg-block');
    infoPanel.classList.add('d-lg-none');
    activeCard.style.boxShadow = 'none';
    activeCard.style.scale = '1';
    activeCard.style.border = 'none';
    infoPanel.style.border = 'none';
    infoPanel.style.scale = '1';
    infoPanel.style.boxShadow = 'none';
    // איפוס מעקב אחר הכרטיסייה הפעילה
    activeCard = null;
}

