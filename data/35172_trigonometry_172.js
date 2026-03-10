const questionsDB = [
    // ========================================================================
    // תת נושא 1: פונקציות הסינוס, הקוסינוס והטנגנס
    // ========================================================================

    // --- שאלה 1 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: "במשולש ישר זווית, כיצד מוגדרת פונקציית הסינוס (sin) של זווית חדה?",
        options: ["הניצב שמול הזווית חלקי היתר", "הניצב שליד הזווית חלקי היתר", "הניצב שמול הזווית חלקי הניצב שליד הזווית", "היתר חלקי הניצב שמול הזווית"],
        correctAnswer: 0,
        hint: "סינוס מחפש את הצלע הרחוקה. זכרו את הכלל: סינוס = מול לחלק ליתר.",
        solution_steps: [
            { verbal_explanation: "בטריגונומטריה, פונקציות מתארות יחסים (שברים) בין צלעות במשולש ישר זווית.", math_expression: "יחסים במשולש" },
            { verbal_explanation: "הפונקציה סינוס (sin) מוגדרת תמיד בתור אורך הניצב שנמצא ממול לזווית, מחולק באורך של היתר (הצלע הארוכה ביותר מול הזווית הישרה).", math_expression: "sin(α) = מול / יתר" }
        ],
        final_answer: "הניצב שמול הזווית חלקי היתר"
    },

    // --- שאלה 2 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: "כיצד מוגדרת פונקציית הקוסינוס (cos) של זווית חדה במשולש ישר זווית?",
        options: ["הניצב שליד הזווית חלקי היתר", "הניצב שמול הזווית חלקי היתר", "הניצב שליד הזווית חלקי הניצב שמול הזווית", "היתר חלקי הניצב שליד הזווית"],
        correctAnswer: 0,
        hint: "המילה קוסינוס מתחילה בצליל 'קו', המרמז על הניצב שקרוב (ליד) הזווית.",
        solution_steps: [
            { verbal_explanation: "הפונקציה קוסינוס (cos) מתייחסת לצלע שמרכיבה את הזווית יחד עם היתר.", math_expression: "קוסינוס = קרוב" },
            { verbal_explanation: "ההגדרה הרשמית היא: אורך הניצב שסמוך (ליד) הזווית, מחולק באורך היתר.", math_expression: "cos(α) = ליד / יתר" }
        ],
        final_answer: "הניצב שליד הזווית חלקי היתר"
    },

    // --- שאלה 3 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: "כיצד מוגדרת פונקציית הטנגנס (tan) של זווית חדה במשולש ישר זווית?",
        options: ["הניצב שמול הזווית חלקי הניצב שליד הזווית", "הניצב שליד הזווית חלקי הניצב שמול הזווית", "הניצב שמול הזווית חלקי היתר", "הניצב שליד הזווית חלקי היתר"],
        correctAnswer: 0,
        hint: "טנגנס היא הפונקציה היחידה מבין השלוש שלא משתמשת ביתר בכלל. היא משווה רק בין שני הניצבים.",
        solution_steps: [
            { verbal_explanation: "הפונקציה טנגנס (tan) אינה כוללת את היתר (הצלע הארוכה) בחישוב.", math_expression: "ללא יתר" },
            { verbal_explanation: "היא מוגדרת כיחס בין הניצב שממול לזווית לבין הניצב שצמוד אליה (ליד).", math_expression: "tan(α) = מול / ליד" }
        ],
        final_answer: "הניצב שמול הזווית חלקי הניצב שליד הזווית"
    },

    // --- שאלה 4 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: `על פי השרטוט הבא, מהו היחס המייצג את sin(α) ?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:250px; display:block; margin:10px auto;">
            <polygon points="40,120 160,120 40,30" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <rect x="40" y="110" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <text x="100" y="135" font-size="12" font-weight="bold">4 (ליד)</text>
            <text x="10" y="80" font-size="12" font-weight="bold">3 (מול)</text>
            <text x="110" y="65" font-size="12" font-weight="bold" fill="#dc2626">5 (יתר)</text>
            <path d="M140,120 A20,20 0 0,0 148,111" fill="none" stroke="#10b981" stroke-width="2"/>
            <text x="130" y="115" font-size="14" font-weight="bold" fill="#10b981">α</text>
        </svg>`,
        options: ["3 / 5", "4 / 5", "3 / 4", "5 / 3"],
        correctAnswer: 0,
        hint: "זכרו את ההגדרה: סינוס שווה לניצב שמול הזווית לחלק ביתר. חפשו את המספרים המתאימים בשרטוט.",
        solution_steps: [
            { verbal_explanation: "נזהה את הצלעות הרלוונטיות לזווית α. הניצב שנמצא ממול לזווית אורכו 3.", math_expression: "מול = 3" },
            { verbal_explanation: "היתר (הצלע הארוכה מול הזווית הישרה) אורכו 5.", math_expression: "יתר = 5" },
            { verbal_explanation: "נציב בנוסחת הסינוס: מול חלקי יתר.", math_expression: "sin(α) = 3 / 5" }
        ],
        final_answer: "3 / 5"
    },

    // --- שאלה 5 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: `על פי השרטוט הבא, מהו היחס המייצג את cos(α) ?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:250px; display:block; margin:10px auto;">
            <polygon points="40,120 160,120 40,30" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <rect x="40" y="110" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <text x="100" y="135" font-size="12" font-weight="bold">12</text>
            <text x="20" y="80" font-size="12" font-weight="bold">5</text>
            <text x="110" y="65" font-size="12" font-weight="bold" fill="#dc2626">13</text>
            <path d="M140,120 A20,20 0 0,0 148,111" fill="none" stroke="#10b981" stroke-width="2"/>
            <text x="130" y="115" font-size="14" font-weight="bold" fill="#10b981">α</text>
        </svg>`,
        options: ["12 / 13", "5 / 13", "5 / 12", "13 / 12"],
        correctAnswer: 0,
        hint: "קוסינוס שווה לניצב ש-ליד הזווית לחלק ביתר. הניצב שנוגע בזווית (מלבד היתר) אורכו 12.",
        solution_steps: [
            { verbal_explanation: "נזהה את הצלעות. הניצב שצמוד (ליד) הזווית α הוא בעל אורך 12.", math_expression: "ליד = 12" },
            { verbal_explanation: "היתר (הצלע הארוכה במשולש) אורכו 13.", math_expression: "יתר = 13" },
            { verbal_explanation: "נציב בנוסחת הקוסינוס: ליד חלקי יתר.", math_expression: "cos(α) = 12 / 13" }
        ],
        final_answer: "12 / 13"
    },

    // --- שאלה 6 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: `במשולש ישר זווית נתון, הניצב מול זווית β הוא 8 ס"מ, והניצב ליד זווית β הוא 15 ס"מ. היתר הוא 17 ס"מ.<br>מהו ערכו של tan(β) ?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:250px; display:block; margin:10px auto;">
            <polygon points="40,120 160,120 160,30" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <rect x="150" y="110" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <text x="100" y="135" font-size="12" font-weight="bold">15</text>
            <text x="170" y="80" font-size="12" font-weight="bold">8</text>
            <text x="90" y="65" font-size="12" font-weight="bold" fill="#dc2626">17</text>
            <path d="M60,120 A20,20 0 0,1 68,111" fill="none" stroke="#f59e0b" stroke-width="2"/>
            <text x="75" y="115" font-size="14" font-weight="bold" fill="#f59e0b">β</text>
        </svg>`,
        options: ["8 / 15", "15 / 8", "8 / 17", "15 / 17"],
        correctAnswer: 0,
        hint: "טנגנס שווה לניצב שמול הזווית לחלק בניצב שלידה. היתר (17) כלל לא משתתף בחישוב הזה.",
        solution_steps: [
            { verbal_explanation: "על פי הנתונים, הניצב שנמצא מול זווית β הוא באורך 8.", math_expression: "מול = 8" },
            { verbal_explanation: "הניצב שצמוד (ליד) זווית β הוא באורך 15.", math_expression: "ליד = 15" },
            { verbal_explanation: "נוסחת הטנגנס היא 'מול חלקי ליד'. נציב את המספרים.", math_expression: "tan(β) = 8 / 15" }
        ],
        final_answer: "8 / 15"
    },

    // --- שאלה 7 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: "השתמשו במחשבון: מהו הערך של sin(30°) ?",
        options: ["0.5", "0.866", "1", "0.707"],
        correctAnswer: 0,
        hint: "הקלידו במחשבון את המילה sin, לאחר מכן 30, וסגרו סוגריים. ודאו שהמחשבון על מצב מעלות (Degrees - מופיעה האות D קטנה למעלה).",
        solution_steps: [
            { verbal_explanation: "זווית של 30 מעלות היא זווית מיוחדת וחשובה בטריגונומטריה.", math_expression: "α = 30°" },
            { verbal_explanation: "המשמעות הגיאומטרית היא שבכל משולש ישר זווית עם זווית של 30°, הניצב שמולה שווה בדיוק לחצי מהיתר.", math_expression: "מול / יתר = 1 / 2" },
            { verbal_explanation: "הקלדה במחשבון תיתן את התוצאה העשרונית המדויקת.", math_expression: "sin(30°) = 0.5" }
        ],
        final_answer: "0.5"
    },

    // --- שאלה 8 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: "השתמשו במחשבון: מהו הערך של cos(60°) ?",
        options: ["0.5", "0.866", "1", "0"],
        correctAnswer: 0,
        hint: "הקלידו cos(60) במחשבון. שימו לב שהתוצאה תהיה זהה לחלוטין לתוצאה של sin(30).",
        solution_steps: [
            { verbal_explanation: "במשולש ישר זווית שבו זווית אחת היא 60°, הניצב שסמוך אליה (ליד) שווה בדיוק למחצית היתר.", math_expression: "α = 60°" },
            { verbal_explanation: "לכן, היחס של 'ליד חלקי יתר' יהיה תמיד חצי.", math_expression: "cos(60°) = 1 / 2" },
            { verbal_explanation: "במחשבון התוצאה מוצגת כשבר עשרוני.", math_expression: "cos(60°) = 0.5" }
        ],
        final_answer: "0.5"
    },

    // --- שאלה 9 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: "השתמשו במחשבון: מהו הערך של tan(45°) ?",
        options: ["1", "0.5", "1.414", "0.707"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית שבו זווית אחת היא 45 מעלות, גם הזווית השנייה היא 45 (כדי להשלים ל-180). לכן זהו משולש שווה שוקיים והניצבים שווים זה לזה.",
        solution_steps: [
            { verbal_explanation: "הפונקציה טנגנס בודקת את היחס 'מול חלקי ליד'.", math_expression: "tan(α) = מול / ליד" },
            { verbal_explanation: "בזווית של 45 מעלות, שני הניצבים במשולש ישר זווית שווים בדיוק באורכם.", math_expression: "מול = ליד" },
            { verbal_explanation: "מספר שמחולק בעצמו (כשהם שווים) שווה תמיד ל-1.", math_expression: "tan(45°) = 1" }
        ],
        final_answer: "1"
    },

    // --- שאלה 10 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: "האם ייתכן שפונקציית הסינוס של זווית חדה תהיה שווה ל- 1.5 ?",
        options: ["לא, כי הניצב חייב להיות קצר מהיתר", "כן, זה תלוי בגודל המשולש", "לא, כי סינוס מתאר זוויות ולא צלעות", "כן, עבור זוויות קהות"],
        correctAnswer: 0,
        hint: "סינוס הוא היחס בין הניצב ליתר. במשולש ישר זווית, היתר הוא תמיד (ללא יוצא מן הכלל) הצלע הארוכה ביותר.",
        solution_steps: [
            { verbal_explanation: "נוסחת הסינוס היא ניצב שמול הזווית חלקי היתר.", math_expression: "sin = מול / יתר" },
            { verbal_explanation: "בגיאומטריה, היתר מונח מול הזווית של ה-90 מעלות, ולכן הוא תמיד הצלע הגדולה ביותר במשולש.", math_expression: "יתר > ניצב" },
            { verbal_explanation: "כאשר אנו מחלקים מספר קטן במספר גדול ממנו, התוצאה חייבת להיות שבר הקטן מ-1.", math_expression: "שבר < 1" },
            { verbal_explanation: "לכן 1.5 (שגדול מ-1) היא תוצאה בלתי אפשרית לסינוס של זווית במשולש ישר זווית.", math_expression: "בלתי אפשרי" }
        ],
        final_answer: "לא, כי הניצב חייב להיות קצר מהיתר"
    },

    // --- שאלה 11 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: "במחשבון, איזו פעולה מאפשרת לנו למצוא את גודל הזווית עצמה, אם אנו יודעים שהסינוס שלה שווה ל-0.5?",
        options: ["Shift ואז sin (או sin⁻¹)", "ללחוץ על sin ואז 0.5", "ללחוץ על cos ואז 0.5", "לחלק 0.5 ב-sin"],
        correctAnswer: 0,
        hint: "כאשר מחפשים את 'הבפנים' (הזווית שחסרה לנו), משתמשים בפונקציה ההפוכה במחשבון, המסומנת לרוב במינוס 1 למעלה, ומופעלת על ידי כפתור ה-Shift.",
        solution_steps: [
            { verbal_explanation: "אנו יודעים את התוצאה של היחס (0.5) אך חסרה לנו הזווית המקורית (α).", math_expression: "sin(α) = 0.5" },
            { verbal_explanation: "הפעולה ההפוכה לסינוס נקראת ארק-סינוס, והיא מסומנת במחשבון כ- sin⁻¹.", math_expression: "α = sin⁻¹(0.5)" },
            { verbal_explanation: "כדי להפעיל אותה, לוחצים על כפתור Shift (או 2nd), ואז על כפתור sin, מזינים 0.5 ומקבלים את הזווית 30°.", math_expression: "Shift -> sin -> 0.5 = 30°" }
        ],
        final_answer: "Shift ואז sin (או sin⁻¹)"
    },

    // --- שאלה 12 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: "ידוע שעבור זווית מסוימת α מתקיים: tan(α) = 2. איזה מהמשפטים הבאים מתאר נכונה את המשולש?",
        options: ["הניצב שמול הזווית גדול פי 2 מהניצב שלידה", "היתר גדול פי 2 מהניצב שמול הזווית", "הניצב שליד הזווית גדול פי 2 מהניצב שמולה", "שני הניצבים שווים זה לזה"],
        correctAnswer: 0,
        hint: "טנגנס הוא היחס בין מול ל-ליד. אם התוצאה היא 2, זה אומר שהמונה (מול) כפול בגודלו מהמכנה (ליד).",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה של פונקציית הטנגנס.", math_expression: "tan(α) = מול / ליד" },
            { verbal_explanation: "הנתון אומר שהיחס הזה שווה ל-2 שלמים.", math_expression: "מול / ליד = 2" },
            { verbal_explanation: "נכפיל את המכנה ונקבל משוואה ברורה ללא שברים.", math_expression: "מול = 2 × ליד" },
            { verbal_explanation: "מסקנה: הניצב שממול גדול פי שניים (כפול) מהניצב שצמוד לזווית.", math_expression: "מול גדול פי 2" }
        ],
        final_answer: "הניצב שמול הזווית גדול פי 2 מהניצב שלידה"
    },

    // --- שאלה 13 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: "במשולש ישר זווית, זווית אחת היא בת 90 מעלות. זווית שנייה נסמן ב-α. למה תהיה שווה הזווית השלישית (β)?",
        options: ["90° פחות α", "180° פחות α", "היא שווה ל-α", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "סכום הזוויות במשולש הוא תמיד 180 מעלות. אם זווית ישרה אחת כבר 'לקחה' 90, נשארו בדיוק 90 מעלות לחלק בין שתי הזוויות החדות.",
        solution_steps: [
            { verbal_explanation: "בכל משולש, סכום שלוש הזוויות יחד הוא 180 מעלות.", math_expression: "α + β + 90° = 180°" },
            { verbal_explanation: "נעביר את ה-90 לאגף השני ונחסר.", math_expression: "α + β = 90°" },
            { verbal_explanation: "כדי לבטא את הזווית השלישית (β), נעביר את α אגף.", math_expression: "β = 90° - α" },
            { verbal_explanation: "לכן, שתי הזוויות החדות במשולש ישר זווית תמיד משלימות זו את זו ל-90 מעלות.", math_expression: "משלימות ל-90°" }
        ],
        final_answer: "90° פחות α"
    },

    // --- שאלה 14 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: "איזה יחס נקבל אם נחלק את הניצב שמול הזווית, ביתר?",
        options: ["סינוס (sin)", "קוסינוס (cos)", "טנגנס (tan)", "משפט פיתגורס"],
        correctAnswer: 0,
        hint: "חזרה על הגדרות: מול חלקי יתר זה סינוס. ליד חלקי יתר זה קוסינוס. מול חלקי ליד זה טנגנס.",
        solution_steps: [
            { verbal_explanation: "זוהי שאלת שינון יסודית של חוקי הטריגונומטריה.", math_expression: "הגדרות בסיס" },
            { verbal_explanation: "היחס בין הניצב הרחוק מהזווית (שמולה) לבין הצלע הארוכה ביותר (היתר) הוא ההגדרה של סינוס.", math_expression: "sin = מול / יתר" }
        ],
        final_answer: "סינוס (sin)"
    },

    // --- שאלה 15 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "פונקציות הסינוס, הקוסינוס והטנגנס",
        question: `מה קורה לערך של הפונקציה sin(α) ככל שהזווית החדה α גדלה (מ-0 לכיוון 90 מעלות)?<br> (מומלץ לנסות להציב במחשבון sin(10), sin(45), sin(80)).`,
        options: ["הערך גדל ומתקרב ל-1", "הערך קטן ומתקרב ל-0", "הערך נשאר קבוע", "הערך גדל עד אינסוף"],
        correctAnswer: 0,
        hint: "ככל שהזווית נפתחת כלפי מעלה, הניצב שממול לה הופך ארוך וגבוה יותר, ולכן הוא מתקרב באורכו לאורך של היתר. לכן השבר 'מול חלקי יתר' גדל.",
        solution_steps: [
            { verbal_explanation: "נבדוק בעזרת מחשבון מספר זוויות הולכות וגדלות.", math_expression: "sin(10°) ≈ 0.173" },
            { verbal_explanation: "נגדיל את הזווית ל-45.", math_expression: "sin(45°) ≈ 0.707" },
            { verbal_explanation: "נגדיל את הזווית ל-80.", math_expression: "sin(80°) ≈ 0.984" },
            { verbal_explanation: "אנו רואים בבירור שככל שהזווית גדלה, ערך הסינוס שלה גדל גם הוא, עד שלבסוף ב-90 מעלות הוא יגיע בדיוק ל-1.", math_expression: "ערך עולה" }
        ],
        final_answer: "הערך גדל ומתקרב ל-1"
    },

    // ========================================================================
    // תת נושא 2: מציאת צלעות וזוויות במשולש ישר זווית
    // ========================================================================

    // --- שאלה 16 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: `במשולש ישר זווית, אורך היתר הוא 10 ס"מ וזווית אחת היא בת 30°. מהו אורך הניצב שמול זווית זו?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <polygon points="40,120 160,120 160,50" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <rect x="150" y="110" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <text x="170" y="90" font-size="12" font-weight="bold" fill="#dc2626">x</text>
            <text x="90" y="75" font-size="12" font-weight="bold">10</text>
            <path d="M60,120 A20,20 0 0,0 66,110" fill="none" stroke="#10b981" stroke-width="2"/>
            <text x="75" y="115" font-size="12" font-weight="bold" fill="#10b981">30°</text>
        </svg>`,
        options: ["5 ס\"מ", "8.66 ס\"מ", "10 ס\"מ", "2 ס\"מ"],
        correctAnswer: 0,
        hint: "ידוע לכם היתר, ואתם מחפשים את הניצב ש-מול הזווית. הפונקציה המתאימה היא סינוס. רשמו משוואה: sin(30°) = x / 10.",
        solution_steps: [
            { verbal_explanation: "נזהה את הנתונים: הזווית היא 30 מעלות. אנו מחפשים את הצלע שמולה (x), והיתר ידוע (10).", math_expression: "זווית=30°, יתר=10, מול=x" },
            { verbal_explanation: "הפונקציה המקשרת בין מול ליתר היא סינוס.", math_expression: "sin(30°) = x / 10" },
            { verbal_explanation: "כדי לבודד את x, נכפיל את שני האגפים ב-10.", math_expression: "x = 10 × sin(30°)" },
            { verbal_explanation: "נחשב במחשבון. sin(30°) הוא בדיוק 0.5. עשר כפול חצי שווה 5.", math_expression: "x = 10 × 0.5 = 5" }
        ],
        final_answer: "5 ס\"מ"
    },

    // --- שאלה 17 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: "במשולש ישר זווית, אורך היתר הוא 20 ס\"מ וזווית אחת היא בת 60°. מהו אורך הניצב שליד זווית זו?",
        options: ["10 ס\"מ", "17.32 ס\"מ", "20 ס\"מ", "40 ס\"מ"],
        correctAnswer: 0,
        hint: "הפעם אתם מחפשים את הניצב ש-ליד הזווית כשהיתר נתון. הפונקציה המתאימה היא קוסינוס (cos). הציבו: cos(60°) = x / 20.",
        solution_steps: [
            { verbal_explanation: "נזהה את הנתונים: זווית=60°. יתר=20. אנו מחפשים את הניצב ליד (x).", math_expression: "פונקציה מתאימה: cos" },
            { verbal_explanation: "נרכיב את המשוואה.", math_expression: "cos(60°) = x / 20" },
            { verbal_explanation: "נכפיל את המשוואה ב-20 כדי לבודד את הנעלם.", math_expression: "x = 20 × cos(60°)" },
            { verbal_explanation: "במחשבון, cos(60°) שווה לחצי (0.5). 20 כפול חצי שווה 10.", math_expression: "x = 20 × 0.5 = 10" }
        ],
        final_answer: "10 ס\"מ"
    },

    // --- שאלה 18 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: "אורך הניצב שליד זווית בת 45° הוא 5 ס\"מ. מהו אורך הניצב שמול הזווית הזו?",
        options: ["5 ס\"מ", "10 ס\"מ", "7.07 ס\"מ", "2.5 ס\"מ"],
        correctAnswer: 0,
        hint: "כשיש שני ניצבים (אחד נתון ואחד מבוקש), משתמשים בטנגנס (tan). ניתן גם לזכור שמשולש ישר זווית עם 45 מעלות הוא תמיד משולש שווה שוקיים.",
        solution_steps: [
            { verbal_explanation: "שיטה א' - טריגונומטריה: נשתמש בפונקציית טנגנס המקשרת בין שני הניצבים.", math_expression: "tan(45°) = x / 5" },
            { verbal_explanation: "נכפיל ב-5.", math_expression: "x = 5 × tan(45°)" },
            { verbal_explanation: "במחשבון, טנגנס 45 שווה ל-1. לכן 5 כפול 1 שווה 5.", math_expression: "x = 5 × 1 = 5" },
            { verbal_explanation: "שיטה ב' - גיאומטריה: אם זווית אחת היא 45° והשנייה 90°, השלישית חייבת להיות 45°. לכן זה משולש שווה שוקיים והניצבים שווים זה לזה.", math_expression: "x = 5" }
        ],
        final_answer: "5 ס\"מ"
    },

    // --- שאלה 19 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: `במשולש ישר זווית, הניצב מול הזווית של 30° הוא באורך 6 ס"מ. מהו אורך היתר של המשולש?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <polygon points="40,120 160,120 160,50" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <rect x="150" y="110" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <text x="170" y="90" font-size="12" font-weight="bold">6</text>
            <text x="90" y="75" font-size="12" font-weight="bold" fill="#dc2626">x</text>
            <path d="M60,120 A20,20 0 0,0 66,110" fill="none" stroke="#10b981" stroke-width="2"/>
            <text x="75" y="115" font-size="12" font-weight="bold" fill="#10b981">30°</text>
        </svg>`,
        options: ["12 ס\"מ", "3 ס\"מ", "10.39 ס\"מ", "15 ס\"מ"],
        correctAnswer: 0,
        hint: "היזהרו! הפעם ה-x נמצא במכנה, כי אנו מחפשים את היתר. המשוואה: sin(30°) = 6 / x. כדי לחלץ את איקס, חלקו את 6 בסינוס 30.",
        solution_steps: [
            { verbal_explanation: "אנו יודעים את הזווית ואת הניצב שמולה (6). אנו מחפשים את היתר (x). נשתמש בסינוס.", math_expression: "sin(30°) = 6 / x" },
            { verbal_explanation: "כדי לפתור משוואה שבה הנעלם נמצא במכנה, נכפיל תחילה ב-x כדי להעלותו למונה.", math_expression: "x × sin(30°) = 6" },
            { verbal_explanation: "כעת נחלק בפונקציית הסינוס כדי לבודד את ה-x לגמרי.", math_expression: "x = 6 / sin(30°)" },
            { verbal_explanation: "במחשבון, 6 לחלק ל-0.5 שווה ל-12.", math_expression: "x = 12" }
        ],
        final_answer: "12 ס\"מ"
    },

    // --- שאלה 20 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: "במשולש ישר זווית, הניצב שליד זווית של 60° שווה ל-8 ס\"מ. מהו אורך היתר?",
        options: ["16 ס\"מ", "4 ס\"מ", "13.85 ס\"מ", "10 ס\"מ"],
        correctAnswer: 0,
        hint: "הניצב ליד והיתר קשורים דרך פונקציית קוסינוס (cos). הציבו: cos(60°) = 8 / x. חלצו את איקס על ידי חילוק: 8 חלקי קוסינוס 60.",
        solution_steps: [
            { verbal_explanation: "נזהה שהנתונים הם ניצב שליד (8) ויתר מבוקש (x). לכן נבחר בקוסינוס.", math_expression: "cos(60°) = 8 / x" },
            { verbal_explanation: "נכפיל ב-x כדי להוציאו מהמכנה.", math_expression: "x × cos(60°) = 8" },
            { verbal_explanation: "נחלק בקוסינוס 60.", math_expression: "x = 8 / cos(60°)" },
            { verbal_explanation: "מאחר שקוסינוס 60 הוא חצי (0.5), חלוקה בחצי תכפיל את המספר.", math_expression: "x = 8 / 0.5 = 16" }
        ],
        final_answer: "16 ס\"מ"
    },

    // --- שאלה 21 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: "במשולש ישר זווית, אורך הניצב מול זווית α הוא 5 ס\"מ, ואורך היתר הוא 10 ס\"מ. מהו גודלה של זווית α ?",
        options: ["30°", "60°", "45°", "90°"],
        correctAnswer: 0,
        hint: "בנו משוואה: sin(α) = 5 / 10. השתמשו בפונקציה ההפוכה במחשבון (Shift ואז sin) למספר 0.5 כדי למצוא את הזווית.",
        solution_steps: [
            { verbal_explanation: "אנו יודעים את הניצב ממול (5) ואת היתר (10). היחס ביניהם מתואר על ידי סינוס.", math_expression: "sin(α) = 5 / 10" },
            { verbal_explanation: "נחשב את היחס כשבר עשרוני.", math_expression: "sin(α) = 0.5" },
            { verbal_explanation: "כדי למצוא את הזווית עצמה, נשתמש בארק-סינוס (מופיע כ-sin⁻¹ במחשבון).", math_expression: "α = sin⁻¹(0.5)" },
            { verbal_explanation: "התוצאה במחשבון נותנת 30 מעלות.", math_expression: "α = 30°" }
        ],
        final_answer: "30°"
    },

    // --- שאלה 22 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: "במשולש ישר זווית, הניצב שליד זווית β הוא 6 מטרים, והיתר הוא 12 מטרים. מהו גודל הזווית β ?",
        options: ["60°", "30°", "45°", "75°"],
        correctAnswer: 0,
        hint: "ניצב ליד ויתר מרמזים על שימוש בקוסינוס (cos). חשבו 6 חלקי 12 (0.5), ואז בצעו Shift cos על התוצאה.",
        solution_steps: [
            { verbal_explanation: "היחס בין ניצב ליד ליתר הוא קוסינוס.", math_expression: "cos(β) = 6 / 12" },
            { verbal_explanation: "נחשב את השבר.", math_expression: "cos(β) = 0.5" },
            { verbal_explanation: "נפעיל פונקציה הפוכה למציאת הזווית.", math_expression: "β = cos⁻¹(0.5)" },
            { verbal_explanation: "התוצאה במחשבון תהיה 60 מעלות.", math_expression: "β = 60°" }
        ],
        final_answer: "60°"
    },

    // --- שאלה 23 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: "במשולש ישר זווית, אורך הניצב מול הזווית הוא 4 ס\"מ ואורך הניצב שליד הזווית הוא 4 ס\"מ. ללא חישוב מסובך, מהו גודל הזווית?",
        options: ["45°", "30°", "60°", "90°"],
        correctAnswer: 0,
        hint: "כאשר שני הניצבים שווים זה לזה, המשולש הוא גם ישר זווית וגם שווה שוקיים. כמה נשאר לשתי זוויות הבסיס מתוך 180 מעלות?",
        solution_steps: [
            { verbal_explanation: "ניתן לפתור גיאומטרית: אם ניצב שווה לניצב, המשולש שווה שוקיים. לכן זוויות הבסיס שוות זו לזו (90 נחלק ב-2 שווה 45).", math_expression: "α = 45°" },
            { verbal_explanation: "נבדוק בדרך טריגונומטרית: טנגנס מקשר בין שני הניצבים.", math_expression: "tan(α) = 4 / 4 = 1" },
            { verbal_explanation: "נמצא את הזווית בעזרת המחשבון (Shift tan של 1).", math_expression: "α = tan⁻¹(1) = 45°" }
        ],
        final_answer: "45°"
    },

    // --- שאלה 24 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: `סולם שאורכו 10 מטרים נשען על קיר אנכי. <br>הזווית שנוצרת בין הסולם לקרקע היא 30 מעלות.<br>לאיזה גובה על הקיר מגיע הסולם?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="160" y1="130" x2="160" y2="20" stroke="#0f172a" stroke-width="4"/>
            <line x1="20" y1="130" x2="180" y2="130" stroke="#0f172a" stroke-width="4"/>
            <line x1="60" y1="130" x2="160" y2="30" stroke="#f59e0b" stroke-width="4"/>
            <line x1="58" y1="120" x2="158" y2="20" stroke="#f59e0b" stroke-width="4"/>
            <path d="M80,130 A20,20 0 0,0 85,115" fill="none" stroke="#10b981" stroke-width="2"/>
            <text x="90" y="125" font-size="12" font-weight="bold" fill="#10b981">30°</text>
            <text x="95" y="70" font-size="12" font-weight="bold" transform="rotate(-45 95,70)">10 מ'</text>
            <text x="175" y="80" font-size="12" fill="#dc2626" font-weight="bold">h = ?</text>
        </svg>`,
        options: ["5 מטרים", "8.66 מטרים", "10 מטרים", "20 מטרים"],
        correctAnswer: 0,
        hint: "דמיינו משולש ישר זווית. הסולם הוא היתר (10). הקיר הוא הניצב שמול הזווית של ה-30 מעלות. השתמשו בסינוס.",
        solution_steps: [
            { verbal_explanation: "נזהה את מרכיבי המשולש. הקיר והקרקע יוצרים זווית ישרה (90°).", math_expression: "" },
            { verbal_explanation: "הסולם הוא הצלע שמול הזווית הישרה, ולכן הוא היתר.", math_expression: "יתר = 10" },
            { verbal_explanation: "הגובה המבוקש על הקיר הוא הניצב שנמצא מול הזווית הנתונה של 30 מעלות.", math_expression: "מול = h" },
            { verbal_explanation: "הפונקציה המתאימה היא סינוס.", math_expression: "sin(30°) = h / 10" },
            { verbal_explanation: "נכפיל ב-10 כדי לחלץ את h.", math_expression: "h = 10 × sin(30°)" },
            { verbal_explanation: "נחשב ונקבל את התשובה.", math_expression: "h = 10 × 0.5 = 5" }
        ],
        final_answer: "5 מטרים"
    },

    // --- שאלה 25 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: "ילד מעיף עפיפון. אורך החוט המתוח של העפיפון הוא 50 מטרים. זווית ההגבהה (הזווית בין החוט לקרקע האופקית) היא 60°. באיזה גובה מרחף העפיפון מעל פני הקרקע? (עגלו ל-2 ספרות עשרוניות).",
        options: ["43.30 מטרים", "25.00 מטרים", "50.00 מטרים", "86.60 מטרים"],
        correctAnswer: 0,
        hint: "אורך החוט הוא היתר. הגובה הוא הניצב מול הזווית. השתמשו ב-sin(60°) והכפילו ב-50.",
        solution_steps: [
            { verbal_explanation: "נסמן את גובה העפיפון ב-h (זהו הניצב מול הזווית).", math_expression: "מול = h" },
            { verbal_explanation: "החוט המתוח יוצר את היתר במשולש הדמיוני.", math_expression: "יתר = 50" },
            { verbal_explanation: "הפונקציה המקשרת היא סינוס.", math_expression: "sin(60°) = h / 50" },
            { verbal_explanation: "נכפיל ב-50 כדי למצוא את הגובה.", math_expression: "h = 50 × sin(60°)" },
            { verbal_explanation: "sin(60°) הוא בערך 0.866. נכפיל ב-50.", math_expression: "h ≈ 50 × 0.866 = 43.30" }
        ],
        final_answer: "43.30 מטרים"
    },

    // --- שאלה 26 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: "עץ מטיל צל על הקרקע שאורכו 10 מטרים. זווית ההגבהה של השמש (הזווית מקצה הצל אל קצה העץ) היא 45 מעלות. מהו גובהו של העץ?",
        options: ["10 מטרים", "14.14 מטרים", "7.07 מטרים", "5 מטרים"],
        correctAnswer: 0,
        hint: "הצל מונח על הקרקע (ניצב ליד הזווית). גובה העץ הוא ניצב אנכי (מול הזווית). מול וליד זה טנגנס (tan).",
        solution_steps: [
            { verbal_explanation: "אנו יודעים את הניצב שליד הזווית (הצל) ומחפשים את הניצב שמול הזווית (העץ).", math_expression: "ליד = 10, מול = x" },
            { verbal_explanation: "נבחר בפונקציית טנגנס.", math_expression: "tan(45°) = x / 10" },
            { verbal_explanation: "נכפיל ב-10.", math_expression: "x = 10 × tan(45°)" },
            { verbal_explanation: "טנגנס של 45 הוא 1 בדיוק. לכן גובה העץ שווה לאורך הצל.", math_expression: "x = 10 × 1 = 10" }
        ],
        final_answer: "10 מטרים"
    },

    // --- שאלה 27 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: "תורן של ספינה הוא בגובה 20 מטרים. מהנדס רוצה למתוח כבל תמיכה מקצה התורן אל סיפון הספינה. הזווית שהכבל צריך ליצור עם סיפון הספינה (הרצפה) היא 50°. מה צריך להיות אורך הכבל?",
        options: ["26.11 מטרים", "15.32 מטרים", "12.85 מטרים", "31.11 מטרים"],
        correctAnswer: 0,
        hint: "הגובה הנתון (20) הוא הניצב ממול. הכבל שמחפשים הוא היתר (x). המשוואה היא sin(50°) = 20 / x. חלקו את 20 בסינוס 50.",
        solution_steps: [
            { verbal_explanation: "נזהה את הנתונים: זווית=50°, מול=20 (התורן), יתר=x (הכבל המתוח).", math_expression: "פונקציה: sin" },
            { verbal_explanation: "נבנה משוואה.", math_expression: "sin(50°) = 20 / x" },
            { verbal_explanation: "כדי לבודד את ה-x שבמכנה, נכפיל בו ונחלק בסינוס.", math_expression: "x = 20 / sin(50°)" },
            { verbal_explanation: "נחשב במחשבון.", math_expression: "x ≈ 20 / 0.766 ≈ 26.11" }
        ],
        final_answer: "26.11 מטרים"
    },

    // --- שאלה 28 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: `משולש ישר זווית משורטט במערכת צירים.<br>הקודקוד של הזווית הישרה הוא בראשית הצירים (0,0). קודקוד שני הוא (4,0) וקודקוד שלישי הוא (0,3).<br>מה גודלה של הזווית החדה הנמצאת בקודקוד שעל ציר ה-x? (עגלו לשתי ספרות).<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2" />
            <line x1="40" y1="140" x2="40" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <polygon points="40,120 120,120 40,40" fill="#f8fafc" stroke="#dc2626" stroke-width="2"/>
            <text x="75" y="135" font-size="12">4</text>
            <text x="25" y="80" font-size="12">3</text>
            <path d="M100,120 A20,20 0 0,0 106,106" fill="none" stroke="#10b981" stroke-width="2"/>
            <text x="90" y="110" font-size="14" font-weight="bold" fill="#10b981">α</text>
        </svg>`,
        options: ["36.87°", "53.13°", "45.00°", "30.00°"],
        correctAnswer: 0,
        hint: "אורך הניצב האופקי (ליד הזווית) הוא 4. אורך הניצב האנכי (מול הזווית) הוא 3. השתמשו בפונקציית טנגנס (Shift tan של 3 חלקי 4).",
        solution_steps: [
            { verbal_explanation: "מתוך נקודות הציון ניתן להסיק שאורכי הניצבים הם 3 ו-4.", math_expression: "ליד = 4, מול = 3" },
            { verbal_explanation: "הזווית המבוקשת α מונחת על קצה הניצב שאורכו 4. לכן ניצב זה הוא 'ליד'. הניצב שאורכו 3 נמצא מולה.", math_expression: "tan(α) = 3 / 4" },
            { verbal_explanation: "נחשב את השבר.", math_expression: "tan(α) = 0.75" },
            { verbal_explanation: "נפעיל פונקציה הפוכה במחשבון.", math_expression: "α = tan⁻¹(0.75) ≈ 36.87°" }
        ],
        final_answer: "36.87°"
    },

    // --- שאלה 29 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: "במשולש ישר זווית נתונים שני הניצבים: 5 ס\"מ ו-12 ס\"מ. מבלי למצוא את היתר, מה גודלה של הזווית הנמצאת מול הניצב של ה-12 ס\"מ?",
        options: ["67.38°", "22.62°", "45.00°", "60.00°"],
        correctAnswer: 0,
        hint: "הניצב ממול הוא 12. הניצב ליד הוא 5. השתמשו בטנגנס. חשבו 12 לחלק ל-5, ואז Shift tan לתשובה.",
        solution_steps: [
            { verbal_explanation: "השאלה מבקשת להשתמש רק בניצבים, לכן הפונקציה היחידה המתאימה היא טנגנס.", math_expression: "tan(α) = מול / ליד" },
            { verbal_explanation: "הזווית המבוקשת נמצאת מול ה-12, לכן 12 הוא ה'מול'.", math_expression: "tan(α) = 12 / 5" },
            { verbal_explanation: "נחשב את היחס.", math_expression: "tan(α) = 2.4" },
            { verbal_explanation: "נמצא את הזווית בעזרת המחשבון.", math_expression: "α = tan⁻¹(2.4) ≈ 67.38°" }
        ],
        final_answer: "67.38°"
    },

    // --- שאלה 30 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "מציאת צלעות וזוויות במשולש ישר זווית",
        question: "במשולש ישר זווית חשבנו את הזווית החדה α בעזרת סינוס ומצאנו שהיא 40°. מה יהיה גודלה של הזווית החדה השנייה (β)?",
        options: ["50°", "140°", "40°", "60°"],
        correctAnswer: 0,
        hint: "אין צורך בחישובים ארוכים. במשולש ישר זווית (שבו יש כבר 90 מעלות), שתי הזוויות הנותרות תמיד משלימות יחד ל-90.",
        solution_steps: [
            { verbal_explanation: "סכום הזוויות במשולש הוא תמיד 180°.", math_expression: "α + β + 90° = 180°" },
            { verbal_explanation: "נחסר את ה-90°. נקבל שסכום שתי הזוויות החדות הוא 90°.", math_expression: "α + β = 90°" },
            { verbal_explanation: "נציב את הזווית שמצאנו (40) כדי לגלות את השנייה.", math_expression: "40° + β = 90°" },
            { verbal_explanation: "נחסר ונמצא את התשובה.", math_expression: "β = 90° - 40° = 50°" }
        ],
        final_answer: "50°"
    },// ========================================================================
    // תת נושא 3: שטח משולש לפי שתי צלעות וזווית
    // ========================================================================

    // --- שאלה 31 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: `במשולש נתונות שתי צלעות שאורכן 8 ס"מ ו-10 ס"מ. הזווית הכלואה ביניהן היא בת 30°.<br>מהו שטח המשולש?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <polygon points="20,120 160,120 70,30" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <text x="80" y="135" font-size="12" font-weight="bold">10</text>
            <text x="30" y="70" font-size="12" font-weight="bold">8</text>
            <path d="M45,120 A25,25 0 0,0 55,95" fill="none" stroke="#10b981" stroke-width="2"/>
            <text x="55" y="115" font-size="12" font-weight="bold" fill="#10b981">30°</text>
        </svg>`,
        options: ["20 סמ\"ר", "40 סמ\"ר", "80 סמ\"ר", "34.64 סמ\"ר"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת השטח הטריגונומטרית: צלע כפול צלע כפול סינוס הזווית שביניהן, וכל זה חלקי 2.",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחה למציאת שטח משולש בעזרת טריגונומטריה: מכפלת שתי צלעות בסינוס הזווית הכלואה ביניהן חלקי שתיים.", math_expression: "S = (a × b × sin(γ)) / 2" },
            { verbal_explanation: "נציב את הנתונים שלנו: צלעות 8 ו-10, וזווית 30 מעלות.", math_expression: "S = (8 × 10 × sin(30°)) / 2" },
            { verbal_explanation: "נחשב במחשבון. sin(30°) שווה בדיוק לחצי (0.5).", math_expression: "S = (80 × 0.5) / 2" },
            { verbal_explanation: "40 לחלק ל-2 שווה ל-20.", math_expression: "S = 20" }
        ],
        final_answer: "20 סמ\"ר"
    },

    // --- שאלה 32 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: "שטחו של משולש הוא 30 סמ\"ר. ידוע שאורך צלע אחת הוא 12 ס\"מ, והזווית הכלואה בינה לבין הצלע השנייה היא 30°. מהו אורך הצלע השנייה?",
        options: ["10 ס\"מ", "5 ס\"מ", "15 ס\"מ", "8.66 ס\"מ"],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחת השטח: (12 כפול x כפול סינוס 30) חלקי 2 שווה 30. פתרו את המשוואה כדי למצוא את x.",
        solution_steps: [
            { verbal_explanation: "נרשום את משוואת השטח עם הנתונים הידועים.", math_expression: "30 = (12 × x × sin(30°)) / 2" },
            { verbal_explanation: "נכפיל את שני אגפי המשוואה ב-2 כדי להיפטר מהמכנה.", math_expression: "60 = 12 × x × sin(30°)" },
            { verbal_explanation: "נחשב את סינוס 30 (שהוא 0.5) ונכפיל ב-12.", math_expression: "12 × 0.5 = 6" },
            { verbal_explanation: "נקבל את המשוואה הפשוטה: 60 שווה ל-6x. נחלק ב-6.", math_expression: "x = 10" }
        ],
        final_answer: "10 ס\"מ"
    },

    // --- שאלה 33 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: "במשולש נתונות שתי צלעות שאורכן 8 ס\"מ ו-10 ס\"מ. שטח המשולש הוא 40 סמ\"ר. מה יכול להיות גודל הזווית הכלואה ביניהן?",
        options: ["90°", "60°", "45°", "30°"],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחה כדי לבודד את הסינוס. תגלו ש-sin(α) שווה ל-1. עבור איזו זווית הסינוס הוא 1?",
        solution_steps: [
            { verbal_explanation: "נבנה משוואה לפי נוסחת השטח הטריגונומטרית.", math_expression: "40 = (8 × 10 × sin(α)) / 2" },
            { verbal_explanation: "נכפיל ב-2 כדי לבטל את המכנה.", math_expression: "80 = 80 × sin(α)" },
            { verbal_explanation: "נחלק ב-80. קיבלנו שסינוס הזווית שווה ל-1.", math_expression: "sin(α) = 1" },
            { verbal_explanation: "בעזרת הפונקציה ההפוכה (Shift sin) של 1, נקבל 90 מעלות. כלומר, מדובר במשולש ישר זווית.", math_expression: "α = 90°" }
        ],
        final_answer: "90°"
    },

    // --- שאלה 34 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: "מהו שטחו של משולש שווה צלעות (שבו כל הזוויות הן בנות 60°) שאורך כל אחת מצלעותיו הוא 6 ס\"מ?",
        options: ["15.59 סמ\"ר", "18 סמ\"ר", "9 סמ\"ר", "31.18 סמ\"ר"],
        correctAnswer: 0,
        hint: "במשולש שווה צלעות, קחו כל שתי צלעות סמוכות (6 ו-6) ואת הזווית שביניהן (60). הציבו בנוסחת השטח הטריגונומטרית.",
        solution_steps: [
            { verbal_explanation: "במשולש שווה צלעות אנו יודעים אוטומטית שתי צלעות ואת הזווית שביניהן.", math_expression: "a = 6,  b = 6,  α = 60°" },
            { verbal_explanation: "נציב בנוסחת השטח.", math_expression: "S = (6 × 6 × sin(60°)) / 2" },
            { verbal_explanation: "נחשב את המונה. sin(60°) הוא בערך 0.866. מכפלת 36 ב-0.866 נותנת 31.176.", math_expression: "S ≈ 31.176 / 2" },
            { verbal_explanation: "נחלק ב-2.", math_expression: "S ≈ 15.59" }
        ],
        final_answer: "15.59 סמ\"ר"
    },

    // --- שאלה 35 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: "במשולש קהה זווית, אורכי שתי צלעות הם 5 ס\"מ ו-8 ס\"מ, והזווית הכלואה ביניהן היא בת 150°. מהו שטח המשולש?",
        options: ["10 סמ\"ר", "20 סמ\"ר", "17.32 סמ\"ר", "34.64 סמ\"ר"],
        correctAnswer: 0,
        hint: "הנוסחה הטריגונומטרית עובדת באותה הצורה בדיוק גם עבור זוויות קהות. הציבו sin(150°) במחשבון.",
        solution_steps: [
            { verbal_explanation: "נוסחת השטח (צלע כפול צלע כפול סינוס חלקי 2) תקפה לכל סוגי המשולשים.", math_expression: "S = (5 × 8 × sin(150°)) / 2" },
            { verbal_explanation: "במחשבון, הערך של sin(150°) זהה לערך של sin(30°), והוא בדיוק 0.5.", math_expression: "sin(150°) = 0.5" },
            { verbal_explanation: "נציב חזרה ונחשב: 40 כפול חצי, לחלק ל-2.", math_expression: "S = 20 / 2 = 10" }
        ],
        final_answer: "10 סמ\"ר"
    },

    // --- שאלה 36 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: "במקבילית, אורך צלע אחת הוא 7 ס\"מ ואורך הצלע הסמוכה לה הוא 10 ס\"מ. הזווית הכלואה ביניהן היא 40°. מהו שטח המקבילית?",
        options: ["45.00 סמ\"ר", "22.50 סמ\"ר", "35.00 סמ\"ר", "53.62 סמ\"ר"],
        correctAnswer: 0,
        hint: "אלכסון במקבילית מחלק אותה לשני משולשים חופפים. חשבו את השטח של משולש אחד כזה באמצעות הנוסחה הטריגונומטרית, והכפילו פי 2 (כלומר, פשוט השמיטו את החלוקה ב-2 מהנוסחה).",
        solution_steps: [
            { verbal_explanation: "שטח מקבילית ניתן לחשב על ידי הכפלת שתי צלעות סמוכות בסינוס הזווית שביניהן (ללא חלוקה ב-2 כמו במשולש).", math_expression: "S = a × b × sin(α)" },
            { verbal_explanation: "נציב את נתוני המקבילית.", math_expression: "S = 7 × 10 × sin(40°)" },
            { verbal_explanation: "נחשב את הסינוס. sin(40°) שווה בערך ל-0.6427.", math_expression: "S ≈ 70 × 0.6427" },
            { verbal_explanation: "נבצע את פעולת הכפל.", math_expression: "S ≈ 44.99 (בקירוב 45.00)" }
        ],
        final_answer: "45.00 סמ\"ר"
    },

    // --- שאלה 37 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: "איזו משתי הזוויות הבאות תניב את אותו שטח לאותו זוג צלעות: זווית של 20° או זווית של 160°?",
        options: ["הן יניבו בדיוק את אותו השטח", "זווית של 160° תניב שטח גדול יותר", "זווית של 20° תניב שטח גדול יותר", "זווית קהה גורמת לשטח שלילי"],
        correctAnswer: 0,
        hint: "בדקו במחשבון: למה שווה sin(20°)? ולמה שווה sin(160°)? בטריגונומטריה, סינוס של זווית חדה שווה לסינוס של הזווית המשלימה אותה ל-180°.",
        solution_steps: [
            { verbal_explanation: "נבדוק את ערך הסינוס של שתי הזוויות, שכן הוא הקובע את גודל השטח.", math_expression: "sin(20°) ≈ 0.342" },
            { verbal_explanation: "כעת נבדוק את הזווית הקהה המשלימה לה.", math_expression: "sin(160°) ≈ 0.342" },
            { verbal_explanation: "מכיוון שערכי הסינוס זהים לחלוטין, גם תוצאת השטח תהיה זהה לחלוטין.", math_expression: "אותו השטח" }
        ],
        final_answer: "הן יניבו בדיוק את אותו השטח"
    },

    // --- שאלה 38 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: "במשולש שווה שוקיים, אורך כל אחת מהשוקיים הוא 5 ס\"מ. זווית הראש היא 120°. מהו שטח המשולש?",
        options: ["10.82 סמ\"ר", "21.65 סמ\"ר", "6.25 סמ\"ר", "12.50 סמ\"ר"],
        correctAnswer: 0,
        hint: "הציבו את שתי השוקיים (5 ו-5) ואת הזווית שביניהן (120°) בנוסחה: (5 כפול 5 כפול סינוס 120) חלקי 2.",
        solution_steps: [
            { verbal_explanation: "יש לנו את שתי הצלעות הכלואות ואת זווית הראש שביניהן.", math_expression: "a = 5,  b = 5,  α = 120°" },
            { verbal_explanation: "נציב בנוסחת השטח.", math_expression: "S = (5 × 5 × sin(120°)) / 2" },
            { verbal_explanation: "במחשבון, sin(120°) שווה בערך 0.866.", math_expression: "S = (25 × 0.866) / 2" },
            { verbal_explanation: "נחשב את המנה לקבלת התוצאה הסופית.", math_expression: "S ≈ 21.65 / 2 ≈ 10.82" }
        ],
        final_answer: "10.82 סמ\"ר"
    },

    // --- שאלה 39 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: "נתונות שתי צלעות במשולש: 6 ס\"מ ו-10 ס\"מ. עבור איזו זווית הכלואה ביניהן, יתקבל השטח המקסימלי האפשרי למשולש זה?",
        options: ["90°", "180°", "45°", "60°"],
        correctAnswer: 0,
        hint: "השטח תלוי בערך של הסינוס בנוסחה. הערך המקסימלי שסינוס יכול לקבל הוא 1. עבור איזו זווית נקבל sin(x) = 1?",
        solution_steps: [
            { verbal_explanation: "הנוסחה מורכבת מהכפלה של הצלעות ב-sin(α). מכיוון שהצלעות קבועות בגודלן, השטח יגדל ככל שהסינוס יגדל.", math_expression: "S ∝ sin(α)" },
            { verbal_explanation: "הערך הגבוה ביותר שפונקציית סינוס יכולה לתת הוא 1.", math_expression: "Max(sin) = 1" },
            { verbal_explanation: "הזווית היחידה שנותנת תוצאה של 1 היא זווית ישרה של 90 מעלות.", math_expression: "sin(90°) = 1" }
        ],
        final_answer: "90°"
    },

    // --- שאלה 40 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: "שטחו של מעוין הוא 50 סמ\"ר. ידוע שאורך צלע המעוין הוא 10 ס\"מ. מהו גודלה של הזווית החדה של המעוין?",
        options: ["30°", "45°", "60°", "20°"],
        correctAnswer: 0,
        hint: "במעוין כל הצלעות שוות. לכן שתי צלעות סמוכות הן 10 ו-10. השתמשו בנוסחת שטח מקבילית/מעוין: 10 כפול 10 כפול סינוס הזווית שווה 50.",
        solution_steps: [
            { verbal_explanation: "במעוין כל הצלעות שוות, ולכן כל שתי צלעות סמוכות הן 10 ו-10. השטח מחושב כמכפלתן בסינוס הזווית ביניהן (ללא חלוקה ב-2).", math_expression: "50 = 10 × 10 × sin(α)" },
            { verbal_explanation: "נכפיל את הצלעות.", math_expression: "50 = 100 × sin(α)" },
            { verbal_explanation: "נחלק ב-100 כדי לבודד את הסינוס.", math_expression: "sin(α) = 50 / 100 = 0.5" },
            { verbal_explanation: "נפעיל פעולה הפוכה (Shift sin) על 0.5 ונקבל את הזווית החדה.", math_expression: "α = 30°" }
        ],
        final_answer: "30°"
    },

    // --- שאלה 41 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: "במשולש ישר זווית אורך שני הניצבים הוא 4 ס\"מ ו-5 ס\"מ. אם נשתמש בנוסחת השטח הטריגונומטרית (עם סינוס), מה תהיה המשוואה?",
        options: ["S = (4 × 5 × sin(90°)) / 2", "S = (4 × 5 × sin(45°)) / 2", "S = 4 × 5 × sin(90°)", "S = (4 × 5) / sin(90°)"],
        correctAnswer: 0,
        hint: "הניצבים הם הצלעות שיוצרות את הזווית הישרה (90°). לכן הזווית הכלואה ביניהם היא 90 מעלות.",
        solution_steps: [
            { verbal_explanation: "במשולש ישר זווית, הזווית הכלואה בין שני הניצבים היא תמיד 90 מעלות.", math_expression: "α = 90°" },
            { verbal_explanation: "נוסחת השטח הטריגונומטרית משתלבת באופן מושלם עם נוסחת השטח הרגילה, מכיוון ש-sin(90°) שווה ל-1.", math_expression: "sin(90°) = 1" },
            { verbal_explanation: "ההצבה בנוסחה תהיה מכפלת הניצבים בסינוס 90, חלקי 2.", math_expression: "S = (4 × 5 × sin(90°)) / 2" }
        ],
        final_answer: "S = (4 × 5 × sin(90°)) / 2"
    },

    // --- שאלה 42 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: "שטח משולש הוא 15 סמ\"ר. צלע אחת אורכה 6 ס\"מ והזווית הכלואה היא בת 30°. מהו אורך הצלע השנייה?",
        options: ["10 ס\"מ", "5 ס\"מ", "15 ס\"מ", "12 ס\"מ"],
        correctAnswer: 0,
        hint: "הציבו הכל בנוסחה: (6 כפול x כפול sin 30) חלקי 2 שווה 15. חלצו את הנעלם x.",
        solution_steps: [
            { verbal_explanation: "נרכיב את משוואת השטח.", math_expression: "15 = (6 × x × sin(30°)) / 2" },
            { verbal_explanation: "נכפיל ב-2 כדי להיפטר מהשבר.", math_expression: "30 = 6 × x × 0.5" },
            { verbal_explanation: "נכפיל את 6 בחצי.", math_expression: "30 = 3x" },
            { verbal_explanation: "נחלק ב-3 למציאת הצלע.", math_expression: "x = 10" }
        ],
        final_answer: "10 ס\"מ"
    },

    // --- שאלה 43 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "שטח משולש לפי שתי צלעות וזווית",
        question: "במשולש אורכי שתי צלעות הם 7 ס\"מ ו-8 ס\"מ והזווית ביניהן היא 60°. מהו שטח המשולש?",
        options: ["24.25 סמ\"ר", "28.00 סמ\"ר", "48.50 סמ\"ר", "14.00 סמ\"ר"],
        correctAnswer: 0,
        hint: "הציבו בנוסחה את הצלעות ואת sin(60°) שהוא 0.866 בערך. חשבו: 7 כפול 8 כפול 0.866 חלקי 2.",
        solution_steps: [
            { verbal_explanation: "הצבת הנתונים בנוסחת השטח הטריגונומטרית.", math_expression: "S = (7 × 8 × sin(60°)) / 2" },
            { verbal_explanation: "מחשבים את המונה.", math_expression: "S = (56 × 0.866) / 2" },
            { verbal_explanation: "נבצע את הכפל.", math_expression: "S ≈ 48.5 / 2" },
            { verbal_explanation: "נחלק ב-2 לקבלת התוצאה.", math_expression: "S ≈ 24.25" }
        ],
        final_answer: "24.25 סמ\"ר"
    },

    // ========================================================================
    // תת נושא 4: טריגונומטריה במשולש שווה שוקיים
    // ========================================================================

    // --- שאלה 44 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: `במשולש שווה שוקיים, אורך כל שוק הוא 10 ס"מ. אורך הבסיס הוא 12 ס"מ. מורידים גובה לבסיס.<br>מהו גודלה של זווית הבסיס?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <polygon points="40,120 160,120 100,40" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
            <line x1="100" y1="40" x2="100" y2="120" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
            <rect x="100" y="110" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <text x="60" y="70" font-size="12" font-weight="bold">10</text>
            <text x="140" y="70" font-size="12" font-weight="bold">10</text>
            <text x="100" y="135" font-size="12" font-weight="bold">12</text>
            <path d="M55,120 A15,15 0 0,0 60,110" fill="none" stroke="#10b981" stroke-width="2"/>
            <text x="65" y="115" font-size="12" font-weight="bold" fill="#10b981">α</text>
        </svg>`,
        options: ["53.13°", "36.87°", "60.00°", "45.00°"],
        correctAnswer: 0,
        hint: "הגובה מחלק את המשולש לשני משולשים ישרי זווית חופפים. חצי מהבסיס (הניצב ליד הזווית) שווה ל-6. היתר (השוק) שווה ל-10. איזה יחס נשתמש ל'ליד' ו'יתר'?",
        solution_steps: [
            { verbal_explanation: "במשולש שווה שוקיים, הגובה לבסיס חוצה אותו לשני חצאים שווים.", math_expression: "חצי בסיס = 12 / 2 = 6" },
            { verbal_explanation: "נתמקד באחד המשולשים ישרי הזווית שנוצרו. הניצב ש-ליד זווית הבסיס הוא 6. היתר הוא השוק 10.", math_expression: "ליד = 6,  יתר = 10" },
            { verbal_explanation: "הפונקציה המקשרת ביניהם היא קוסינוס.", math_expression: "cos(α) = 6 / 10 = 0.6" },
            { verbal_explanation: "נשתמש במחשבון (Shift cos) למציאת הזווית.", math_expression: "α = cos⁻¹(0.6) ≈ 53.13°" }
        ],
        final_answer: "53.13°"
    },

    // --- שאלה 45 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: "במשולש שווה שוקיים, זווית הראש היא 40° ואורך הבסיס הוא 16 ס\"מ. מצאו את אורך הגובה היורד לבסיס.",
        options: ["21.98 ס\"מ", "10.50 ס\"מ", "15.00 ס\"מ", "8.00 ס\"מ"],
        correctAnswer: 0,
        hint: "הגובה חוצה את זווית הראש (לכן חצי זווית ראש היא 20°) וגם חוצה את הבסיס (חצי בסיס הוא 8). מול ה-20 מעלות עומד הניצב 8, ואנו מחפשים את הליד (הגובה). השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "הגובה לבסיס חוצה את זווית הראש וגם את הבסיס. לכן במשולש הימני שנוצר:", math_expression: "זווית = 20°, ניצב מול = 8" },
            { verbal_explanation: "אנו מחפשים את הגובה (h), שהוא הניצב שליד הזווית של ה-20 מעלות.", math_expression: "tan(20°) = 8 / h" },
            { verbal_explanation: "נכפיל ב-h ונחלק ב-tan(20°) כדי לבודד אותו.", math_expression: "h = 8 / tan(20°)" },
            { verbal_explanation: "נחשב במחשבון.", math_expression: "h ≈ 8 / 0.364 ≈ 21.98" }
        ],
        final_answer: "21.98 ס\"מ"
    },

    // --- שאלה 46 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: "במשולש שווה שוקיים זווית הבסיס היא 70° ואורך השוק הוא 15 ס\"מ. מהו אורך הגובה היורד לבסיס?",
        options: ["14.10 ס\"מ", "5.13 ס\"מ", "10.00 ס\"מ", "16.00 ס\"מ"],
        correctAnswer: 0,
        hint: "הורידו גובה. הגובה יוצר משולש ישר זווית שבו הגובה הוא הניצב שמול זווית ה-70 מעלות. השוק היא היתר (15). השתמשו בפונקציית סינוס.",
        solution_steps: [
            { verbal_explanation: "נוריד גובה לבסיס ונקבל משולש ישר זווית. אנו מחפשים את הניצב ש-מול ה-70 מעלות (h).", math_expression: "מול = h" },
            { verbal_explanation: "השוק של המשולש משמשת כיתר.", math_expression: "יתר = 15" },
            { verbal_explanation: "נשתמש בנוסחת הסינוס.", math_expression: "sin(70°) = h / 15" },
            { verbal_explanation: "נכפיל ב-15.", math_expression: "h = 15 × sin(70°)" },
            { verbal_explanation: "נחשב במחשבון.", math_expression: "h ≈ 15 × 0.940 ≈ 14.10" }
        ],
        final_answer: "14.10 ס\"מ"
    },

    // --- שאלה 47 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: "עבור אותו משולש שווה שוקיים (זווית בסיס 70°, שוק 15 ס\"מ), מהו אורך הבסיס המלא של המשולש?",
        options: ["10.26 ס\"מ", "5.13 ס\"מ", "15.00 ס\"מ", "28.19 ס\"מ"],
        correctAnswer: 0,
        hint: "חשבו קודם את חצי הבסיס בעזרת קוסינוס (הניצב ליד הזווית). לאחר שתמצאו את חצי הבסיס, אל תשכחו להכפיל אותו ב-2.",
        solution_steps: [
            { verbal_explanation: "בחצי משולש ישר זווית, 'חצי הבסיס' הוא הניצב שליד זווית ה-70 מעלות.", math_expression: "cos(70°) = x / 15" },
            { verbal_explanation: "נכפיל ב-15 למציאת חצי הבסיס (x).", math_expression: "x = 15 × cos(70°)" },
            { verbal_explanation: "במחשבון נקבל ש-x שווה בערך ל-5.13.", math_expression: "x ≈ 5.13" },
            { verbal_explanation: "הבסיס המלא הוא פעמיים x.", math_expression: "בסיס מלא = 2 × 5.13 = 10.26" }
        ],
        final_answer: "10.26 ס\"מ"
    },

    // --- שאלה 48 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: "במשולש שווה שוקיים אורך הגובה לבסיס הוא 12 ס\"מ. זווית הראש של המשולש היא 60°. מהו אורך הבסיס?",
        options: ["13.86 ס\"מ", "6.93 ס\"מ", "12.00 ס\"מ", "24.00 ס\"מ"],
        correctAnswer: 0,
        hint: "הגובה חוצה את זווית הראש (לכן החצי הוא 30°). אתם יודעים את הניצב ש-ליד ה-30° (הוא הגובה 12). חפשו את הניצב ממול (חצי הבסיס) בעזרת טנגנס, ואז הכפילו ב-2.",
        solution_steps: [
            { verbal_explanation: "נשתמש בתכונת חציית הזווית של הגובה. זווית הראש המלאה היא 60°, לכן חצי ממנה הוא 30°.", math_expression: "זווית קדקוד = 30°" },
            { verbal_explanation: "הניצב הסמוך ל-30° הוא הגובה הנתון (12). הניצב שמול ה-30° הוא חצי הבסיס (נסמן כ-x).", math_expression: "tan(30°) = x / 12" },
            { verbal_explanation: "נכפיל ב-12 למציאת x.", math_expression: "x = 12 × tan(30°)" },
            { verbal_explanation: "במחשבון, x יוצא בערך 6.928.", math_expression: "x ≈ 6.93" },
            { verbal_explanation: "הבסיס המלא הוא פעמיים התוצאה.", math_expression: "בסיס = 2 × 6.93 = 13.86" }
        ],
        final_answer: "13.86 ס\"מ"
    },

    // --- שאלה 49 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: "במשולש שווה שוקיים, זווית הבסיס היא 50° ואורך השוק הוא 8 ס\"מ. חשבו את השטח של המשולש.",
        options: ["31.52 סמ\"ר", "63.04 סמ\"ר", "24.12 סמ\"ר", "15.76 סמ\"ר"],
        correctAnswer: 0,
        hint: "כדי למצוא שטח, נצטרך את הגובה ואת הבסיס. הגובה הוא 8 כפול sin(50°). חצי הבסיס הוא 8 כפול cos(50°). חשבו אותם, הכפילו בסיס בגובה וחלקו ב-2.",
        solution_steps: [
            { verbal_explanation: "נחשב את הגובה לבסיס בעזרת סינוס.", math_expression: "h = 8 × sin(50°) ≈ 6.128" },
            { verbal_explanation: "נחשב את חצי הבסיס בעזרת קוסינוס.", math_expression: "x = 8 × cos(50°) ≈ 5.142" },
            { verbal_explanation: "נכפיל את חצי הבסיס ב-2 כדי לקבל את הבסיס המלא.", math_expression: "בסיס ≈ 10.284" },
            { verbal_explanation: "נחשב את השטח לפי הנוסחה הסטנדרטית.", math_expression: "S = (10.284 × 6.128) / 2 ≈ 31.52" }
        ],
        final_answer: "31.52 סמ\"ר"
    },

    // --- שאלה 50 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: "אורך הבסיס של משולש שווה שוקיים הוא 20 ס\"מ, ואורך הגובה היורד אליו הוא 10 ס\"מ. מהו גודלה של זווית הבסיס?",
        options: ["45°", "30°", "60°", "53.13°"],
        correctAnswer: 0,
        hint: "הגובה חוצה את הבסיס (חצי בסיס שווה 10). הגובה עצמו הוא גם 10. בחצי המשולש: הניצב מול והניצב ליד שווים זה לזה. איזו זווית נוצרת?",
        solution_steps: [
            { verbal_explanation: "הגובה חוצה את הבסיס, לכן אורך הניצב האופקי (ליד הזווית) הוא 10.", math_expression: "ליד = 20 / 2 = 10" },
            { verbal_explanation: "הגובה (הניצב שמול הזווית) נתון גם הוא כ-10.", math_expression: "מול = 10" },
            { verbal_explanation: "נשתמש בפונקציית טנגנס.", math_expression: "tan(α) = 10 / 10 = 1" },
            { verbal_explanation: "הזווית שהטנגנס שלה הוא 1, היא תמיד 45 מעלות.", math_expression: "α = 45°" }
        ],
        final_answer: "45°"
    },

    // --- שאלה 51 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: "במשולש שווה שוקיים אורך השוק הוא 13 ס\"מ ואורך הבסיס הוא 10 ס\"מ. מהו גודלה של זווית הראש (הזווית שבין שתי השוקיים)?",
        options: ["45.24°", "22.62°", "67.38°", "90.00°"],
        correctAnswer: 0,
        hint: "הגובה חוצה את הבסיס (ל-5). בחצי המשולש, הניצב שמול 'חצי זווית הראש' הוא 5, והיתר (השוק) הוא 13. מצאו את חצי הזווית בעזרת סינוס, והכפילו ב-2.",
        solution_steps: [
            { verbal_explanation: "נוריד גובה לבסיס. הוא יוצר משולש ישר זווית שבו הניצב מול 'חצי זווית הראש' שווה ל-5 (חצי מ-10).", math_expression: "מול = 5,  יתר = 13" },
            { verbal_explanation: "נשתמש בסינוס כדי למצוא את החצי זווית (נסמן ב-x).", math_expression: "sin(x) = 5 / 13 ≈ 0.3846" },
            { verbal_explanation: "נפעיל Shift sin במחשבון.", math_expression: "x = sin⁻¹(0.3846) ≈ 22.62°" },
            { verbal_explanation: "הזווית המבוקשת היא זווית הראש המלאה, שהיא פעמיים חצי הזווית שמצאנו.", math_expression: "זווית ראש = 2 × 22.62° = 45.24°" }
        ],
        final_answer: "45.24°"
    },

    // --- שאלה 52 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: "משולש ABC הוא משולש שווה שוקיים (AB = AC = 14 ס\"מ). זווית הבסיס (B) היא בת 65°. אורך הגובה היורד מקודקוד A לבסיס BC מיוצג באות h. מהו אורך הגובה h?",
        options: ["12.69 ס\"מ", "5.92 ס\"מ", "15.45 ס\"מ", "7.00 ס\"מ"],
        correctAnswer: 0,
        hint: "במשולש ישר הזווית שנוצר (לאחר הורדת הגובה), היתר הוא 14 (השוק), והניצב שמול ה-65 מעלות הוא הגובה h. חשבו 14 כפול סינוס 65.",
        solution_steps: [
            { verbal_explanation: "הורדת הגובה h יצרה משולש ישר זווית שבו זווית הבסיס B היא 65°, והיתר AB הוא 14.", math_expression: "זווית = 65°, יתר = 14" },
            { verbal_explanation: "הגובה h הוא הניצב שממול לזווית B.", math_expression: "מול = h" },
            { verbal_explanation: "נציב בפונקציית סינוס.", math_expression: "sin(65°) = h / 14" },
            { verbal_explanation: "נכפיל ונחשב.", math_expression: "h = 14 × sin(65°) ≈ 14 × 0.9063 ≈ 12.69" }
        ],
        final_answer: "12.69 ס\"מ"
    },

    // --- שאלה 53 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: "גג רעפים מעוצב כמשולש שווה שוקיים. רוחב בסיס הגג (התקרה) הוא 8 מטרים. זווית השיפוע של הגג (זווית הבסיס) היא 30°. מה צריך להיות אורך קורות העץ שמרכיבות את שיפוע הגג (השוקיים)?",
        options: ["4.62 מטרים", "4.00 מטרים", "8.00 מטרים", "6.93 מטרים"],
        correctAnswer: 0,
        hint: "חצי הבסיס הוא 4 מטרים (זהו הניצב ליד ה-30 מעלות). הקורה השיפועית היא היתר במשולש ישר הזווית. השתמשו בקוסינוס.",
        solution_steps: [
            { verbal_explanation: "הגובה (האנך האמצעי של הגג) מחלק את הבסיס לשני חלקים שווים של 4 מטרים.", math_expression: "ליד = 4" },
            { verbal_explanation: "הזווית הנתונה של השיפוע היא 30 מעלות. אנו מחפשים את קורת העץ, שמהווה את היתר במשולש.", math_expression: "יתר = x" },
            { verbal_explanation: "נשתמש בקוסינוס (ליד חלקי יתר).", math_expression: "cos(30°) = 4 / x" },
            { verbal_explanation: "נחלץ את ה-x (נכפיל בו ונחלק בקוסינוס).", math_expression: "x = 4 / cos(30°) ≈ 4 / 0.866 ≈ 4.62" }
        ],
        final_answer: "4.62 מטרים"
    },

    // --- שאלה 54 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: "במשולש שווה שוקיים ישנה זווית ישרה (90°). אורך הבסיס (שמול הזווית הישרה) הוא 24 ס\"מ. מהו אורך כל שוק של המשולש?",
        options: ["16.97 ס\"מ", "12.00 ס\"מ", "33.94 ס\"מ", "24.00 ס\"מ"],
        correctAnswer: 0,
        hint: "זהו משולש ישר זווית ושווה שוקיים. לכן זוויות הבסיס שלו חייבות להיות בנות 45°. השוקיים הן למעשה הניצבים. היעזרו בסינוס או קוסינוס 45.",
        solution_steps: [
            { verbal_explanation: "מאחר שהמשולש הוא גם ישר זווית (זווית ראש=90) וגם שווה שוקיים, שתי זוויות הבסיס חייבות להיות 45 מעלות כל אחת.", math_expression: "זווית בסיס = 45°" },
            { verbal_explanation: "הבסיס משמש כיתר (אורכו 24), והשוק היא הניצב.", math_expression: "יתר = 24" },
            { verbal_explanation: "נשתמש בסינוס 45 מעלות למציאת הניצב (השוק).", math_expression: "sin(45°) = L / 24" },
            { verbal_explanation: "נחשב במחשבון.", math_expression: "L = 24 × sin(45°) ≈ 16.97" }
        ],
        final_answer: "16.97 ס\"מ"
    },

    // --- שאלה 55 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: "במשולש שווה שוקיים, אורך השוק הוא 20 ס\"מ וזווית הבסיס היא 30°. מהו אורך בסיס המשולש המלא?",
        options: ["34.64 ס\"מ", "17.32 ס\"מ", "20.00 ס\"מ", "10.00 ס\"מ"],
        correctAnswer: 0,
        hint: "הורידו גובה. מצאו את 'חצי הבסיס' (הניצב ליד הזווית) בעזרת קוסינוס (20 כפול cos 30). לאחר מכן הכפילו את התוצאה ב-2.",
        solution_steps: [
            { verbal_explanation: "השוק היא היתר (20). חצי הבסיס הוא הניצב שליד ה-30°. נשתמש בקוסינוס.", math_expression: "cos(30°) = x / 20" },
            { verbal_explanation: "נחשב את חצי הבסיס (x).", math_expression: "x = 20 × cos(30°) ≈ 20 × 0.866 = 17.32" },
            { verbal_explanation: "הבסיס המלא כפול מחצי הבסיס.", math_expression: "בסיס = 2 × 17.32 = 34.64" }
        ],
        final_answer: "34.64 ס\"מ"
    },

    // --- שאלה 56 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במשולש שווה שוקיים",
        question: "במשולש שווה שוקיים, הגובה היורד לבסיס הוא באורך 15 ס\"מ. זווית הבסיס היא בת 60°. מהו אורך שוק המשולש?",
        options: ["17.32 ס\"מ", "7.50 ס\"מ", "30.00 ס\"מ", "8.66 ס\"מ"],
        correctAnswer: 0,
        hint: "הגובה (15) הוא הניצב שמול ה-60°. השוק שאנו מחפשים היא היתר. המשוואה היא sin(60°) = 15 / L. חלקו את 15 בסינוס 60.",
        solution_steps: [
            { verbal_explanation: "הגובה הוא ניצב מול, השוק היא היתר.", math_expression: "מול = 15, יתר = L" },
            { verbal_explanation: "נציב בנוסחת הסינוס.", math_expression: "sin(60°) = 15 / L" },
            { verbal_explanation: "נחלץ את היתר L.", math_expression: "L = 15 / sin(60°)" },
            { verbal_explanation: "נחשב.", math_expression: "L ≈ 15 / 0.866 ≈ 17.32" }
        ],
        final_answer: "17.32 ס\"מ"
    },

    // ========================================================================
    // תת נושא 5: טריגונומטריה במרובעים (מלבן ומעוין)
    // ========================================================================

    // --- שאלה 57 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: `במלבן נתון, אורך הצלע הקצרה הוא 5 ס"מ ואורך הצלע הארוכה הוא 12 ס"מ.<br>מהו גודלה של הזווית הנוצרת בין אלכסון המלבן לבין הצלע הארוכה?<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <rect x="20" y="20" width="160" height="80" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
            <line x1="20" y1="100" x2="180" y2="20" stroke="#dc2626" stroke-width="2"/>
            <text x="100" y="115" font-size="12" font-weight="bold">12</text>
            <text x="10" y="65" font-size="12" font-weight="bold">5</text>
            <path d="M50,100 A30,30 0 0,0 56,83" fill="none" stroke="#10b981" stroke-width="2"/>
            <text x="65" y="95" font-size="12" font-weight="bold" fill="#10b981">α</text>
        </svg>`,
        options: ["22.62°", "67.38°", "45.00°", "24.62°"],
        correctAnswer: 0,
        hint: "במלבן הזוויות ישרות, לכן האלכסון יוצר משולש ישר זווית. הצלע שמול הזווית α היא 5, והצלע שלידה היא 12. השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "האלכסון מחלק את המלבן לשני משולשים ישרי זווית. נסתכל על התחתון.", math_expression: "משולש ישר זווית" },
            { verbal_explanation: "מול הזווית המבוקשת נמצאת הצלע שאורכה 5. הצלע שצמודה לה היא 12.", math_expression: "מול = 5,  ליד = 12" },
            { verbal_explanation: "הפונקציה המתאימה היא טנגנס.", math_expression: "tan(α) = 5 / 12 ≈ 0.4166" },
            { verbal_explanation: "נפעיל פעולה הפוכה למציאת הזווית.", math_expression: "α = tan⁻¹(0.4166) ≈ 22.62°" }
        ],
        final_answer: "22.62°"
    },

    // --- שאלה 58 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: "אורך אלכסון של מלבן הוא 20 ס\"מ. הזווית שבין האלכסון לבין בסיס המלבן (הצלע הארוכה) היא בת 30°. מהו גובה המלבן (הצלע הקצרה)?",
        options: ["10 ס\"מ", "17.32 ס\"מ", "20 ס\"מ", "8.66 ס\"מ"],
        correctAnswer: 0,
        hint: "גובה המלבן הוא הניצב שמול הזווית בת ה-30 מעלות. האלכסון מתפקד כיתר. איזה פונקציה מקשרת בין מול ליתר?",
        solution_steps: [
            { verbal_explanation: "במשולש שנוצר, האלכסון משמש כיתר (אורכו 20).", math_expression: "יתר = 20" },
            { verbal_explanation: "אנו מחפשים את הגובה, שהוא הניצב העומד מול הזווית הנתונה (30°).", math_expression: "מול = h" },
            { verbal_explanation: "נבחר בסינוס.", math_expression: "sin(30°) = h / 20" },
            { verbal_explanation: "נכפיל את היתר בסינוס למציאת הגובה. (sin 30 שווה לחצי).", math_expression: "h = 20 × 0.5 = 10" }
        ],
        final_answer: "10 ס\"מ"
    },

    // --- שאלה 59 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: "עבור אותו מלבן מהשאלה הקודמת (אלכסון 20 ס\"מ, זווית עם הבסיס 30°), מהו אורך הבסיס של המלבן?",
        options: ["17.32 ס\"מ", "10 ס\"מ", "20 ס\"מ", "15 ס\"מ"],
        correctAnswer: 0,
        hint: "הבסיס הוא הניצב ש-ליד הזווית של ה-30 מעלות. השתמשו בקוסינוס: cos(30°) כפול 20.",
        solution_steps: [
            { verbal_explanation: "אנו מחפשים כעת את הבסיס, המשמש כניצב ליד הזווית במשולש.", math_expression: "ליד = x,  יתר = 20" },
            { verbal_explanation: "הפונקציה המתאימה היא קוסינוס.", math_expression: "cos(30°) = x / 20" },
            { verbal_explanation: "נכפיל את היתר בקוסינוס.", math_expression: "x = 20 × cos(30°)" },
            { verbal_explanation: "במחשבון, קוסינוס 30 הוא כ-0.866.", math_expression: "x ≈ 20 × 0.866 = 17.32" }
        ],
        final_answer: "17.32 ס\"מ"
    },

    // --- שאלה 60 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: "במלבן, הזווית שיוצר האלכסון עם הבסיס היא 40°. אורך הגובה של המלבן (הצלע הקצרה) הוא 8 ס\"מ. מהו אורך האלכסון של המלבן?",
        options: ["12.45 ס\"מ", "10.44 ס\"מ", "9.53 ס\"מ", "15.00 ס\"מ"],
        correctAnswer: 0,
        hint: "הגובה (8) הוא הניצב שמול ה-40°. אתם מחפשים את האלכסון (היתר). משוואה: sin(40°) = 8 / x.",
        solution_steps: [
            { verbal_explanation: "נזהה את הנתונים: זווית=40°, ניצב מול=8. אנו מחפשים את היתר (x).", math_expression: "sin(40°) = 8 / x" },
            { verbal_explanation: "נחלץ את ה-x על ידי הכפלה ב-x וחלוקה בסינוס.", math_expression: "x = 8 / sin(40°)" },
            { verbal_explanation: "נחשב בעזרת המחשבון.", math_expression: "x ≈ 8 / 0.6427 ≈ 12.45" }
        ],
        final_answer: "12.45 ס\"מ"
    },

    // --- שאלה 61 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: "במעוין, אורך האלכסון הקצר הוא 10 ס\"מ, ואורך האלכסון הארוך הוא 24 ס\"מ. מהו אורך צלע המעוין?",
        options: ["13 ס\"מ", "12 ס\"מ", "17 ס\"מ", "26 ס\"מ"],
        correctAnswer: 0,
        hint: "אלכסוני המעוין חוצים זה את זה ויוצרים ארבעה משולשים ישרי זווית. ניצבי משולש אחד הם 5 (חצי מ-10) ו-12 (חצי מ-24). השתמשו בפיתגורס למציאת היתר (הצלע).",
        solution_steps: [
            { verbal_explanation: "אלכסונים במעוין חוצים זה את זה ומאונכים, ולכן אפשר לעבוד עם רבע מעוין המהווה משולש ישר זווית.", math_expression: "חצי אלכסון א' = 5" },
            { verbal_explanation: "נמצא את החצי של האלכסון השני.", math_expression: "חצי אלכסון ב' = 12" },
            { verbal_explanation: "במשולש ישר הזווית הקטן, הניצבים הם 5 ו-12. נשתמש במשפט פיתגורס למציאת היתר (שהוא צלע המעוין).", math_expression: "c² = 5² + 12²" },
            { verbal_explanation: "נחשב.", math_expression: "c² = 25 + 144 = 169" },
            { verbal_explanation: "נוציא שורש לקבלת הצלע.", math_expression: "c = √169 = 13" }
        ],
        final_answer: "13 ס\"מ"
    },

    // --- שאלה 62 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: "עבור אותו מעוין (שבו חצאי האלכסונים הם 5 ס\"מ ו-12 ס\"מ), מהו גודלה של הזווית החדה של המעוין כולו?",
        options: ["45.24°", "22.62°", "67.38°", "30.00°"],
        correctAnswer: 0,
        hint: "במשולש ישר הזווית הקטן, חשבו את הזווית שמול הניצב של ה-5 (בעזרת טנגנס). זווית זו היא רק מחצית מהזווית המלאה של המעוין, לכן זכרו להכפיל ב-2 בסוף.",
        solution_steps: [
            { verbal_explanation: "נסתכל על המשולש הקטן. נחשב את הזווית שמול הניצב הקצר (5). נקרא לה α.", math_expression: "tan(α) = 5 / 12" },
            { verbal_explanation: "נפעיל מחשבון למציאת חצי הזווית.", math_expression: "α = tan⁻¹(5/12) ≈ 22.62°" },
            { verbal_explanation: "האלכסון במעוין גם חוצה את זוויות המעוין. לכן, הזווית המלאה היא פעמיים אלפא.", math_expression: "זווית מעוין = 2 × 22.62° = 45.24°" }
        ],
        final_answer: "45.24°"
    },

    // --- שאלה 63 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: "במעוין, אורך כל צלע הוא 10 ס\"מ. הזווית החדה של המעוין היא בת 60°. מהו אורך האלכסון הקצר של המעוין?",
        options: ["10 ס\"מ", "5 ס\"מ", "8.66 ס\"מ", "17.32 ס\"מ"],
        correctAnswer: 0,
        hint: "האלכסון הקצר מחלק את המעוין לשני משולשים. אם זווית אחת היא 60°, והצלעות הסמוכות הן 10 ו-10, נוצר משולש שווה שוקיים שהוא בעצם משולש שווה צלעות!",
        solution_steps: [
            { verbal_explanation: "האלכסון הקצר מחבר את הקודקודים של הזוויות הקהות, ויוצר משולש שווה שוקיים שבו צלעות המעוין (10) הן השוקיים והזווית שביניהן היא 60°.", math_expression: "משולש עם זווית ראש 60°" },
            { verbal_explanation: "במשולש שווה שוקיים, אם זווית הראש היא 60°, גם שתי זוויות הבסיס משלימות ל-60° כל אחת.", math_expression: "60°, 60°, 60°" },
            { verbal_explanation: "לכן, מדובר במשולש שווה צלעות. האלכסון הקצר שווה באורכו לשאר הצלעות.", math_expression: "אלכסון = 10" }
        ],
        final_answer: "10 ס\"מ"
    },

    // --- שאלה 64 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: "במעוין, אורך הצלע הוא 8 ס\"מ והזווית החדה היא 40°. מהו אורך הגובה של המעוין?",
        options: ["5.14 ס\"מ", "6.12 ס\"מ", "4.00 ס\"מ", "10.00 ס\"מ"],
        correctAnswer: 0,
        hint: "גובה במעוין יוצר משולש ישר זווית עם אחת הצלעות (שהיא היתר) ועם הזווית (40°). הגובה הוא הניצב שמול ה-40°. השתמשו בסינוס.",
        solution_steps: [
            { verbal_explanation: "נוריד גובה מקודקוד המעוין לצלע ממול. יצרנו משולש ישר זווית בקצה.", math_expression: "משולש ישר זווית" },
            { verbal_explanation: "במשולש זה, צלע המעוין משמשת כיתר (8). הזווית החדה נתונה (40°). הגובה (h) הוא הניצב שמול הזווית.", math_expression: "מול = h,  יתר = 8" },
            { verbal_explanation: "נשתמש בסינוס.", math_expression: "sin(40°) = h / 8" },
            { verbal_explanation: "נכפיל ב-8 ונחשב.", math_expression: "h = 8 × sin(40°) ≈ 5.14" }
        ],
        final_answer: "5.14 ס\"מ"
    },

    // --- שאלה 65 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: "במלבן, אורך האלכסון הוא 12 ס\"מ. הזווית החדה שנוצרת בין שני האלכסונים (בנקודת המפגש שלהם) היא 60°. מהו אורך הצלע הקצרה של המלבן?",
        options: ["6 ס\"מ", "12 ס\"מ", "10.39 ס\"מ", "3 ס\"מ"],
        correctAnswer: 0,
        hint: "אלכסוני מלבן שווים וחוצים זה את זה. לכן נוצר משולש שווה שוקיים מצלעות באורך 6 (חצי אלכסון) וזווית ראש של 60 מעלות. איזה משולש זה בעצם?",
        solution_steps: [
            { verbal_explanation: "אלכסוני מלבן חוצים זה את זה שווה בשווה. לכן, כל 'חצי אלכסון' שווה ל-6 ס\"מ.", math_expression: "צלע משולש פנימי = 6" },
            { verbal_explanation: "במשולש הפנימי שנוצר עם הצלע הקצרה, שתי הצלעות הן באורך 6 והזווית שביניהן היא 60°.", math_expression: "משולש שווה שוקיים עם זווית 60°" },
            { verbal_explanation: "משולש שווה שוקיים עם זווית ראש של 60 מעלות הוא בהכרח משולש שווה צלעות.", math_expression: "60°, 60°, 60°" },
            { verbal_explanation: "לכן הצלע הקצרה של המלבן שווה בדיוק לחצי האלכסון.", math_expression: "צלע קצרה = 6" }
        ],
        final_answer: "6 ס\"מ"
    },

    // --- שאלה 66 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: "במעוין, אורך האלכסון הארוך הוא 20 ס\"מ, והזווית הקהה של המעוין היא בת 120°. מהו אורך צלע המעוין?",
        options: ["11.55 ס\"מ", "10.00 ס\"מ", "20.00 ס\"מ", "14.14 ס\"מ"],
        correctAnswer: 0,
        hint: "האלכסון הארוך מחולק ל-2 (לכן 10). הזווית הקהה גם נחצית על ידי האלכסון הקצר, לכן 60°. בחצי המשולש: 10 הוא הניצב מול ה-60°. מצאו את היתר בעזרת סינוס.",
        solution_steps: [
            { verbal_explanation: "נסתכל על אחד ממשולשי הרבע במעוין. הניצב הארוך הוא מחצית מהאלכסון הארוך, כלומר 10.", math_expression: "ניצב = 10" },
            { verbal_explanation: "האלכסון הקצר חוצה את הזווית הקהה של ה-120°. לכן הזווית הפנימית במשולש היא 60°.", math_expression: "α = 60°" },
            { verbal_explanation: "הניצב שאורכו 10 נמצא בדיוק מול זווית ה-60°. אנו מחפשים את הצלע של המעוין, שהיא היתר.", math_expression: "sin(60°) = 10 / y" },
            { verbal_explanation: "נחלץ את y. נכפיל בו ונחלק בסינוס.", math_expression: "y = 10 / sin(60°)" },
            { verbal_explanation: "נחשב במחשבון.", math_expression: "y ≈ 10 / 0.866 ≈ 11.55" }
        ],
        final_answer: "11.55 ס\"מ"
    },

    // --- שאלה 67 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: "במלבן, אורך הצלע הקצרה הוא 7 ס\"מ. הזווית החדה הנוצרת בין שני האלכסונים (בנקודת המפגש שלהם) היא 50°. מהו אורך האלכסון של המלבן?",
        options: ["16.56 ס\"מ", "8.28 ס\"מ", "14.00 ס\"מ", "18.32 ס\"מ"],
        correctAnswer: 0,
        hint: "האלכסונים יוצרים משולש שווה שוקיים שבו הבסיס הוא 7 וזווית הראש היא 50°. הורידו גובה (שמחלק את 7 ל-3.5 ואת 50 ל-25). מצאו את השוק (שהיא חצי אלכסון) באמצעות סינוס, ואז הכפילו ב-2.",
        solution_steps: [
            { verbal_explanation: "במשולש שנוצר מהאלכסונים והצלע הקצרה, זווית הראש היא 50° והבסיס 7.", math_expression: "משולש שווה שוקיים" },
            { verbal_explanation: "הורדת גובה תחלק את הזווית ל-25° ואת הבסיס ל-3.5.", math_expression: "זווית=25°, מול=3.5" },
            { verbal_explanation: "אנו מחפשים את היתר בחצי המשולש הזה, המהווה את חצי האלכסון (R).", math_expression: "sin(25°) = 3.5 / R" },
            { verbal_explanation: "נחשב את R.", math_expression: "R = 3.5 / sin(25°) ≈ 8.28" },
            { verbal_explanation: "האלכסון השלם הוא פעמיים R.", math_expression: "D = 2 × 8.28 = 16.56" }
        ],
        final_answer: "16.56 ס\"מ"
    },

    // --- שאלה 68 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: "במעוין, אורך כל צלע הוא 15 ס\"מ והזווית החדה היא בת 50°. מהו אורך האלכסון הארוך של המעוין?",
        options: ["27.19 ס\"מ", "13.59 ס\"מ", "15.00 ס\"מ", "22.35 ס\"מ"],
        correctAnswer: 0,
        hint: "האלכסון הארוך נמצא מול הזווית הקהה, אבל נחצה את המעוין ל-4 משולשים ישרי זווית. הזווית החדה נחצית ל-25°. היתר הוא 15. האלכסון הארוך מורכב מפעמיים הניצב ש-ליד ה-25°. השתמשו בקוסינוס.",
        solution_steps: [
            { verbal_explanation: "נסתכל על רבע מעוין. היתר (הצלע) הוא 15. חצי מהזווית החדה הוא 25°.", math_expression: "זווית = 25°, יתר = 15" },
            { verbal_explanation: "חצי האלכסון הארוך הוא הניצב שצמוד (ליד) הזווית 25°. נשתמש בקוסינוס.", math_expression: "cos(25°) = x / 15" },
            { verbal_explanation: "נחשב את חצי האלכסון.", math_expression: "x = 15 × cos(25°) ≈ 13.59" },
            { verbal_explanation: "האלכסון המלא הוא פעמיים x.", math_expression: "אלכסון = 2 × 13.59 = 27.18 (בערך 27.19 תלוי בעיגול)" }
        ],
        final_answer: "27.19 ס\"מ"
    },

    // --- שאלה 69 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במישור",
        subTopic: "טריגונומטריה במרובעים (מלבן ומעוין)",
        question: "היקפו של מעוין הוא 40 ס\"מ. אורך הגובה של המעוין הוא 6 ס\"מ. מהו גודלה של הזווית החדה של המעוין?",
        options: ["36.87°", "30.00°", "45.00°", "53.13°"],
        correctAnswer: 0,
        hint: "אם ההיקף הוא 40, כל צלע היא 10. הגובה יוצר משולש ישר זווית שבו היתר הוא 10 והניצב ממול הוא 6. מצאו את הזווית בעזרת סינוס.",
        solution_steps: [
            { verbal_explanation: "נמצא את אורך הצלע מתוך ההיקף.", math_expression: "צלע = 40 / 4 = 10" },
            { verbal_explanation: "במשולש ישר הזווית שנוצר על ידי הגובה: היתר הוא צלע המעוין (10), והגובה (6) הוא הניצב שמול הזווית החדה.", math_expression: "מול = 6, יתר = 10" },
            { verbal_explanation: "נשתמש בסינוס.", math_expression: "sin(α) = 6 / 10 = 0.6" },
            { verbal_explanation: "נחשב במחשבון.", math_expression: "α = sin⁻¹(0.6) ≈ 36.87°" }
        ],
        final_answer: "36.87°"
    }
];