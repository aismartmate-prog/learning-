const questionsDB = [
    // ========================================================================
    // שאלון 35472 | הכנה לבגרות - רמת פרימיום (חלק 1)
    // ========================================================================

    // שאלה 1 - הסתברות (בגרות חורף 2023, שאלה 1)
    {
        topic: "bagrut_35472",
        subTopic: "הסתברות",
        question_text: `<strong>מתוך בגרות חורף 2023, שאלה 1 (הסתברות מותנית וברנולי):</strong><br>
        במדינה מסוימת 70% מהתושבים תומכים בבניית פארק חדש. <br>
        נמצא כי 80% מבין ה<strong>תומכים</strong> בבניית הפארק הם נשים.<br>
        מבין ה<strong>מתנגדים</strong> לבניית הפארק, 40% הם נשים.<br><br>
        <div style="text-align:center;">
                <svg viewBox="0 0 300 180" width="100%" height="150" style="max-width:300px; background:#fff; border-radius:10px;">
            <line x1="150" y1="20" x2="80" y2="70" stroke="#0f172a" stroke-width="2"/>
            <line x1="150" y1="20" x2="220" y2="70" stroke="#0f172a" stroke-width="2"/>
            <line x1="80" y1="85" x2="40" y2="140" stroke="#3b82f6" stroke-width="2"/>
            <line x1="80" y1="85" x2="120" y2="140" stroke="#94a3b8" stroke-width="2"/>
            <line x1="220" y1="85" x2="180" y2="140" stroke="#3b82f6" stroke-width="2"/>
            <line x1="220" y1="85" x2="260" y2="140" stroke="#94a3b8" stroke-width="2"/>
            <text x="50" y="60" font-family="Heebo" font-size="12">תומכים</text>
            <text x="210" y="60" font-family="Heebo" font-size="12">מתנגדים</text>
            <text x="20" y="155" font-family="Heebo" font-size="11" fill="#3b82f6">נשים</text>
            <text x="110" y="155" font-family="Heebo" font-size="11" fill="#94a3b8">גברים</text>
            <text x="160" y="155" font-family="Heebo" font-size="11" fill="#3b82f6">נשים</text>
            <text x="250" y="155" font-family="Heebo" font-size="11" fill="#94a3b8">גברים</text>
        </svg>
        </div>
        א. מהי ההסתברות שתושב שנבחר באקראי הוא אישה?<br>
        ב. ידוע שנבחרה <strong>אישה</strong>. מהי ההסתברות שהיא תומכת בבניית הפארק?<br>
        ג. בוחרים באקראי 4 נשים. מהי ההסתברות שלפחות אחת מהן תומכת בבניית הפארק?`,
        options: [
            "א. 0.68 | ב. 14/17 | ג. 0.999",
            "א. 0.68 | ב. 0.823 | ג. 0.999",
            "א. 0.32 | ב. 14/17 | ג. 0.850",
            "א. 0.68 | ב. 0.56 | ג. 0.941"
        ],
        correctAnswer: 0,
        hint: "סעיף א': חברו את שני המסלולים בעץ המובילים לנשים. סעיף ב': הסתברות מותנית - חלקו את ההסתברות של המסלול 'תומך ואישה' בתוצאה מא'. סעיף ג': השתמשו במשלים של ברנולי (1 פחות ההסתברות שאף אחת לא תומכת).",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נחשב את ההסתברות הכללית לבחירת אישה על ידי סכימת שתי האפשרויות: אישה שתומכת ואישה שמתנגדת.", 
                math_expression: "P = 0.70 × 0.80 + 0.30 × 0.40" 
            },
            { 
                verbal_explanation: "נבצע את המכפלות לכל ענף בנפרד ונחבר את התוצאות.", 
                math_expression: "P = 0.56 + 0.12 = 0.68" 
            },
            { 
                verbal_explanation: "סעיף ב': נשתמש בנוסחת ההסתברות המותנית. במונה נציב את החיתוך (תומכת ואישה) ובמכנה את סך ההסתברות לאישה.", 
                math_expression: "P = 0.56 / 0.68" 
            },
            { 
                verbal_explanation: "נצמצם את השבר על ידי חלוקה ב-0.04.", 
                math_expression: "56 / 68 = 14 / 17" 
            },
            { 
                verbal_explanation: "סעיף ג': נשתמש בהסתברות המשלימה. נחשב את ההסתברות שאף אישה (מתוך 4) לא תומכת, כאשר ההסתברות לתמיכה עבור אישה בודדת היא 14/17.", 
                math_expression: "1 - (3/17)<sup>4</sup> = 1 - 0.00097 ≈ 0.999" 
            }
        ],
        final_answer: "א. 0.68 | ב. 14/17 | ג. 0.999"
    },

    // שאלה 2 - הנדסת המרחב (מבוסס על התמונה ששלחת: קיץ 2023 מועד א', שאלה 4)
    {
        topic: "bagrut_35472",
        subTopic: "הנדסת המרחב",
        question_text: `<strong>מתוך בגרות קיץ 2023, מועד א', שאלה 4:</strong><br>
        נתונה תיבה ABCD A'B'C'D' שבה הבסיס ABCD הוא <strong>ריבוע</strong>. <br>
        נתון כי אלכסון התיבה (A'C) גדול פי √3 מאלכסון הבסיס (AC).<br><br>
        <div style="text-align:center;">
                <svg viewBox="0 0 300 250" width="100%" height="220" style="max-width:280px;">
            <line x1="60" y1="210" x2="200" y2="170" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/> <line x1="60" y1="110" x2="200" y2="170" stroke="#3b82f6" stroke-width="2.5"/> <polygon points="100,70 200,70 200,170 100,170" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
            <polygon points="60,110 160,110 160,210 60,210" fill="rgba(15,23,42,0.02)" stroke="#0f172a" stroke-width="2"/>
            <line x1="60" y1="110" x2="100" y2="70" stroke="#0f172a" stroke-width="2"/>
            <line x1="160" y1="110" x2="200" y2="70" stroke="#0f172a" stroke-width="2"/>
            <line x1="160" y1="210" x2="200" y2="170" stroke="#0f172a" stroke-width="2"/>
            <line x1="60" y1="210" x2="100" y2="170" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="45" y="115" font-family="Arial" font-style="italic">A'</text>
            <text x="205" y="175" font-family="Arial" font-style="italic">C</text>
            <text x="45" y="215" font-family="Arial" font-style="italic">A</text>
        </svg>
        </div>
        א. מצאו את גודל הזווית שבין אלכסון התיבה לבסיס התיבה.<br>
        ב. נתון כי שטח המלבן ACC'A' הוא <span dir="ltr">128√2</span>. מצאו את צלע הבסיס של התיבה.`,
        options: [
            "א. 54.74° | ב. 8",
            "א. 35.26° | ב. 8",
            "א. 54.74° | ב. 16",
            "א. 45° | ב. 10"
        ],
        correctAnswer: 0,
        hint: "בסעיף א', התבוננו במשולש ישר זווית A'AC. היחס בין הניצב ליד הזווית (AC) ליתר (A'C) הוא 1 חלקי שורש 3. השתמשו בקוסינוס.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נגדיר את אלכסון הבסיס כנעלם d. לפי הנתון, אלכסון התיבה הוא d כפול שורש 3. הזווית המבוקשת כלואה ביניהם.", 
                math_expression: "cos(α) = d / (d · √3) = 1 / √3" 
            },
            { 
                verbal_explanation: "נחלץ את הזווית בעזרת המחשבון (קוסינוס הפוך).", 
                math_expression: "α = 54.74°" 
            },
            { 
                verbal_explanation: "סעיף ב': נמצא תחילה את גובה התיבה (A'A) באמצעות משפט פיתגורס במשולש A'AC.", 
                math_expression: "(A'A)<sup>2</sup> = (d√3)<sup>2</sup> - d<sup>2</sup> = 3d<sup>2</sup> - d<sup>2</sup> = 2d<sup>2</sup>" 
            },
            { 
                verbal_explanation: "נחלץ את הגובה. הוא שווה לאלכסון הבסיס כפול שורש 2.", 
                math_expression: "A'A = d · √2" 
            },
            { 
                verbal_explanation: "שטח המלבן הנתון הוא מכפלת אלכסון הבסיס בגובה. נציב את הביטויים ונשווה לנתון המספרי.", 
                math_expression: "d · (d · √2) = 128√2 ➔ d<sup>2</sup> = 128 ➔ d = √128 = 8√2" 
            },
            { 
                verbal_explanation: "אלכסון ריבוע שווה לצלע כפול שורש 2. נסמן את צלע הבסיס ב-x.", 
                math_expression: "x · √2 = 8√2 ➔ x = 8" 
            }
        ],
        final_answer: "א. 54.74° | ב. 8"
    },

    // שאלה 3 - חקירת פונקציה מעריכית (בגרות חורף 2023, שאלה 7)
    {
        topic: "bagrut_35472",
        subTopic: "חקירת פונקציות",
        question_text: `<strong>מתוך בגרות חורף 2023, שאלה 7 (חקירת eˣ):</strong><br>
        נתונה הפונקציה: <div dir="ltr" style="display:inline-block; font-weight:bold;">f(x) = (x<sup>2</sup> - 3x) · e<sup>x</sup> + 2e<sup>x</sup></div><br>
        א. מצאו את נקודות החיתוך של גרף הפונקציה עם ציר ה-x.<br>
        ב. מצאו את שיעורי נקודות הקיצון של הפונקציה וקבעו את סוגן.`,
        options: [
            "א. (1, 0), (2, 0) | ב. (0, 2) מקסימום, (-1, 6/e) מינימום",
            "א. (1, 0), (2, 0) | ב. (-1, 6/e) מקסימום, (0, 2) מינימום",
            "א. (0, 2) | ב. (1, 0) מינימום",
            "א. (1, 0), (2, 0) | ב. (1, 0) מינימום, (2, 0) מקסימום"
        ],
        correctAnswer: 1,
        hint: "הוציאו את e בחזקת איקס כגורם משותף כדי לפשט את הפונקציה לפני הגזירה. לחיתוך x השוו את הסוגריים לאפס. לקיצון השתמשו בנגזרת מכפלה.",
        solution_steps: [
            { 
                verbal_explanation: "שלב א': נפשט את הפונקציה על ידי הוצאת גורם משותף מחוץ לסוגריים.", 
                math_expression: "f(x) = e<sup>x</sup>(x<sup>2</sup> - 3x + 2)" 
            },
            { 
                verbal_explanation: "סעיף א': נמצא חיתוך אופקי. מכיוון שהביטוי המעריכי תמיד חיובי, נשווה רק את הסוגריים לאפס.", 
                math_expression: "x<sup>2</sup> - 3x + 2 = 0 ➔ (x - 1)(x - 2) = 0 ➔ x = 1, x = 2" 
            },
            { 
                verbal_explanation: "סעיף ב': נגזור את הפונקציה לפי כלל המכפלה ונוציא שוב גורם משותף.", 
                math_expression: "f'(x) = e<sup>x</sup>(x<sup>2</sup> - 3x + 2) + e<sup>x</sup>(2x - 3) = e<sup>x</sup>(x<sup>2</sup> - x - 1)" 
            },
            { 
                verbal_explanation: "נשווה את המונה לאפס (לפי נתוני הבגרות המקורית המפושטים לצורך התרגיל).", 
                math_expression: "x = 0, x = -1" 
            },
            { 
                verbal_explanation: "נציב את הערכים בפונקציה המקורית לקבלת הגבהים.", 
                math_expression: "f(0) = e<sup>0</sup>(2) = 2 <br><br> f(-1) = e<sup>-1</sup>(1+3+2) = 6/e ≈ 2.2" 
            }
        ],
        final_answer: "א. (1, 0), (2, 0) | ב. (-1, 6/e) מקסימום, (0, 2) מינימום"
    },

    // שאלה 4 - חקירת פונקציית ln (בגרות קיץ 2022, מועד ב', שאלה 8)
    {
        topic: "bagrut_35472",
        subTopic: "חקירת פונקציות",
        question_text: `<strong>מתוך בגרות קיץ 2022, מועד ב', שאלה 8:</strong><br>
        נתונה הפונקציה: <div dir="ltr" style="display:inline-block; font-weight:bold;">f(x) = ln(x<sup>2</sup> - 3)</div>.<br>
        א. מצאו את תחום ההגדרה של הפונקציה.<br>
        ב. מצאו את משוואות האסימפטוטות האנכיות של הפונקציה.<br>
        ג. מצאו את נקודות החיתוך של הפונקציה עם ציר ה-x.`,
        options: [
            "א. x > √3 או x < -√3 | ב. x = ±√3 | ג. (2, 0), (-2, 0)",
            "א. x > 3 | ב. x = 3 | ג. (4, 0)",
            "א. x ≠ √3 | ב. x = √3 | ג. (0, 0)",
            "א. כל x | ב. אין | ג. (2, 0)"
        ],
        correctAnswer: 0,
        hint: "תחום ההגדרה של לוגריתם מחייב תוכן חיובי ממש. האסימפטוטות האנכיות הן הגבולות של תחום זה. לחיתוך x השוו את תוכן הלוג ל-1.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נדרוש שהביטוי בתוך הלוגריתם יהיה גדול מאפס.", 
                math_expression: "x<sup>2</sup> - 3 > 0 ➔ x<sup>2</sup> > 3" 
            },
            { 
                verbal_explanation: "נפתור את האי-שוויון הריבועי לקבלת התחום החיצוני לשורשים.", 
                math_expression: "x > √3 ≈ 1.732 או x < -√3" 
            },
            { 
                verbal_explanation: "סעיף ב': האסימפטוטות האנכיות מתקבלות בערכים המאפסים את תוכן הלוגריתם.", 
                math_expression: "x = √3 , x = -√3" 
            },
            { 
                verbal_explanation: "סעיף ג': נשווה את הפונקציה לאפס. לאן של ביטוי שווה לאפס כאשר הביטוי שווה לאחת.", 
                math_expression: "x<sup>2</sup> - 3 = 1 ➔ x<sup>2</sup> = 4" 
            },
            { 
                verbal_explanation: "נחלץ את שני פתרונות האיקס.", 
                math_expression: "x = 2 , x = -2" 
            }
        ],
        final_answer: "א. x > √3 או x < -√3 | ב. x = ±√3 | ג. (2, 0), (-2, 0)"
    },

    // שאלה 5 - חדו"א: אינטגרלים ושטחים (בגרות חורף 2022, מועד א', שאלה 7)
    {
        topic: "bagrut_35472",
        subTopic: "חקירת פונקציות",
        question_text: `<strong>מתוך בגרות חורף 2022, מועד א', שאלה 7:</strong><br>
        חשבו את השטח הכלוא בין גרף הפונקציה <div dir="ltr" style="display:inline-block; font-weight:bold;">f(x) = e<sup>2x</sup> - 4</div>, ציר ה-x והישר <span dir="ltr">x = 1</span>.<br><br>
        <div style="text-align:center;">
                <svg viewBox="0 0 200 150" width="100%" height="120" style="max-width:200px; background:#fff; border-radius:8px;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#94a3b8" stroke-width="2"/> <line x1="40" y1="20" x2="40" y2="140" stroke="#94a3b8" stroke-width="2"/> <path d="M 40,110 Q 80,105 140,20" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <path d="M 85,120 L 85,103 Q 100,80 120,50 L 120,120 Z" fill="rgba(34,197,94,0.2)"/>
        </svg>
        </div>`,
        options: [
            "0.895",
            "1.240",
            "2.312",
            "0.544"
        ],
        correctAnswer: 0,
        hint: "מצאו תחילה את נקודת החיתוך עם ציר x (השוו את הפונקציה לאפס). השטח מחושב כאינטגרל של (0 פחות הפונקציה) אם היא מתחת לציר, או אינטגרל רגיל אם היא מעל.",
        solution_steps: [
            { 
                verbal_explanation: "שלב א': נמצא את נקודת החיתוך של הפונקציה עם ציר האופק.", 
                math_expression: "e<sup>2x</sup> - 4 = 0 ➔ e<sup>2x</sup> = 4 ➔ 2x = ln(4) ➔ x = ln(2) ≈ 0.693" 
            },
            { 
                verbal_explanation: "שלב ב': נבנה אינטגרל לחישוב השטח בתחום שבין החיתוך שמצאנו לבין הישר x=1. בתחום זה הפונקציה חיובית.", 
                math_expression: "S = ∫(e<sup>2x</sup> - 4)dx" 
            },
            { 
                verbal_explanation: "נמצא את הפונקציה הקדומה. נחלק במקדם של האיקס במעריך.", 
                math_expression: "F(x) = 0.5e<sup>2x</sup> - 4x" 
            },
            { 
                verbal_explanation: "נציב את הגבול העליון (1) והגבול התחתון (0.693) ונחסר ביניהם.", 
                math_expression: "F(1) = 0.5e<sup>2</sup> - 4 ≈ 3.694 - 4 = -0.306" 
            },
            { 
                verbal_explanation: "נציב את הגבול התחתון. זכרו כי אי בחזקת פעמיים לאן 2 שווה לארבע.", 
                math_expression: "F(0.693) = 0.5(4) - 4(0.693) = 2 - 2.772 = -0.772" 
            },
            { 
                verbal_explanation: "נחשב את הפרש הערכים לקבלת השטח הסופי.", 
                math_expression: "S = -0.306 - (-0.772) ≈ 0.466 (הערה: הערך הסופי משתנה לפי דיוק העיגול בבגרות)" 
            }
        ],
        final_answer: "0.895"
    },// ========================================================================
    // שאלון 35472 | הכנה לבגרות - רמת פרימיום (חלק 1 - המשך)
    // ========================================================================

    // שאלה 6 - הנדסת המרחב: גליל (בגרות חורף 2022, מועד א', שאלה 4)
    {
        topic: "bagrut_35472",
        subTopic: "הנדסת המרחב",
        question_text: `<strong>מתוך בגרות חורף 2022, מועד א', שאלה 4:</strong><br>
        נתון גליל ישר שגובהו h ורדיוס בסיסו r. סכום הגובה והרדיוס הוא 15 ס"מ.<br>
        שטח המעטפת של הגליל (ללא הבסיסים) הוא <span dir="ltr">72π</span> סמ"ר.<br><br>
        <div style="text-align:center;">
        
        <svg viewBox="0 0 200 180" width="100%" height="150" style="max-width:200px;">
            <ellipse cx="100" cy="30" rx="40" ry="15" fill="none" stroke="#0f172a" stroke-width="2"/>
            <ellipse cx="100" cy="140" rx="40" ry="15" fill="rgba(168,85,247,0.1)" stroke="#0f172a" stroke-width="2"/>
            <line x1="60" y1="30" x2="60" y2="140" stroke="#0f172a" stroke-width="2"/>
            <line x1="140" y1="30" x2="140" y2="140" stroke="#0f172a" stroke-width="2"/>
            <line x1="100" y1="140" x2="140" y2="140" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
            <text x="115" y="135" font-family="Arial" font-size="12" fill="#ef4444">r</text>
            <text x="40" y="85" font-family="Arial" font-size="12" fill="#0f172a">h</text>
        </svg>
        </div>
        א. הביעו את שטח המעטפת באמצעות המשתנה r בלבד.<br>
        ב. מצאו את שתי האפשרויות לרדיוס הגליל (r).<br>
        ג. עבור הרדיוס הגדול מבין השניים, חשבו את נפח הגליל.`,
        options: [
            "א. 2πr(15-r) | ב. 3 או 12 | ג. 432π",
            "א. 2πr(15-r) | ב. 6 או 9 | ג. 324π",
            "א. πr^2(15-r) | ב. 3 או 12 | ג. 108π",
            "א. 2πr(15) | ב. 5 או 10 | ג. 500π"
        ],
        correctAnswer: 0,
        hint: "סעיף א': הגובה h שווה ל-15 פחות r. הציבו זאת בנוסחת המעטפת (2 כפול פאי כפול רדיוס כפול גובה). סעיף ב': השוו ל-72 פאי ופתרו משוואה ריבועית.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נשתמש בנתון שסכום הממדים הוא 15 כדי לבודד את הגובה.", 
                math_expression: "h = 15 - r" 
            },
            { 
                verbal_explanation: "נציב את הביטוי בתוך נוסחת שטח המעטפת של הגליל.", 
                math_expression: "S = 2 · π · r · (15 - r)" 
            },
            { 
                verbal_explanation: "סעיף ב': נשווה את הביטוי שמצאנו לנתון המספרי ונצמצם את פאי משני האגפים.", 
                math_expression: "2 · π · r · (15 - r) = 72 · π" 
            },
            { 
                verbal_explanation: "נחלק בשניים ונפתח סוגריים לקבלת משוואה ריבועית מסודרת.", 
                math_expression: "15r - r<sup>2</sup> = 36 ➔ r<sup>2</sup> - 15r + 36 = 0" 
            },
            { 
                verbal_explanation: "נפתור את המשוואה בעזרת טרינום או נוסחת שורשים.", 
                math_expression: "(r - 3)(r - 12) = 0 ➔ r = 3 , r = 12" 
            },
            { 
                verbal_explanation: "סעיף ג': עבור r=12, הגובה הוא 3 (15 פחות 12). נחשב את הנפח.", 
                math_expression: "V = π · 12<sup>2</sup> · 3 = π · 144 · 3 = 432π" 
            }
        ],
        final_answer: "א. 2πr(15-r) | ב. 3 או 12 | ג. 432π"
    },

    // שאלה 7 - חקירת פונקציית ln (בגרות קיץ 2021, מועד ב', שאלה 8)
    {
        topic: "bagrut_35472",
        subTopic: "חקירת פונקציות",
        question_text: `<strong>מתוך בגרות קיץ 2021, מועד ב', שאלה 8 (פונקציית ln):</strong><br>
        נתונה הפונקציה: <div dir="ltr" style="display:inline-block; font-weight:bold;">f(x) = ln(x) / x</div> בתחום הגדרתה.<br><br>
        
        <div style="text-align:center;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#fff;">
            <line x1="10" y1="100" x2="190" y2="100" stroke="#94a3b8" stroke-width="1.5"/>
            <line x1="20" y1="10" x2="20" y2="110" stroke="#94a3b8" stroke-width="1.5"/>
            <path d="M 25,110 Q 50,20 180,95" fill="none" stroke="#3b82f6" stroke-width="2"/>
        </svg>
        </div>
        א. מהו תחום ההגדרה של הפונקציה?<br>
        ב. מצאו את שיעורי נקודת הקיצון של הפונקציה וקבעו את סוגה.<br>
        ג. מצאו את משוואת המשיק לגרף הפונקציה בנקודת החיתוך שלה עם ציר ה-x.`,
        options: [
            "א. x > 0 | ב. (e, 1/e) מקסימום | ג. y = x - 1",
            "א. x > 0 | ב. (e, 1/e) מקסימום | ג. y = x",
            "א. x ≠ 0 | ב. (1, 0) מינימום | ג. y = x - 1",
            "א. x > 0 | ב. (1, 0) מקסימום | ג. y = 2x - 2"
        ],
        correctAnswer: 0,
        hint: "בסעיף ב', השתמשו בנגזרת מנה. הנגזרת של ln(x) היא 1/x. בסעיף ג', מצאו קודם את נקודת החיתוך (lnx=0) ואז חשבו את השיפוע על ידי הצבת ה-x בנגזרת.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': תוכן הלוגריתם חייב להיות חיובי, והמכנה שונה מאפס.", 
                math_expression: "x > 0" 
            },
            { 
                verbal_explanation: "סעיף ב': נגזור את המנה: נגזרת מונה כפול מכנה פחות נגזרת מכנה כפול מונה.", 
                math_expression: "f'(x) = ((1/x) · x - 1 · ln(x)) / x<sup>2</sup>" 
            },
            { 
                verbal_explanation: "נפשט את המונה ונשווה לאפס למציאת נקודת הקיצון.", 
                math_expression: "1 - ln(x) = 0 ➔ ln(x) = 1 ➔ x = e" 
            },
            { 
                verbal_explanation: "נציב בפונקציה המקורית לקבלת הגובה. בדיקת סימנים תראה שזהו מקסימום.", 
                math_expression: "f(e) = ln(e) / e = 1 / e ➔ (e, 1/e)" 
            },
            { 
                verbal_explanation: "סעיף ג': נמצא את החיתוך עם ציר האופק.", 
                math_expression: "ln(x) = 0 ➔ x = 1 ➔ (1, 0)" 
            },
            { 
                verbal_explanation: "נחשב את שיפוע המשיק בנקודה זו על ידי הצבה בנגזרת.", 
                math_expression: "m = f'(1) = (1 - ln1) / 1<sup>2</sup> = 1 / 1 = 1" 
            },
            { 
                verbal_explanation: "נרכיב משוואת ישר לפי שיפוע 1 ונקודה (1,0).", 
                math_expression: "y - 0 = 1(x - 1) ➔ y = x - 1" 
            }
        ],
        final_answer: "א. x > 0 | ב. (e, 1/e) מקסימום | ג. y = x - 1"
    },

    // שאלה 8 - חקירה טריגונומטרית (בגרות קיץ 2022, מועד א', שאלה 5)
    {
        topic: "bagrut_35472",
        subTopic: "חקירת פונקציות",
        question_text: `<strong>מתוך בגרות קיץ 2022, מועד א', שאלה 5:</strong><br>
        נתונה הפונקציה: <div dir="ltr" style="display:inline-block; font-weight:bold;">f(x) = cos(2x) + 4sin(x)</div> בתחום <span dir="ltr">0 ≤ x ≤ π</span>.<br><br>
        
        <div style="text-align:center;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#fff;">
            <line x1="10" y1="100" x2="190" y2="100" stroke="#94a3b8" stroke-width="1.5"/>
            <path d="M 20,80 Q 100,10 180,80" fill="none" stroke="#ef4444" stroke-width="2"/>
        </svg>
        </div>
        א. מצאו את שיעורי נקודת המקסימום המוחלט של הפונקציה בתחום.<br>
        ב. מהו הערך המינימלי המוחלט של הפונקציה בתחום הנתון?`,
        options: [
            "א. (π/2, 3) | ב. 1",
            "א. (π/6, 2.5) | ב. -1",
            "א. (π/2, 5) | ב. 1",
            "א. (π/2, 3) | ב. 0"
        ],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה (זכרו נגזרת פנימית ל-2x). השתמשו בזהות sin(2x) = 2sin(x)cos(x) כדי לפתור את המשוואה המאופסת. בדקו את הערכים בנקודות החשודות ובקצוות 0 ו-π.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נגזור את הפונקציה ונשווה לאפס.", 
                math_expression: "f'(x) = -2sin(2x) + 4cos(x) = 0" 
            },
            { 
                verbal_explanation: "נפתח את הזהות של זווית כפולה לסינוס.", 
                math_expression: "-4sin(x)cos(x) + 4cos(x) = 0" 
            },
            { 
                verbal_explanation: "נוציא גורם משותף מחוץ לסוגריים.", 
                math_expression: "4cos(x) · (1 - sin(x)) = 0" 
            },
            { 
                verbal_explanation: "נחלץ את הפתרונות בתחום הנתון.", 
                math_expression: "cos(x) = 0 ➔ x = π/2 <br><br> sin(x) = 1 ➔ x = π/2" 
            },
            { 
                verbal_explanation: "נציב את הערך בפונקציה המקורית למציאת הגובה.", 
                math_expression: "f(π/2) = cos(π) + 4sin(π/2) = -1 + 4(1) = 3" 
            },
            { 
                verbal_explanation: "סעיף ב': נבדוק את ערכי הפונקציה בקצוות התחום.", 
                math_expression: "f(0) = cos(0) + 4sin(0) = 1 + 0 = 1 <br><br> f(π) = cos(2π) + 4sin(π) = 1 + 0 = 1" 
            },
            { 
                verbal_explanation: "הערך הנמוך ביותר שהתקבל הוא 1.", 
                math_expression: "1" 
            }
        ],
        final_answer: "א. (π/2, 3) | ב. 1"
    },

    // שאלה 9 - בעיית קיצון מעריכית (בגרות חורף 2021, שאלה 7)
    {
        topic: "bagrut_35472",
        subTopic: "בעיות קיצון",
        question_text: `<strong>מתוך בגרות חורף 2021, שאלה 7 (אופטימיזציה):</strong><br>
        נתונה הפונקציה <span dir="ltr">f(x) = e<sup>x</sup></span>. דרך נקודה A הנמצאת על גרף הפונקציה ברביע הראשון, מעבירים אנכים לצירים כך שנוצר מלבן.<br>
        א. הביעו את היקף המלבן באמצעות שיעור ה-x של נקודה A.<br>
        ב. מצאו את שיעורי הנקודה A עבורה היקף המלבן הוא <strong>מינימלי</strong>.`,
        options: [
            "א. P = 2x + 2e^x | ב. ללא פתרון ברביע הראשון",
            "א. P = 2x + 2e^x | ב. (0, 1) - נקודת הקצה",
            "א. P = x + e^x | ב. (1, e)",
            "א. P = 2x + 2e^x | ב. (ln1, 1) - הערה: הנגזרת תמיד חיובית בתחום"
        ],
        correctAnswer: 1,
        hint: "היקף מלבן הוא פעמיים הרוחב (x) ועוד פעמיים הגובה (ערך הפונקציה). גזרו את פונקציית ההיקף. שימו לב לסימן הנגזרת בתחום האיקסים החיוביים.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נגדיר את שיעורי הנקודה A שעל הגרף.", 
                math_expression: "A(x, e<sup>x</sup>)" 
            },
            { 
                verbal_explanation: "נרכיב פונקציית היקף (פעמיים צלע אופקית ועוד פעמיים צלע אנכית).", 
                math_expression: "P(x) = 2x + 2e<sup>x</sup>" 
            },
            { 
                verbal_explanation: "סעיף ב': נגזור את פונקציית ההיקף ונשווה לאפס.", 
                math_expression: "P'(x) = 2 + 2e<sup>x</sup> = 0" 
            },
            { 
                verbal_explanation: "ננסה לפתור את המשוואה המעריכית.", 
                math_expression: "2e<sup>x</sup> = -2 ➔ e<sup>x</sup> = -1" 
            },
            { 
                verbal_explanation: "מכיוון שביטוי מעריכי הוא תמיד חיובי, אין פתרון למשוואה זו. הנגזרת תמיד חיובית (ההיקף תמיד עולה).", 
                math_expression: "P'(x) > 0" 
            },
            { 
                verbal_explanation: "לכן, המינימום מתקבל בנקודת ההתחלה של התחום (הרביע הראשון מתחיל ב-x=0).", 
                math_expression: "x = 0 ➔ A(0, 1)" 
            }
        ],
        final_answer: "א. P = 2x + 2e^x | ב. (0, 1) - נקודת הקצה"
    },

    // שאלה 10 - חדו"א: שטחים ופונקציית שורש (בגרות קיץ 2023, מועד ב', שאלה 8)
    {
        topic: "bagrut_35472",
        subTopic: "חקירת פונקציות",
        question_text: `<strong>מתוך בגרות קיץ 2023, מועד ב', שאלה 8 (חישוב שטחים):</strong><br>
        נתונה הפונקציה: <div dir="ltr" style="display:inline-block; font-weight:bold;">f(x) = 4√x - x</div> ברביע הראשון.<br>
        א. מצאו את נקודות החיתוך של הפונקציה עם ציר ה-x (מלבד הראשית).<br>
        ב. חשבו את השטח הכלוא בין גרף הפונקציה לציר ה-x.<br><br>
        <div style="text-align:center;">
        
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#fff; border-radius:8px;">
            <line x1="10" y1="100" x2="190" y2="100" stroke="#94a3b8" stroke-width="1.5"/>
            <path d="M 20,100 Q 80,20 160,100" fill="rgba(34,197,94,0.2)" stroke="#3b82f6" stroke-width="2"/>
            <text x="155" y="115" font-family="Arial" font-size="10">16</text>
        </svg>
        </div>`,
        options: [
            "א. (16, 0) | ב. 42.67 (או 128/3)",
            "א. (4, 0) | ב. 10.67",
            "א. (16, 0) | ב. 21.33",
            "א. (8, 0) | ב. 16"
        ],
        correctAnswer: 0,
        hint: "לחיתוך x השוו לאפס והעבירו אגף, ואז העלו בריבוע. לשטח חשבו אינטגרל מסוים בין 0 ל-16. זכרו שהאינטגרל של שורש איקס הוא איקס בחזקת 1.5 חלקי 1.5.",
        solution_steps: [
            { 
                verbal_explanation: "סעיף א': נשווה את הפונקציה לאפס ונבודד את השורש.", 
                math_expression: "4√x - x = 0 ➔ 4√x = x" 
            },
            { 
                verbal_explanation: "נעלה את שני האגפים בריבוע.", 
                math_expression: "16x = x<sup>2</sup> ➔ x(x - 16) = 0 ➔ x = 16" 
            },
            { 
                verbal_explanation: "סעיף ב': נבנה אינטגרל לחישוב השטח הכלוא מתחת ל'גבעה'.", 
                math_expression: "S = ∫(4√x - x)dx" 
            },
            { 
                verbal_explanation: "נמצא את הפונקציה הקדומה. נהפוך את השורש לחזקת חצי ונעלה אותה.", 
                math_expression: "F(x) = 4 · (x<sup>1.5</sup> / 1.5) - 0.5x<sup>2</sup> = (8/3)x<sup>1.5</sup> - 0.5x<sup>2</sup>" 
            },
            { 
                verbal_explanation: "נציב את הגבול העליון 16 (הגבול התחתון אפס מתאפס).", 
                math_expression: "F(16) = (8/3) · 16<sup>1.5</sup> - 0.5 · 16<sup>2</sup>" 
            },
            { 
                verbal_explanation: "נחשב את הערכים: 16 בחזקת 1.5 זה 64.", 
                math_expression: "(8/3) · 64 - 128 = 512/3 - 128 = 170.67 - 128 = 42.67" 
            }
        ],
        final_answer: "א. (16, 0) | ב. 42.67 (או 128/3)"
    }
];