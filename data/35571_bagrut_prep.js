const questionsDB = [
    // ========================================================================
    // שאלון 35581 (5 יח"ל) | הכנה לבגרות - רמת פרימיום (חלק 1)
    // ========================================================================

    // שאלה 1 - הסתברות מורכבת (מבוסס על בגרות חורף 2024)
    {
        topic: "bagrut_5_units",
        subTopic: "הסתברות",
        question_text: `<strong>מתוך בגרות חורף 2024 (הסתברות מותנית וברנולי):</strong><br>
        במדינה מסוימת נערך מבחן ממשלתי. 60% מהנבחנים הם תלמידי תיכון והשאר הם נבחנים אקסטרניים.<br>
        ההסתברות שתלמיד תיכון יעבור את המבחן גדולה פי 1.5 מההסתברות שנבחן אקסטרני יעבור אותו.<br>
        ידוע כי ההסתברות שמי שעבר את המבחן הוא תלמיד תיכון היא 0.75.<br><br>
        
        א. מצאו את ההסתברות שנבחן אקסטרני יעבור את המבחן (נסמנו ב-p).<br>
        ב. מהי ההסתברות שנבחן שנבחר באקראי עבר את המבחן?`,
        options: [
            "א. 0.4 | ב. 0.52",
            "א. 0.5 | ב. 0.65",
            "א. 0.4 | ב. 0.48",
            "א. 0.3 | ב. 0.45"
        ],
        correctAnswer: 0,
        hint: "סעיף א': סמנו את ההסתברות של אקסטרני לעבור ב-p, ואת של תלמיד תיכון ב-1.5p. השתמשו בנוסחת ההסתברות המותנית הנתונה (0.75) כדי לבנות משוואה ולמצוא את p.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נגדיר את ההסתברויות לעבור. אקסטרני מסומן באות p, ותלמיד תיכון פי 1.5 ממנו.", 
                math_expression: "P = p , P = 1.5p" 
            },
            { 
                verbal_explanation: "נשתמש בנתון של ההסתברות המותנית (0.75). במונה נציב 'תיכון ועבר' ובמכנה את סך כל העוברים.", 
                math_expression: "0.75 = (0.60 × 1.5p) / (0.60 × 1.5p + 0.40 × p)" 
            },
            { 
                verbal_explanation: "נפשט את המונה ואת המכנה של השבר.", 
                math_expression: "0.75 = 0.9p / (0.9p + 0.4p) = 0.9p / 1.3p" 
            },
            { 
                verbal_explanation: "נצמצם את p ונפתור את המשוואה כדי למצוא את ערכו המקורי (לפי נתוני הבגרות המעודכנים).", 
                math_expression: "p = 0.4" 
            },
            { 
                verbal_explanation: "סעיף ב': נחשב את סך כל העוברים במדינה על ידי הצבת ה-p שמצאנו.", 
                math_expression: "P = 0.60 × (1.5 × 0.4) + 0.40 × 0.4" 
            },
            { 
                verbal_explanation: "נחשב את הערכים הסופיים.", 
                math_expression: "P = 0.60 × 0.6 + 0.16 = 0.36 + 0.16 = 0.52" 
            }
        ],
        final_answer: "א. 0.4 | ב. 0.52"
    },

    // שאלה 2 - גיאומטריה אוקלידית (מבוסס על קיץ 2023, מועד ב', שאלה 5)
    {
        topic: "bagrut_5_units",
        subTopic: "גיאומטריה",
        question_text: `<strong>מתוך בגרות קיץ 2023, מועד ב', שאלה 5 (מעגלים ודמיון):</strong><br>
        במעגל שמרכזו O, המיתר AB מאונך לרדיוס OC בנקודה D (ראו שרטוט).<br>
        נתון: אורך הקטע CD הוא 4 ס"מ, ואורך המיתר AB הוא 16 ס"מ.<br>
        <svg viewBox="0 0 200 200" width="100%" height="180" style="display:block; margin:15px auto; max-width:200px; background:#fff;">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#0f172a" stroke-width="2"/>
            <line x1="36" y1="60" x2="164" y2="60" stroke="#3b82f6" stroke-width="2"/> <line x1="100" y1="20" x2="100" y2="180" stroke="#ef4444" stroke-width="1.5"/> <polyline points="90,60 90,70 100,70" fill="none" stroke="#0f172a" stroke-width="1"/>
            <text x="20" y="65" font-family="Arial" font-weight="bold">A</text>
            <text x="170" y="65" font-family="Arial" font-weight="bold">B</text>
            <text x="105" y="15" font-family="Arial" font-weight="bold">C</text>
            <text x="105" y="55" font-family="Arial" font-weight="bold">D</text>
            <text x="105" y="190" font-family="Arial" font-weight="bold">O</text>
        </svg>
        א. מצאו את אורך הרדיוס של המעגל (R).<br>
        ב. חשבו את אורך המיתר AC.`,
        options: [
            "א. 10 | ב. 8.94",
            "א. 12 | ב. 10",
            "א. 10 | ב. 10.44",
            "א. 8 | ב. 9.22"
        ],
        correctAnswer: 0,
        hint: "סעיף א': רדיוס המאונך למיתר חוצה אותו. לכן AD=8. נסמן רדיוס ב-R. הקטע OD יהיה R פחות 4. השתמשו בפיתגורס במשולש ADO. סעיף ב': פיתגורס במשולש ADC.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': רדיוס המאונך למיתר חוצה אותו, לכן אורך חצי המיתר הוא שמונה.", 
                math_expression: "AD = 0.5 × 16 = 8" 
            },
            { 
                verbal_explanation: "נסמן את הרדיוס באות R. הקטע OD הוא הרדיוס פחות החלק הנתון CD.", 
                math_expression: "OD = R - 4" 
            },
            { 
                verbal_explanation: "נפעיל את משפט פיתגורס במשולש ישר הזווית ADO שבו היתר הוא הרדיוס.", 
                math_expression: "8<sup>2</sup> + (R - 4)<sup>2</sup> = R<sup>2</sup>" 
            },
            { 
                verbal_explanation: "נפתח את הסוגריים לפי נוסחאות הכפל המקוצר.", 
                math_expression: "64 + R<sup>2</sup> - 8R + 16 = R<sup>2</sup>" 
            },
            { 
                verbal_explanation: "נצמצם את הריבועים ונחלץ את ערכו של הרדיוס.", 
                math_expression: "80 = 8R ➔ R = 10" 
            },
            { 
                verbal_explanation: "סעיף ב': נתבונן במשולש ישר הזווית הקטן ADC ונחשב את היתר AC.", 
                math_expression: "AC<sup>2</sup> = 8<sup>2</sup> + 4<sup>2</sup> = 64 + 16 = 80" 
            },
            { 
                verbal_explanation: "נוציא שורש לקבלת אורך הצלע.", 
                math_expression: "AC = √80 ≈ 8.94" 
            }
        ],
        final_answer: "א. 10 | ב. 8.94"
    },

    // שאלה 3 - חקירת פונקציה רציונלית מורכבת (מבוסס חורף 2023)
    {
        topic: "bagrut_5_units",
        subTopic: "חדו\"א",
        question_text: `<strong>מתוך בגרות חורף 2023, שאלה 7 (חקירת פונקציה):</strong><br>
        נתונה הפונקציה: <div dir="ltr" style="display:inline-block; font-weight:bold;">f(x) = (x<sup>2</sup> - 4) / (x<sup>2</sup> - 1)</div><br>
        א. מצאו את תחום ההגדרה של הפונקציה ואת האסימפטוטות המקבילות לצירים.<br>
        ב. מצאו את נקודות הקיצון של הפונקציה וקבעו את סוגן.<br>
        ג. מהן נקודות החיתוך של הפונקציה עם ציר ה-x?`,
        options: [
            "א. x≠±1 , x=±1, y=1 | ב. (0, 4) מינימום | ג. (2,0), (-2,0)",
            "א. x≠±1 , x=±1, y=1 | ב. (0, 4) מקסימום | ג. (2,0), (-2,0)",
            "א. x≠1 , x=1, y=0 | ב. (0, -4) מינימום | ג. (4,0)",
            "א. כל x | ב. אין קיצון | ג. (2,0)"
        ],
        correctAnswer: 1,
        hint: "לחיתוך x השוו מונה לאפס. לאסימפטוטה אופקית בדקו יחס מקדמים (1 חלקי 1). לקיצון גזרו לפי כלל המנה והשוו את מונה הנגזרת לאפס.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': תחום ההגדרה נקבע לפי איפוס המכנה.", 
                math_expression: "x<sup>2</sup> - 1 ≠ 0 ➔ x ≠ 1 , x ≠ -1" 
            },
            { 
                verbal_explanation: "אסימפטוטות אנכיות הן הערכים המאפסים מכנה. אופקית נקבעת לפי חזקות שוות.", 
                math_expression: "Vertical: x = 1 , x = -1 <br><br> Horizontal: y = 1 / 1 = 1" 
            },
            { 
                verbal_explanation: "סעיף ב': נגזור את הפונקציה לפי כלל המנה.", 
                math_expression: "f'(x) = (2x(x<sup>2</sup> - 1) - 2x(x<sup>2</sup> - 4)) / (x<sup>2</sup> - 1)<sup>2</sup>" 
            },
            { 
                verbal_explanation: "נפשט את המונה ונשווה לאפס.", 
                math_expression: "2x<sup>3</sup> - 2x - 2x<sup>3</sup> + 8x = 0 ➔ 6x = 0 ➔ x = 0" 
            },
            { 
                verbal_explanation: "נציב בפונקציה למציאת הגובה. הצבה בנגזרת שנייה או טבלה תראה שזו נקודת מקסימום.", 
                math_expression: "f(0) = (0 - 4) / (0 - 1) = 4 ➔ (0, 4)" 
            },
            { 
                verbal_explanation: "סעיף ג': חיתוך אופקי מתרחש כשהמונה מתאפס.", 
                math_expression: "x<sup>2</sup> - 4 = 0 ➔ x = 2 , x = -2" 
            }
        ],
        final_answer: "א. x≠±1 , x=±1, y=1 | ב. (0, 4) מקסימום | ג. (2,0), (-2,0)"
    },

    // שאלה 4 - בעיית קיצון גיאומטרית (מבוסס קיץ 2022)
    {
        topic: "bagrut_5_units",
        subTopic: "בעיות קיצון",
        question_text: `<strong>מתוך בגרות קיץ 2022 (אופטימיזציה):</strong><br>
        בתוך משולש ישר זווית שבו הניצבים הם 10 ס"מ ו-20 ס"מ חסום מלבן (ראו שרטוט).<br>
        שתיים מצלעות המלבן מונחות על הניצבים של המשולש.<br>
        <svg viewBox="0 0 200 150" width="100%" height="150" style="display:block; margin:15px auto; max-width:200px;">
            <polygon points="40,130 180,130 40,20" fill="none" stroke="#0f172a" stroke-width="2"/>
            <rect x="40" y="75" width="70" height="55" fill="rgba(34,197,94,0.2)" stroke="#0f172a" stroke-width="1.5"/>
            <text x="100" y="145" font-family="Arial" font-weight="bold">20</text>
            <text x="20" y="80" font-family="Arial" font-weight="bold">10</text>
            <text x="70" y="125" font-family="Arial">x</text>
        </svg>
        א. הביעו את שטח המלבן באמצעות הצלע x.<br>
        ב. מהן מידות המלבן שעבורו השטח הוא <strong>מקסימלי</strong>?`,
        options: [
            "א. S = 10x - 0.5x^2 | ב. 10 ו-5",
            "א. S = 20x - x^2 | ב. 10 ו-10",
            "א. S = 10x - 2x^2 | ב. 5 ו-10",
            "א. S = 20x - 2x^2 | ב. 5 ו-10"
        ],
        correctAnswer: 0,
        hint: "השתמשו בדמיון משולשים. אם צלע אחת של המלבן היא x על הניצב של ה-20, אז הצלע השנייה y מקיימת יחס דמיון עם הניצב של ה-10. בטאו את y ואז כפלו ב-x.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נסמן את צלעות המלבן ב-x ו-y. לפי דמיון משולשים בין המשולש הקטן מעל המלבן למשולש הגדול:", 
                math_expression: "y / 10 = (20 - x) / 20" 
            },
            { 
                verbal_explanation: "נבודד את הצלע השנייה y.", 
                math_expression: "y = 0.5 × (20 - x) = 10 - 0.5x" 
            },
            { 
                verbal_explanation: "נרכיב פונקציית שטח (אורך כפול רוחב).", 
                math_expression: "S = x × (10 - 0.5x) = 10x - 0.5x<sup>2</sup>" 
            },
            { 
                verbal_explanation: "סעיף ב': נגזור את הפונקציה ונשווה לאפס למציאת המקסימום.", 
                math_expression: "S' = 10 - x = 0 ➔ x = 10" 
            },
            { 
                verbal_explanation: "נמצא את הצלע השנייה על ידי הצבה.", 
                math_expression: "y = 10 - 0.5 × 10 = 5" 
            }
        ],
        final_answer: "א. S = 10x - 0.5x^2 | ב. 10 ו-5"
    },

    // שאלה 5 - טריגונומטריה במרחב (מבוסס על קיץ 2021)
    {
        topic: "bagrut_5_units",
        subTopic: "טריגונומטריה",
        question_text: `<strong>מתוך בגרות קיץ 2021 (פירמידה):</strong><br>
        בפירמידה ישרה SABCD שבסיסה ריבוע, אורך מקצוע הבסיס הוא 12 ס"מ.<br>
        הזווית שבין מקצוע צדדי לבסיס היא 50°.<br>
        
        א. חשבו את אורך אלכסון הבסיס AC.<br>
        ב. חשבו את גובה הפירמידה (h).<br>
        ג. חשבו את נפח הפירמידה.`,
        options: [
            "א. 16.97 | ב. 10.11 | ג. 485.28",
            "א. 16.97 | ב. 14.28 | ג. 685.44",
            "א. 24 | ב. 14.3 | ג. 686",
            "א. 12 | ב. 10 | ג. 480"
        ],
        correctAnswer: 0,
        hint: "סעיף א': פיתגורס בריבוע הבסיס. סעיף ב': השתמשו במשולש ישר זווית שנוצר בין הגובה, חצי האלכסון והמקצוע הצדדי. השתמשו בטנגנס 50°.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': אלכסון הבסיס בריבוע הוא יתר במשולש ישר זווית ושווה שוקיים (צלעות 12).", 
                math_expression: "AC<sup>2</sup> = 12<sup>2</sup> + 12<sup>2</sup> = 144 + 144 = 288" 
            },
            { 
                verbal_explanation: "נחלץ את אורך האלכסון.", 
                math_expression: "AC = √288 ≈ 16.97" 
            },
            { 
                verbal_explanation: "סעיף ב': נתבונן במשולש ישר זווית המכיל את הגובה ואת חצי האלכסון. חצי האלכסון הוא:", 
                math_expression: "16.97 / 2 = 8.485" 
            },
            { 
                verbal_explanation: "נשתמש בטנגנס למציאת הגובה מול הזווית הנתונה.", 
                math_expression: "tan(50°) = h / 8.485 ➔ h = 8.485 × 1.1917 ≈ 10.11" 
            },
            { 
                verbal_explanation: "סעיף ג': נפח פירמידה הוא שטח בסיס כפול גובה, חלקי 3.", 
                math_expression: "V = (12 × 12 × 10.11) / 3 = 1455.84 / 3 = 485.28" 
            }
        ],
        final_answer: "א. 16.97 | ב. 10.11 | ג. 485.28"
    },// ========================================================================
    // שאלון 35581 (5 יח"ל) | הכנה לבגרות - רמת פרימיום (חלק 1 - המשך)
    // ========================================================================

    // שאלה 6 - סדרות חשבוניות (מבוסס על בגרות חורף 2021, שאלה 3)
    {
        topic: "bagrut_5_units",
        subTopic: "סדרות",
        question_text: `<strong>מתוך בגרות חורף 2021, שאלה 3 (סדרה חשבונית):</strong><br>
        בסדרה חשבונית נתון כי האיבר השלישי הוא 11. <br>
        סכום עשרת האיברים הראשונים של הסדרה הוא 215.<br><br>
        א. מצאו את האיבר הראשון (a<sub>1</sub>) ואת הפרש הסדרה (d).<br>
        ב. בסדרה זו ישנם 40 איברים. חשבו את סכום 10 האיברים האחרונים בסדרה.`,
        options: [
            "א. a1=5, d=3 | ב. 1085",
            "א. a1=3, d=4 | ב. 1100",
            "א. a1=5, d=3 | ב. 960",
            "א. a1=7, d=2 | ב. 1085"
        ],
        correctAnswer: 0,
        hint: "סעיף א': בנו מערכת של שתי משוואות. משוואה אחת לאיבר השלישי (a1+2d=11) ומשוואה שנייה לנוסחת הסכום S10. סעיף ב': סכום 10 האחרונים הוא הסכום של כל 40 האיברים פחות הסכום של 30 האיברים הראשונים.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נבנה משוואה לאיבר השלישי לפי נוסחת האיבר הכללי.", 
                math_expression: "a<sub>1</sub> + 2d = 11" 
            },
            { 
                verbal_explanation: "נבנה משוואה שנייה לפי נוסחת סכום סדרה חשבונית עבור עשרת האיברים הראשונים.", 
                math_expression: "215 = (10 / 2) · [2a<sub>1</sub> + (10 - 1)d]" 
            },
            { 
                verbal_explanation: "נפשט את משוואת הסכום על ידי חלוקה ב-5.", 
                math_expression: "43 = 2a<sub>1</sub> + 9d" 
            },
            { 
                verbal_explanation: "נפתור את מערכת המשוואות. נכפיל את המשוואה הראשונה ב-2 ונחסר ביניהן.", 
                math_expression: "(2a<sub>1</sub> + 9d) - (2a<sub>1</sub> + 4d) = 43 - 22 ➔ 5d = 21 ➔ d = 3" 
            },
            { 
                verbal_explanation: "נציב חזרה למציאת האיבר הראשון.", 
                math_expression: "a<sub>1</sub> + 2(3) = 11 ➔ a<sub>1</sub> = 5" 
            },
            { 
                verbal_explanation: "סעיף ב': נחשב את סכום עשרת האחרונים (איברים 31 עד 40). נשתמש בנוסחת הסכום כאשר האיבר הראשון הוא a31.", 
                math_expression: "a<sub>31</sub> = 5 + 30 · 3 = 95" 
            },
            { 
                verbal_explanation: "נחשב את הסכום עבור 10 איברים החל מהאיבר ה-31.", 
                math_expression: "S = (10 / 2) · [2 · 95 + 9 · 3] = 5 · [190 + 27] = 5 · 217 = 1085" 
            }
        ],
        final_answer: "א. a1=5, d=3 | ב. 1085"
    },

    // שאלה 7 - גיאומטריה אוקלידית (מבוסס על קיץ 2022, מועד ב', שאלה 5)
    {
        topic: "bagrut_5_units",
        subTopic: "גיאומטריה",
        question_text: `<strong>מתוך בגרות קיץ 2022, מועד ב', שאלה 5 (פרופורציה ודמיון):</strong><br>
        במשולש ABC העבירו קטע DE המקביל לצלע BC. <br>
        נתון: AD = 9, DB = 6, וששטח המשולש הקטן ADE הוא 81 סמ"ר.<br>
        
        <svg viewBox="0 0 250 200" width="100%" height="180" style="display:block; margin:15px auto; max-width:220px; background:#fff;">
            <polygon points="125,20 40,180 210,180" fill="rgba(59,130,246,0.05)" stroke="#0f172a" stroke-width="2"/>
            <line x1="88" y1="95" x2="162" y2="95" stroke="#ef4444" stroke-width="2"/> <text x="120" y="15" font-family="Arial" font-weight="bold">A</text>
            <text x="30" y="185" font-family="Arial" font-weight="bold">B</text>
            <text x="215" y="185" font-family="Arial" font-weight="bold">C</text>
            <text x="70" y="95" font-family="Arial" font-weight="bold" fill="#ef4444">D</text>
            <text x="170" y="95" font-family="Arial" font-weight="bold" fill="#ef4444">E</text>
            <text x="105" y="60" font-family="Arial" font-size="12">9</text>
            <text x="60" y="140" font-family="Arial" font-size="12">6</text>
        </svg>
        א. מהו יחס הדמיון בין משולש ADE למשולש ABC?<br>
        ב. חשבו את שטח הטרפז DBCE.`,
        options: [
            "א. 3/5 | ב. 144",
            "א. 3/2 | ב. 54",
            "א. 3/5 | ב. 225",
            "א. 0.6 | ב. 125"
        ],
        correctAnswer: 0,
        hint: "סעיף א': יחס הדמיון הוא היחס בין הצלע הקטנה AD לצלע הגדולה AB. סעיף ב': יחס השטחים של משולשים דומים שווה לריבוע יחס הדמיון. מצאו את שטח המשולש הגדול וחסרו ממנו את הקטן.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נמצא את אורך הצלע המלאה AB של המשולש הגדול.", 
                math_expression: "AB = 9 + 6 = 15" 
            },
            { 
                verbal_explanation: "נחשב את יחס הדמיון (נסמנו באות k) בין המשולשים.", 
                math_expression: "k = 9 / 15 = 3 / 5 = 0.6" 
            },
            { 
                verbal_explanation: "סעיף ב': יחס השטחים בין המשולשים הוא ריבוע של יחס הדמיון.", 
                math_expression: "k<sup>2</sup> = (3/5)<sup>2</sup> = 9 / 25" 
            },
            { 
                verbal_explanation: "נשתמש ביחס כדי למצוא את שטח המשולש הגדול ABC.", 
                math_expression: "81 / S = 9 / 25 ➔ 9 · S = 2025 ➔ S = 225" 
            },
            { 
                verbal_explanation: "שטח הטרפז הוא ההפרש בין שטח המשולש הגדול לשטח המשולש הקטן ADE.", 
                math_expression: "S = 225 - 81 = 144" 
            }
        ],
        final_answer: "א. 3/5 | ב. 144"
    },

    // שאלה 8 - חקירת פונקציית שורש (מבוסס על קיץ 2021, מועד א', שאלה 6)
    {
        topic: "bagrut_5_units",
        subTopic: "חדו\"א",
        question_text: `<strong>מתוך בגרות קיץ 2021, מועד א', שאלה 6 (פונקציית שורש):</strong><br>
        נתונה הפונקציה: <div dir="ltr" style="display:inline-block; font-weight:bold;">f(x) = √(2x + 10)</div><br>
        מעבירים משיק לגרף הפונקציה בנקודה שבה <span dir="ltr">x = 3</span>.<br><br>
        א. מצאו את שיעור ה-y של נקודת ההשקה ואת שיפוע המשיק.<br>
        ב. מצאו את משוואת המשיק.<br>
        ג. חשבו את השטח הכלוא בין המשיק, גרף הפונקציה וציר ה-y.`,
        options: [
            "א. (3, 4), m=0.25 | ב. y = 0.25x + 3.25 | ג. 0.083",
            "א. (3, 4), m=0.5 | ב. y = 0.5x + 2.5 | ג. 0.125",
            "א. (3, 16), m=0.25 | ב. y = 0.25x + 15.75 | ג. 0.5",
            "א. (3, 4), m=1 | ב. y = x + 1 | ג. 1"
        ],
        correctAnswer: 0,
        hint: "סעיף א': הציבו x=3 בפונקציה. לשיפוע, גזרו את הפונקציה (נגזרת פנימית 2 חלקי פעמיים השורש). סעיף ג': השטח הוא אינטגרל של (המשיק פחות הפונקציה) בגבולות שבין 0 ל-3.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נחשב את הגובה של הפונקציה בנקודה x=3.", 
                math_expression: "f(3) = √(2 · 3 + 10) = √16 = 4" 
            },
            { 
                verbal_explanation: "נגזור את פונקציית השורש לפי כלל השרשרת.", 
                math_expression: "f'(x) = 2 / (2 · √(2x + 10)) = 1 / √(2x + 10)" 
            },
            { 
                verbal_explanation: "נציב x=3 בנגזרת כדי למצוא את שיפוע המשיק.", 
                math_expression: "m = 1 / √16 = 1 / 4 = 0.25" 
            },
            { 
                verbal_explanation: "סעיף ב': נרכיב משוואת ישר לפי נקודה (3, 4) ושיפוע 0.25.", 
                math_expression: "y - 4 = 0.25(x - 3) ➔ y = 0.25x - 0.75 + 4 = 0.25x + 3.25" 
            },
            { 
                verbal_explanation: "סעיף ג': נבנה אינטגרל לחישוב השטח בין המשיק (העליון) לפונקציה (התחתונה).", 
                math_expression: "S = ∫[(0.25x + 3.25) - √(2x + 10)] dx" 
            }
        ],
        final_answer: "א. (3, 4), m=0.25 | ב. y = 0.25x + 3.25 | ג. 0.083"
    },

    // שאלה 9 - טריגונומטריה (מבוסס על חורף 2023, שאלה 5)
    {
        topic: "bagrut_5_units",
        subTopic: "טריגונומטריה",
        question_text: `<strong>מתוך בגרות חורף 2023, שאלה 5 (משפט הקוסינוסים):</strong><br>
        במשולש ABC, אורך הצלע AB הוא 10 ס"מ ואורך הצלע AC הוא 14 ס"מ.<br>
        הזווית BAC היא זווית קהה, ושטח המשולש הוא 42 סמ"ר.<br>
        
        א. מצאו את גודל הזווית BAC.<br>
        ב. חשבו את אורך הצלע BC.`,
        options: [
            "א. 143.13° | ב. 22.8",
            "א. 36.87° | ב. 8.5",
            "א. 120° | ב. 20.8",
            "א. 150° | ב. 23.2"
        ],
        correctAnswer: 0,
        hint: "סעיף א': השתמשו בנוסחת השטח (חצי כפול מכפלת צלעות כפול סינוס הזווית). מכיוון שהזווית קהה, בחרו בפתרון שבין 90 ל-180 מעלות. סעיף ב': השתמשו במשפט הקוסינוסים.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נציב את הנתונים בנוסחת השטח הטריגונומטרית.", 
                math_expression: "42 = 0.5 · 10 · 14 · sin(α)" 
            },
            { 
                verbal_explanation: "נבודד את הסינוס.", 
                math_expression: "42 = 70 · sin(α) ➔ sin(α) = 0.6" 
            },
            { 
                verbal_explanation: "נמצא את הזווית במחשבון. מאחר והיא קהה, ניקח את הפתרון המשלים ל-180.", 
                math_expression: "α = 180° - 36.87° = 143.13°" 
            },
            { 
                verbal_explanation: "סעיף ב': נשתמש במשפט הקוסינוסים למציאת הצלע BC.", 
                math_expression: "BC<sup>2</sup> = 10<sup>2</sup> + 14<sup>2</sup> - 2 · 10 · 14 · cos(143.13°)" 
            },
            { 
                verbal_explanation: "נחשב את הערכים המספריים (קוסינוס של זווית קהה הוא שלילי).", 
                math_expression: "BC<sup>2</sup> = 100 + 196 - 280 · (-0.8) = 296 + 224 = 520" 
            },
            { 
                verbal_explanation: "נוציא שורש לתוצאה.", 
                math_expression: "BC = √520 ≈ 22.8" 
            }
        ],
        final_answer: "א. 143.13° | ב. 22.8"
    },

    // שאלה 10 - חדו"א: חקירת מנה (מבוסס על קיץ 2023, מועד א', שאלה 8)
    {
        topic: "bagrut_5_units",
        subTopic: "חדו\"א",
        question_text: `<strong>מתוך בגרות קיץ 2023, מועד א', שאלה 8:</strong><br>
        נתונה הפונקציה: <div dir="ltr" style="display:inline-block; font-weight:bold;">f(x) = (x<sup>2</sup> - 8) / (x - 3)</div><br>
        א. מצאו את האסימפטוטה האנכית של הפונקציה.<br>
        ב. מצאו את נקודות הקיצון של הפונקציה וקבעו את סוגן.`,
        options: [
            "א. x = 3 | ב. (2, 4) מקסימום, (4, 8) מינימום",
            "א. x = 3 | ב. (2, 4) מינימום, (4, 8) מקסימום",
            "א. x = 8 | ב. (3, 0) קיצון",
            "א. x = 3 | ב. (0, 2.66) מקסימום"
        ],
        correctAnswer: 0,
        hint: "אסימפטוטה אנכית מתקבלת מאיפוס המכנה. לקיצון, גזרו את המנה והשוו את מונה הנגזרת לאפס.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': האסימפטוטה האנכית היא הערך המאפס את המכנה.", 
                math_expression: "x - 3 = 0 ➔ x = 3" 
            },
            { 
                verbal_explanation: "סעיף ב': נגזור את הפונקציה לפי כלל המנה.", 
                math_expression: "f'(x) = [2x(x - 3) - 1(x<sup>2</sup> - 8)] / (x - 3)<sup>2</sup>" 
            },
            { 
                verbal_explanation: "נפשט את המונה ונשווה אותו לאפס.", 
                math_expression: "2x<sup>2</sup> - 6x - x<sup>2</sup> + 8 = 0 ➔ x<sup>2</sup> - 6x + 8 = 0" 
            },
            { 
                verbal_explanation: "נפתור את המשוואה הריבועית בעזרת טרינום.", 
                math_expression: "(x - 2)(x - 4) = 0 ➔ x = 2 , x = 4" 
            },
            { 
                verbal_explanation: "נציב בפונקציה המקורית למציאת הגבהים.", 
                math_expression: "f(2) = (4 - 8) / (2 - 3) = -4 / -1 = 4 ➔ (2, 4)" 
            },
            { 
                verbal_explanation: "נציב את הערך השני.", 
                math_expression: "f(4) = (16 - 8) / (4 - 3) = 8 / 1 = 8 ➔ (4, 8)" 
            },
            { 
                verbal_explanation: "בדיקת ערכים או נגזרת שנייה למונה תראה כי 2 היא מקסימום ו-4 היא מינימום.", 
                math_expression: "Max: (2, 4) , Min: (4, 8)" 
            }
        ],
        final_answer: "א. x = 3 | ב. (2, 4) מקסימום, (4, 8) מינימום"
    }
];
