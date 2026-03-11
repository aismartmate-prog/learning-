const questionsDB = [
    // ========================================================================
    // הכנה לבגרות 35471 (4 יחידות) | פעימה 1 (10 שאלות רב-שלביות)
    // ========================================================================
    
    // שאלה 1 - גאומטריה אנליטית (מעגל ומשיק) - מבוסס קיץ 2022
    {
        topic: "bagrut_35471",
        subTopic: "גאומטריה אנליטית",
        question_text: `<strong>מתוך בגרות קיץ 2022, מועד א' (שאלון ראשון 4 יח"ל):</strong><br>
        נתונה משוואת מעגל:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(x - 4)² + (y - 3)² = 25</div>
        <svg viewBox="0 0 250 250" width="100%" height="200" style="display:block; margin:15px auto; max-width:250px;">
            <line x1="20" y1="200" x2="230" y2="200" stroke="#94a3b8" stroke-width="2"/> <line x1="40" y1="20" x2="40" y2="230" stroke="#94a3b8" stroke-width="2"/> <circle cx="120" cy="140" r="100" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="120" cy="140" r="4" fill="#0f172a"/>
            <text x="130" y="145" font-family="Arial" font-weight="bold">M</text>
            <line x1="120" y1="140" x2="40" y2="80" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,4"/>
            <circle cx="40" cy="80" r="4" fill="#ef4444"/>
            <text x="20" y="75" font-family="Arial" font-weight="bold" fill="#ef4444">A</text>
            <line x1="0" y1="26" x2="100" y2="160" stroke="#ef4444" stroke-width="2"/>
        </svg>
        א. מהם שיעורי מרכז המעגל (M) ומהו רדיוס המעגל (R)?<br>
        ב. המעגל חותך את ציר ה-y בשתי נקודות. אחת מהן היא הנקודה A (הנמצאת בחלקו החיובי של הציר). מצאו את שיעורי הנקודה A.<br>
        ג. מצאו את משוואת הישר המשיק למעגל בנקודה A.`,
        options: [
            "א. M(4, 3) , R=5 | ב. A(0, 6) | ג. y = (4/3)x + 6",
            "א. M(-4, -3) , R=25 | ב. A(0, 8) | ג. y = (-3/4)x + 6",
            "א. M(4, 3) , R=5 | ב. A(0, 0) | ג. y = (-4/3)x - 6",
            "א. M(3, 4) , R=5 | ב. A(0, 6) | ג. y = (3/4)x + 6"
        ],
        correctAnswer: 0,
        hint: "סעיף א': מרכז המעגל מתקבל מהיפוך הסימנים במשוואה, והרדיוס הוא השורש של המספר החופשי. סעיף ב': חיתוך עם ציר y אומר איקס שווה אפס. סעיף ג': הרדיוס מאונך למשיק בנקודת ההשקה, לכן שפוע המשיק הוא הופכי ונגדי לשיפוע הרדיוס AM.",
        solution_steps: [
            { verbal_explanation: "סעיף א': מתוך משוואת המעגל התקנית, נחלץ את נקודת המרכז (על ידי היפוך הסימנים שבסוגריים) ואת הרדיוס (שורש).", math_expression: "M(4, 3) , R = √25 = 5" },
            { verbal_explanation: "סעיף ב': נמצא את נקודות החיתוך עם הציר האנכי על ידי איפוס המשתנה האופקי במשוואה.", math_expression: "x = 0 ➔ (-4)² + (y - 3)² = 25" },
            { verbal_explanation: "נחשב את המשוואה הריבועית שהתקבלה.", math_expression: "16 + (y - 3)² = 25 ➔ (y - 3)² = 9" },
            { verbal_explanation: "נוציא שורש ונקבל שתי אפשרויות. נבחר את הנקודה העליונה כפי שהוגדר בשאלה.", math_expression: "y - 3 = ±3 ➔ y = 6 , y = 0 ➔ A(0, 6)" },
            { verbal_explanation: "סעיף ג': נמצא את שיפוע הרדיוס המחבר את המרכז לנקודת ההשקה.", math_expression: "m1 = (6 - 3) / (0 - 4) = 3 / -4 = -3/4" },
            { verbal_explanation: "הישר המשיק מאונך לרדיוס, ולכן שיפועו נגדי והופכי.", math_expression: "m2 = 4/3" },
            { verbal_explanation: "נבנה את משוואת הישר המשיק בעזרת השיפוע ונקודת ההשקה.", math_expression: "y - 6 = (4/3)(x - 0) ➔ y = (4/3)x + 6" }
        ],
        final_answer: "א. M(4, 3) , R=5 | ב. A(0, 6) | ג. y = (4/3)x + 6"
    },

    // שאלה 2 - בעיית תנועה (אלגברה) - מבוסס חורף 2021
    {
        topic: "bagrut_35471",
        subTopic: "אלגברה ושברים אלגבריים",
        question_text: `<strong>מתוך בגרות חורף 2021 (בעיות תנועה):</strong><br>
        מכונית ומשאית יצאו באותו הזמן מעיר א' לעיר ב'. המרחק בין שתי הערים הוא 300 ק"מ.<br>
        המהירות של המכונית הייתה גדולה ב-25 קמ"ש מהמהירות של המשאית.<br>
        המכונית הגיעה לעיר ב' בדיוק שעה אחת (1 שעות) לפני שהמשאית הגיעה אליה.<br>
        א. מצאו את המהירות של המשאית ואת המהירות של המכונית.<br>
        ב. כמה זמן לקח למכונית לעבור את כל הדרך?`,
        options: [
            "א. משאית 75, מכונית 100 | ב. 3 שעות",
            "א. משאית 50, מכונית 75 | ב. 4 שעות",
            "א. משאית 60, מכונית 85 | ב. 3.5 שעות",
            "א. משאית 100, מכונית 125 | ב. 2.4 שעות"
        ],
        correctAnswer: 0,
        hint: "הגדירו את מהירות המשאית ב-x, ואת מהירות המכונית ב-x+25. הזמן של המשאית (300 לחלק ל-x) גדול בשעה אחת מהזמן של המכונית. בנו משוואה רציונלית ופתרו משוואה ריבועית.",
        solution_steps: [
            { verbal_explanation: "נגדיר את המהירויות באמצעות משתנה. מהירות המשאית איטית יותר ממהירות המכונית.", math_expression: "v1 = x , v2 = x + 25" },
            { verbal_explanation: "הזמן מחושב כמרחק חלקי מהירות. נרכיב את ביטויי הזמן לכל אחד מהרכבים.", math_expression: "t1 = 300 / x , t2 = 300 / (x + 25)" },
            { verbal_explanation: "זמן הנסיעה של המשאית ארוך בשעה מזמן המכונית. נבנה משוואה מאזנת.", math_expression: "300 / x = 300 / (x + 25) + 1" },
            { verbal_explanation: "נכפול במכנה המשותף כדי להיפטר מהשברים.", math_expression: "300(x + 25) = 300x + 1x(x + 25)" },
            { verbal_explanation: "נפתח סוגריים ונסדר למשוואה ריבועית קלאסית.", math_expression: "300x + 7500 = 300x + x² + 25x ➔ x² + 25x - 7500 = 0" },
            { verbal_explanation: "נפתור את המשוואה. הפתרון השלילי נפסל מכיוון שמהירות היא חיובית.", math_expression: "x1 = 75 , x2 = -100 ➔ v1 = 75 , v2 = 100" },
            { verbal_explanation: "סעיף ב': נחשב את זמן הנסיעה של המכונית.", math_expression: "t2 = 300 / 100 = 3" }
        ],
        final_answer: "א. משאית 75, מכונית 100 | ב. 3 שעות"
    },

    // שאלה 3 - גאומטריה אוקלידית (מעגל ומשולשים דומים) - מבוסס קיץ 2020
    {
        topic: "bagrut_35471",
        subTopic: "גאומטריה אוקלידית",
        question_text: `<strong>מתוך בגרות קיץ 2020:</strong><br>
        משולש ABC חסום במעגל כך שהצלע AB היא קוטר המעגל.<br>
        מהנקודה C הורידו אנך לקוטר, החותך אותו בנקודה D.<br>
        נתון: אורך הקטע AD הוא 4 ס"מ, ואורך הקטע DB הוא 9 ס"מ.<br>
        <svg viewBox="0 0 250 200" width="100%" height="180" style="display:block; margin:15px auto; max-width:220px;">
            <circle cx="125" cy="125" r="75" fill="none" stroke="#94a3b8" stroke-width="2"/>
            <line x1="50" y1="125" x2="200" y2="125" stroke="#0f172a" stroke-width="2"/> <polygon points="50,125 106.25,52.5 200,125" fill="rgba(34,197,94,0.1)" stroke="#0f172a" stroke-width="2"/> <line x1="106.25" y1="52.5" x2="106.25" y2="125" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/> <polyline points="106.25,115 116.25,115 116.25,125" fill="none" stroke="#ef4444" stroke-width="1.5"/>
            <text x="30" y="130" font-family="Arial" font-weight="bold">A</text>
            <text x="210" y="130" font-family="Arial" font-weight="bold">B</text>
            <text x="100" y="45" font-family="Arial" font-weight="bold">C</text>
            <text x="100" y="145" font-family="Arial" font-weight="bold" fill="#ef4444">D</text>
            <text x="75" y="115" font-family="Arial" font-size="12">4</text>
            <text x="150" y="115" font-family="Arial" font-size="12">9</text>
        </svg>
        א. מצאו את אורך הגובה CD (היעזרו בדמיון משולשים או במשפט הגובה).<br>
        ב. מצאו את אורך הצלע AC.`,
        options: [
            "א. 6 ס\"מ | ב. 7.21 ס\"מ (שורש 52)",
            "א. 5 ס\"מ | ב. 6.40 ס\"מ",
            "א. 6 ס\"מ | ב. 10 ס\"מ",
            "א. 7.5 ס\"מ | ב. 8.5 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "זווית היקפית הנשענת על קוטר שווה ל-90 מעלות, ולכן משולש ABC הוא ישר זווית. הגובה ליתר בריבוע שווה למכפלת היטלי הניצבים (AD כפול DB).",
        solution_steps: [
            { verbal_explanation: "הזווית העליונה נשענת על קוטר, ולכן היא זווית ישרה. המשולש הגדול הוא משולש ישר זווית.", math_expression: "∠ACB = 90°" },
            { verbal_explanation: "סעיף א': לפי משפט הגובה במשולש ישר זווית (או על ידי דמיון משולשים), הגובה בריבוע שווה למכפלת שני חלקי היתר.", math_expression: "CD² = AD × DB" },
            { verbal_explanation: "נציב את אורכי הקטעים הנתונים ונוציא שורש.", math_expression: "CD² = 4 × 9 = 36 ➔ CD = 6" },
            { verbal_explanation: "סעיף ב': נשתמש במשפט פיתגורס על המשולש השמאלי הקטן, שהוא ישר זווית בזכות האנך.", math_expression: "AC² = AD² + CD²" },
            { verbal_explanation: "נציב את הנתונים ואת הגובה שמצאנו ונחשב.", math_expression: "AC² = 4² + 6² = 16 + 36 = 52 ➔ AC = √52 ≈ 7.21" }
        ],
        final_answer: "א. 6 ס\"מ | ב. 7.21 ס\"מ (שורש 52)"
    },

    // שאלה 4 - חדו"א (חקירת פונקציה רציונלית) - מבוסס קיץ 2023
    {
        topic: "bagrut_35471",
        subTopic: "חדו\"א בסיסי",
        question_text: `<strong>מתוך בגרות קיץ 2023, מועד א' (חקירת פונקציה רציונלית):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.3em; margin:10px 0;">
            <div style="display:inline-block; vertical-align:middle;">f(x) = </div>
            <div style="display:inline-block; text-align:center; vertical-align:middle; margin-left:5px;">
                <div style="border-bottom:2px solid #0f172a; padding:0 5px;">x² - 4x + 4</div>
                <div style="padding:0 5px;">x - 1</div>
            </div>
        </div>
        א. מצאו את תחום ההגדרה של הפונקציה ואת משוואת האסימפטוטה האנכית שלה.<br>
        ב. מצאו את שיעורי נקודות הקיצון של הפונקציה (וקבעו את סוגן).<br>
        ג. מהן נקודות החיתוך של הפונקציה עם ציר ה-x?`,
        options: [
            "א. x≠1 , אסימפטוטה x=1 | ב. (0, -4) מקסימום , (2, 0) מינימום | ג. (2, 0)",
            "א. x≠1 , אסימפטוטה x=1 | ב. (0, 4) מינימום , (2, 0) מקסימום | ג. (2, 0) , (-2, 0)",
            "א. x≠-1 , אסימפטוטה x=-1 | ב. (0, -4) מקסימום , (-2, 0) מינימום | ג. (1, 0)",
            "א. x≠1 , אסימפטוטה y=1 | ב. (2, 0) מינימום מוחלט | ג. אין חיתוך"
        ],
        correctAnswer: 0,
        hint: "למציאת קיצון, גזרו את הפונקציה לפי כלל מנת פונקציות. המונה בנגזרת יהיה: נגזרת המונה כפול המכנה, פחות נגזרת המכנה כפול המונה. השוו את המונה של הנגזרת לאפס.",
        solution_steps: [
            { verbal_explanation: "סעיף א': תחום ההגדרה מתקבל מאיפוס המכנה. מכיוון שהמונה אינו מתאפס בנקודה זו, זוהי אסימפטוטה אנכית.", math_expression: "x - 1 ≠ 0 ➔ x ≠ 1 , Asymptote: x = 1" },
            { verbal_explanation: "סעיף ב': נגזור את הפונקציה הרציונלית באמצעות כלל המנה הסטנדרטי.", math_expression: "f'(x) = ((2x - 4)(x - 1) - (x² - 4x + 4) × 1) / (x - 1)²" },
            { verbal_explanation: "נפתח סוגריים במונה הנגזרת, נכנס איברים דומים ונשווה אותו לאפס למציאת קיצון.", math_expression: "2x² - 6x + 4 - x² + 4x - 4 = x² - 2x = 0" },
            { verbal_explanation: "נפתור את המשוואה הריבועית כדי למצוא את ערכי הקיצון.", math_expression: "x(x - 2) = 0 ➔ x1 = 0 , x2 = 2" },
            { verbal_explanation: "נציב את הערכים חזרה בפונקציה המקורית כדי למצוא את הגבהים.", math_expression: "f(0) = 4 / -1 = -4 ➔ (0, -4) <br><br> f(2) = 0 / 1 = 0 ➔ (2, 0)" },
            { verbal_explanation: "בעזרת טבלה או נגזרת שנייה ניתן לראות כי הנקודה הראשונה היא מקסימום והשנייה מינימום.", math_expression: "(0, -4) Max , (2, 0) Min" },
            { verbal_explanation: "סעיף ג': חיתוך אופקי מתרחש כשהמונה מתאפס. זהה לנקודת המינימום שמצאנו.", math_expression: "x² - 4x + 4 = 0 ➔ (x - 2)² = 0 ➔ x = 2 ➔ (2, 0)" }
        ],
        final_answer: "א. x≠1 , אסימפטוטה x=1 | ב. (0, -4) מקסימום , (2, 0) מינימום | ג. (2, 0)"
    },

    // שאלה 5 - טריגונומטריה במרובעים (מבוסס חורף 2021)
    {
        topic: "bagrut_35471",
        subTopic: "טריגונומטריה",
        question_text: `<strong>מתוך בגרות חורף 2021 (טריגונומטריה):</strong><br>
        נתון טרפז ישר זווית ABCD (זווית D היא 90 מעלות, והבסיסים AB ו-CD מקבילים).<br>
        אורך הבסיס העליון AB הוא 8 ס"מ. אורך השוק המשופעת BC הוא 10 ס"מ.<br>
        הזווית שבין השוק המשופעת לבסיס התחתון היא <span dir="ltr">∠BCD = 50°</span>.<br>
        <svg viewBox="0 0 250 150" width="100%" height="150" style="display:block; margin:15px auto; max-width:250px;">
            <polygon points="40,120 180,120 120,40 40,40" fill="rgba(234,179,8,0.1)" stroke="#0f172a" stroke-width="2"/>
            <line x1="120" y1="40" x2="120" y2="120" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/> <polyline points="40,110 50,110 50,120" fill="none" stroke="#0f172a" stroke-width="1.5"/>
            <polyline points="110,120 110,110 120,110" fill="none" stroke="#ef4444" stroke-width="1.5"/>
            <text x="25" y="35" font-family="Arial" font-weight="bold">A</text>
            <text x="125" y="35" font-family="Arial" font-weight="bold">B</text>
            <text x="185" y="135" font-family="Arial" font-weight="bold">C</text>
            <text x="25" y="135" font-family="Arial" font-weight="bold">D</text>
            <text x="125" y="135" font-family="Arial" font-weight="bold" fill="#ef4444">E</text>
            <text x="80" y="30" font-family="Arial" font-size="12">8</text>
            <text x="160" y="75" font-family="Arial" font-size="12">10</text>
            <text x="150" y="115" font-family="Arial" font-size="11">50°</text>
        </svg>
        נוריד גובה מקודקוד B לבסיס התחתון (נקודה E).<br>
        א. מצאו את אורך הגובה BE (שהוא גם אורך הצלע AD).<br>
        ב. מצאו את אורך הקטע CE.<br>
        ג. חשבו את שטח הטרפז כולו.`,
        options: [
            "א. 7.66 | ב. 6.43 | ג. 85.86",
            "א. 6.43 | ב. 7.66 | ג. 74.50",
            "א. 7.66 | ב. 6.43 | ג. 61.28",
            "א. 8 | ב. 6 | ג. 88"
        ],
        correctAnswer: 0,
        hint: "במשולש ישר הזווית שנוצר (BEC), השתמשו בסינוס למציאת הגובה מול הזווית, ובקוסינוס למציאת הבסיס שליד הזווית. הבסיס התחתון של הטרפז כולו מורכב מ-AB ועוד CE.",
        solution_steps: [
            { verbal_explanation: "סעיף א': נתמקד במשולש ישר הזווית שנוצר מימין. הגובה נמצא מול הזווית הנתונה, ולכן נשתמש בפונקציית סינוס.", math_expression: "sin(50°) = BE / 10 ➔ BE = 10 × sin(50°) ≈ 7.66" },
            { verbal_explanation: "סעיף ב': הקטע התחתון נמצא ליד הזווית, ולכן נשתמש בפונקציית קוסינוס במשולש זה.", math_expression: "cos(50°) = CE / 10 ➔ CE = 10 × cos(50°) ≈ 6.43" },
            { verbal_explanation: "סעיף ג': למציאת שטח הטרפז, עלינו לדעת את אורך הבסיס התחתון כולו. הוא שווה לבסיס העליון (המקביל למלבן שנוצר) ועוד הקטע שחישבנו.", math_expression: "CD = 8 + 6.43 = 14.43" },
            { verbal_explanation: "נציב בנוסחת שטח טרפז: סכום הבסיסים כפול הגובה, חלקי שתיים.", math_expression: "S = ((8 + 14.43) × 7.66) / 2" },
            { verbal_explanation: "נבצע את החישוב הסופי.", math_expression: "S = (22.43 × 7.66) / 2 ≈ 171.81 / 2 ≈ 85.9" }
        ],
        final_answer: "א. 7.66 | ב. 6.43 | ג. 85.86"
    },

    // שאלה 6 - חדו"א (בעיית קיצון גיאומטרית) - מבוסס קיץ 2019
    {
        topic: "bagrut_35471",
        subTopic: "חדו\"א בסיסי",
        question_text: `<strong>מתוך בגרות קיץ 2019 (בעיות קיצון):</strong><br>
        במערכת צירים נתונה הפרבולה <span dir="ltr">y = 9 - x²</span> הנמצאת ברביע הראשון.<br>
        חסמו מלבן מתחת לפרבולה, כך שצלעו האחת מונחת על ציר ה-x, קודקוד אחד בראשית הצירים (0,0), וקודקוד נגדי מונח בדיוק על גרף הפרבולה בנקודה <span dir="ltr">(x, y)</span>.<br>
        <svg viewBox="0 0 250 200" width="100%" height="150" style="display:block; margin:15px auto; max-width:200px;">
            <line x1="20" y1="160" x2="230" y2="160" stroke="#94a3b8" stroke-width="2"/> <line x1="40" y1="20" x2="40" y2="180" stroke="#94a3b8" stroke-width="2"/> <path d="M 40,40 Q 140,40 180,160" fill="none" stroke="#ef4444" stroke-width="2"/> <rect x="40" y="80" width="80" height="80" fill="rgba(59,130,246,0.2)" stroke="#0f172a" stroke-width="2"/>
            <circle cx="120" cy="80" r="4" fill="#0f172a"/>
            <text x="130" y="75" font-family="Arial" font-weight="bold">(x, y)</text>
        </svg>
        א. הביעו את שטח המלבן כפונקציה של המשתנה האופקי x.<br>
        ב. מצאו את הערך של x שעבורו שטח המלבן הוא <strong>מקסימלי</strong>.<br>
        ג. מהו השטח המקסימלי?`,
        options: [
            "א. S = 9x - x³ | ב. x = 1.732 (שורש 3) | ג. 10.39 (12 שורש 3 חלקי 2 - שגיאת עיגול, התשובה המדויקת היא 10.39)",
            "א. S = 9x - x³ | ב. x = 1.732 (שורש 3) | ג. 10.39",
            "א. S = 18x - 2x³ | ב. x = 3 | ג. 0",
            "א. S = 9 - x² | ב. x = 1 | ג. 8"
        ],
        correctAnswer: 1,
        hint: "בסיס המלבן הוא איקס, וגובהו הוא ערך הפונקציה (תשע פחות איקס בריבוע). שטח מלבן הוא בסיס כפול גובה. גזרו את פונקציית השטח והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "סעיף א': רוחב המלבן הוא ערך המשתנה הראשון, וגובהו הוא ערך המשתנה השני, כלומר משוואת הפרבולה.", math_expression: "Width = x , Height = 9 - x²" },
            { verbal_explanation: "נכפיל אותם כדי ליצור את פונקציית המטרה של השטח.", math_expression: "S(x) = x(9 - x²) = 9x - x³" },
            { verbal_explanation: "סעיף ב': נגזור את פונקציית השטח ונשווה לאפס למציאת נקודת קיצון מקסימלית.", math_expression: "S'(x) = 9 - 3x² = 0" },
            { verbal_explanation: "נפתור את המשוואה. נבחר רק את התשובה החיובית כיוון שאנו ברביע הראשון.", math_expression: "3x² = 9 ➔ x² = 3 ➔ x = √3 ≈ 1.732" },
            { verbal_explanation: "סעיף ג': נציב את הערך שמצאנו בפונקציית השטח המקורית כדי לחשב את גודלו המקסימלי.", math_expression: "S(√3) = 9(√3) - (√3)³ = 9√3 - 3√3 = 6√3 ≈ 10.39" }
        ],
        final_answer: "א. S = 9x - x³ | ב. x = 1.732 (שורש 3) | ג. 10.39"
    },

    // שאלה 7 - גאומטריה אנליטית (משולש ישר זווית) - מבוסס חורף 2022
    {
        topic: "bagrut_35471",
        subTopic: "גאומטריה אנליטית",
        question_text: `<strong>מתוך בגרות חורף 2022:</strong><br>
        במערכת צירים נתונות שתי נקודות:<br>
        <span dir="ltr" style="font-weight:bold;">A(2, 5) , B(8, 1)</span><br>
        הנקודה C נמצאת על ציר ה-x (כלומר מן הצורה (x, 0)).<br>
        ידוע כי הזווית ACB היא זווית ישרה (90 מעלות).<br>
        מצאו את שתי האפשרויות לשיעורי הנקודה C.`,
        options: [
            "C(3, 0) או C(7, 0)",
            "C(4, 0) או C(6, 0)",
            "C(2, 0) או C(8, 0)",
            "C(5, 0) בלבד"
        ],
        correctAnswer: 0,
        hint: "מכיוון שהזווית ב-C ישרה, הישרים AC ו-BC מאונכים זה לזה. לכן מכפלת השיפועים שלהם שווה למינוס אחת. הרכיבו שני ביטויי שיפועים עם הנעלם איקס, כפלו אותם והשוו למינוס אחת.",
        solution_steps: [
            { verbal_explanation: "נבנה ביטוי לשיפוע הקטע הראשון בעזרת הנעלם של הנקודה המונחת על הציר האופקי.", math_expression: "m1 = (5 - 0) / (2 - x) = 5 / (2 - x)" },
            { verbal_explanation: "נבנה ביטוי שני לשיפוע הקטע השני.", math_expression: "m2 = (1 - 0) / (8 - x) = 1 / (8 - x)" },
            { verbal_explanation: "מאחר והישרים מאונכים, מכפלת השיפועים חייבת להיות שווה למינוס אחד חוקי.", math_expression: "(5 / (2 - x)) × (1 / (8 - x)) = -1" },
            { verbal_explanation: "נכפול מונים ונכפול מכנים.", math_expression: "5 / ((2 - x)(8 - x)) = -1" },
            { verbal_explanation: "נכפול במכנה המשותף ונפתח סוגריים ליצירת משוואה ריבועית.", math_expression: "5 = -(16 - 2x - 8x + x²) ➔ 5 = -16 + 10x - x²" },
            { verbal_explanation: "נעביר אגפים, נסדר ונפתור את המשוואה.", math_expression: "x² - 10x + 21 = 0 ➔ (x - 3)(x - 7) = 0 ➔ x1 = 3 , x2 = 7" }
        ],
        final_answer: "C(3, 0) או C(7, 0)"
    },

    // שאלה 8 - חדו"א (חקירת פולינום) - מבוסס קיץ 2021
    {
        topic: "bagrut_35471",
        subTopic: "חדו\"א בסיסי",
        question_text: `<strong>מתוך בגרות קיץ 2021 (חקירת פולינום):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">f(x) = x³ - 6x² + 9x</div>
        א. מצאו את נקודות החיתוך של גרף הפונקציה עם ציר ה-x.<br>
        ב. מצאו את נקודות הקיצון של הפונקציה וקבעו את סוגן.`,
        options: [
            "א. (0,0) , (3,0) | ב. (1,4) מקסימום , (3,0) מינימום",
            "א. (0,0) , (-3,0) | ב. (1,-4) מינימום , (3,0) מקסימום",
            "א. (0,0) , (3,0) | ב. (1,4) מינימום , (3,0) מקסימום",
            "א. אין חיתוך | ב. (1,4) מקסימום , (3,0) מינימום"
        ],
        correctAnswer: 0,
        hint: "לחיתוך צירים, השוו לאפס והוציאו איקס כגורם משותף, ואז פתרו משוואה ריבועית. לקיצון, גזרו את הפונקציה, השוו לאפס, ומצאו את ערכי ה-x. הציבו חזרה למציאת ה-y.",
        solution_steps: [
            { verbal_explanation: "סעיף א': למציאת חיתוך אופקי נשווה לאפס, נוציא גורם משותף, ונשתמש בנוסחת כפל מקוצר.", math_expression: "x³ - 6x² + 9x = 0 ➔ x(x² - 6x + 9) = 0 ➔ x(x - 3)² = 0" },
            { verbal_explanation: "מהמשוואה עולים שני פתרונות ברורים לחיתוך הציר.", math_expression: "x1 = 0 ➔ (0,0) <br><br> x2 = 3 ➔ (3,0)" },
            { verbal_explanation: "סעיף ב': נגזור את הפונקציה לפי חוקי חזקות בסיסיים ונשווה לאפס.", math_expression: "f'(x) = 3x² - 12x + 9 = 0" },
            { verbal_explanation: "נחלק בשלוש ונפתור בעזרת טרינום את המשוואה המפושטת.", math_expression: "x² - 4x + 3 = 0 ➔ (x - 1)(x - 3) = 0 ➔ x = 1 , x = 3" },
            { verbal_explanation: "נציב בפונקציה המקורית כדי למצוא גבהים ולקבוע סוג (על ידי הצבה בנגזרת שנייה או טבלה).", math_expression: "f(1) = 1 - 6 + 9 = 4 ➔ (1,4) Max <br><br> f(3) = 0 ➔ (3,0) Min" }
        ],
        final_answer: "א. (0,0) , (3,0) | ב. (1,4) מקסימום , (3,0) מינימום"
    },

    // שאלה 9 - חדו"א (משיק לגרף הפונקציה) - מבוסס חורף 2020
    {
        topic: "bagrut_35471",
        subTopic: "חדו\"א בסיסי",
        question_text: `<strong>מתוך בגרות חורף 2020:</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">f(x) = x² - 8x + 12</div>
        מעבירים ישר המשיק לגרף הפונקציה בנקודה שבה <span dir="ltr">x = 5</span>.<br>
        א. מצאו את שיעור ה-y של נקודת ההשקה.<br>
        ב. מצאו את שיפוע המשיק בנקודה זו.<br>
        ג. מצאו את משוואת הישר המשיק.`,
        options: [
            "א. -3 | ב. 2 | ג. y = 2x - 13",
            "א. -3 | ב. -2 | ג. y = -2x + 7",
            "א. 3 | ב. 2 | ג. y = 2x - 7",
            "א. 12 | ב. 2 | ג. y = 2x + 2"
        ],
        correctAnswer: 0,
        hint: "הציבו את האיקס בפונקציה כדי למצוא את נקודת ההשקה השלמה. גזרו את הפונקציה והציבו את אותו האיקס בנגזרת כדי למצוא את שיפוע המשיק. לבסוף, הרכיבו משוואת ישר.",
        solution_steps: [
            { verbal_explanation: "סעיף א': נציב את הערך חמש בפונקציה המקורית כדי לחשב את הגובה (נקודת ההשקה).", math_expression: "f(5) = 5² - 8(5) + 12 = 25 - 40 + 12 = -3 ➔ Point(5, -3)" },
            { verbal_explanation: "סעיף ב': נגזור את הפונקציה לפי הכללים הרגילים.", math_expression: "f'(x) = 2x - 8" },
            { verbal_explanation: "נציב את הערך חמש בנגזרת לקבלת השיפוע בנקודה זו ממש.", math_expression: "m = f'(5) = 2(5) - 8 = 10 - 8 = 2" },
            { verbal_explanation: "סעיף ג': נרכיב משוואת ישר לפי השיפוע והנקודה.", math_expression: "y - (-3) = 2(x - 5) ➔ y + 3 = 2x - 10" },
            { verbal_explanation: "נעביר אגף לסידור המשוואה.", math_expression: "y = 2x - 13" }
        ],
        final_answer: "א. -3 | ב. 2 | ג. y = 2x - 13"
    },

    // שאלה 10 - גאומטריה (משפט תאלס ויחס שטחים) - מבוסס קיץ 2019
    {
        topic: "bagrut_35471",
        subTopic: "גאומטריה אוקלידית",
        question_text: `<strong>מתוך בגרות קיץ 2019 (פרופורציה ודמיון):</strong><br>
        במשולש ABC, העבירו קטע DE המקביל לצלע הבסיס BC.<br>
        נתון כי:<br>
        <span dir="ltr">AD = 4 , DB = 6 , DE = 5</span><br>
        <svg viewBox="0 0 250 200" width="100%" height="180" style="display:block; margin:15px auto; max-width:220px;">
            <polygon points="125,20 40,180 210,180" fill="rgba(234,179,8,0.1)" stroke="#0f172a" stroke-width="2"/>
            <line x1="91" y1="84" x2="159" y2="84" stroke="#ef4444" stroke-width="2"/> <text x="120" y="15" font-family="Arial" font-weight="bold">A</text>
            <text x="25" y="185" font-family="Arial" font-weight="bold">B</text>
            <text x="215" y="185" font-family="Arial" font-weight="bold">C</text>
            <text x="75" y="80" font-family="Arial" font-weight="bold" fill="#ef4444">D</text>
            <text x="165" y="80" font-family="Arial" font-weight="bold" fill="#ef4444">E</text>
        </svg>
        א. חשבו את אורך הצלע BC (היעזרו במשפט תאלס המורחב / דמיון משולשים).<br>
        ב. מהו יחס השטחים בין המשולש הקטן (ADE) למשולש הגדול (ABC)?`,
        options: [
            "א. 12.5 | ב. 0.16 (או 16/100)",
            "א. 15 | ב. 0.4",
            "א. 7.5 | ב. 0.16",
            "א. 12.5 | ב. 0.4"
        ],
        correctAnswer: 0,
        hint: "סעיף א': היחס בין הצלע הקטנה (AD) לצלע הגדולה כולה (AB, שהיא 10) שווה ליחס בין הבסיס הקטן (DE) לבסיס הגדול (BC). סעיף ב': יחס שטחים של משולשים דומים שווה לריבוע יחס הצלעות.",
        solution_steps: [
            { verbal_explanation: "סעיף א': נחשב את אורכה הכולל של הצלע הגדולה השמאלית.", math_expression: "AB = AD + DB = 4 + 6 = 10" },
            { verbal_explanation: "לפי משפט תאלס המורחב (דמיון משולשים), היחס בין הצלעות נשמר גם בבסיסים.", math_expression: "AD / AB = DE / BC ➔ 4 / 10 = 5 / BC" },
            { verbal_explanation: "נפתור את המשוואה בכפל בהצלבה.", math_expression: "4 × BC = 50 ➔ BC = 12.5" },
            { verbal_explanation: "סעיף ב': יחס השטחים של משולשים דומים שווה לריבוע יחס הצלעות (יחס הדמיון).", math_expression: "Ratio = (AD / AB)² = (4 / 10)²" },
            { verbal_explanation: "נחשב את הריבוע לקבלת יחס השטחים המדויק.", math_expression: "Ratio = (0.4)² = 0.16" }
        ],
        final_answer: "א. 12.5 | ב. 0.16 (או 16/100)"
    }, 
    // הכנה לבגרות 35471 (4 יחידות) | פעימה 2 (10 שאלות רב-שלביות נוספות)
    // ========================================================================
    
    // שאלה 11 - טריגונומטריה במרחב (מבוסס קיץ 2023)
    {
        topic: "bagrut_35471",
        subTopic: "טריגונומטריה",
        question_text: `<strong>מתוך בגרות קיץ 2023 (תיבה במרחב):</strong><br>
        נתונה תיבה ABCD A'B'C'D' שבסיסה ABCD הוא מלבן.<br>
        אורכי צלעות הבסיס הם: <span dir="ltr">AB = 12</span>, <span dir="ltr">AD = 5</span>.<br>
        הזווית שבין אלכסון התיבה AC' לבין בסיס התיבה היא 40°.<br>
        <svg viewBox="0 0 300 250" width="100%" height="220" style="display:block; margin:15px auto; max-width:280px;">
            <polygon points="100,70 200,70 200,170 100,170" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
            <polygon points="60,110 160,110 160,210 60,210" fill="rgba(234,179,8,0.05)" stroke="#0f172a" stroke-width="2"/>
            <line x1="60" y1="110" x2="100" y2="70" stroke="#0f172a" stroke-width="2"/>
            <line x1="160" y1="110" x2="200" y2="70" stroke="#0f172a" stroke-width="2"/>
            <line x1="160" y1="210" x2="200" y2="170" stroke="#0f172a" stroke-width="2"/>
            <line x1="60" y1="210" x2="100" y2="170" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
            <line x1="60" y1="210" x2="200" y2="170" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
            <line x1="60" y1="210" x2="200" y2="70" stroke="#3b82f6" stroke-width="2"/>
            <line x1="200" y1="170" x2="200" y2="70" stroke="#ef4444" stroke-width="2"/>
            <text x="45" y="115" font-family="Arial" font-style="italic">D'</text>
            <text x="165" y="115" font-family="Arial" font-style="italic">C'</text>
            <text x="205" y="75" font-family="Arial" font-style="italic">B'</text>
            <text x="45" y="215" font-family="Arial" font-style="italic">D</text>
            <text x="165" y="215" font-family="Arial" font-style="italic">C</text>
            <text x="205" y="175" font-family="Arial" font-style="italic">B</text>
            <text x="105" y="225" font-family="Arial" font-weight="bold">12</text>
            <text x="185" y="200" font-family="Arial" font-weight="bold">5</text>
        </svg>
        א. חשבו את אורך אלכסון הבסיס AC.<br>
        ב. חשבו את גובה התיבה CC'.<br>
        ג. חשבו את נפח התיבה.`,
        options: [
            "א. 13 | ב. 10.91 | ג. 654.6",
            "א. 17 | ב. 14.26 | ג. 855.6",
            "א. 13 | ב. 8.35 | ג. 501",
            "א. 12 | ב. 10.91 | ג. 654.6"
        ],
        correctAnswer: 0,
        hint: "היעזרו במשפט פיתגורס על הבסיס (שהוא מלבן) למציאת האלכסון שלו. במשולש המרחבי שנוצר (ACC'), אלכסון הבסיס הוא הניצב שליד הזווית 40°, והגובה הוא הניצב שמול. השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "סעיף א': בסיס התיבה הוא מלבן, לכן המשולש ABC ישר זווית. נחשב את האלכסון שלו באמצעות פיתגורס.", math_expression: "AC² = 12² + 5²" },
            { verbal_explanation: "נשלים את חישוב האלכסון בבסיס.", math_expression: "AC = √(144 + 25) = √169 = 13" },
            { verbal_explanation: "סעיף ב': נתבונן במשולש המרחבי הישר-זווית ACC'. גובה התיבה נמצא מול הזווית, ואלכסון הבסיס שמצאנו לידה.", math_expression: "tan(40°) = CC' / 13" },
            { verbal_explanation: "נחלץ את הגובה המבוקש על ידי כפל אלכסוני.", math_expression: "CC' = 13 × tan(40°) ≈ 10.91" },
            { verbal_explanation: "סעיף ג': נפח תיבה מחושב על ידי הכפלת שטח הבסיס המלבני בגובה שמצאנו הרגע.", math_expression: "V = 12 × 5 × 10.91 = 60 × 10.91 = 654.6" }
        ],
        final_answer: "א. 13 | ב. 10.91 | ג. 654.6"
    },

    // שאלה 12 - בעיות מילוליות (אחוזים) - מבוסס חורף 2020
    {
        topic: "bagrut_35471",
        subTopic: "בעיות מילוליות",
        question_text: `<strong>מתוך בגרות חורף 2020 (בעיות אחוזים):</strong><br>
        מחירו המקורי של מחשב היה 4000 שקלים.<br>
        המחיר הועלה באחוז מסוים.<br>
        לאחר ההעלאה, מחירו החדש של המחשב הוזל ב-15%.<br>
        מחירו הסופי של המחשב, לאחר ההוזלה, היה 4080 שקלים.<br>
        א. בכמה שקלים התייקר המחשב לפני ההוזלה? (מצאו את המחיר לפני ההוזלה).<br>
        ב. בכמה אחוזים הועלה מחירו המקורי של המחשב בפעם הראשונה?`,
        options: [
            "א. 4800 (התייקר ב-800) | ב. 20%",
            "א. 4600 (התייקר ב-600) | ב. 15%",
            "א. 4800 (התייקר ב-800) | ב. 25%",
            "א. 5000 (התייקר ב-1000) | ב. 20%"
        ],
        correctAnswer: 0,
        hint: "התחילו מהסוף: המחיר אחרי ההוזלה מהווה 85% מהמחיר שהיה קודם. חלצו את המחיר שקדם להוזלה. לאחר מכן, חפשו את אחוז העלייה מהמחיר ההתחלתי (4000).",
        solution_steps: [
            { verbal_explanation: "סעיף א': מחירו הסופי מהווה 85% ממחירו לפני ההוזלה. נרכיב משוואה פשוטה.", math_expression: "x × 0.85 = 4080" },
            { verbal_explanation: "נחלק ב-0.85 כדי למצוא את מחירו לפני ההוזלה.", math_expression: "x = 4080 / 0.85 = 4800" },
            { verbal_explanation: "המחיר עלה מ-4000 ל-4800, כלומר התייקרות של 800 שקלים.", math_expression: "4800 - 4000 = 800" },
            { verbal_explanation: "סעיף ב': נחשב איזה אחוז מהווים 800 השקלים הללו מתוך המחיר המקורי של 4000.", math_expression: "(800 / 4000) × 100 = 20%" }
        ],
        final_answer: "א. 4800 (התייקר ב-800) | ב. 20%"
    },

    // שאלה 13 - חדו"א (פונקציית שורש ופרמטר) - מבוסס קיץ 2021
    {
        topic: "bagrut_35471",
        subTopic: "חדו\"א בסיסי",
        question_text: `<strong>מתוך בגרות קיץ 2021 (חקירת פונקציית שורש עם פרמטר):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">f(x) = x√(x - a)</div>
        ידוע כי שיפוע המשיק לגרף הפונקציה בנקודה שבה <span dir="ltr">x = 5</span> הוא 3.5.<br>
        א. מצאו את ערכו של הפרמטר a.<br>
        ב. לאחר שמצאתם את a, מצאו את תחום ההגדרה של הפונקציה.<br>
        ג. האם יש לפונקציה נקודות קיצון פנימיות?`,
        options: [
            "א. a = 4 | ב. x ≥ 4 | ג. אין נקודות קיצון פנימיות",
            "א. a = 4 | ב. x ≥ 4 | ג. יש מקסימום",
            "א. a = 1 | ב. x ≥ 1 | ג. אין נקודות קיצון פנימיות",
            "א. a = 3 | ב. x ≥ 3 | ג. יש מינימום"
        ],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה בעזרת נגזרת מכפלה. נגזרת השורש היא 1 חלקי (פעמיים השורש). הציבו 5 במקום איקס והשוו ל-3.5 כדי למצוא את a.",
        solution_steps: [
            { verbal_explanation: "סעיף א': נגזור את הפונקציה לפי כלל המכפלה, ונציב את המידע הידוע.", math_expression: "f'(x) = 1 × √(x - a) + x × (1 / (2√(x - a)))" },
            { verbal_explanation: "נציב את ערך האיקס ואת ערך הנגזרת שניתנו לנו, ונחשב.", math_expression: "3.5 = √(5 - a) + 5 / (2√(5 - a))" },
            { verbal_explanation: "נסמן את השורש כמשתנה עזר פשוט ונפתור את המשוואה.", math_expression: "t = √(5 - a) ➔ 3.5 = t + 2.5/t" },
            { verbal_explanation: "נכפול במשתנה העזר ונקבל משוואה ריבועית.", math_expression: "t² - 3.5t + 2.5 = 0 ➔ t1 = 2.5 , t2 = 1" },
            { verbal_explanation: "נחזיר את ההצבה לשורש עבור t=1. נגלה שהפרמטר שווה 4.", math_expression: "√(5 - a) = 1 ➔ 5 - a = 1 ➔ a = 4" },
            { verbal_explanation: "סעיף ב': תחום הגדרה של פונקציית שורש דורש שהביטוי בתוכה יהיה אי-שלילי.", math_expression: "x - 4 ≥ 0 ➔ x ≥ 4" },
            { verbal_explanation: "סעיף ג': לאחר הצבת הפרמטר בנגזרת, נגלה כי היא חיובית תמיד בתחום ההגדרה. לכן אין נקודות קיצון פנימיות והפונקציה עולה.", math_expression: "f'(x) > 0 for all x > 4" }
        ],
        final_answer: "א. a = 4 | ב. x ≥ 4 | ג. אין נקודות קיצון פנימיות"
    },

    // שאלה 14 - גאומטריה (מעגל ומקבילית) - מבוסס חורף 2023
    {
        topic: "bagrut_35471",
        subTopic: "גאומטריה אוקלידית",
        question_text: `<strong>מתוך בגרות חורף 2023:</strong><br>
        במערכת צירים נתון מעגל שמשוואתו:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(x - 5)² + (y - 4)² = 20</div>
        המעגל עובר דרך ראשית הצירים <span dir="ltr">O(0,0)</span>.<br>
        הנקודה A מונחת על המעגל ברביע הראשון כך ש-OA הוא קוטר המעגל.<br>
        א. מצאו את שיעורי הנקודה A.<br>
        ב. ישר משיק למעגל בנקודה O. מצאו את משוואתו.`,
        options: [
            "א. A(10, 8) | ב. y = (-5/4)x",
            "א. A(5, 4) | ב. y = (4/5)x",
            "א. A(10, 8) | ב. y = (4/5)x",
            "א. A(10, 10) | ב. y = (-5/4)x + 20"
        ],
        correctAnswer: 0,
        hint: "נקודת המרכז היא אמצע הקוטר בין ראשית הצירים (0,0) לנקודה A. היעזרו בנוסחת אמצע קטע למציאת A. שיפוע המשיק בראשית הצירים מאונך לשיפוע הרדיוס המחבר את המרכז והראשית.",
        solution_steps: [
            { verbal_explanation: "סעיף א': ממרכז המעגל נחלץ את הנקודה M.", math_expression: "M(5, 4)" },
            { verbal_explanation: "מרכז המעגל הוא אמצע הקוטר שמחבר את O ו-A. לכן שיעורי A הם כפולים משיעורי המרכז (כיוון שהקצה השני הוא אפס).", math_expression: "xA = 2 × 5 - 0 = 10 , yA = 2 × 4 - 0 = 8 ➔ A(10, 8)" },
            { verbal_explanation: "סעיף ב': נחשב תחילה את שיפוע הרדיוס המקשר את המרכז לראשית.", math_expression: "m1 = (4 - 0) / (5 - 0) = 4/5" },
            { verbal_explanation: "המשיק מאונך לרדיוס, ולכן שיפועו נגדי והופכי.", math_expression: "m2 = -5/4" },
            { verbal_explanation: "המשיק עובר בראשית הצירים, ולכן אין לו מספר חופשי.", math_expression: "y - 0 = (-5/4)(x - 0) ➔ y = (-5/4)x" }
        ],
        final_answer: "א. A(10, 8) | ב. y = (-5/4)x"
    },

    // שאלה 15 - חדו"א (שטח מוגבל ע"י פונקציה) - מבוסס קיץ 2022
    {
        topic: "bagrut_35471",
        subTopic: "חדו\"א בסיסי",
        question_text: `<strong>מתוך בגרות קיץ 2022 (חישוב שטחים בעזרת אינטגרל מסוים):</strong><br>
        נתונה הפונקציה: <span dir="ltr">f(x) = -x² + 6x - 5</span>.<br>
        א. מצאו את נקודות החיתוך של הפונקציה עם ציר ה-x.<br>
        ב. חשבו את השטח המוגבל על ידי גרף הפונקציה, ציר ה-x, והישרים <span dir="ltr">x = 2</span> ו- <span dir="ltr">x = 4</span>.<br>
        <svg viewBox="0 0 250 150" width="100%" height="150" style="display:block; margin:15px auto; max-width:200px;">
            <line x1="20" y1="120" x2="230" y2="120" stroke="#94a3b8" stroke-width="2"/> <path d="M 40,120 Q 125,20 210,120" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <rect x="90" y="55" width="70" height="65" fill="rgba(34,197,94,0.3)" stroke="none"/>
            <line x1="90" y1="55" x2="90" y2="120" stroke="#0f172a" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="160" y1="55" x2="160" y2="120" stroke="#0f172a" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="85" y="135" font-family="Arial" font-size="10">2</text>
            <text x="155" y="135" font-family="Arial" font-size="10">4</text>
        </svg>`,
        options: [
            "א. (1,0) , (5,0) | ב. 7.33 (או 22/3)",
            "א. (1,0) , (5,0) | ב. 10.66 (או 32/3)",
            "א. (2,0) , (4,0) | ב. 7.33",
            "א. (-1,0) , (-5,0) | ב. 5"
        ],
        correctAnswer: 0,
        hint: "לחישוב חיתוך עם ציר x פתרו משוואה ריבועית רגילה. לשטח, חשבו את האינטגרל של הפונקציה בין 2 ל-4.",
        solution_steps: [
            { verbal_explanation: "סעיף א': נשווה את הפונקציה הריבועית לאפס כדי למצוא את החיתוכים.", math_expression: "-x² + 6x - 5 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום (לאחר הכפלה במינוס אחת) ונמצא את השורשים.", math_expression: "x² - 6x + 5 = 0 ➔ (x - 1)(x - 5) = 0 ➔ x1 = 1 , x2 = 5" },
            { verbal_explanation: "סעיף ב': נבנה אינטגרל מסוים לחישוב השטח המבוקש שבין הפונקציה (שנמצאת מעל הציר) לציר האופקי.", math_expression: "S = ∫(-x² + 6x - 5)dx" },
            { verbal_explanation: "נמצא את הפונקציה הקדומה על ידי העלאת החזקות וחלוקה בהן.", math_expression: "F(x) = -x³/3 + 3x² - 5x" },
            { verbal_explanation: "נציב את הגבולות, קודם את העליון (ארבע) ואז את התחתון (שתיים), ונחסר ביניהם.", math_expression: "F(4) = -64/3 + 48 - 20 = 6.66... <br><br> F(2) = -8/3 + 12 - 10 = -0.66..." },
            { verbal_explanation: "נחשב את ההפרש הנותן את השטח הכולל.", math_expression: "S = 6.66... - (-0.66...) = 7.33... = 22/3" }
        ],
        final_answer: "א. (1,0) , (5,0) | ב. 7.33 (או 22/3)"
    },

    // שאלה 16 - אלגברה (מערכת משוואות ובעיות תנועה) - מבוסס קיץ 2018
    {
        topic: "bagrut_35471",
        subTopic: "אלגברה ושברים אלגבריים",
        question_text: `<strong>מתוך בגרות קיץ 2018:</strong><br>
        שתי רכבות יצאו משני קצותיו של מסלול שאורכו הכולל 400 ק"מ, ונסעו זו לקראת זו באותו הזמן.<br>
        הן נפגשו לאחר 2.5 שעות של נסיעה רציפה.<br>
        ידוע כי מהירות הרכבת הראשונה גדולה ב-20 קמ"ש ממהירות הרכבת השנייה.<br>
        א. מהי מהירות כל אחת מהרכבות?<br>
        ב. כמה ק"מ עברה הרכבת המהירה עד לנקודת המפגש?`,
        options: [
            "א. 90 ו-70 | ב. 225 ק\"מ",
            "א. 100 ו-80 | ב. 250 ק\"מ",
            "א. 80 ו-60 | ב. 200 ק\"מ",
            "א. 90 ו-70 | ב. 175 ק\"מ"
        ],
        correctAnswer: 0,
        hint: "המרחק שהן עברו יחד שווה ל-400. הזמן הוא 2.5 שעות לכל אחת. מהירות אחת היא איקס והשנייה איקס פלוס עשרים. הרכיבו משוואה פשוטה של מרחקים.",
        solution_steps: [
            { verbal_explanation: "סעיף א': נגדיר משתנים למהירויות השונות של הרכבות.", math_expression: "v1 = x , v2 = x + 20" },
            { verbal_explanation: "סך המרחקים שעברו שתי הרכבות יחד בפרק הזמן הנתון שווה למרחק הכולל בין הערים.", math_expression: "2.5 × x + 2.5 × (x + 20) = 400" },
            { verbal_explanation: "נפתח סוגריים ונסדר את המשוואה הלינארית.", math_expression: "2.5x + 2.5x + 50 = 400 ➔ 5x = 350" },
            { verbal_explanation: "נחלק בחמש כדי למצוא את המהירות הבסיסית האיטית יותר.", math_expression: "x = 70 ➔ v1 = 70 , v2 = 90" },
            { verbal_explanation: "סעיף ב': נחשב את המרחק שעברה הרכבת המהירה בלבד על ידי הכפלת מהירותה בזמן.", math_expression: "Distance = 90 × 2.5 = 225" }
        ],
        final_answer: "א. 90 ו-70 | ב. 225 ק\"מ"
    },

    // שאלה 17 - חדו"א (פונקציית מנה עם פרמטר) - מבוסס חורף 2019
    {
        topic: "bagrut_35471",
        subTopic: "חדו\"א בסיסי",
        question_text: `<strong>מתוך בגרות חורף 2019:</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.3em; margin:10px 0;">
            <div style="display:inline-block; vertical-align:middle;">f(x) = </div>
            <div style="display:inline-block; text-align:center; vertical-align:middle; margin-left:5px;">
                <div style="border-bottom:2px solid #0f172a; padding:0 5px;">ax² - 16</div>
                <div style="padding:0 5px;">x² - 4</div>
            </div>
        </div>
        ידוע כי לפונקציה יש אסימפטוטה אופקית שמשוואתה <span dir="ltr">y = 2</span>.<br>
        א. מצאו את הערך של הפרמטר a.<br>
        ב. מצאו את נקודות החיתוך של הפונקציה עם ציר ה-x.<br>
        ג. מהן האסימפטוטות האנכיות של הפונקציה?`,
        options: [
            "א. a = 2 | ב. (2.82,0) , (-2.82,0) | ג. x = 2 , x = -2",
            "א. a = 1 | ב. (4,0) , (-4,0) | ג. x = 2 , x = -2",
            "א. a = 2 | ב. (4,0) , (-4,0) | ג. x = 4 , x = -4",
            "א. a = 4 | ב. (2,0) , (-2,0) | ג. x = 2 , x = -2"
        ],
        correctAnswer: 0,
        hint: "בפונקציית מנה שבה החזקה הגבוהה במונה ובמכנה זהה (איקס בריבוע), האסימפטוטה האופקית היא יחס המקדמים. חיתוך x מגיע מאיפוס המונה, ואסימפטוטה אנכית מאיפוס המכנה.",
        solution_steps: [
            { verbal_explanation: "סעיף א': מאחר והחזקות המובילות שוות, האסימפטוטה נקבעת על ידי יחס המקדמים הראשיים. אנו משווים יחס זה לנתון בשאלה.", math_expression: "y = a / 1 = 2 ➔ a = 2" },
            { verbal_explanation: "נציב את הפרמטר בפונקציה המקורית לקבלת תמונתה המלאה.", math_expression: "f(x) = (2x² - 16) / (x² - 4)" },
            { verbal_explanation: "סעיף ב': למציאת חיתוך אופקי, נשווה את המונה לאפס ונפתור.", math_expression: "2x² - 16 = 0 ➔ 2x² = 16 ➔ x² = 8" },
            { verbal_explanation: "נוציא שורש לקבלת שתי נקודות החיתוך המבוקשות.", math_expression: "x = ±√8 ≈ ±2.82 ➔ (2.82, 0) , (-2.82, 0)" },
            { verbal_explanation: "סעיף ג': אסימפטוטות אנכיות מתקבלות מנקודות שמאפסות את המכנה אך לא מאפסות את המונה.", math_expression: "x² - 4 = 0 ➔ x² = 4 ➔ x = ±2" }
        ],
        final_answer: "א. a = 2 | ב. (2.82,0) , (-2.82,0) | ג. x = 2 , x = -2"
    },

    // שאלה 18 - טריגונומטריה במשולש ויחסים - מבוסס קיץ 2020
    {
        topic: "bagrut_35471",
        subTopic: "טריגונומטריה",
        question_text: `<strong>מתוך בגרות קיץ 2020:</strong><br>
        משולש ABC הוא משולש ישר זווית (זווית C ישרה).<br>
        אורך הניצב BC הוא 8 ס"מ. גודל הזווית B הוא 35 מעלות.<br>
        א. מצאו את אורך הניצב AC.<br>
        ב. מצאו את אורך היתר AB (השתמשו במשפט פיתגורס או בפונקציה טריגונומטרית).<br>
        ג. חשבו את שטח המשולש.`,
        options: [
            "א. 5.60 | ב. 9.77 | ג. 22.40",
            "א. 11.42 | ב. 13.94 | ג. 45.68",
            "א. 5.60 | ב. 11.42 | ג. 22.40",
            "א. 11.42 | ב. 9.77 | ג. 45.68"
        ],
        correctAnswer: 0,
        hint: "סעיף א: השתמשו בפונקציית הטנגנס. הניצב מול חלקי הניצב ליד. סעיף ב: אפשר להשתמש במשפט פיתגורס או בפונקציית הקוסינוס.",
        solution_steps: [
            { verbal_explanation: "סעיף א': במציאת הניצב שמול הזווית כשהניצב שלידה נתון, נשתמש בפונקציית טנגנס.", math_expression: "tan(35°) = AC / 8 ➔ AC = 8 × tan(35°) ≈ 5.60" },
            { verbal_explanation: "סעיף ב': למציאת היתר, נשתמש בפונקציית קוסינוס עם הניצב והזווית המקורית.", math_expression: "cos(35°) = 8 / AB ➔ AB = 8 / cos(35°) ≈ 9.77" },
            { verbal_explanation: "סעיף ג': נחשב את שטח המשולש על סמך מכפלת שני הניצבים הידועים כעת.", math_expression: "S = (8 × 5.60) / 2 = 44.8 / 2 = 22.40" }
        ],
        final_answer: "א. 5.60 | ב. 9.77 | ג. 22.40"
    },

    // שאלה 19 - מעגל ואליפסה (חיתוך מעגלים) - מבוסס קיץ 2018
    {
        topic: "bagrut_35471",
        subTopic: "גאומטריה אנליטית",
        question_text: `<strong>מתוך בגרות קיץ 2018 (גאומטריה אנליטית):</strong><br>
        נתונים שני מעגלים המשיקים זה לזה מבחוץ.<br>
        משוואת המעגל הראשון: <span dir="ltr">(x - 3)² + (y - 4)² = 25</span><br>
        מרכז המעגל השני נמצא בנקודה <span dir="ltr">M(11, 10)</span>.<br>
        א. מהו המרחק בין מרכזי שני המעגלים?<br>
        ב. מהו הרדיוס של המעגל השני?`,
        options: [
            "א. 10 | ב. 5",
            "א. 100 | ב. 15",
            "א. 8 | ב. 3",
            "א. 14 | ב. 9"
        ],
        correctAnswer: 0,
        hint: "מצאו את מרכז המעגל הראשון (על ידי היפוך הסימנים). חשבו את המרחק בינו לבין המרכז השני בעזרת נוסחת דיסטנס. מכיוון שהם משיקים, המרחק ביניהם שווה לסכום הרדיוסים שלהם.",
        solution_steps: [
            { verbal_explanation: "סעיף א': נחלץ את נקודת המרכז של המעגל הראשון מתוך המשוואה שלו.", math_expression: "M1(3, 4)" },
            { verbal_explanation: "נחשב את המרחק בין שתי נקודות המרכז בעזרת נוסחת המרחק הסטנדרטית.", math_expression: "d = √((11 - 3)² + (10 - 4)²) = √(8² + 6²) = √(64 + 36) = √100 = 10" },
            { verbal_explanation: "סעיף ב': נחלץ את הרדיוס של המעגל הראשון מתוך משוואתו הנתונה.", math_expression: "R1 = √25 = 5" },
            { verbal_explanation: "מאחר והמעגלים משיקים, המרחק בין מרכזיהם שווה בדיוק לחיבור שני הרדיוסים שלהם.", math_expression: "d = R1 + R2 ➔ 10 = 5 + R2 ➔ R2 = 5" }
        ],
        final_answer: "א. 10 | ב. 5"
    },

    // שאלה 20 - חדו"א (בעיית קיצון גיאומטרית מורכבת) - חורף 2021
    {
        topic: "bagrut_35471",
        subTopic: "חדו\"א בסיסי",
        question_text: `<strong>מתוך בגרות חורף 2021 (בעיית אופטימיזציה):</strong><br>
        קבלן צריך לבנות תיבה פתוחה מלמעלה (ללא מכסה עליון) שהבסיס שלה הוא ריבוע.<br>
        נפח התיבה הנדרש הוא 32 מ"ק.<br>
        נסמן את אורך צלע הבסיס ב-x.<br>
        א. הביעו את גובה התיבה כפונקציה של x.<br>
        ב. הביעו את <strong>שטח הפנים הכללי</strong> (הבסיס התחתון + 4 דפנות הצד) כפונקציה של x.<br>
        ג. מהו הערך של x שנותן שטח פנים מינימלי?`,
        options: [
            "א. 32/x² | ב. S = x² + 128/x | ג. x = 4",
            "א. 32/x² | ב. S = 2x² + 128/x | ג. x = 3.17",
            "א. 32/x | ב. S = x² + 128/x² | ג. x = 2",
            "א. 32/x² | ב. S = x² + 32/x | ג. x = 4"
        ],
        correctAnswer: 0,
        hint: "הנפח הוא בסיס כפול גובה, כלומר איקס בריבוע כפול הגובה. חלצו את הגובה. שטח הפנים מורכב מריבוע הבסיס התחתון ועוד ארבעה מלבנים המהווים את הדפנות. גזרו והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "סעיף א': הנפח שווה לבסיס הריבועי מוכפל בגובה. נציב ונבודד את הגובה החסר.", math_expression: "V = x² × h = 32 ➔ h = 32 / x²" },
            { verbal_explanation: "סעיף ב': שטח הפנים כולל את בסיס הריבוע, וארבע פאות צדדיות שהן מלבנים (צלע איקס מוכפלת בגובה).", math_expression: "S(x) = x² + 4(x × h)" },
            { verbal_explanation: "נציב את הגובה שמצאנו אל תוך משוואת שטח הפנים כדי ליצור פונקציה עם משתנה אחד בלבד.", math_expression: "S(x) = x² + 4x(32 / x²) = x² + 128 / x" },
            { verbal_explanation: "סעיף ג': נגזור את פונקציית המטרה לפי הכללים ונשווה לאפס למציאת מינימום.", math_expression: "S'(x) = 2x - 128 / x² = 0" },
            { verbal_explanation: "נכפול במכנה הריבועי כדי לפתור את המשוואה.", math_expression: "2x³ - 128 = 0 ➔ 2x³ = 128 ➔ x³ = 64" },
            { verbal_explanation: "נוציא שורש שלישי למציאת הממד האופטימלי.", math_expression: "x = 4" }
        ],
        final_answer: "א. 32/x² | ב. S = x² + 128/x | ג. x = 4"
    }
];