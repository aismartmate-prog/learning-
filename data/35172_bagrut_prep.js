const questionsDB = [
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות קיץ 2023, מועד א'</strong><br>
        במערכת צירים נתון משולש ABC. קודקוד A מונח על ציר ה-y וקודקוד B מונח על ציר ה-x.<br>
        משוואת הישר AB היא: y = -2x + 8.<br>
        קודקוד C נמצא בנקודה (6, 6).<br>
        <svg viewBox="0 0 220 180" width="100%" height="150" style="display:block; margin:15px auto; max-width:250px; filter:drop-shadow(0 4px 6px rgba(0,0,0,0.1));">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#c5a059;stop-opacity:0.4" />
                    <stop offset="100%" style="stop-color:#0f172a;stop-opacity:0.1" />
                </linearGradient>
            </defs>
            <line x1="20" y1="150" x2="200" y2="150" stroke="#94a3b8" stroke-width="2"/>
            <line x1="40" y1="170" x2="40" y2="20" stroke="#94a3b8" stroke-width="2"/>
            <text x="190" y="170" font-family="Arial" font-size="12" fill="#64748b">x</text>
            <text x="20" y="30" font-family="Arial" font-size="12" fill="#64748b">y</text>
            <polygon points="40,30 100,150 130,60" fill="url(#grad1)" stroke="#0f172a" stroke-width="2"/>
            <circle cx="40" cy="30" r="4" fill="#ef4444"/><text x="25" y="35" font-family="Arial" font-weight="bold">A</text>
            <circle cx="100" cy="150" r="4" fill="#ef4444"/><text x="105" y="165" font-family="Arial" font-weight="bold">B</text>
            <circle cx="130" cy="60" r="4" fill="#ef4444"/><text x="140" y="65" font-family="Arial" font-weight="bold">C</text>
        </svg>
        א. מצאו את שיעורי הנקודות A ו-B.<br>
        ב. חשבו את אורך הקטע AB.`,
        options: [
            "A(0, 8), B(4, 0), אורך AB = √80",
            "A(8, 0), B(0, -4), אורך AB = √80",
            "A(0, 4), B(8, 0), אורך AB = √64",
            "A(0, 8), B(2, 0), אורך AB = √68"
        ],
        correctAnswer: 0,
        hint: "נקודה על ציר ה-y מקיימת x=0. נקודה על ציר ה-x מקיימת y=0. הציבו במשוואת הישר כדי למצוא את הנקודות, ואז השתמשו בנוסחת המרחק.",
        solution_steps: [
            { verbal_explanation: "כדי למצוא את קודקוד A (נקודת החיתוך עם ציר y), נציב x = 0 במשוואת הישר:", math_expression: "y = -2(0) + 8 <br><br> y = 8 <br><br> ➔ A(0, 8)" },
            { verbal_explanation: "כדי למצוא את קודקוד B (נקודת החיתוך עם ציר x), נציב y = 0 במשוואת הישר:", math_expression: "0 = -2x + 8 <br><br> 2x = 8 <br><br> x = 4 <br><br> ➔ B(4, 0)" },
            { verbal_explanation: "כעת, נחשב את אורך הקטע AB באמצעות נוסחת המרחק בין שתי נקודות:", math_expression: "d = √((4 - 0)² + (0 - 8)²) <br><br> d = √(16 + 64) <br><br> d = √80" }
        ],
        final_answer: "A(0, 8), B(4, 0), אורך AB = √80"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות חורף 2022, מועד א'</strong><br>
        במלבן ABCD אורך האלכסון AC הוא 14 ס"מ.<br>
        הזווית בין האלכסון לצלע הארוכה של המלבן (זווית CAB) היא בת 28°.<br>
        <svg viewBox="0 0 250 150" width="100%" height="120" style="display:block; margin:15px auto; max-width:250px;">
            <rect x="30" y="30" width="180" height="90" fill="#f0f9ff" stroke="#3b82f6" stroke-width="2"/>
            <line x1="30" y1="120" x2="210" y2="30" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="15" y="130" font-family="Arial" font-weight="bold">A</text>
            <text x="215" y="130" font-family="Arial" font-weight="bold">B</text>
            <text x="215" y="25" font-family="Arial" font-weight="bold">C</text>
            <text x="15" y="25" font-family="Arial" font-weight="bold">D</text>
            <path d="M 60 120 A 30 30 0 0 0 55 108" fill="none" stroke="#000" stroke-width="1.5"/>
            <text x="65" y="115" font-family="Arial" font-size="12">28°</text>
        </svg>
        א. חשבו את אורך הצלע AB.<br>
        ב. חשבו את היקף המלבן.`,
        options: [
            "AB = 12.36 ס\"מ, היקף = 37.86 ס\"מ",
            "AB = 6.57 ס\"מ, היקף = 25.40 ס\"מ",
            "AB = 14.00 ס\"מ, היקף = 40.00 ס\"מ",
            "AB = 10.50 ס\"מ, היקף = 32.50 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "התבוננו במשולש ישר הזווית ABC. השתמשו בפונקציית Cos לצלע שליד הזווית, ובפונקציית Sin לצלע שמול הזווית.",
        solution_steps: [
            { verbal_explanation: "במשולש ישר זווית ABC, נתון היתר (14) והזווית (28°). למציאת הניצב שליד הזווית (AB), נשתמש בקוסינוס:", math_expression: "cos(28°) = AB / 14 <br><br> AB = 14 × cos(28°) <br><br> AB = 12.36" },
            { verbal_explanation: "כדי למצוא את ההיקף, עלינו למצוא גם את הצלע BC (הניצב מול הזווית). נשתמש בסינוס:", math_expression: "sin(28°) = BC / 14 <br><br> BC = 14 × sin(28°) <br><br> BC = 6.57" },
            { verbal_explanation: "היקף המלבן שווה לפעמיים סכום הצלעות הסמוכות:", math_expression: "P = 2 × (12.36 + 6.57) <br><br> P = 2 × 18.93 <br><br> P = 37.86" }
        ],
        final_answer: "AB = 12.36 ס\"מ, היקף = 37.86 ס\"מ"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות קיץ 2021, מועד ב'</strong><br>
        בסדרה חשבונית האיבר השלישי הוא 17, והאיבר השביעי הוא 33.<br>
        א. מצאו את הפרש הסדרה (d).<br>
        ב. מצאו את האיבר הראשון בסדרה (a₁).<br>
        ג. חשבו את סכום 15 האיברים הראשונים בסדרה.`,
        options: [
            "d = 4, a₁ = 9, S₁₅ = 555",
            "d = 4, a₁ = 5, S₁₅ = 480",
            "d = 3, a₁ = 9, S₁₅ = 500",
            "d = 4, a₁ = 9, S₁₅ = 600"
        ],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת האיבר הכללי של סדרה חשבונית. בנו שתי משוואות, חסרו אחת מהשנייה ומצאו את d.",
        solution_steps: [
            { verbal_explanation: "נבנה שתי משוואות על סמך הנתונים ונוסחת האיבר הכללי:", math_expression: "(1) a₃ = a₁ + 2d = 17 <br> (2) a₇ = a₁ + 6d = 33" },
            { verbal_explanation: "נחסר את המשוואה הראשונה מהשנייה כדי לבודד את ההפרש d:", math_expression: "(a₁ + 6d) - (a₁ + 2d) = 33 - 17 <br><br> 4d = 16 <br><br> d = 4" },
            { verbal_explanation: "נציב את d = 4 באחת המשוואות כדי למצוא את האיבר הראשון:", math_expression: "a₁ + 2(4) = 17 <br><br> a₁ + 8 = 17 <br><br> a₁ = 9" },
            { verbal_explanation: "כעת נשתמש בנוסחת סכום סדרה חשבונית ל-15 איברים:", math_expression: "S₁₅ = [2a₁ + d(n - 1)] × n / 2 <br><br> S₁₅ = [2(9) + 4(14)] × 15 / 2 <br><br> S₁₅ = [18 + 56] × 7.5 <br><br> S₁₅ = 74 × 7.5 = 555" }
        ],
        final_answer: "d = 4, a₁ = 9, S₁₅ = 555"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות חורף 2020, מועד א'</strong><br>
        בכד יש 12 כדורים: 7 כדורים אדומים ו-5 כדורים כחולים.<br>
        מוציאים באקראי כדור אחד מהכד.<br>
        אם הוא אדום, משאירים אותו בחוץ. אם הוא כחול, מחזירים אותו לכד.<br>
        לאחר מכן מוציאים באקראי כדור שני.<br>
        מה ההסתברות ששני הכדורים שהוצאו הם בעלי אותו צבע?`,
        options: [
            "67 / 132",
            "43 / 144",
            "42 / 132",
            "25 / 144"
        ],
        correctAnswer: 0,
        hint: "שרטטו דיאגרמת עץ. שימו לב להבדל בכמות הכדורים בשלב השני: אם הוצא כדור אדום (ללא החזרה), הכמות הכוללת קטנה ב-1.",
        solution_steps: [
            { verbal_explanation: "ההסתברויות להוצאה הראשונה (מתוך 12 כדורים):", math_expression: "P(Red₁) = 7/12 <br><br> P(Blue₁) = 5/12" },
            { verbal_explanation: "אם יצא אדום (לא מוחזר): נותרו בכד 11 כדורים סך הכל (מתוכם 6 אדומים). ההסתברות לאדום שני היא:", math_expression: "P(Red₂ | Red₁) = 6/11" },
            { verbal_explanation: "אם יצא כחול (מוחזר): נותרו בכד 12 כדורים כמו בהתחלה. ההסתברות לכחול שני נשארת:", math_expression: "P(Blue₂ | Blue₁) = 5/12" },
            { verbal_explanation: "ההסתברות לאותו צבע מורכבת מ-(אדום, אדום) או (כחול, כחול). נכפול ונחבר את הענפים:", math_expression: "P = (7/12 × 6/11) + (5/12 × 5/12) <br><br> P = 42/132 + 25/144" },
            { verbal_explanation: "נצמצם שברים ונחבר (מומלץ בעזרת מחשבון):", math_expression: "P = 7/22 + 25/144 <br><br> P = 67/132" }
        ],
        final_answer: "67 / 132"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות קיץ 2019, מועד ב'</strong><br>
        ציוני בחינה ארצית באנגלית מתפלגים נורמלית.<br>
        הציון הממוצע הוא 78, וסטיית התקן היא 6.<br>
        א. מהו אחוז התלמידים שקיבלו ציון בין 72 ל- 84?<br>
        ב. תלמיד מצטיין הוא תלמיד שציונו גבוה מ- 90. אם נבחנו 10,000 תלמידים, כמה תלמידים מצטיינים בערך יש?`,
        options: [
            "א. 68%, ב. 200 תלמידים",
            "א. 34%, ב. 150 תלמידים",
            "א. 68%, ב. 228 תלמידים",
            "א. 50%, ב. 500 תלמידים"
        ],
        correctAnswer: 0,
        hint: "היעזרו בגרף ההתפלגות הנורמלית המופיע בדף הנוסחאות. 72 ו-84 נמצאים במרחק של סטיית תקן אחת מהממוצע.",
        solution_steps: [
            { verbal_explanation: "התחום שבין 72 ל-84 מייצג מרחק של סטיית תקן אחת (6) מכל צד של הממוצע (78).", math_expression: "78 - 6 = 72 <br><br> 78 + 6 = 84" },
            { verbal_explanation: "על פי גרף ההתפלגות הנורמלית, האחוזים במרחק סטיית תקן אחת מכל כיוון הם 19% + 15% = 34%. נכפול ב-2 עבור שני הצדדים:", math_expression: "2 × 34% = 68%" },
            { verbal_explanation: "כדי למצוא ציון מעל 90: המרחק מ-78 ל-90 הוא 12 נקודות, שהן בדיוק 2 סטיות תקן מעל הממוצע.", math_expression: "Z = (90 - 78) / 6 = 2" },
            { verbal_explanation: "השטח שמעל 2 סטיות תקן מורכב משני החלקים הקיצוניים בגרף: 1.5% + 0.5% = 2%. נחשב כמות מתוך 10,000:", math_expression: "2% מתוך 10,000 <br><br> 0.02 × 10000 = 200" }
        ],
        final_answer: "א. 68%, ב. 200 תלמידים"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות חורף 2019</strong><br>
        נתונות שתי פונקציות:<br>
        הפרבולה: y = -x² + 4x + 5<br>
        הישר: y = x + 1<br>
        <svg viewBox="0 0 200 180" width="100%" height="150" style="display:block; margin:15px auto; max-width:200px;">
            <line x1="20" y1="140" x2="180" y2="140" stroke="#94a3b8" stroke-width="2"/>
            <line x1="100" y1="160" x2="100" y2="20" stroke="#94a3b8" stroke-width="2"/>
            <path d="M 40,140 Q 100,20 160,140" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <line x1="40" y1="120" x2="160" y2="40" stroke="#ef4444" stroke-width="2"/>
        </svg>
        א. מצאו את נקודות החיתוך בין הפרבולה לישר.<br>
        ב. מצאו את קודקוד הפרבולה.`,
        options: [
            "חיתוך: (-1,0) ו-(4,5). קודקוד: (2,9)",
            "חיתוך: (1,2) ו-(4,5). קודקוד: (2,9)",
            "חיתוך: (-1,0) ו-(4,5). קודקוד: (4,5)",
            "חיתוך: (0,1) ו-(3,4). קודקוד: (2,8)"
        ],
        correctAnswer: 0,
        hint: "למציאת חיתוך: השוו בין שתי המשוואות ופתרו משוואה ריבועית. למציאת קודקוד: השתמשו בנוסחה למציאת ה-x של הקודקוד.",
        solution_steps: [
            { verbal_explanation: "נשווה בין הפונקציות למציאת נקודות החיתוך ונעביר את כל האיברים לאגף אחד:", math_expression: "-x² + 4x + 5 = x + 1 <br><br> 0 = x² - 3x - 4" },
            { verbal_explanation: "נפתור בעזרת טרינום או נוסחת השורשים. המספרים שמכפלתם (4-) וסכומם (3-) הם (4-) ו-1:", math_expression: "(x - 4)(x + 1) = 0 <br><br> x₁ = 4 , x₂ = -1" },
            { verbal_explanation: "נמצא את שיעורי ה-y על ידי הצבה במשוואת הישר (מכיוון שהיא פשוטה יותר):", math_expression: "y₁ = 4 + 1 = 5 ➔ (4, 5) <br><br> y₂ = -1 + 1 = 0 ➔ (-1, 0)" },
            { verbal_explanation: "למציאת קודקוד הפרבולה, נציב בנוסחת הקודקוד כאשר a=-1 ו- b=4:", math_expression: "x_v = -b / (2a) <br><br> x_v = -4 / (2 × -1) = 2" },
            { verbal_explanation: "נציב x = 2 במשוואת הפרבולה כדי למצוא את ערך ה-y של הקודקוד:", math_expression: "y = -(2)² + 4(2) + 5 <br><br> y = -4 + 8 + 5 = 9 <br><br> ➔ (2, 9)" }
        ],
        final_answer: "חיתוך: (-1,0) ו-(4,5). קודקוד: (2,9)"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות קיץ 2018, מועד א'</strong><br>
        הטבלה שלפניכם מתארת את התפלגות מספר הילדים במשפחות ביישוב מסוים:<br>
        <table border="1" style="margin: 15px auto; border-collapse: collapse; text-align: center; width: 80%;">
            <tr style="background: #f1f5f9;"><th style="padding: 8px;">מספר ילדים</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
            <tr><th style="padding: 8px;">מספר משפחות</th><td>10</td><td>15</td><td>x</td><td>10</td><td>5</td></tr>
        </table>
        הממוצע של מספר הילדים במשפחה ביישוב הוא 2.75.<br>
        א. מצאו את x (מספר המשפחות שלהן 3 ילדים).<br>
        ב. מהו החציון של מספר הילדים במשפחה?`,
        options: [
            "א. x = 20, ב. חציון = 3",
            "א. x = 10, ב. חציון = 2.5",
            "א. x = 15, ב. חציון = 2",
            "א. x = 20, ב. חציון = 2.5"
        ],
        correctAnswer: 0,
        hint: "נוסחת הממוצע היא סכום המכפלות (מספר ילדים כפול מספר משפחות) חלקי סך כל המשפחות. הציבו את הממוצע ופתרו את המשוואה.",
        solution_steps: [
            { verbal_explanation: "נרשום ביטוי לסך כל המשפחות ביישוב (המחנה):", math_expression: "N = 10 + 15 + x + 10 + 5 <br><br> N = 40 + x" },
            { verbal_explanation: "סכום הילדים הכולל ביישוב מחושב על ידי הכפלת מספר הילדים בשכיחות (המונה):", math_expression: "Sum = 1×10 + 2×15 + 3×x + 4×10 + 5×5 <br><br> Sum = 10 + 30 + 3x + 40 + 25 <br><br> Sum = 105 + 3x" },
            { verbal_explanation: "נציב את הנתונים בנוסחת הממוצע הנתון (2.75):", math_expression: "2.75 = (105 + 3x) / (40 + x)" },
            { verbal_explanation: "נכפול במכנה, נפתח סוגריים ונפתור את המשוואה:", math_expression: "2.75(40 + x) = 105 + 3x <br><br> 110 + 2.75x = 105 + 3x <br><br> 5 = 0.25x <br><br> x = 20" },
            { verbal_explanation: "למציאת החציון, יש לנו כעת סך של N=60 משפחות. החציון ייפול בממוצע בין המשפחה ה-30 למשפחה ה-31. נספור במצטבר:", math_expression: "ילד אחד: 10 משפחות <br> עד 2 ילדים: 25 משפחות <br> עד 3 ילדים: 45 משפחות <br><br> המקומות ה-30 וה-31 נופלים בקטגוריית 3 הילדים, לכן החציון הוא 3." }
        ],
        final_answer: "א. x = 20, ב. חציון = 3"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות חורף 2018</strong><br>
        מעוין ABCD חסום במערכת צירים.<br>
        שיעורי הקודקודים הם: A(4, 9), C(10, 1).<br>
        אלכסוני המעוין נפגשים בנקודה M.<br>
        <svg viewBox="0 0 200 150" width="100%" height="150" style="display:block; margin:15px auto; max-width:250px;">
            <polygon points="100,20 160,80 100,140 40,80" fill="#f8fafc" stroke="#b09151" stroke-width="2"/>
            <line x1="100" y1="20" x2="100" y2="140" stroke="#94a3b8" stroke-dasharray="4,4"/>
            <line x1="40" y1="80" x2="160" y2="80" stroke="#94a3b8" stroke-dasharray="4,4"/>
            <text x="95" y="15" font-family="Arial" font-weight="bold">A</text>
            <text x="165" y="85" font-family="Arial" font-weight="bold">B</text>
            <text x="95" y="155" font-family="Arial" font-weight="bold">C</text>
            <text x="25" y="85" font-family="Arial" font-weight="bold">D</text>
            <text x="105" y="75" font-family="Arial" font-weight="bold">M</text>
        </svg>
        א. מצאו את שיעורי נקודת המפגש M.<br>
        ב. מצאו את אורך האלכסון AC.<br>
        ג. נתון כי אורך האלכסון BD הוא 8. חשבו את שטח המעוין.`,
        options: [
            "א. M(7,5), ב. AC=10, ג. שטח=40",
            "א. M(6,4), ב. AC=12, ג. שטח=48",
            "א. M(7,5), ב. AC=10, ג. שטח=80",
            "א. M(8,6), ב. AC=14, ג. שטח=56"
        ],
        correctAnswer: 0,
        hint: "האלכסונים במעוין חוצים זה את זה, לכן נקודה M היא אמצע הקטע AC. שטח מעוין הוא מחצית מכפלת האלכסונים.",
        solution_steps: [
            { verbal_explanation: "למציאת הנקודה M, נשתמש בנוסחת אמצע קטע עבור הנקודות A ו-C:", math_expression: "x_M = (4 + 10) / 2 = 7 <br><br> y_M = (9 + 1) / 2 = 5 <br><br> ➔ M(7, 5)" },
            { verbal_explanation: "נחשב את אורך האלכסון AC בעזרת נוסחת המרחק בין שתי נקודות:", math_expression: "d = √((10 - 4)² + (1 - 9)²) <br><br> d = √(6² + (-8)²) <br><br> d = √(36 + 64) <br><br> d = √100 = 10" },
            { verbal_explanation: "שטח מעוין מחושב על ידי הכפלת שני האלכסונים וחלוקה ב-2:", math_expression: "S = (AC × BD) / 2 <br><br> S = (10 × 8) / 2 <br><br> S = 80 / 2 = 40" }
        ],
        final_answer: "א. M(7,5), ב. AC=10, ג. שטח=40"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות קיץ 2017, מועד א'</strong><br>
        במשולש ישר זווית ABC (זווית C = 90°), אורך הניצב AC הוא 8 ס"מ.<br>
        הזווית מול הניצב הזה (זווית B) היא בת 36°.<br>
        א. מצאו את אורך היתר AB.<br>
        ב. מצאו את שטח המשולש.`,
        options: [
            "AB = 13.61 ס\"מ, שטח = 44.04 סמ\"ר",
            "AB = 10.20 ס\"מ, שטח = 32.15 סמ\"ר",
            "AB = 13.61 ס\"מ, שטח = 55.44 סמ\"ר",
            "AB = 15.00 ס\"מ, שטח = 48.00 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "הניצב AC נמצא מול הזווית B. היחס בין הניצב ממול ליתר הוא סינוס (Sin). היחס בין הניצב ממול לניצב שליד הוא טנגנס (Tan).",
        solution_steps: [
            { verbal_explanation: "פונקציית סינוס מקשרת בין הניצב מול הזווית ליתר:", math_expression: "sin(36°) = AC / AB <br><br> sin(36°) = 8 / AB" },
            { verbal_explanation: "נחלץ את היתר AB:", math_expression: "AB = 8 / sin(36°) <br><br> AB = 8 / 0.587 = 13.61" },
            { verbal_explanation: "לחישוב השטח נצטרך את הניצב השני (BC). נשתמש בטנגנס:", math_expression: "tan(36°) = AC / BC <br><br> tan(36°) = 8 / BC <br><br> BC = 8 / tan(36°) = 8 / 0.726 = 11.01" },
            { verbal_explanation: "נחשב את שטח המשולש (ניצב כפול ניצב חלקי 2):", math_expression: "S = (8 × 11.01) / 2 <br><br> S = 88.08 / 2 = 44.04" }
        ],
        final_answer: "AB = 13.61 ס\"מ, שטח = 44.04 סמ\"ר"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות חורף 2017</strong><br>
        דני חוסך כסף לקניית מחשב. בחודש הראשון הוא חסך 150 שקלים.<br>
        בכל חודש הוא מגדיל את סכום החיסכון שלו ב-25 שקלים לעומת החודש הקודם.<br>
        א. כמה כסף חסך דני בחודש ה-10 לבדו?<br>
        ב. כמה כסף חסך דני בסך הכל לאחר 12 חודשים?`,
        options: [
            "א. 375 שקלים, ב. 3,450 שקלים",
            "א. 400 שקלים, ב. 4,000 שקלים",
            "א. 375 שקלים, ב. 4,500 שקלים",
            "א. 350 שקלים, ב. 3,250 שקלים"
        ],
        correctAnswer: 0,
        hint: "מדובר בבעיה של סדרה חשבונית. האיבר הראשון a₁=150 וההפרש d=25. השתמשו בנוסחת האיבר הכללי ובנוסחת הסכום.",
        solution_steps: [
            { verbal_explanation: "כדי למצוא את החיסכון בחודש העשירי (a₁₀), נשתמש בנוסחת האיבר הכללי של סדרה חשבונית:", math_expression: "a₁₀ = a₁ + (n-1)d <br><br> a₁₀ = 150 + (10 - 1) × 25 <br><br> a₁₀ = 150 + 9 × 25 <br><br> a₁₀ = 150 + 225 = 375" },
            { verbal_explanation: "למציאת סך כל החיסכון במשך 12 חודשים, נשתמש בנוסחת הסכום:", math_expression: "S₁₂ = [2a₁ + d(n-1)] × n / 2 <br><br> S₁₂ = [2(150) + 25(12 - 1)] × 12 / 2" },
            { verbal_explanation: "נפשט את הביטוי שבתוך הסוגריים ואז נכפול ב-6:", math_expression: "S₁₂ = [300 + 25 × 11] × 6 <br><br> S₁₂ = [300 + 275] × 6 <br><br> S₁₂ = 575 × 6 = 3450" }
        ],
        final_answer: "א. 375 שקלים, ב. 3,450 שקלים"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות קיץ 2016, מועד ב'</strong><br>
        זורקים שתי קוביות משחק הוגנות (על כל קובייה פאות ממוספרות 1 עד 6).<br>
        מה ההסתברות שסכום המספרים שייפלו על שתי הקוביות יהיה בדיוק 8?`,
        options: [
            "5 / 36",
            "6 / 36",
            "4 / 36",
            "1 / 6"
        ],
        correctAnswer: 0,
        hint: "מרחב המדגם בזריקת שתי קוביות כולל 36 אפשרויות (6×6). רשמו את כל הזוגות שסכומם הוא 8, וספרו כמה הם.",
        solution_steps: [
            { verbal_explanation: "מספר האפשרויות הכולל (מרחב המדגם) בזריקת שתי קוביות הוא 6 כפול 6:", math_expression: "Total = 6 × 6 = 36" },
            { verbal_explanation: "נמצא את כל זוגות המספרים האפשריים (בין 1 ל-6) שהסכום שלהם הוא בדיוק 8:", math_expression: "(2, 6) , (3, 5) , (4, 4) , (5, 3) , (6, 2)" },
            { verbal_explanation: "סך הכל מצאנו 5 אפשרויות שמקיימות את התנאי. ההסתברות היא מספר האפשרויות הרצויות חלקי סך האפשרויות:", math_expression: "P = 5 / 36" }
        ],
        final_answer: "5 / 36"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות חורף 2016</strong><br>
        במערכת צירים נתון מעוין ABCD.<br>
        משוואת האלכסון AC היא: y = 2x - 4.<br>
        נקודת המפגש של האלכסונים (נקודה M) היא (3, 2).<br>
        א. מהו שיפוע האלכסון BD?<br>
        ב. מצאו את משוואת האלכסון BD.`,
        options: [
            "א. -0.5, ב. y = -0.5x + 3.5",
            "א. -2, ב. y = -2x + 8",
            "א. 2, ב. y = 2x - 4",
            "א. -0.5, ב. y = -0.5x + 4.5"
        ],
        correctAnswer: 0,
        hint: "במעוין, האלכסונים מאונכים זה לזה. מכפלת השיפועים של ישרים מאונכים היא תמיד מינוס 1.",
        solution_steps: [
            { verbal_explanation: "שיפוע האלכסון AC נתון ישירות מהמשוואה שלו:", math_expression: "m_AC = 2" },
            { verbal_explanation: "האלכסונים במעוין מאונכים. שיפוע של ישר מאונך הוא הופכי ונגדי לשיפוע הישר המקורי:", math_expression: "m_BD = -1 / 2 = -0.5" },
            { verbal_explanation: "כעת, כשיש לנו שיפוע ונקודה M(3, 2) שעליה עובר הישר, נציב בנוסחת משוואת ישר:", math_expression: "y - y₁ = m(x - x₁) <br><br> y - 2 = -0.5(x - 3)" },
            { verbal_explanation: "נפתח סוגריים ונסדר את המשוואה הסופית:", math_expression: "y - 2 = -0.5x + 1.5 <br><br> y = -0.5x + 3.5" }
        ],
        final_answer: "א. -0.5, ב. y = -0.5x + 3.5"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות קיץ 2022, מועד א'</strong><br>
        מחירו של מוצר בחנות היה 120 שקלים.<br>
        לקראת החג, התייקר המוצר ב-15%.<br>
        א. מה היה מחירו של המוצר לאחר ההתייקרות?<br>
        ב. לאחר חודש, הוזל המוצר ב-10%. מהו מחירו הסופי של המוצר?`,
        options: [
            "א. 138 שקלים, ב. 124.2 שקלים",
            "א. 135 שקלים, ב. 125.0 שקלים",
            "א. 138 שקלים, ב. 120.0 שקלים",
            "א. 130 שקלים, ב. 115.5 שקלים"
        ],
        correctAnswer: 0,
        hint: "חשבו את ההתייקרות והוסיפו למחיר המקורי. לאחר מכן, חשבו את ההוזלה מהמחיר החדש (ולא מהמחיר ההתחלתי!).",
        solution_steps: [
            { verbal_explanation: "כדי לחשב התייקרות של 15%, נכפול את המחיר המקורי ב-1.15 (שזה 100% + 15% עשרוני):", math_expression: "120 × 1.15 = 138 שקלים" },
            { verbal_explanation: "כעת המוצר עולה 138 שקלים. ההוזלה של 10% מחושבת מהמחיר החדש. נכפול ב-0.90 (שזה 100% - 10%):", math_expression: "138 × 0.90 = 124.2 שקלים" }
        ],
        final_answer: "א. 138 שקלים, ב. 124.2 שקלים"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות קיץ 2020, מועד ב'</strong><br>
        במשולש שווה שוקיים אורך השוק הוא 10 ס"מ, וזווית הבסיס היא בת 70°.<br>
        <svg viewBox="0 0 200 150" width="100%" height="120" style="display:block; margin:15px auto; max-width:200px;">
            <polygon points="100,20 160,130 40,130" fill="#f8fafc" stroke="#b09151" stroke-width="2"/>
            <line x1="100" y1="20" x2="100" y2="130" stroke="#94a3b8" stroke-dasharray="4,4"/>
            <text x="95" y="15" font-family="Arial" font-weight="bold">A</text>
            <text x="165" y="140" font-family="Arial" font-weight="bold">C</text>
            <text x="25" y="140" font-family="Arial" font-weight="bold">B</text>
            <text x="105" y="140" font-family="Arial" font-weight="bold">D</text>
            <text x="45" y="125" font-size="11">70°</text>
        </svg>
        א. חשבו את אורך בסיס המשולש.<br>
        ב. חשבו את גובה המשולש.`,
        options: [
            "בסיס = 6.84 ס\"מ, גובה = 9.39 ס\"מ",
            "בסיס = 5.00 ס\"מ, גובה = 8.66 ס\"מ",
            "בסיס = 7.50 ס\"מ, גובה = 9.00 ס\"מ",
            "בסיס = 6.84 ס\"מ, גובה = 10.0 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "במשולש שווה שוקיים, הגובה לבסיס חוצה אותו. נוצרים שני משולשים ישרי זווית. השתמשו בקוסינוס למציאת חצי הבסיס, ובסינוס למציאת הגובה.",
        solution_steps: [
            { verbal_explanation: "נסתכל על המשולש ישר הזווית שנוצר בצד שמאל (ABD). היתר הוא 10 והזווית B היא 70°. נשתמש בקוסינוס למציאת חצי הבסיס (BD):", math_expression: "cos(70°) = BD / 10 <br><br> BD = 10 × cos(70°) = 10 × 0.342 = 3.42 ס\"מ" },
            { verbal_explanation: "מכיוון שהגובה חוצה את הבסיס, הבסיס השלם (BC) כפול באורכו מ-BD:", math_expression: "BC = 2 × 3.42 = 6.84 ס\"מ" },
            { verbal_explanation: "למציאת הגובה (AD), נשתמש בפונקציית סינוס באותו משולש ישר זווית:", math_expression: "sin(70°) = AD / 10 <br><br> AD = 10 × sin(70°) = 10 × 0.939 = 9.39 ס\"מ" }
        ],
        final_answer: "בסיס = 6.84 ס\"מ, גובה = 9.39 ס\"מ"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות חורף 2021</strong><br>
        משקל תפוחים בפרדס מסוים מתפלג נורמלית.<br>
        משקל התפוח הממוצע הוא 150 גרם, וסטיית התקן היא 10 גרם.<br>
        מהו אחוז התפוחים שמשקלם גדול מ-170 גרם?`,
        options: [
            "2%",
            "5%",
            "16%",
            "2.5%"
        ],
        correctAnswer: 0,
        hint: "בדקו כמה סטיות תקן המרחק בין הממוצע (150) למשקל המבוקש (170).",
        solution_steps: [
            { verbal_explanation: "נבדוק מהו המרחק של 170 מהממוצע, במונחים של סטיות תקן:", math_expression: "Z = (170 - 150) / 10 = 20 / 10 = 2" },
            { verbal_explanation: "המשקל 170 גרם נמצא בדיוק 2 סטיות תקן מעל הממוצע.", math_expression: "" },
            { verbal_explanation: "על פי גרף ההתפלגות הנורמלית, השטח שמעל 2 סטיות תקן מורכב משני מקטעים קטנים ב'זנב' הימני של הפעמון (1.5% ו-0.5%). נחבר אותם:", math_expression: "1.5% + 0.5% = 2%" }
        ],
        final_answer: "2%"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות קיץ 2018, מועד ב'</strong><br>
        נתונות שתי נקודות במישור: A(2, 4) ו- B(8, 12).<br>
        א. מצאו את שיעורי נקודת האמצע M של הקטע AB.<br>
        ב. חשבו את אורך הקטע AB.`,
        options: [
            "אמצע M(5,8), מרחק 10",
            "אמצע M(6,8), מרחק 10",
            "אמצע M(5,8), מרחק 100",
            "אמצע M(4,6), מרחק 14"
        ],
        correctAnswer: 0,
        hint: "נוסחת אמצע קטע היא הממוצע של שיעורי ה-x והממוצע של שיעורי ה-y. לחישוב המרחק השתמשו בנוסחת המרחק (פיתגורס).",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת אמצע קטע (חיבור שיעורי הנקודות וחלוקה ב-2):", math_expression: "x_M = (2 + 8) / 2 = 10 / 2 = 5 <br><br> y_M = (4 + 12) / 2 = 16 / 2 = 8 <br><br> ➔ M(5, 8)" },
            { verbal_explanation: "נחשב את אורך הקטע AB בעזרת נוסחת המרחק d:", math_expression: "d = √((8 - 2)² + (12 - 4)²) <br><br> d = √(6² + 8²) <br><br> d = √(36 + 64) <br><br> d = √100 = 10" }
        ],
        final_answer: "אמצע M(5,8), מרחק 10"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות קיץ 2020, מועד א'</strong><br>
        בסדרה חשבונית נתון כי האיבר הראשון הוא a₁ = 5 והפרש הסדרה הוא d = 3.<br>
        איבר מסוים בסדרה זו שווה ל- 35.<br>
        באיזה מקום בסדרה (n) נמצא איבר זה?`,
        options: [
            "במקום ה-11",
            "במקום ה-10",
            "במקום ה-12",
            "במקום ה-9"
        ],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחת האיבר הכללי: an = a1 + (n-1)d, ופתרו את המשוואה עבור הנעלם n.",
        solution_steps: [
            { verbal_explanation: "נציב את הנתונים הידועים (a₁=5, d=3, aₙ=35) בנוסחת האיבר הכללי של סדרה חשבונית:", math_expression: "35 = 5 + (n - 1) × 3" },
            { verbal_explanation: "נפתח את הסוגריים ונסדר את המשוואה:", math_expression: "35 = 5 + 3n - 3 <br><br> 35 = 2 + 3n" },
            { verbal_explanation: "נעביר את ה-2 אגף ונחלץ את n:", math_expression: "33 = 3n <br><br> n = 11" }
        ],
        final_answer: "במקום ה-11"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות חורף 2018, מועד ב'</strong><br>
        חברת השכרת רכב "אביב" מציעה מסלול השכרה יומי: תשלום קבוע של 100 שקלים ועוד 2 שקלים לכל קילומטר נסיעה.<br>
        חברת "סתיו" מציעה מסלול מתחרה: ללא תשלום קבוע כלל, אך תשלום של 3.25 שקלים לכל קילומטר נסיעה.<br>
        עבור כמה קילומטרים ביום, משתלם יותר לשכור רכב מחברת "אביב"?`,
        options: [
            "יותר מ-80 ק\"מ",
            "פחות מ-80 ק\"מ",
            "יותר מ-100 ק\"מ",
            "בדיוק 80 ק\"מ"
        ],
        correctAnswer: 0,
        hint: "בנו ביטוי אלגברי עבור כל חברה (המחיר כפונקציה של x קילומטרים). בדקו מתי הביטוי של חברת 'אביב' קטן (זול יותר) מהביטוי של חברת 'סתיו'.",
        solution_steps: [
            { verbal_explanation: "נבנה פונקציית מחיר לכל אחת מחברות ההשכרה, כאשר x מסמל את מספר הקילומטרים:", math_expression: "חברת אביב: y = 100 + 2x <br><br> חברת סתיו: y = 3.25x" },
            { verbal_explanation: "אנו מחפשים מתי משתלם (זול) יותר בחברת אביב, לכן נבנה אי-שוויון שבו אביב קטנה מסתיו:", math_expression: "100 + 2x < 3.25x" },
            { verbal_explanation: "נעביר את ה-x לאגף ימין ונפתור את אי-השוויון:", math_expression: "100 < 3.25x - 2x <br><br> 100 < 1.25x" },
            { verbal_explanation: "נחלק ב-1.25 כדי לבודד את x:", math_expression: "x > 100 / 1.25 <br><br> x > 80" }
        ],
        final_answer: "יותר מ-80 ק\"מ"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות קיץ 2019, מועד א'</strong><br>
        לפניכם סביבון המחולק ל-4 גזרות שוות שעליהן המספרים: 1, 2, 3, 4.<br>
        מסובבים את הסביבון 3 פעמים רצופות.<br>
        מה ההסתברות שבכל שלוש הפעמים הסביבון ייפול על מספר זוגי?`,
        options: [
            "1 / 8",
            "1 / 4",
            "1 / 2",
            "3 / 8"
        ],
        correctAnswer: 0,
        hint: "ראשית, בדקו מהי ההסתברות לקבל מספר זוגי בסיבוב אחד בודד. לאחר מכן, זכרו שסיבובי סביבון הם אירועים בלתי תלויים, ולכן יש לכפול את ההסתברויות.",
        solution_steps: [
            { verbal_explanation: "המספרים הזוגיים בסביבון הם 2 ו-4 (שני מספרים מתוך ארבעה). לכן ההסתברות לזוגי בסיבוב בודד היא:", math_expression: "P(Even) = 2/4 = 1/2" },
            { verbal_explanation: "מסובבים את הסביבון 3 פעמים. אלו מאורעות בלתי תלויים. ההסתברות ששלושתם יהיו זוגיים היא ההכפלה של ההסתברות הבודדת בעצמה 3 פעמים:", math_expression: "P = 1/2 × 1/2 × 1/2 = 1/8" }
        ],
        final_answer: "1 / 8"
    },
    {
        topic: "bagrut_prep",
        subTopic: "bagrut_prep",
        question_text: `<strong>בגרות חורף 2017</strong><br>
        נתונה משוואת הפרבולה: y = -x² + 8x - 12.<br>
        א. מצאו את נקודות החיתוך של הפרבולה עם ציר ה-x.<br>
        ב. מצאו את שיעורי קודקוד הפרבולה.`,
        options: [
            "חיתוך: (2,0), (6,0), קודקוד: (4,4)",
            "חיתוך: (-2,0), (-6,0), קודקוד: (-4,4)",
            "חיתוך: (2,0), (6,0), קודקוד: (4,-4)",
            "חיתוך: (3,0), (4,0), קודקוד: (4,2)"
        ],
        correctAnswer: 0,
        hint: "לחיתוך עם ציר x הציבו y=0 ופתרו בעזרת נוסחת השורשים. לקודקוד השתמשו בנוסחה x = -b/(2a).",
        solution_steps: [
            { verbal_explanation: "למציאת חיתוך עם ציר x, נציב y=0 במשוואה:", math_expression: "-x² + 8x - 12 = 0" },
            { verbal_explanation: "נכפול במינוס 1 כדי שיהיה נוח לפתור (או נציב ישירות בנוסחת השורשים):", math_expression: "x² - 8x + 12 = 0" },
            { verbal_explanation: "המספרים שמכפלתם 12 וסכומם (8-) הם (2-) ו-(6-):", math_expression: "(x - 2)(x - 6) = 0 <br><br> x₁ = 2 , x₂ = 6 ➔ (2,0), (6,0)" },
            { verbal_explanation: "למציאת ה-x של הקודקוד, נציב בנוסחה עם הנתונים המקוריים a=-1, b=8:", math_expression: "x_v = -8 / (2 × -1) = -8 / -2 = 4" },
            { verbal_explanation: "נציב x=4 במשוואה המקורית כדי למצוא את ה-y של הקודקוד:", math_expression: "y = -(4)² + 8(4) - 12 <br><br> y = -16 + 32 - 12 = 4 ➔ (4,4)" }
        ],
        final_answer: "חיתוך: (2,0), (6,0), קודקוד: (4,4)"
    }
];