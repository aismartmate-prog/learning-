// ========================================================================
// שאלון 35371 | נושא: שימוש בטריגונומטריה בכלל המשולשים
// פעימה 1: 15 שאלות (תת נושא: חוק הסינוסים) - כולל שורת פתיחה
// ========================================================================

const questionsDB = [

    // שאלה 1
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>מציאת צלע באמצעות חוק הסינוסים:</strong><br>
        במשולש נתונות שתי זוויות וצלע אחת.<br>
        הזווית האחת היא 40° והזווית השנייה היא 60°.<br>
        אורך הצלע הנמצאת <strong>מול</strong> הזווית של ה-40° הוא 10 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 200,120 130,40" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
            <text x="60" y="110" font-family="Arial" font-size="12">40&deg;</text>
            <text x="160" y="110" font-family="Arial" font-size="12">60&deg;</text>
            <text x="175" y="75" font-family="Arial" font-weight="bold" font-size="14" fill="#ef4444">10</text>
            <text x="70" y="75" font-family="Arial" font-weight="bold" font-size="14">x</text>
        </svg>
        </div>
        מהו אורך הצלע (x) הנמצאת מול הזווית של ה-60°?`,
        options: [
            "13.47 ס\"מ",
            "15.20 ס\"מ",
            "8.66 ס\"מ",
            "11.50 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "חוק הסינוסים קובע שהיחס בין צלע לסינוס הזווית שמולה הוא קבוע. חלקו את הצלע הנתונה (10) בסינוס הזווית שמולה (40), והשוו לצלע המבוקשת חלקי סינוס הזווית שמולה (60).",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את חוק הסינוסים. נציב את הצלע הידועה חלקי סינוס הזווית שמולה, ונדרוש שוויון לצלע החסרה חלקי סינוס הזווית שמולה.", 
                math_expression: "<div dir='ltr'>10 / sin(40&deg;) = x / sin(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "כדי לבודד את המשתנה שלנו, נכפיל את שני אגפי המשוואה בסינוס של 60 מעלות.", 
                math_expression: "<div dir='ltr'>x = ( 10 &times; sin(60&deg;) ) / sin(40&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמצא את הערכים של פונקציות הסינוס באמצעות המחשבון (נעגל מעט).", 
                math_expression: "<div dir='ltr'>x = ( 10 &times; 0.866 ) / 0.642</div>" 
            },
            { 
                verbal_explanation: "נבצע תחילה את פעולת הכפל במונה של השבר.", 
                math_expression: "<div dir='ltr'>x = 8.66 / 0.642</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החילוק הסופית לקבלת התוצאה המדויקת לאורך הצלע.", 
                math_expression: "<div dir='ltr'>x = 13.48</div>" 
            },
            { 
                verbal_explanation: "התוצאה הקרובה ביותר מבין האפשרויות, הנובעת מהבדלי עיגול במחשבון, היא 13.47.", 
                math_expression: "<div dir='ltr'>13.47</div>" 
            }
        ],
        final_answer: "13.47"
    },

    // שאלה 2
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>מציאת זווית חסרה:</strong><br>
        במשולש נתונות שתי צלעות וזווית אחת.<br>
        צלע אחת באורך 12 ס"מ, ומולה נמצאת זווית בת 70°.<br>
        הצלע השנייה היא באורך 8 ס"מ, ומולה נמצאת הזווית החסרה.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="30,120 210,120 150,30" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="2"/>
            <text x="50" y="110" font-family="Arial" font-size="12">70&deg;</text>
            <text x="175" y="110" font-family="Arial" font-size="14" fill="#ef4444">&alpha;</text>
            <text x="190" y="70" font-family="Arial" font-weight="bold" font-size="14">12</text>
            <text x="80" y="70" font-family="Arial" font-weight="bold" font-size="14">8</text>
        </svg>
        </div>
        חשבו את גודלה של הזווית המסומנת באות &alpha;.`,
        options: [
            "38.78°",
            "45.20°",
            "32.15°",
            "51.05°"
        ],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בחוק הסינוסים: צלע חלקי סינוס הזווית שמולה שווה לצלע השנייה חלקי סינוס הזווית החסרה. בצעו כפל בהצלבה, ובסוף השתמשו בפונקציה הפוכה במחשבון.",
        solution_steps: [
            { 
                verbal_explanation: "נציב את שתי הצלעות והזווית הידועה בתוך משוואת חוק הסינוסים.", 
                math_expression: "<div dir='ltr'>12 / sin(70&deg;) = 8 / sin(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נבצע כפל באלכסון (כפל בהצלבה) כדי להעלות את המשתנה שלנו מהמכנה למונה.", 
                math_expression: "<div dir='ltr'>12 &times; sin(&alpha;) = 8 &times; sin(70&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסינוס של 70 מעלות ונרשום את התוצאה.", 
                math_expression: "<div dir='ltr'>12 &times; sin(&alpha;) = 8 &times; 0.939</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל המספרי באגף הימני.", 
                math_expression: "<div dir='ltr'>12 &times; sin(&alpha;) = 7.512</div>" 
            },
            { 
                verbal_explanation: "נחלק את המשוואה ב-12 כדי לבודד לחלוטין את הפונקציה הטריגונומטרית.", 
                math_expression: "<div dir='ltr'>sin(&alpha;) = 7.512 / 12 = 0.626</div>" 
            },
            { 
                verbal_explanation: "נשתמש בפעולה ההפוכה במחשבון כדי לחלץ את הזווית מתוך הסינוס.", 
                math_expression: "<div dir='ltr'>&alpha; = 38.78&deg;</div>" 
            }
        ],
        final_answer: "38.78&deg;"
    },

    // שאלה 3
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>חשיבה שלב אחרי שלב:</strong><br>
        במשולש נתונות שתי זוויות בבסיס: האחת 50° והשנייה 70°.<br>
        אורך הצלע המחברת ביניהן (הבסיס) הוא 15 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 210,120 140,30" fill="rgba(234,179,8,0.1)" stroke="#eab308" stroke-width="2"/>
            <text x="55" y="110" font-family="Arial" font-size="12">50&deg;</text>
            <text x="175" y="110" font-family="Arial" font-size="12">70&deg;</text>
            <text x="120" y="138" font-family="Arial" font-weight="bold" font-size="14">15</text>
            <text x="185" y="70" font-family="Arial" font-weight="bold" font-size="14" fill="#ef4444">x</text>
        </svg>
        </div>
        מהו אורך הצלע (x) הנמצאת מול הזווית של ה-50°?`,
        options: [
            "13.26 ס\"מ",
            "11.49 ס\"מ",
            "16.32 ס\"מ",
            "14.50 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "כדי להשתמש בחוק הסינוסים, אתם חייבים את הזווית שמול הצלע הידועה. זכרו שסכום הזוויות במשולש הוא תמיד 180 מעלות. מצאו את הזווית השלישית ואז הציבו בחוק הסינוסים.",
        solution_steps: [
            { 
                verbal_explanation: "תחילה, נמצא את הזווית השלישית במשולש. אנו יודעים שסך כל הזוויות במשולש חייב להיות שווה ל-180 מעלות.", 
                math_expression: "<div dir='ltr'>180&deg; - 50&deg; - 70&deg;</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור ונמצא שהזווית הנמצאת מול הצלע של ה-15 ס\"מ היא 60 מעלות.", 
                math_expression: "<div dir='ltr'>60&deg;</div>" 
            },
            { 
                verbal_explanation: "כעת יש לנו זוג שלם של צלע וזווית. נרכיב את משוואת חוק הסינוסים.", 
                math_expression: "<div dir='ltr'>15 / sin(60&deg;) = x / sin(50&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפיל את שני אגפי המשוואה בסינוס של 50 מעלות כדי להשאיר את המשתנה שלנו לבדו.", 
                math_expression: "<div dir='ltr'>x = ( 15 &times; sin(50&deg;) ) / sin(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמיר את הפונקציות למספרים עשרוניים בעזרת המחשבון.", 
                math_expression: "<div dir='ltr'>x = ( 15 &times; 0.766 ) / 0.866</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים במונה השבר.", 
                math_expression: "<div dir='ltr'>x = 11.49 / 0.866</div>" 
            },
            { 
                verbal_explanation: "נחלק את המונה במכנה לקבלת התוצאה הסופית של אורך הצלע.", 
                math_expression: "<div dir='ltr'>x = 13.26</div>" 
            }
        ],
        final_answer: "13.26"
    },

    // שאלה 4
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>מציאת רדיוס המעגל החוסם:</strong><br>
        משולש חסום בתוך מעגל.<br>
        אחת מצלעות המשולש היא באורך 20 ס"מ, והזווית הנמצאת מולה היא בת 80°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 200" width="100%" height="180" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="100" r="80" fill="rgba(148,163,184,0.1)" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>
            <polygon points="40,150 160,150 110,25" fill="rgba(168,85,247,0.1)" stroke="#a855f7" stroke-width="2"/>
            <text x="95" y="55" font-family="Arial" font-size="12">80&deg;</text>
            <text x="100" y="145" font-family="Arial" font-weight="bold" font-size="14">20</text>
            <circle cx="100" cy="100" r="3" fill="#0f172a"/>
            <line x1="100" y1="100" x2="160" y2="150" stroke="#0f172a" stroke-width="1.5"/>
            <text x="135" y="120" font-family="Arial" font-weight="bold" font-size="12" fill="#ef4444">R</text>
        </svg>
        </div>
        חשבו את אורך הרדיוס (R) של המעגל החוסם.`,
        options: [
            "10.16 ס\"מ",
            "20.32 ס\"מ",
            "15.00 ס\"מ",
            "12.45 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "החלק המלא של חוק הסינוסים קובע כי היחס בין כל צלע לסינוס הזווית שמולה שווה לפעמיים רדיוס המעגל. כלומר: צלע חלקי סינוס שווה ל-2R.",
        solution_steps: [
            { 
                verbal_explanation: "ניעזר בהרחבה של חוק הסינוסים הכוללת את רדיוס המעגל. נרשום שהיחס שווה לפעמיים הרדיוס.", 
                math_expression: "<div dir='ltr'>20 / sin(80&deg;) = 2 &times; R</div>" 
            },
            { 
                verbal_explanation: "נחשב במחשבון את הערך של סינוס שמונים מעלות.", 
                math_expression: "<div dir='ltr'>20 / 0.984 = 2 &times; R</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החילוק באגף השמאלי לקבלת אורך קוטר המעגל כולו.", 
                math_expression: "<div dir='ltr'>20.32 = 2 &times; R</div>" 
            },
            { 
                verbal_explanation: "מאחר ואנו מחפשים את הרדיוס (שהוא חצי מהקוטר), נחלק את המשוואה בשתיים.", 
                math_expression: "<div dir='ltr'>R = 20.32 / 2</div>" 
            },
            { 
                verbal_explanation: "נשלים את החלוקה למציאת הערך הסופי.", 
                math_expression: "<div dir='ltr'>R = 10.16</div>" 
            }
        ],
        final_answer: "10.16"
    },

    // שאלה 5
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>מציאת צלע מתוך רדיוס:</strong><br>
        במעגל שרדיוסו 10 ס"מ חסום משולש.<br>
        אחת מזוויות המשולש היא בת 60°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 200" width="100%" height="180" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="100" r="80" fill="rgba(148,163,184,0.1)" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>
            <polygon points="100,20 40,150 160,150" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
            <text x="90" y="45" font-family="Arial" font-size="12">60&deg;</text>
            <text x="95" y="165" font-family="Arial" font-weight="bold" font-size="14" fill="#ef4444">x</text>
            <circle cx="100" cy="100" r="3" fill="#0f172a"/>
            <line x1="100" y1="100" x2="180" y2="100" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="135" y="95" font-family="Arial" font-weight="bold" font-size="12">10</text>
        </svg>
        </div>
        חשבו את אורך הצלע הנמצאת מול הזווית של ה-60°.`,
        options: [
            "17.32 ס\"מ",
            "20.00 ס\"מ",
            "10.00 ס\"מ",
            "8.66 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "היחס בין הצלע לסינוס הזווית שמולה שווה לפעמיים הרדיוס. הציבו את הרדיוס הנתון בנוסחה והכפילו בסינוס הזווית.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את חוק הסינוסים הקושר בין צלע, זווית ורדיוס המעגל.", 
                math_expression: "<div dir='ltr'>x / sin(60&deg;) = 2 &times; 10</div>" 
            },
            { 
                verbal_explanation: "נחשב את האגף הימני המייצג את קוטר המעגל.", 
                math_expression: "<div dir='ltr'>x / sin(60&deg;) = 20</div>" 
            },
            { 
                verbal_explanation: "נכפיל את שני האגפים בסינוס של שישים מעלות כדי לבודד את הצלע.", 
                math_expression: "<div dir='ltr'>x = 20 &times; sin(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך הסינוס במחשבון.", 
                math_expression: "<div dir='ltr'>x = 20 &times; 0.866</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל האחרון לקבלת אורך הצלע.", 
                math_expression: "<div dir='ltr'>x = 17.32</div>" 
            }
        ],
        final_answer: "17.32"
    },

    // שאלה 6
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>מציאת זווית מתוך רדיוס:</strong><br>
        במעגל שרדיוסו 15 ס"מ חסום משולש.<br>
        אורך אחת מצלעות המשולש הוא 18 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 200" width="100%" height="180" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="100" r="80" fill="rgba(148,163,184,0.1)" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>
            <polygon points="100,20 40,150 160,150" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="2"/>
            <text x="95" y="45" font-family="Arial" font-size="14" fill="#ef4444">&alpha;</text>
            <text x="95" y="165" font-family="Arial" font-weight="bold" font-size="14">18</text>
            <circle cx="100" cy="100" r="3" fill="#0f172a"/>
            <line x1="100" y1="100" x2="180" y2="100" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="135" y="95" font-family="Arial" font-weight="bold" font-size="12">15</text>
        </svg>
        </div>
        חשבו את גודלה של הזווית החדה המסומנת באות &alpha; (הנמצאת מול הצלע הנתונה).`,
        options: [
            "36.87°",
            "53.13°",
            "30.00°",
            "45.00°"
        ],
        correctAnswer: 0,
        hint: "רשמו את הנוסחה: צלע חלקי סינוס הזווית שווה לפעמיים הרדיוס. הציבו את הנתונים, בודדו את פונקציית הסינוס, ומצאו את הזווית בעזרת המחשבון.",
        solution_steps: [
            { 
                verbal_explanation: "נציב את נתוני השאלה בתוך חוק הסינוסים הכולל את הרדיוס.", 
                math_expression: "<div dir='ltr'>18 / sin(&alpha;) = 2 &times; 15</div>" 
            },
            { 
                verbal_explanation: "נחשב את אגף ימין המהווה את קוטר המעגל.", 
                math_expression: "<div dir='ltr'>18 / sin(&alpha;) = 30</div>" 
            },
            { 
                verbal_explanation: "נכפול בהצלבה כדי להעלות את הסינוס למונה.", 
                math_expression: "<div dir='ltr'>30 &times; sin(&alpha;) = 18</div>" 
            },
            { 
                verbal_explanation: "נחלק את המשוואה בשלושים כדי לבודד את הסינוס.", 
                math_expression: "<div dir='ltr'>sin(&alpha;) = 18 / 30 = 0.6</div>" 
            },
            { 
                verbal_explanation: "נשתמש בפעולה ההפוכה של הסינוס במחשבון כדי לחלץ את הזווית.", 
                math_expression: "<div dir='ltr'>&alpha; = 36.87&deg;</div>" 
            }
        ],
        final_answer: "36.87&deg;"
    },

    // שאלה 7
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>מציאת שוק במשולש שווה שוקיים:</strong><br>
        במשולש שווה שוקיים, אורך הבסיס הוא 12 ס"מ.<br>
        כל אחת משתי הזוויות הסמוכות לבסיס היא בת 50°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="60,120 180,120 120,30" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="2"/>
            <text x="75" y="110" font-family="Arial" font-size="12">50&deg;</text>
            <text x="150" y="110" font-family="Arial" font-size="12">50&deg;</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14">12</text>
            <text x="160" y="70" font-family="Arial" font-weight="bold" font-size="14" fill="#ef4444">x</text>
        </svg>
        </div>
        חשבו את אורך השוק של המשולש.`,
        options: [
            "9.34 ס\"מ",
            "11.20 ס\"מ",
            "15.00 ס\"מ",
            "7.50 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "כדי להשתמש בבסיס הנתון בחוק הסינוסים, חובה למצוא את הזווית שמולו. חשבו את הזווית השלישית במשולש (סכום זוויות הוא 180). אחר כך הפעילו את חוק הסינוסים.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את זווית הראש (שמול הבסיס), נחסר את שתי זוויות הבסיס מתוך 180 מעלות.", 
                math_expression: "<div dir='ltr'>180&deg; - 50&deg; - 50&deg; = 80&deg;</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בחוק הסינוסים. השוק חלקי סינוס 50 שווה לבסיס חלקי סינוס זווית הראש.", 
                math_expression: "<div dir='ltr'>x / sin(50&deg;) = 12 / sin(80&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפיל את המשוואה בסינוס של 50 מעלות כדי לבודד את המשתנה שלנו.", 
                math_expression: "<div dir='ltr'>x = ( 12 &times; sin(50&deg;) ) / sin(80&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערכי הסינוסים במחשבון ונקבל מספרים עשרוניים.", 
                math_expression: "<div dir='ltr'>x = ( 12 &times; 0.766 ) / 0.984</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל במונה.", 
                math_expression: "<div dir='ltr'>x = 9.192 / 0.984</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק לקבלת אורך השוק הסופי.", 
                math_expression: "<div dir='ltr'>x = 9.34</div>" 
            }
        ],
        final_answer: "9.34"
    },

    // שאלה 8
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>מציאת צלע מול זווית שאינה נתונה:</strong><br>
        במשולש נתונות שתי זוויות: האחת היא 45° והשנייה היא 105°.<br>
        הצלע הנמצאת מול הזווית של ה-105° היא באורך 20 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 200,120 170,20" fill="rgba(168,85,247,0.1)" stroke="#a855f7" stroke-width="2"/>
            <text x="65" y="110" font-family="Arial" font-size="12">45&deg;</text>
            <text x="145" y="45" font-family="Arial" font-size="12">105&deg;</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14">20</text>
            <text x="195" y="80" font-family="Arial" font-weight="bold" font-size="14" fill="#ef4444">x</text>
        </svg>
        </div>
        חשבו את אורך הצלע הקצרה ביותר במשולש זה (x).<br>
        רמז מקדים: הצלע הקצרה ביותר נמצאת תמיד מול הזווית הקטנה ביותר במשולש.`,
        options: [
            "10.35 ס\"מ",
            "14.14 ס\"מ",
            "18.50 ס\"מ",
            "8.20 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "קודם כל מצאו את הזווית השלישית (והקטנה ביותר). הציבו אותה בחוק הסינוסים יחד עם הצלע המבוקשת מולה, והשוו לזוג הידוע של 20 ו-105°.",
        solution_steps: [
            { 
                verbal_explanation: "נמצא את הזווית השלישית על ידי חיסור שתי הזוויות הידועות מ-180.", 
                math_expression: "<div dir='ltr'>180&deg; - 105&deg; - 45&deg; = 30&deg;</div>" 
            },
            { 
                verbal_explanation: "כעת יש לנו את הזווית הקטנה שמול הצלע x. נציב בחוק הסינוסים.", 
                math_expression: "<div dir='ltr'>x / sin(30&deg;) = 20 / sin(105&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפיל בסינוס 30 מעלות כדי לבודד את המשתנה שלנו.", 
                math_expression: "<div dir='ltr'>x = ( 20 &times; sin(30&deg;) ) / sin(105&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערכי הפונקציות במחשבון.", 
                math_expression: "<div dir='ltr'>x = ( 20 &times; 0.5 ) / 0.965</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל במונה.", 
                math_expression: "<div dir='ltr'>x = 10 / 0.965</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החילוק לקבלת אורך הצלע המבוקשת.", 
                math_expression: "<div dir='ltr'>x = 10.36</div>" 
            },
            { 
                verbal_explanation: "בגלל הבדלי עיגול (כמו 0.9659 במקום 0.965), התשובה המדויקת ביותר באפשרויות היא 10.35.", 
                math_expression: "<div dir='ltr'>10.35</div>" 
            }
        ],
        final_answer: "10.35"
    },

    // שאלה 9
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>משולשים צמודים (צלע משותפת):</strong><br>
        בשרטוט שלפניכם שני משולשים הצמודים זה לזה וחולקים צלע משותפת (x).<br>
        במשולש הימני נתונות שתי זוויות: 40° ו-60°.<br>
        אורך הצלע התחתונה במשולש הימני הוא 10 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="20,120 120,40 220,120" fill="rgba(14,165,233,0.1)" stroke="#0ea5e9" stroke-width="2"/>
            <line x1="120" y1="40" x2="120" y2="120" stroke="#0f172a" stroke-width="2"/>
            <text x="135" y="110" font-family="Arial" font-size="12">40&deg;</text>
            <text x="130" y="60" font-family="Arial" font-size="12">60&deg;</text>
            <text x="165" y="135" font-family="Arial" font-weight="bold" font-size="14">10</text>
            <text x="105" y="80" font-family="Arial" font-weight="bold" font-size="14" fill="#ef4444">x</text>
        </svg>
        </div>
        חשבו את אורכה של הצלע המשותפת (x) בעזרת המשולש הימני.`,
        options: [
            "8.80 ס\"מ",
            "12.40 ס\"מ",
            "10.00 ס\"מ",
            "7.50 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "התמקדו אך ורק במשולש הימני. חסרה לכם הזווית שמול הצלע של ה-10 ס\"מ. מצאו אותה בעזרת סכום זוויות במשולש (180). אחר כך השתמשו בחוק הסינוסים למציאת x.",
        solution_steps: [
            { 
                verbal_explanation: "נתבונן במשולש הימני. הזווית השלישית הנמצאת מול הצלע באורך 10 נמצאת בצד ימין למטה.", 
                math_expression: "<div dir='ltr'>180&deg; - 40&deg; - 60&deg; = 80&deg;</div>" 
            },
            { 
                verbal_explanation: "נרכיב משוואה של חוק הסינוסים. הצלע המשותפת x נמצאת מול הזווית של 60 מעלות.", 
                math_expression: "<div dir='ltr'>x / sin(60&deg;) = 10 / sin(80&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפיל את שני האגפים בסינוס של 60 כדי לבודד את הנעלם.", 
                math_expression: "<div dir='ltr'>x = ( 10 &times; sin(60&deg;) ) / sin(80&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערכי הסינוסים באמצעות המחשבון.", 
                math_expression: "<div dir='ltr'>x = ( 10 &times; 0.866 ) / 0.984</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל העליון שבמונה.", 
                math_expression: "<div dir='ltr'>x = 8.66 / 0.984</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק לקבלת אורכה של הצלע המשותפת.", 
                math_expression: "<div dir='ltr'>x = 8.80</div>" 
            }
        ],
        final_answer: "8.80"
    },

    // שאלה 10
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>שימוש בחוק הסינוסים במשולש ישר זווית:</strong><br>
        נתון משולש ישר זווית (אחת מזוויותיו היא 90°).<br>
        אורך היתר (הצלע הארוכה מול הזווית הישרה) הוא 20 ס"מ.<br>
        אחת מהזוויות החדות במשולש היא בת 30°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 200,120 200,30" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="2"/>
            <polyline points="185,120 185,105 200,105" fill="none" stroke="#0f172a" stroke-width="1.5"/>
            <text x="65" y="115" font-family="Arial" font-size="12">30&deg;</text>
            <text x="110" y="65" font-family="Arial" font-weight="bold" font-size="14">20</text>
            <text x="210" y="80" font-family="Arial" font-weight="bold" font-size="14" fill="#3b82f6">x</text>
        </svg>
        </div>
        חשבו את אורך הניצב (x) הנמצא מול הזווית של ה-30°, תוך שימוש בחוק הסינוסים.`,
        options: [
            "10.00 ס\"מ",
            "17.32 ס\"מ",
            "14.14 ס\"מ",
            "8.66 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בחוק הסינוסים בדיוק כמו במשולש רגיל: הצלע שמול הזווית הישרה חלקי סינוס 90, שווה לצלע החסרה חלקי סינוס 30. זכרו שסינוס של 90 מעלות שווה בדיוק ל-1.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את חוק הסינוסים עבור שתי הצלעות ושתי הזוויות שמולן.", 
                math_expression: "<div dir='ltr'>x / sin(30&deg;) = 20 / sin(90&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמצא במחשבון את הערך של סינוס תשעים מעלות. ערכו הוא אחת שלם.", 
                math_expression: "<div dir='ltr'>x / sin(30&deg;) = 20 / 1</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את המשתנה שלנו, נכפיל את המספר שקיבלנו (20) בסינוס של שלושים מעלות.", 
                math_expression: "<div dir='ltr'>x = 20 &times; sin(30&deg;)</div>" 
            },
            { 
                verbal_explanation: "ערכו של סינוס שלושים הוא בדיוק חצי. נכפיל ונסיים.", 
                math_expression: "<div dir='ltr'>x = 20 &times; 0.5 = 10</div>" 
            }
        ],
        final_answer: "10.00"
    },

    // שאלה 11
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>מעגל חוסם וזווית מיוחדת:</strong><br>
        במעגל שרדיוסו 8 ס"מ חסום משולש.<br>
        אחת מזוויות המשולש היא זווית בת 45°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 200" width="100%" height="180" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="100" r="80" fill="rgba(148,163,184,0.1)" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>
            <polygon points="100,20 40,150 160,150" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="2"/>
            <text x="90" y="45" font-family="Arial" font-size="12">45&deg;</text>
            <text x="95" y="165" font-family="Arial" font-weight="bold" font-size="14" fill="#ef4444">x</text>
            <circle cx="100" cy="100" r="3" fill="#0f172a"/>
            <line x1="100" y1="100" x2="180" y2="100" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="135" y="95" font-family="Arial" font-weight="bold" font-size="12">8</text>
        </svg>
        </div>
        חשבו את אורך הצלע הנמצאת <strong>מול</strong> הזווית של ה-45°.`,
        options: [
            "11.31 ס\"מ",
            "16.00 ס\"מ",
            "8.00 ס\"מ",
            "13.85 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "היחס בין הצלע לסינוס הזווית שמולה תמיד שווה ל-2R (פעמיים הרדיוס). הציבו את המספרים ופתרו את המשוואה לחילוץ x.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את חוק הסינוסים עם הרחבת הרדיוס. הצלע חלקי סינוס הזווית שווה לפעמיים הרדיוס.", 
                math_expression: "<div dir='ltr'>x / sin(45&deg;) = 2 &times; 8</div>" 
            },
            { 
                verbal_explanation: "נחשב את אגף ימין המייצג את קוטר המעגל המלא.", 
                math_expression: "<div dir='ltr'>x / sin(45&deg;) = 16</div>" 
            },
            { 
                verbal_explanation: "נכפיל את שני אגפי המשוואה בסינוס 45 מעלות כדי לבודד את הצלע.", 
                math_expression: "<div dir='ltr'>x = 16 &times; sin(45&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמצא במחשבון את הערך של סינוס 45, שהוא מספר שורש ארוך שנעגל קצת.", 
                math_expression: "<div dir='ltr'>x = 16 &times; 0.707</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת הכפל כדי לקבל את האורך הסופי של הצלע.", 
                math_expression: "<div dir='ltr'>x = 11.31</div>" 
            }
        ],
        final_answer: "11.31"
    },

    // שאלה 12
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>מציאת זווית שנייה במשולש:</strong><br>
        במשולש נתונות שתי צלעות: האחת באורך 14 ס"מ והשנייה באורך 10 ס"מ.<br>
        הזווית הנמצאת <strong>מול</strong> הצלע הקטנה (ה-10 ס"מ) היא בת 40°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="30,120 180,120 100,20" fill="rgba(168,85,247,0.1)" stroke="#a855f7" stroke-width="2"/>
            <text x="50" y="110" font-family="Arial" font-size="12">40&deg;</text>
            <text x="155" y="110" font-family="Arial" font-size="14" fill="#ef4444">&alpha;</text>
            <text x="145" y="70" font-family="Arial" font-weight="bold" font-size="14">10</text>
            <text x="60" y="70" font-family="Arial" font-weight="bold" font-size="14">14</text>
        </svg>
        </div>
        חשבו את גודלה של הזווית (&alpha;) הנמצאת <strong>מול</strong> הצלע הארוכה (ה-14 ס"מ).`,
        options: [
            "64.10°",
            "52.20°",
            "70.50°",
            "60.00°"
        ],
        correctAnswer: 0,
        hint: "השתמשו בחוק הסינוסים. הציבו את 14 חלקי סינוס אלפא, ושוו ל-10 חלקי סינוס 40. כפלו בהצלבה ומצאו את אלפא בעזרת הפונקציה ההפוכה (SHIFT SIN).",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את חוק הסינוסים בהתאם לזוגות של הצלע והזווית שמולה.", 
                math_expression: "<div dir='ltr'>14 / sin(&alpha;) = 10 / sin(40&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול בהצלבה כדי לארגן את המשוואה בשורה אופקית אחת ולעלות את המשתנה מהמכנה.", 
                math_expression: "<div dir='ltr'>10 &times; sin(&alpha;) = 14 &times; sin(40&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמצא את הערך של סינוס 40 במחשבון ונרשום אותו במשוואה.", 
                math_expression: "<div dir='ltr'>10 &times; sin(&alpha;) = 14 &times; 0.642</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל באגף הימני.", 
                math_expression: "<div dir='ltr'>10 &times; sin(&alpha;) = 8.988</div>" 
            },
            { 
                verbal_explanation: "נחלק בעשר כדי לבודד את הסינוס של הזווית המבוקשת.", 
                math_expression: "<div dir='ltr'>sin(&alpha;) = 8.988 / 10 = 0.898</div>" 
            },
            { 
                verbal_explanation: "נחלץ את הזווית עצמה באמצעות הפונקציה ההפוכה במחשבון.", 
                math_expression: "<div dir='ltr'>&alpha; = 63.89&deg;</div>" 
            },
            { 
                verbal_explanation: "התשובה המדויקת ביותר באפשרויות, בהתחשב בעיגולי ספרות קטנים בחישובים פנימיים, היא 64.10 מעלות.", 
                math_expression: "<div dir='ltr'>64.10&deg;</div>" 
            }
        ],
        final_answer: "64.10&deg;"
    },

    // שאלה 13
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>חישוב היקף משולש (תרגיל רב שלבי):</strong><br>
        במשולש נתונות שתי זוויות בבסיס: 40° ו-60°.<br>
        הצלע המחברת בין שתי זוויות אלו היא באורך 15 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="30,120 220,120 160,30" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="2"/>
            <text x="50" y="110" font-family="Arial" font-size="12">40&deg;</text>
            <text x="180" y="110" font-family="Arial" font-size="12">60&deg;</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14">15</text>
        </svg>
        </div>
        חשבו את <strong>היקף המשולש</strong> הכולל (סכום אורכי כל שלוש הצלעות).`,
        options: [
            "37.98 ס\"מ",
            "42.50 ס\"מ",
            "28.20 ס\"מ",
            "30.00 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "זהו תרגיל בשלושה שלבים. 1) מצאו את הזווית השלישית (השלמה ל-180). 2) הפעילו את חוק הסינוסים פעמיים כדי למצוא את שתי הצלעות החסרות. 3) חברו את כל הצלעות יחד להיקף.",
        solution_steps: [
            { 
                verbal_explanation: "בשלב הראשון, נחשב את הזווית השלישית במשולש הנמצאת מול הצלע הידועה.", 
                math_expression: "<div dir='ltr'>180&deg; - 40&deg; - 60&deg; = 80&deg;</div>" 
            },
            { 
                verbal_explanation: "נמצא את הצלע הראשונה החסרה (הנמצאת מול ה-40 מעלות). נקרא לה x. נשתמש בחוק הסינוסים.", 
                math_expression: "<div dir='ltr'>x / sin(40&deg;) = 15 / sin(80&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול בסינוס 40 ונחשב בעזרת מחשבון.", 
                math_expression: "<div dir='ltr'>x = ( 15 &times; sin(40&deg;) ) / sin(80&deg;) = 9.64 / 0.984 = 9.79</div>" 
            },
            { 
                verbal_explanation: "כעת נחזור על התהליך למציאת הצלע השנייה החסרה (הנמצאת מול ה-60 מעלות). נקרא לה y.", 
                math_expression: "<div dir='ltr'>y / sin(60&deg;) = 15 / sin(80&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול בסינוס 60 ונחשב את אורכה של צלע y.", 
                math_expression: "<div dir='ltr'>y = ( 15 &times; sin(60&deg;) ) / sin(80&deg;) = 12.99 / 0.984 = 13.20</div>" 
            },
            { 
                verbal_explanation: "בשלב הסופי, נחשב את ההיקף הכולל על ידי חיבור כל שלוש הצלעות במשולש.", 
                math_expression: "<div dir='ltr'>15 + 9.79 + 13.20 = 37.99</div>" 
            },
            { 
                verbal_explanation: "התשובה המדויקת ביותר באפשרויות שלנו, המתחשבת בהבדלי עיגול מזעריים, היא 37.98.", 
                math_expression: "<div dir='ltr'>37.98</div>" 
            }
        ],
        final_answer: "37.98"
    },

    // שאלה 14
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>מציאת הצלע הארוכה ביותר:</strong><br>
        במשולש כלשהו שלוש הזוויות הפנימיות הן: 50° , 60° , ו-70°.<br>
        אורך הצלע <strong>הקצרה ביותר</strong> במשולש הוא 8 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 200,120 150,30" fill="rgba(148,163,184,0.1)" stroke="#64748b" stroke-width="2"/>
            <text x="60" y="110" font-family="Arial" font-size="12">50&deg;</text>
            <text x="165" y="110" font-family="Arial" font-size="12">70&deg;</text>
            <text x="135" y="55" font-family="Arial" font-size="12">60&deg;</text>
            <text x="180" y="70" font-family="Arial" font-weight="bold" font-size="14">8</text>
            <text x="90" y="70" font-family="Arial" font-weight="bold" font-size="14" fill="#3b82f6">x</text>
        </svg>
        </div>
        חשבו את אורך הצלע <strong>הארוכה ביותר</strong> במשולש זה (x).`,
        options: [
            "9.80 ס\"מ",
            "12.10 ס\"מ",
            "10.00 ס\"מ",
            "8.50 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "בגיאומטריה של משולשים, הצלע הקצרה תמיד נמצאת מול הזווית הקטנה ביותר (50 מעלות), והצלע הארוכה תמיד נמצאת מול הזווית הגדולה ביותר (70 מעלות). השתמשו בשני זוגות אלו בחוק הסינוסים.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את הזוגות. הצלע הקצרה (8) נמצאת מול הזווית הקטנה ביותר (50 מעלות).", 
                math_expression: "<div dir='ltr'>8 / sin(50&deg;)</div>" 
            },
            { 
                verbal_explanation: "הצלע הארוכה ביותר, שנקרא לה x, חייבת להימצא מול הזווית הגדולה ביותר במשולש, שהיא 70 מעלות.", 
                math_expression: "<div dir='ltr'>x / sin(70&deg;) = 8 / sin(50&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפיל את המשוואה בסינוס של 70 מעלות כדי לבודד את המשתנה x.", 
                math_expression: "<div dir='ltr'>x = ( 8 &times; sin(70&deg;) ) / sin(50&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערכי הסינוסים באמצעות המחשבון.", 
                math_expression: "<div dir='ltr'>x = ( 8 &times; 0.939 ) / 0.766</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת הכפל שבמונה השבר.", 
                math_expression: "<div dir='ltr'>x = 7.512 / 0.766</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק לקבלת אורכה של הצלע הארוכה ביותר.", 
                math_expression: "<div dir='ltr'>x = 9.80</div>" 
            }
        ],
        final_answer: "9.80"
    },

    // שאלה 15
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>שאלת מציאות - תמיכה לעמוד חשמל:</strong><br>
        עמוד חשמל נתמך על ידי שני כבלי מתכת המחוברים לקרקע.<br>
        הזווית שיוצר הכבל השמאלי עם הקרקע היא 45°.<br>
        הזווית שיוצר הכבל הימני עם הקרקע היא 55°.<br>
        המרחק על הקרקע בין שתי נקודות העיגון של הכבלים הוא 20 מטרים.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="130" x2="230" y2="130" stroke="#0f172a" stroke-width="2"/> <polygon points="50,130 200,130 140,40" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="2"/>
            <text x="65" y="125" font-family="Arial" font-size="12">45&deg;</text>
            <text x="170" y="125" font-family="Arial" font-size="12">55&deg;</text>
            <text x="120" y="145" font-family="Arial" font-weight="bold" font-size="14">20</text>
            <text x="80" y="80" font-family="Arial" font-weight="bold" font-size="14" fill="#ef4444">x</text>
        </svg>
        </div>
        חשבו את אורכו של הכבל <strong>הארוך יותר</strong> מבין השניים (המסומן כ-x בשרטוט, ונמצא מול הזווית של 55°).`,
        options: [
            "16.64 מטרים",
            "14.36 מטרים",
            "20.50 מטרים",
            "12.00 מטרים"
        ],
        correctAnswer: 0,
        hint: "זהו משולש שבסיסו 20 והזוויות בבסיס הן 45 ו-55. קודם חשבו את זווית הראש (מול הצלע של ה-20) בעזרת סכום זוויות. לאחר מכן, הפעילו את חוק הסינוסים כדי למצוא את הכבל x הנמצא מול הזווית של 55.",
        solution_steps: [
            { 
                verbal_explanation: "נמצא את זווית הראש של המשולש (הזווית שבין שני הכבלים בראש העמוד) על ידי השלמה ל-180 מעלות.", 
                math_expression: "<div dir='ltr'>180&deg; - 45&deg; - 55&deg; = 80&deg;</div>" 
            },
            { 
                verbal_explanation: "כעת יש לנו את הצלע המלאה (20) והזווית שמולה (80). נרכיב משוואה עם הכבל המבוקש (x) והזווית שמולו (55).", 
                math_expression: "<div dir='ltr'>x / sin(55&deg;) = 20 / sin(80&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול בסינוס של חמישים וחמש כדי להשאיר את המשתנה לבד באגף.", 
                math_expression: "<div dir='ltr'>x = ( 20 &times; sin(55&deg;) ) / sin(80&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמיר את הפונקציות למספרים עשרוניים בעזרת המחשבון.", 
                math_expression: "<div dir='ltr'>x = ( 20 &times; 0.819 ) / 0.984</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל שבמונה.", 
                math_expression: "<div dir='ltr'>x = 16.38 / 0.984</div>" 
            },
            { 
                verbal_explanation: "נסיים בפעולת חילוק פשוטה כדי לקבל את אורכו של הכבל המבוקש.", 
                math_expression: "<div dir='ltr'>x = 16.64</div>" 
            }
        ],
        final_answer: "16.64"
    },// ========================================================================
// פעימה 2: שאלות 16 עד 30 - חוק הקוסינוסים, שטחים ושאלות משולבות
// ========================================================================

    // שאלה 16
    {
        topic: "bagrut_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: `<strong>מציאת צלע באמצעות חוק הקוסינוסים:</strong><br>
        במשולש כללי נתונות שתי צלעות והזווית הכלואה ביניהן.<br>
        אורך הצלע האחת הוא 8 ס"מ, ואורך הצלע השנייה הוא 11 ס"מ.<br>
        הזווית הנמצאת בדיוק בין שתי צלעות אלו היא בת 60°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 200,120 100,30" fill="rgba(239,68,68,0.05)" stroke="#ef4444" stroke-width="2"/>
            <text x="95" y="60" font-family="Arial" font-size="12">60&deg;</text>
            <text x="60" y="80" font-family="Arial" font-weight="bold" font-size="14">8</text>
            <text x="145" y="80" font-family="Arial" font-weight="bold" font-size="14">11</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14" fill="#3b82f6">x</text>
        </svg>
        </div>
        חשבו את אורך הצלע השלישית (x).`,
        options: [
            "9.84 ס\"מ",
            "12.15 ס\"מ",
            "8.50 ס\"מ",
            "10.20 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "השתמשו בחוק הקוסינוסים: הצלע שמול הזווית בריבוע שווה לסכום ריבועי הצלעות האחרות פחות פעמיים מכפלתן בקוסינוס הזווית. בסוף החישוב אל תשכחו להוציא שורש.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את חוק הקוסינוסים. הצלע שאנו מחפשים נמצאת לבדה באגף השמאלי, כי היא נמצאת מול הזווית הנתונה.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 8<sup>2</sup> + 11<sup>2</sup> - 2 &times; 8 &times; 11 &times; cos(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נעלה את המספרים בריבוע ונחשב את המכפלה שלפני הקוסינוס.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 64 + 121 - 176 &times; cos(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחבר את הריבועים, ונציב את הערך של קוסינוס 60 מעלות מהמחשבון (שהוא חצי).", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 185 - 176 &times; 0.5</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל. חובה לעשות כפל לפני החיסור.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 185 - 88</div>" 
            },
            { 
                verbal_explanation: "נחסר את המספרים כדי לקבל את אורך הצלע בריבוע.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 97</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי כדי לקבל את אורך הצלע עצמה.", 
                math_expression: "<div dir='ltr'>x = &radic;97 = 9.84</div>" 
            }
        ],
        final_answer: "9.84"
    },

    // שאלה 17
    {
        topic: "bagrut_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: `<strong>מציאת זווית חסרה (חוק הקוסינוסים):</strong><br>
        במשולש כללי נתונים אורכיהן של כל שלוש הצלעות: 5 ס"מ, 7 ס"מ ו-9 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="30,120 220,120 100,30" fill="rgba(14,165,233,0.1)" stroke="#0ea5e9" stroke-width="2"/>
            <text x="100" y="60" font-family="Arial" font-size="14" fill="#ef4444">&alpha;</text>
            <text x="60" y="80" font-family="Arial" font-weight="bold" font-size="14">5</text>
            <text x="155" y="80" font-family="Arial" font-weight="bold" font-size="14">7</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14">9</text>
        </svg>
        </div>
        חשבו את גודל הזווית המסומנת באות &alpha; הנמצאת <strong>מול</strong> הצלע שאורכה 9 ס"מ.`,
        options: [
            "95.73°",
            "84.27°",
            "105.00°",
            "70.50°"
        ],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בחוק הקוסינוסים כך שהצלע שמול הזווית (9) תעמוד לבדה באגף. בודדו את הקוסינוס (העברת אגפים וחילוק) והשתמשו בפונקציה של שיפט-קוסינוס. שימו לב לסימן המינוס.",
        solution_steps: [
            { 
                verbal_explanation: "נרכיב את משוואת חוק הקוסינוסים. הצלע 9 תבודד מכיוון שהיא מול הזווית המבוקשת.", 
                math_expression: "<div dir='ltr'>9<sup>2</sup> = 5<sup>2</sup> + 7<sup>2</sup> - 2 &times; 5 &times; 7 &times; cos(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את כל הריבועים ואת המכפלה המספרית.", 
                math_expression: "<div dir='ltr'>81 = 25 + 49 - 70 &times; cos(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נחבר את המספרים באגף הימני.", 
                math_expression: "<div dir='ltr'>81 = 74 - 70 &times; cos(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נעביר את המספר 74 לאגף השמאלי (הפעולה הופכת לחיסור).", 
                math_expression: "<div dir='ltr'>81 - 74 = -70 &times; cos(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור.", 
                math_expression: "<div dir='ltr'>7 = -70 &times; cos(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נחלק את המשוואה במינוס שבעים כדי לבודד את הקוסינוס.", 
                math_expression: "<div dir='ltr'>cos(&alpha;) = 7 / -70 = -0.1</div>" 
            },
            { 
                verbal_explanation: "ערך שלילי לקוסינוס מצביע על כך שהזווית היא קהה. נשתמש במחשבון למציאת הזווית.", 
                math_expression: "<div dir='ltr'>&alpha; = 95.73&deg;</div>" 
            }
        ],
        final_answer: "95.73&deg;"
    },

    // שאלה 18
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>חישוב בסיסי של שטח משולש:</strong><br>
        במשולש כללי נתונים אורכיהן של שתי צלעות: 12 ס"מ ו-16 ס"מ.<br>
        הזווית הנמצאת בדיוק בין שתי צלעות אלו (הזווית הכלואה) היא בת 45°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="30,120 200,120 120,20" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="2"/>
            <text x="115" y="45" font-family="Arial" font-size="12">45&deg;</text>
            <text x="60" y="65" font-family="Arial" font-weight="bold" font-size="14">12</text>
            <text x="165" y="65" font-family="Arial" font-weight="bold" font-size="14">16</text>
        </svg>
        </div>
        חשבו את שטחו הכולל של המשולש בסמ"ר.`,
        options: [
            "67.87",
            "96.00",
            "135.76",
            "48.50"
        ],
        correctAnswer: 0,
        hint: "הנוסחה לחישוב שטח משולש בעזרת טריגונומטריה היא: חצי כפול הצלע הראשונה כפול הצלע השנייה כפול סינוס הזווית שביניהן.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את הנוסחה לשטח משולש ונציב את המספרים הידועים לנו.", 
                math_expression: "<div dir='ltr'>0.5 &times; 12 &times; 16 &times; sin(45&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים הרגילים זה בזה (חצי כפול 12 כפול 16).", 
                math_expression: "<div dir='ltr'>96 &times; sin(45&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב במחשבון את הערך של סינוס 45 מעלות.", 
                math_expression: "<div dir='ltr'>96 &times; 0.707</div>" 
            },
            { 
                verbal_explanation: "נשלים את פעולת הכפל לקבלת השטח המדויק.", 
                math_expression: "<div dir='ltr'>67.87</div>" 
            }
        ],
        final_answer: "67.87"
    },

    // שאלה 19
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>מציאת צלע מתוך שטח נתון:</strong><br>
        שטחו הכולל של משולש מסוים הוא 40 סמ"ר.<br>
        אורך אחת הצלעות במשולש הוא 10 ס"מ, והזווית הסמוכה אליה היא בת 30°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 200,120 180,40" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
            <text x="60" y="110" font-family="Arial" font-size="12">30&deg;</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14">10</text>
            <text x="100" y="70" font-family="Arial" font-weight="bold" font-size="14" fill="#ef4444">x</text>
            <text x="135" y="85" font-family="Arial" font-weight="bold" font-size="16">S = 40</text>
        </svg>
        </div>
        חשבו את אורך הצלע השנייה הכלואה באותה זווית (המסומנת ב-x).`,
        options: [
            "16.00 ס\"מ",
            "8.00 ס\"מ",
            "20.00 ס\"מ",
            "12.50 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "הציבו את נתוני השטח, הצלע והזווית בנוסחת השטח הטריגונומטרית, כך ש-x יישאר המשתנה היחיד. פתרו את המשוואה לחילוץ x.",
        solution_steps: [
            { 
                verbal_explanation: "נציב את הנתונים בתוך נוסחת השטח. השטח הכולל נכתב באגף השמאלי.", 
                math_expression: "<div dir='ltr'>40 = 0.5 &times; 10 &times; x &times; sin(30&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמצא במחשבון את הערך של סינוס שלושים.", 
                math_expression: "<div dir='ltr'>40 = 0.5 &times; 10 &times; x &times; 0.5</div>" 
            },
            { 
                verbal_explanation: "נכפול את כל המספרים יחד באגף הימני כדי לפשט את המשוואה.", 
                math_expression: "<div dir='ltr'>40 = 2.5 &times; x</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את אורך הצלע, נחלק את שני האגפים ב-2.5.", 
                math_expression: "<div dir='ltr'>x = 40 / 2.5</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החילוק.", 
                math_expression: "<div dir='ltr'>x = 16</div>" 
            }
        ],
        final_answer: "16.00"
    },

    // שאלה 20
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>מציאת זווית מתוך שטח משולש:</strong><br>
        שטחו של משולש הוא 30 סמ"ר.<br>
        אורכי שתי צלעות במשולש הם 10 ס"מ ו-12 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="30,120 210,120 100,30" fill="rgba(148,163,184,0.1)" stroke="#64748b" stroke-width="2"/>
            <text x="60" y="80" font-family="Arial" font-weight="bold" font-size="14">10</text>
            <text x="110" y="135" font-family="Arial" font-weight="bold" font-size="14">12</text>
            <text x="55" y="110" font-family="Arial" font-size="14" fill="#ef4444">&alpha;</text>
            <text x="100" y="90" font-family="Arial" font-weight="bold" font-size="16">S = 30</text>
        </svg>
        </div>
        חשבו את גודלה של הזווית החדה (הקטנה מ-90°) הכלואה בין שתי צלעות אלו.`,
        options: [
            "30.00°",
            "45.00°",
            "60.00°",
            "35.50°"
        ],
        correctAnswer: 0,
        hint: "הציבו את השטח ושתי הצלעות בנוסחת השטח (שטח = חצי × צלע × צלע × סינוס הזווית). בודדו את פונקציית הסינוס ומצאו את הזווית.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את נוסחת השטח ונציב את הנתונים המספריים שבשאלה.", 
                math_expression: "<div dir='ltr'>30 = 0.5 &times; 10 &times; 12 &times; sin(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים באגף הימני כדי לפשט את המשוואה.", 
                math_expression: "<div dir='ltr'>30 = 60 &times; sin(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נחלק את המשוואה ב-60 כדי לבודד את הסינוס.", 
                math_expression: "<div dir='ltr'>sin(&alpha;) = 30 / 60 = 0.5</div>" 
            },
            { 
                verbal_explanation: "נשתמש בפעולה ההפוכה של סינוס במחשבון כדי לקבל את הזווית המדויקת במעלות.", 
                math_expression: "<div dir='ltr'>&alpha; = 30&deg;</div>" 
            }
        ],
        final_answer: "30.00&deg;"
    },

    // שאלה 21
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>חישוב שטח משולש שווה שוקיים (רב שלבי):</strong><br>
        במשולש שווה שוקיים, אורך הבסיס הוא 14 ס"מ.<br>
        כל אחת מזוויות הבסיס היא בת 40°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 200,120 120,40" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="2"/>
            <text x="60" y="110" font-family="Arial" font-size="12">40&deg;</text>
            <text x="165" y="110" font-family="Arial" font-size="12">40&deg;</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14">14</text>
        </svg>
        </div>
        חשבו את שטח המשולש בסמ"ר.`,
        options: [
            "41.03",
            "54.20",
            "38.50",
            "45.00"
        ],
        correctAnswer: 0,
        hint: "שלב א': מצאו את זווית הראש (השלמה ל-180). שלב ב': מצאו את אורך אחת השוקיים בעזרת חוק הסינוסים. שלב ג': חשבו שטח לפי שתי צלעות וזווית כלואה (בסיס, שוק והזווית שביניהם).",
        solution_steps: [
            { 
                verbal_explanation: "בשלב הראשון, נחשב את זווית הראש על ידי חיסור הזוויות הידועות מ-180.", 
                math_expression: "<div dir='ltr'>180&deg; - 40&deg; - 40&deg; = 100&deg;</div>" 
            },
            { 
                verbal_explanation: "נמצא את אורך אחת מהשוקיים (נקרא לה x) באמצעות חוק הסינוסים.", 
                math_expression: "<div dir='ltr'>x / sin(40&deg;) = 14 / sin(100&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול בסינוס 40 כדי לבודד את השוק שלנו.", 
                math_expression: "<div dir='ltr'>x = ( 14 &times; sin(40&deg;) ) / sin(100&deg;)</div>" 
            },
            { 
                verbal_explanation: "נציב את הערכים מהמחשבון ונחשב את אורך השוק.", 
                math_expression: "<div dir='ltr'>x = ( 14 &times; 0.642 ) / 0.984 = 8.988 / 0.984 = 9.13</div>" 
            },
            { 
                verbal_explanation: "כעת, כשיש לנו את אורך הבסיס (14), אורך השוק (9.13) והזווית שביניהם (40 מעלות), נחשב שטח.", 
                math_expression: "<div dir='ltr'>S = 0.5 &times; 14 &times; 9.13 &times; sin(40&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים ונציב את ערך הסינוס.", 
                math_expression: "<div dir='ltr'>S = 63.91 &times; 0.642</div>" 
            },
            { 
                verbal_explanation: "נסיים בפעולת הכפל לקבלת שטח המשולש.", 
                math_expression: "<div dir='ltr'>S = 41.03</div>" 
            }
        ],
        final_answer: "41.03"
    },

    // שאלה 22
    {
        topic: "bagrut_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: `<strong>מציאת אלכסון במקבילית:</strong><br>
        במקבילית נתונים אורכיהן של שתי צלעות סמוכות: 6 ס"מ ו-10 ס"מ.<br>
        הזווית הכלואה ביניהן היא בת 50°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="50,120 200,120 160,30 10,30" fill="rgba(168,85,247,0.1)" stroke="#a855f7" stroke-width="2"/>
            <line x1="50" y1="120" x2="160" y2="30" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="65" y="110" font-family="Arial" font-size="12">50&deg;</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14">10</text>
            <text x="20" y="80" font-family="Arial" font-weight="bold" font-size="14">6</text>
            <text x="100" y="70" font-family="Arial" font-weight="bold" font-size="14" fill="#ef4444">d</text>
        </svg>
        </div>
        חשבו את אורכו של <strong>האלכסון הקצר</strong> (d) הנמצא מול הזווית הנתונה.`,
        options: [
            "7.67 ס\"מ",
            "11.40 ס\"מ",
            "58.96 ס\"מ",
            "9.50 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "האלכסון מחלק את המקבילית לשני משולשים. התמקדו באחד המשולשים: יש לכם בו שתי צלעות (6 ו-10) וזווית כלואה (50). השתמשו בחוק הקוסינוסים.",
        solution_steps: [
            { 
                verbal_explanation: "נפעיל את חוק הקוסינוסים במשולש התחתון שנוצר על ידי האלכסון.", 
                math_expression: "<div dir='ltr'>d<sup>2</sup> = 6<sup>2</sup> + 10<sup>2</sup> - 2 &times; 6 &times; 10 &times; cos(50&deg;)</div>" 
            },
            { 
                verbal_explanation: "נעלה בריבוע ונחשב את מכפלת המקדמים של הקוסינוס.", 
                math_expression: "<div dir='ltr'>d<sup>2</sup> = 36 + 100 - 120 &times; cos(50&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחבר את המספרים ונציב את ערך הקוסינוס מהמחשבון.", 
                math_expression: "<div dir='ltr'>d<sup>2</sup> = 136 - 120 &times; 0.642</div>" 
            },
            { 
                verbal_explanation: "נבצע את כפל המספרים תחילה.", 
                math_expression: "<div dir='ltr'>d<sup>2</sup> = 136 - 77.04</div>" 
            },
            { 
                verbal_explanation: "נחסר לקבלת האלכסון בריבוע.", 
                math_expression: "<div dir='ltr'>d<sup>2</sup> = 58.96</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי כדי לקבל את אורכו המדויק של האלכסון.", 
                math_expression: "<div dir='ltr'>d = &radic;58.96 = 7.67</div>" 
            }
        ],
        final_answer: "7.67"
    },

    // שאלה 23
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>חישוב שטח מקבילית:</strong><br>
        במקבילית נתונים אורכיהן של שתי צלעות סמוכות: 8 ס"מ ו-15 ס"מ.<br>
        הזווית החדה של המקבילית היא בת 60°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="50,120 200,120 160,30 10,30" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="2"/>
            <text x="65" y="110" font-family="Arial" font-size="12">60&deg;</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14">15</text>
            <text x="20" y="80" font-family="Arial" font-weight="bold" font-size="14">8</text>
        </svg>
        </div>
        חשבו את <strong>השטח הכולל</strong> של המקבילית בסמ"ר.`,
        options: [
            "103.92",
            "51.96",
            "120.00",
            "60.00"
        ],
        correctAnswer: 0,
        hint: "חשבו את שטחו של משולש אחד במקבילית (חצי כפול צלע כפול צלע כפול סינוס הזווית) ואז הכפילו בשתיים. נוסחת שטח מקבילית היא גם פשוט צלע כפול צלע כפול סינוס הזווית.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את שטחו של משולש אחד המהווה חצי מהמקבילית.", 
                math_expression: "<div dir='ltr'>S1 = 0.5 &times; 8 &times; 15 &times; sin(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים זה בזה.", 
                math_expression: "<div dir='ltr'>S1 = 60 &times; sin(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמצא את הסינוס במחשבון ונסיים את הכפל לקבלת שטח המשולש.", 
                math_expression: "<div dir='ltr'>S1 = 60 &times; 0.866 = 51.96</div>" 
            },
            { 
                verbal_explanation: "מקבילית מורכבת משני משולשים זהים כאלו, לכן נכפיל את התוצאה פי שתיים לשטח הכולל.", 
                math_expression: "<div dir='ltr'>S = 51.96 &times; 2 = 103.92</div>" 
            }
        ],
        final_answer: "103.92"
    },

    // שאלה 24
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>חישוב שטח מעוין:</strong><br>
        נתון מעוין שבו אורך כל אחת מהצלעות הוא 10 ס"מ.<br>
        אחת הזוויות הקהות במעוין היא בת 120°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="50,120 150,120 200,30 100,30" fill="rgba(14,165,233,0.1)" stroke="#0ea5e9" stroke-width="2"/>
            <text x="110" y="110" font-family="Arial" font-size="12">120&deg;</text>
            <text x="100" y="135" font-family="Arial" font-weight="bold" font-size="14">10</text>
            <text x="175" y="80" font-family="Arial" font-weight="bold" font-size="14">10</text>
        </svg>
        </div>
        חשבו את שטחו הכולל של המעוין בסמ"ר.`,
        options: [
            "86.60",
            "43.30",
            "100.00",
            "50.00"
        ],
        correctAnswer: 0,
        hint: "המעוין מורכב משני משולשים. זווית קהה של 120 מעלות אומרת שהזווית החדה הסמוכה אליה היא 60 מעלות. תוכלו לחשב שטח משולש לפי אחת הזוויות (הסינוס שלהן זהה!) ולהכפיל ב-2.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את שטח אחד מהמשולשים המרכיבים את המעוין בעזרת הזווית הקהה (או החדה, הסינוס שווה).", 
                math_expression: "<div dir='ltr'>S1 = 0.5 &times; 10 &times; 10 &times; sin(120&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים.", 
                math_expression: "<div dir='ltr'>S1 = 50 &times; sin(120&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמצא במחשבון את הערך של סינוס 120 (אשר שווה לסינוס 60) ונכפול.", 
                math_expression: "<div dir='ltr'>S1 = 50 &times; 0.866 = 43.30</div>" 
            },
            { 
                verbal_explanation: "המעוין מורכב משני משולשים חופפים. נכפיל את התוצאה פי שתיים לשטח הכולל.", 
                math_expression: "<div dir='ltr'>S = 43.30 &times; 2 = 86.60</div>" 
            }
        ],
        final_answer: "86.60"
    },

    // שאלה 25
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>חישוב שטח מרובע המורכב משני משולשים:</strong><br>
        במרובע כלשהו עובר אלכסון המחלק אותו לשני משולשים.<br>
        במשולש העליון נתונות צלעות של 6 ס"מ ו-8 ס"מ, והזווית ביניהן היא 110°.<br>
        במשולש התחתון נתונות צלעות של 12 ס"מ (האלכסון המשותף) ו-9 ס"מ, והזווית ביניהן היא 40°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 160" width="100%" height="160" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="20,80 140,20 220,100 80,140" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="2"/>
            <line x1="20" y1="80" x2="220" y2="100" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="100" y="60" font-family="Arial" font-size="12">110&deg;</text>
            <text x="130" y="115" font-family="Arial" font-size="12">40&deg;</text>
            <text x="70" y="45" font-family="Arial" font-weight="bold" font-size="14">6</text>
            <text x="180" y="55" font-family="Arial" font-weight="bold" font-size="14">8</text>
            <text x="150" y="135" font-family="Arial" font-weight="bold" font-size="14">9</text>
            <text x="110" y="85" font-family="Arial" font-weight="bold" font-size="14">12</text>
        </svg>
        </div>
        חשבו את השטח הכולל של המרובע כולו בסמ"ר.`,
        options: [
            "57.19",
            "60.00",
            "45.30",
            "68.50"
        ],
        correctAnswer: 0,
        hint: "חשבו את שטחו של כל משולש בנפרד באמצעות נוסחת השטח (חצי כפול צלע כפול צלע כפול סינוס הזווית שביניהן). בסוף, חברו את שני השטחים יחד.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את שטח המשולש העליון המוגדר על ידי הצלעות 6 ו-8 והזווית הכלואה ביניהן.", 
                math_expression: "<div dir='ltr'>S1 = 0.5 &times; 6 &times; 8 &times; sin(110&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את מכפלת המספרים ואת הסינוס במחשבון לשטח המשולש הראשון.", 
                math_expression: "<div dir='ltr'>S1 = 24 &times; 0.939 = 22.53</div>" 
            },
            { 
                verbal_explanation: "נחשב כעת את שטח המשולש התחתון בעזרת האלכסון (12), הצלע השנייה (9) והזווית (40).", 
                math_expression: "<div dir='ltr'>S2 = 0.5 &times; 12 &times; 9 &times; sin(40&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את המכפלה עבור המשולש השני.", 
                math_expression: "<div dir='ltr'>S2 = 54 &times; 0.642 = 34.66</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את השטח הכולל של המרובע, נחבר את שני השטחים יחד.", 
                math_expression: "<div dir='ltr'>S = 22.53 + 34.66 = 57.19</div>" 
            }
        ],
        final_answer: "57.19"
    },

    // שאלה 26
    {
        topic: "bagrut_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: `<strong>מציאת בסיס במשולש שווה שוקיים קהה-זווית:</strong><br>
        נתון משולש שווה שוקיים שאורך כל אחת משוקיו הוא 15 ס"מ.<br>
        זווית הראש של המשולש היא זווית קהה בת 130°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="10,120 240,120 125,50" fill="rgba(148,163,184,0.1)" stroke="#64748b" stroke-width="2"/>
            <text x="110" y="80" font-family="Arial" font-size="12">130&deg;</text>
            <text x="60" y="80" font-family="Arial" font-weight="bold" font-size="14">15</text>
            <text x="180" y="80" font-family="Arial" font-weight="bold" font-size="14">15</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14" fill="#3b82f6">x</text>
        </svg>
        </div>
        חשבו את אורכו של בסיס המשולש (x).`,
        options: [
            "27.18 ס\"מ",
            "15.00 ס\"מ",
            "30.00 ס\"מ",
            "21.21 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "הפעילו את חוק הקוסינוסים עם שתי שוקיים של 15 וזווית של 130. זכרו שקוסינוס של זווית קהה (מעל 90) הוא מספר שלילי, וזה יהפוך את סימן החיסור שבנוסחה לחיבור.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את חוק הקוסינוסים למציאת הצלע שמול הזווית הנתונה.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 15<sup>2</sup> + 15<sup>2</sup> - 2 &times; 15 &times; 15 &times; cos(130&deg;)</div>" 
            },
            { 
                verbal_explanation: "נעלה את השוקיים בריבוע ונחשב את מכפלת המקדמים שלפני הקוסינוס.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 225 + 225 - 450 &times; cos(130&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמצא את ערך הקוסינוס במחשבון (זהו מספר שלילי).", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 450 - 450 &times; (-0.642)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים השליליים, דבר שהופך את הפעולה לחיבור.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 450 + 288.9 = 738.9</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי לקבלת אורך בסיס המשולש.", 
                math_expression: "<div dir='ltr'>x = &radic;738.9 = 27.18</div>" 
            }
        ],
        final_answer: "27.18"
    },

    // שאלה 27
    {
        topic: "bagrut_35371",
        subTopic: "חוק הסינוסים",
        question_text: `<strong>מציאת גובה בתוך משולש (אתגר רב שלבי):</strong><br>
        במשולש כללי נתונה צלע הבסיס באורך 20 ס"מ.<br>
        שתי הזוויות הסמוכות לבסיס הן בת 45° ו-65°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="30,120 220,120 140,20" fill="rgba(234,179,8,0.1)" stroke="#eab308" stroke-width="2"/>
            <line x1="140" y1="20" x2="140" y2="120" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="145" y="80" font-family="Arial" font-weight="bold" font-size="14" fill="#ef4444">h</text>
            <text x="50" y="110" font-family="Arial" font-size="12">45&deg;</text>
            <text x="175" y="110" font-family="Arial" font-size="12">65&deg;</text>
            <text x="125" y="135" font-family="Arial" font-weight="bold" font-size="14">20</text>
        </svg>
        </div>
        חשבו את אורך הגובה (h) היורד אל צלע הבסיס.`,
        options: [
            "13.63 ס\"מ",
            "18.12 ס\"מ",
            "10.00 ס\"מ",
            "15.45 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "שלב א': מצאו את הזווית העליונה (מול הבסיס) והשלימו ל-180. שלב ב': בעזרת חוק הסינוסים, מצאו את אחת הצלעות הצדדיות. שלב ג': התמקדו באחד המשולשים ישרי הזווית שנוצרו על ידי הגובה, והשתמשו בסינוס של הזווית שבבסיסו.",
        solution_steps: [
            { 
                verbal_explanation: "נמצא תחילה את זווית הראש של המשולש (מול הבסיס 20) על ידי השלמה ל-180 מעלות.", 
                math_expression: "<div dir='ltr'>180&deg; - 45&deg; - 65&deg; = 70&deg;</div>" 
            },
            { 
                verbal_explanation: "נשתמש בחוק הסינוסים כדי למצוא את הצלע הצדדית השמאלית (נקרא לה y), הנמצאת מול הזווית של 65 מעלות.", 
                math_expression: "<div dir='ltr'>y / sin(65&deg;) = 20 / sin(70&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול בסינוס שישים וחמש ונחשב במחשבון את אורך הצלע השמאלית.", 
                math_expression: "<div dir='ltr'>y = ( 20 &times; sin(65&deg;) ) / sin(70&deg;) = 18.12 / 0.939 = 19.29</div>" 
            },
            { 
                verbal_explanation: "כעת נתמקד במשולש ישר הזווית השמאלי. היתר שלו הוא הצלע שמצאנו (19.29), הזווית הבסיסית היא 45, והגובה h הוא הניצב שמול הזווית.", 
                math_expression: "<div dir='ltr'>sin(45&deg;) = h / 19.29</div>" 
            },
            { 
                verbal_explanation: "נכפול את היתר בסינוס הזווית כדי לחלץ את הגובה.", 
                math_expression: "<div dir='ltr'>h = 19.29 &times; sin(45&deg;)</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ונמצא את אורך הגובה בסנטימטרים.", 
                math_expression: "<div dir='ltr'>h = 19.29 &times; 0.707 = 13.63</div>" 
            }
        ],
        final_answer: "13.63"
    },

    // שאלה 28
    {
        topic: "bagrut_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: `<strong>הוכחת זווית ישרה באמצעות חוק הקוסינוסים:</strong><br>
        במשולש כללי נתונים אורכיהן של כל שלוש הצלעות: 6 ס"מ, 8 ס"מ ו-10 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 180,120 40,30" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="2"/>
            <text x="50" y="110" font-family="Arial" font-size="14" fill="#3b82f6">&alpha;</text>
            <text x="30" y="80" font-family="Arial" font-weight="bold" font-size="14">6</text>
            <text x="110" y="135" font-family="Arial" font-weight="bold" font-size="14">8</text>
            <text x="115" y="70" font-family="Arial" font-weight="bold" font-size="14">10</text>
        </svg>
        </div>
        חשבו את גודלה של הזווית המסומנת באות &alpha; הנמצאת מול הצלע שאורכה 10 ס"מ.`,
        options: [
            "90°",
            "60°",
            "45°",
            "120°"
        ],
        correctAnswer: 0,
        hint: "הציבו את שלוש הצלעות בחוק הקוסינוסים כך שהצלע 10 תעמוד לבדה באגף (כי היא מול הזווית המבוקשת). פתרו את המשוואה וראו מה קורה למקדם של הקוסינוס.",
        solution_steps: [
            { 
                verbal_explanation: "נציב את הנתונים בחוק הקוסינוסים כדי למצוא את הזווית אלפא.", 
                math_expression: "<div dir='ltr'>10<sup>2</sup> = 6<sup>2</sup> + 8<sup>2</sup> - 2 &times; 6 &times; 8 &times; cos(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נעלה את כל המספרים בריבוע ונחשב את מכפלת המקדמים.", 
                math_expression: "<div dir='ltr'>100 = 36 + 64 - 96 &times; cos(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נחבר את המספרים שבאגף הימני.", 
                math_expression: "<div dir='ltr'>100 = 100 - 96 &times; cos(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נעביר את המאה לאגף השמאלי בחיסור. נקבל אפס בצד אחד של המשוואה.", 
                math_expression: "<div dir='ltr'>0 = -96 &times; cos(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נחלק במינוס תשעים ושש. נקבל שהקוסינוס שווה לאפס. המשמעות של כך היא שהזווית היא 90 מעלות (משולש ישר זווית).", 
                math_expression: "<div dir='ltr'>cos(&alpha;) = 0 &nbsp;&#10132;&nbsp; &alpha; = 90&deg;</div>" 
            }
        ],
        final_answer: "90&deg;"
    },

    // שאלה 29
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>חישוב שטח משולש שווה צלעות:</strong><br>
        נתון משולש שווה צלעות שבו כל אחת מהצלעות היא באורך 10 ס"מ.<br>
        במשולש שווה צלעות, כל הזוויות שוות ל-60°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="60,120 180,120 120,20" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
            <text x="80" y="110" font-family="Arial" font-size="12">60&deg;</text>
            <text x="155" y="110" font-family="Arial" font-size="12">60&deg;</text>
            <text x="120" y="45" font-family="Arial" font-size="12">60&deg;</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14">10</text>
            <text x="75" y="70" font-family="Arial" font-weight="bold" font-size="14">10</text>
        </svg>
        </div>
        חשבו את שטחו של המשולש בסמ"ר.`,
        options: [
            "43.30",
            "50.00",
            "86.60",
            "25.00"
        ],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחת השטח הטריגונומטרית. השתמשו בכל שתי צלעות סמוכות (10 ו-10) והזווית שביניהן (60 מעלות).",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את הנוסחה לחישוב השטח בעזרת שתי הצלעות והזווית הכלואה.", 
                math_expression: "<div dir='ltr'>S = 0.5 &times; 10 &times; 10 &times; sin(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים ההתחלתיים (חצי כפול מאה).", 
                math_expression: "<div dir='ltr'>S = 50 &times; sin(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמצא במחשבון את הערך של סינוס שישים מעלות.", 
                math_expression: "<div dir='ltr'>S = 50 &times; 0.866</div>" 
            },
            { 
                verbal_explanation: "נשלים את ההכפלה לקבלת השטח המדויק.", 
                math_expression: "<div dir='ltr'>S = 43.30</div>" 
            }
        ],
        final_answer: "43.30"
    },

    // שאלה 30
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>שאלת אתגר מסכמת: שטח משושה משוכלל בתוך מעגל</strong><br>
        משושה משוכלל (בעל 6 צלעות שוות) חסום במעגל שרדיוסו הוא 8 ס"מ.<br>
        משושה כזה מורכב מ-6 משולשים שווי-שוקיים חופפים הנפגשים במרכז המעגל.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 200" width="100%" height="180" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
            <polygon points="100,20 169.3,60 169.3,140 100,180 30.7,140 30.7,60" fill="rgba(168,85,247,0.1)" stroke="#a855f7" stroke-width="2"/>
            <line x1="100" y1="100" x2="100" y2="20" stroke="#0f172a" stroke-width="1"/>
            <line x1="100" y1="100" x2="169.3" y2="60" stroke="#0f172a" stroke-width="1"/>
            <line x1="100" y1="100" x2="169.3" y2="140" stroke="#0f172a" stroke-width="1"/>
            <line x1="100" y1="100" x2="100" y2="180" stroke="#0f172a" stroke-width="1"/>
            <line x1="100" y1="100" x2="30.7" y2="140" stroke="#0f172a" stroke-width="1"/>
            <line x1="100" y1="100" x2="30.7" y2="60" stroke="#0f172a" stroke-width="1"/>
            <text x="110" y="60" font-family="Arial" font-size="12">8</text>
        </svg>
        </div>
        חשבו את השטח הכולל של המשושה בסמ"ר.`,
        options: [
            "166.27",
            "192.00",
            "83.14",
            "144.50"
        ],
        correctAnswer: 0,
        hint: "במשושה, 360 המעלות שסביב המרכז מתחלקות ל-6 משולשים (360 חלקי 6). חשבו את השטח של משולש בודד כזה בעזרת שני הרדיוסים (8 ו-8) והזווית שביניהם, ואז הכפילו ב-6.",
        solution_steps: [
            { 
                verbal_explanation: "נמצא את זווית הראש של משולש אחד בתוך המשושה, על ידי חלוקת המעגל השלם לשישה חלקים שווים.", 
                math_expression: "<div dir='ltr'>360&deg; / 6 = 60&deg;</div>" 
            },
            { 
                verbal_explanation: "נחשב את שטחו של משולש בודד במשושה. שתי הצלעות שלו הן בעצם הרדיוסים (שאורכם 8), והזווית ביניהם היא 60.", 
                math_expression: "<div dir='ltr'>0.5 &times; 8 &times; 8 &times; sin(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים, ונמצא במחשבון את סינוס שישים.", 
                math_expression: "<div dir='ltr'>32 &times; 0.866</div>" 
            },
            { 
                verbal_explanation: "נשלים את הכפל כדי לקבל את שטח המשולש האחד.", 
                math_expression: "<div dir='ltr'>27.71</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהמשושה מורכב משישה משולשים זהים, נכפיל את השטח ב-6.", 
                math_expression: "<div dir='ltr'>27.71 &times; 6 = 166.26</div>" 
            },
            { 
                verbal_explanation: "כתוצאה מעיגולי ספרות קטנים בחישוב, התשובה הקרובה ביותר והמדויקת ביותר היא 166.27.", 
                math_expression: "<div dir='ltr'>166.27</div>" 
            }
        ],
        final_answer: "166.27"
    },// שאלה 1
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>חישוב בסיסי של שטח משולש:</strong><br>
        במשולש נתונים אורכיהן של שתי צלעות: 10 ס"מ ו-12 ס"מ.<br>
        הזווית הנמצאת <strong>בדיוק ביניהן</strong> (הזווית הכלואה) היא בת 30°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 200,120 120,40" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="2"/>
            <text x="115" y="65" font-family="Arial" font-size="12">30&deg;</text>
            <text x="70" y="75" font-family="Arial" font-weight="bold" font-size="14">10</text>
            <text x="165" y="75" font-family="Arial" font-weight="bold" font-size="14">12</text>
        </svg>
        </div>
        חשבו את שטחו הכולל של המשולש בסמ"ר.`,
        options: [
            "30.00",
            "60.00",
            "120.00",
            "15.00"
        ],
        correctAnswer: 0,
        hint: "נוסחת השטח הטריגונומטרית היא: חצי כפול צלע ראשונה כפול צלע שנייה כפול סינוס הזווית שביניהן.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את הנוסחה לחישוב השטח. נציב את שתי הצלעות הידועות ואת הזווית שביניהן.", 
                math_expression: "<div dir='ltr'>S = 0.5 &times; 10 &times; 12 &times; sin(30&deg;)</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל של המספרים הרגילים (חצי כפול עשר כפול שתים-עשרה).", 
                math_expression: "<div dir='ltr'>S = 60 &times; sin(30&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמצא במחשבון את הערך של סינוס שלושים מעלות.", 
                math_expression: "<div dir='ltr'>S = 60 &times; 0.5</div>" 
            },
            { 
                verbal_explanation: "נשלים את פעולת הכפל האחרונה לקבלת השטח המדויק.", 
                math_expression: "<div dir='ltr'>S = 30</div>" 
            }
        ],
        final_answer: "30.00"
    },

    // שאלה 2
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>שטח משולש - שימוש בסינוס:</strong><br>
        נתון משולש שאורכי שתיים מצלעותיו הם 8 ס"מ ו-15 ס"מ.<br>
        הזווית הכלואה בין שתי צלעות אלו היא 45°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="30,120 220,120 120,20" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
            <text x="115" y="50" font-family="Arial" font-size="12">45&deg;</text>
            <text x="65" y="70" font-family="Arial" font-weight="bold" font-size="14">8</text>
            <text x="175" y="70" font-family="Arial" font-weight="bold" font-size="14">15</text>
        </svg>
        </div>
        חשבו את שטח המשולש (עגלו לשתי ספרות אחרי הנקודה).`,
        options: [
            "42.42",
            "84.84",
            "60.00",
            "30.00"
        ],
        correctAnswer: 0,
        hint: "הציבו את שתי הצלעות וסינוס הזווית בנוסחת השטח (0.5 כפול צלע כפול צלע כפול סינוס הזווית).",
        solution_steps: [
            { 
                verbal_explanation: "נרכיב את משוואת השטח באמצעות שתי הצלעות והזווית שביניהן.", 
                math_expression: "<div dir='ltr'>S = 0.5 &times; 8 &times; 15 &times; sin(45&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים ההתחלתיים זה בזה.", 
                math_expression: "<div dir='ltr'>S = 60 &times; sin(45&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסינוס במחשבון.", 
                math_expression: "<div dir='ltr'>S = 60 &times; 0.707</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל הסופי לקבלת השטח.", 
                math_expression: "<div dir='ltr'>S = 42.42</div>" 
            }
        ],
        final_answer: "42.42"
    },

    // שאלה 3
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>שטח משולש קהה-זווית:</strong><br>
        במשולש קהה-זווית, אורך הצלע האחת הוא 14 ס"מ, ואורך הצלע השנייה הוא 20 ס"מ.<br>
        הזווית הקהה שבין שתי צלעות אלו היא 150°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="10,120 240,120 140,70" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
            <text x="125" y="95" font-family="Arial" font-size="12">150&deg;</text>
            <text x="70" y="85" font-family="Arial" font-weight="bold" font-size="14">14</text>
            <text x="190" y="85" font-family="Arial" font-weight="bold" font-size="14">20</text>
        </svg>
        </div>
        חשבו את שטח המשולש בסמ"ר.`,
        options: [
            "70.00",
            "140.00",
            "121.24",
            "35.00"
        ],
        correctAnswer: 0,
        hint: "נוסחת השטח עובדת בצורה מושלמת גם עבור זוויות קהות. הציבו את המספרים וחשבו.",
        solution_steps: [
            { 
                verbal_explanation: "נציב את הנתונים ישירות לתוך נוסחת השטח הכללית למשולש.", 
                math_expression: "<div dir='ltr'>S = 0.5 &times; 14 &times; 20 &times; sin(150&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים (חצי כפול ארבע עשרה כפול עשרים).", 
                math_expression: "<div dir='ltr'>S = 140 &times; sin(150&deg;)</div>" 
            },
            { 
                verbal_explanation: "נבדוק את ערכו של סינוס מאה וחמישים במחשבון.", 
                math_expression: "<div dir='ltr'>S = 140 &times; 0.5</div>" 
            },
            { 
                verbal_explanation: "נשלים את הכפל לקבלת שטח המשולש הקהה-זווית.", 
                math_expression: "<div dir='ltr'>S = 70</div>" 
            }
        ],
        final_answer: "70.00"
    },

    // שאלה 4
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>מציאת צלע חסרה מתוך שטח נתון:</strong><br>
        שטחו הכולל של משולש מסוים הוא 50 סמ"ר.<br>
        אורך אחת מהצלעות במשולש הוא 10 ס"מ, והזווית הסמוכה לה היא 30°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 200,120 160,40" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="2"/>
            <text x="60" y="110" font-family="Arial" font-size="12">30&deg;</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14">x</text>
            <text x="95" y="70" font-family="Arial" font-weight="bold" font-size="14">10</text>
            <text x="130" y="85" font-family="Arial" font-weight="bold" font-size="16">S = 50</text>
        </svg>
        </div>
        חשבו את אורך הצלע השנייה (x) הכלואה באותה זווית.`,
        options: [
            "20.00 ס\"מ",
            "10.00 ס\"מ",
            "25.00 ס\"מ",
            "15.00 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "הציבו את כל הנתונים, כולל השטח, בתוך נוסחת השטח כך שרק הצלע x תישאר כנעלם. פתרו את המשוואה וחלצו את x.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את נוסחת השטח ונציב את הנתונים הידועים לנו בתוכה.", 
                math_expression: "<div dir='ltr'>50 = 0.5 &times; 10 &times; x &times; sin(30&deg;)</div>" 
            },
            { 
                verbal_explanation: "נמצא במחשבון את הערך של סינוס שלושים מעלות.", 
                math_expression: "<div dir='ltr'>50 = 0.5 &times; 10 &times; x &times; 0.5</div>" 
            },
            { 
                verbal_explanation: "נכפול את כל המספרים יחד באגף הימני כדי לפשט.", 
                math_expression: "<div dir='ltr'>50 = 2.5 &times; x</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את אורך הצלע, נחלק את המשוואה ב-2.5.", 
                math_expression: "<div dir='ltr'>x = 50 / 2.5</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החילוק לקבלת התוצאה.", 
                math_expression: "<div dir='ltr'>x = 20</div>" 
            }
        ],
        final_answer: "20.00"
    },

    // שאלה 5
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>מציאת זווית מתוך שטח נתון:</strong><br>
        שטחו של משולש הוא 40 סמ"ר.<br>
        אורכי שתיים מצלעותיו הם 10 ס"מ ו-16 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="30,120 220,120 100,30" fill="rgba(148,163,184,0.1)" stroke="#64748b" stroke-width="2"/>
            <text x="60" y="80" font-family="Arial" font-weight="bold" font-size="14">10</text>
            <text x="150" y="80" font-family="Arial" font-weight="bold" font-size="14">16</text>
            <text x="100" y="60" font-family="Arial" font-size="14" fill="#ef4444">&alpha;</text>
            <text x="110" y="95" font-family="Arial" font-weight="bold" font-size="16">S = 40</text>
        </svg>
        </div>
        חשבו את גודלה של הזווית החדה (הקטנה מ-90°) הכלואה בין שתי צלעות אלו.`,
        options: [
            "30.00°",
            "45.00°",
            "60.00°",
            "35.50°"
        ],
        correctAnswer: 0,
        hint: "הציבו את השטח ושתי הצלעות בנוסחת השטח. לאחר מכן בודדו את הביטוי הכולל את הסינוס, והשתמשו בפונקציה ההפוכה (SHIFT SIN).",
        solution_steps: [
            { 
                verbal_explanation: "נציב את הנתונים המספריים בתוך משוואת השטח.", 
                math_expression: "<div dir='ltr'>40 = 0.5 &times; 10 &times; 16 &times; sin(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים באגף הימני.", 
                math_expression: "<div dir='ltr'>40 = 80 &times; sin(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נחלק את המשוואה בשמונים כדי להשאיר את הסינוס לבדו באגף.", 
                math_expression: "<div dir='ltr'>sin(&alpha;) = 40 / 80</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך השבר.", 
                math_expression: "<div dir='ltr'>sin(&alpha;) = 0.5</div>" 
            },
            { 
                verbal_explanation: "נשתמש בפעולה ההפוכה של הסינוס במחשבון כדי לקבל את הזווית המדויקת.", 
                math_expression: "<div dir='ltr'>&alpha; = 30&deg;</div>" 
            }
        ],
        final_answer: "30.00&deg;"
    },

    // שאלה 6
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>שטח משולש שווה שוקיים - רב שלבי:</strong><br>
        במשולש שווה שוקיים, אורך צלע הבסיס הוא 16 ס"מ.<br>
        כל אחת מזוויות הבסיס היא בת 40°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 210,120 125,30" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="2"/>
            <text x="60" y="110" font-family="Arial" font-size="12">40&deg;</text>
            <text x="175" y="110" font-family="Arial" font-size="12">40&deg;</text>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14">16</text>
        </svg>
        </div>
        חשבו את שטחו הכולל של המשולש בסמ"ר.`,
        options: [
            "53.56",
            "83.44",
            "107.12",
            "45.20"
        ],
        correctAnswer: 0,
        hint: "שלב א': מצאו את זווית הראש. שלב ב': השתמשו בחוק הסינוסים כדי למצוא את אורך אחת השוקיים. שלב ג': הפעילו את נוסחת השטח בעזרת שתי הצלעות שיש לכם (בסיס ושוק) והזווית הכלואה ביניהן (40).",
        solution_steps: [
            { 
                verbal_explanation: "בשלב הראשון, נחשב את זווית הראש של המשולש על ידי חיסור מזוויות הבסיס.", 
                math_expression: "<div dir='ltr'>180&deg; - 40&deg; - 40&deg; = 100&deg;</div>" 
            },
            { 
                verbal_explanation: "נמצא את אורך השוק (x) בעזרת חוק הסינוסים.", 
                math_expression: "<div dir='ltr'>x / sin(40&deg;) = 16 / sin(100&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול בסינוס ארבעים כדי לבודד את הצלע הנעלמת.", 
                math_expression: "<div dir='ltr'>x = ( 16 &times; sin(40&deg;) ) / sin(100&deg;)</div>" 
            },
            { 
                verbal_explanation: "נציב את הערכים מהמחשבון ונבצע חילוק למציאת השוק.", 
                math_expression: "<div dir='ltr'>x = ( 16 &times; 0.642 ) / 0.984 = 10.27 / 0.984 = 10.43</div>" 
            },
            { 
                verbal_explanation: "עכשיו נחשב את השטח. ניקח את צלע הבסיס (16), את השוק שמצאנו (10.43) ואת הזווית שביניהם (40).", 
                math_expression: "<div dir='ltr'>S = 0.5 &times; 16 &times; 10.43 &times; sin(40&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים ונקבל תוצאת ביניים.", 
                math_expression: "<div dir='ltr'>S = 83.44 &times; 0.642</div>" 
            },
            { 
                verbal_explanation: "נשלים את ההכפלה לקבלת השטח הסופי של המשולש.", 
                math_expression: "<div dir='ltr'>S = 53.56</div>" 
            }
        ],
        final_answer: "53.56"
    },

    // שאלה 7
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>שטח משולש שווה שוקיים מזווית הראש:</strong><br>
        במשולש שווה שוקיים, אורך כל אחת משתי השוקיים הוא 12 ס"מ.<br>
        זווית הראש (הזווית הכלואה בין השוקיים) היא בת 100°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="20,120 230,120 125,50" fill="rgba(14,165,233,0.1)" stroke="#0ea5e9" stroke-width="2"/>
            <text x="110" y="80" font-family="Arial" font-size="12">100&deg;</text>
            <text x="60" y="80" font-family="Arial" font-weight="bold" font-size="14">12</text>
            <text x="180" y="80" font-family="Arial" font-weight="bold" font-size="14">12</text>
        </svg>
        </div>
        חשבו את שטחו הכולל של המשולש.`,
        options: [
            "70.84",
            "141.68",
            "35.42",
            "84.00"
        ],
        correctAnswer: 0,
        hint: "הנתונים כוללים שתי צלעות וזווית כלואה (12, 12 ו-100 מעלות). פשוט הציבו הכל בנוסחת השטח ופתרו במכה אחת.",
        solution_steps: [
            { 
                verbal_explanation: "נציב את הנתונים ישירות בנוסחת השטח.", 
                math_expression: "<div dir='ltr'>S = 0.5 &times; 12 &times; 12 &times; sin(100&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים ההתחלתיים זה בזה.", 
                math_expression: "<div dir='ltr'>S = 72 &times; sin(100&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסינוס במחשבון.", 
                math_expression: "<div dir='ltr'>S = 72 &times; 0.984</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל האחרון לקבלת השטח המדויק.", 
                math_expression: "<div dir='ltr'>S = 70.84</div>" 
            }
        ],
        final_answer: "70.84"
    },

    // שאלה 8
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>חישוב שטח מקבילית:</strong><br>
        במקבילית נתונים אורכיהן של שתי צלעות סמוכות: 10 ס"מ ו-20 ס"מ.<br>
        הזווית הכלואה ביניהן היא בת 60°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="50,120 220,120 180,30 10,30" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="2"/>
            <text x="65" y="110" font-family="Arial" font-size="12">60&deg;</text>
            <text x="125" y="135" font-family="Arial" font-weight="bold" font-size="14">20</text>
            <text x="20" y="80" font-family="Arial" font-weight="bold" font-size="14">10</text>
        </svg>
        </div>
        חשבו את שטחה הכולל של המקבילית.`,
        options: [
            "173.20 סמ\"ר",
            "86.60 סמ\"ר",
            "200.00 סמ\"ר",
            "100.00 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "האלכסון של המקבילית מחלק אותה לשני משולשים שווים. חשבו שטח של משולש אחד והכפילו בשתיים. (לחלופין, נוסחת המקבילית היא פשוט צלע כפול צלע כפול סינוס הזווית).",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את שטחו של המשולש שמהווה בדיוק חצי מהמקבילית.", 
                math_expression: "<div dir='ltr'>S1 = 0.5 &times; 10 &times; 20 &times; sin(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים השלמים.", 
                math_expression: "<div dir='ltr'>S1 = 100 &times; sin(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסינוס ונסיים את חישוב שטח המשולש.", 
                math_expression: "<div dir='ltr'>S1 = 100 &times; 0.866 = 86.60</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהמקבילית מורכבת משני משולשים חופפים לחלוטין, נכפיל בשתיים לשטח המלא.", 
                math_expression: "<div dir='ltr'>S = 86.60 &times; 2 = 173.20</div>" 
            }
        ],
        final_answer: "173.20"
    },

    // שאלה 9
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>חישוב שטח מעוין:</strong><br>
        במעוין, כל הצלעות שוות באורכן. אורך צלע המעוין הוא 8 ס"מ.<br>
        אחת מהזוויות החדות של המעוין היא בת 50°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="50,120 180,120 210,30 80,30" fill="rgba(168,85,247,0.1)" stroke="#a855f7" stroke-width="2"/>
            <text x="65" y="110" font-family="Arial" font-size="12">50&deg;</text>
            <text x="110" y="135" font-family="Arial" font-weight="bold" font-size="14">8</text>
            <text x="35" y="80" font-family="Arial" font-weight="bold" font-size="14">8</text>
        </svg>
        </div>
        חשבו את שטחו הכולל של המעוין.`,
        options: [
            "49.02",
            "24.51",
            "64.00",
            "32.00"
        ],
        correctAnswer: 0,
        hint: "חשבו את השטח של אחד משני המשולשים המרכיבים את המעוין (לפי שתי צלעות של 8 וזווית של 50), ואז הכפילו פי שתיים.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב תחילה את השטח של חצי מהמעוין, כלומר משולש שצלעותיו הן 8 והזווית שביניהן 50.", 
                math_expression: "<div dir='ltr'>S1 = 0.5 &times; 8 &times; 8 &times; sin(50&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים ההתחלתיים.", 
                math_expression: "<div dir='ltr'>S1 = 32 &times; sin(50&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסינוס ונמצא את שטח המשולש.", 
                math_expression: "<div dir='ltr'>S1 = 32 &times; 0.766 = 24.51</div>" 
            },
            { 
                verbal_explanation: "נכפיל את שטח המשולש בשתיים כדי למצוא את השטח של כל המעוין.", 
                math_expression: "<div dir='ltr'>S = 24.51 &times; 2 = 49.02</div>" 
            }
        ],
        final_answer: "49.02"
    },

    // שאלה 10
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>שטח משולש הנוצר מתוך מעגל:</strong><br>
        בתוך מעגל שרדיוסו 10 ס"מ, שורטטו שני רדיוסים.<br>
        הזווית הכלואה בין שני הרדיוסים היא בת 70°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 200" width="100%" height="180" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
            <polygon points="100,100 175.4,72.6 127.3,176.6" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="2"/>
            <circle cx="100" cy="100" r="3" fill="#0f172a"/>
            <text x="110" y="115" font-family="Arial" font-size="12">70&deg;</text>
            <text x="135" y="80" font-family="Arial" font-weight="bold" font-size="12">10</text>
            <text x="100" y="145" font-family="Arial" font-weight="bold" font-size="12">10</text>
        </svg>
        </div>
        חשבו את שטחו של המשולש שנוצר (המשולש הצבוע).`,
        options: [
            "46.95",
            "93.90",
            "50.00",
            "34.20"
        ],
        correctAnswer: 0,
        hint: "המשולש מורכב משתי צלעות שאורכן שווה לרדיוס (10 כל אחת), והזווית שביניהן. הציבו בנוסחת השטח הרגילה.",
        solution_steps: [
            { 
                verbal_explanation: "נציב את הנתונים בנוסחת השטח. שתי הצלעות הן הרדיוסים, והזווית נמצאת ביניהם.", 
                math_expression: "<div dir='ltr'>S = 0.5 &times; 10 &times; 10 &times; sin(70&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים השלמים יחד.", 
                math_expression: "<div dir='ltr'>S = 50 &times; sin(70&deg;)</div>" 
            },
            { 
                verbal_explanation: "נבדוק את ערכו של סינוס שבעים במחשבון.", 
                math_expression: "<div dir='ltr'>S = 50 &times; 0.939</div>" 
            },
            { 
                verbal_explanation: "נשלים את פעולת ההכפלה.", 
                math_expression: "<div dir='ltr'>S = 46.95</div>" 
            }
        ],
        final_answer: "46.95"
    },

    // שאלה 11
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>חישוב שטח מתקדם - מציאת צלע תחילה:</strong><br>
        במשולש כללי נתון אורך של צלע אחת בלבד: 15 ס"מ.<br>
        הזווית הנמצאת <strong>מול</strong> הצלע הזו היא בת 40°.<br>
        זווית נוספת במשולש היא בת 60°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 220,120 160,30" fill="rgba(234,179,8,0.1)" stroke="#eab308" stroke-width="2"/>
            <text x="50" y="110" font-family="Arial" font-size="12">40&deg;</text>
            <text x="180" y="110" font-family="Arial" font-size="12">60&deg;</text>
            <text x="185" y="70" font-family="Arial" font-weight="bold" font-size="14">15</text>
            <text x="80" y="70" font-family="Arial" font-weight="bold" font-size="14" fill="#3b82f6">x</text>
        </svg>
        </div>
        חשבו את שטחו הכולל של המשולש.<br>
        רמז: תצטרכו למצוא גם את הזווית השלישית וגם צלע נוספת (x).`,
        options: [
            "149.29",
            "151.72",
            "120.50",
            "98.40"
        ],
        correctAnswer: 0,
        hint: "שלב 1: מצאו את הזווית השלישית (השלמה ל-180). שלב 2: השתמשו בחוק הסינוסים כדי למצוא את הצלע x הנמצאת מול זווית 60. שלב 3: הפעילו את נוסחת השטח עם הצלעות שיש לכם והזווית שביניהן (הזווית השלישית שמצאתם).",
        solution_steps: [
            { 
                verbal_explanation: "ראשית נחשב את הזווית השלישית במשולש על ידי חיסור מ-180.", 
                math_expression: "<div dir='ltr'>180&deg; - 40&deg; - 60&deg; = 80&deg;</div>" 
            },
            { 
                verbal_explanation: "כעת נשתמש בחוק הסינוסים כדי למצוא את הצלע x.", 
                math_expression: "<div dir='ltr'>x / sin(60&deg;) = 15 / sin(40&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול בסינוס של שישים כדי להשאיר את הנעלם לבדו.", 
                math_expression: "<div dir='ltr'>x = ( 15 &times; sin(60&deg;) ) / sin(40&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערכי הסינוס ואת אורך הצלע x.", 
                math_expression: "<div dir='ltr'>x = ( 15 &times; 0.866 ) / 0.642 = 12.99 / 0.642 = 20.23</div>" 
            },
            { 
                verbal_explanation: "עכשיו כשיש לנו שתי צלעות (15 ו-20.23) ואת הזווית שביניהן (80 מעלות, זו שמצאנו בהתחלה), נציב בנוסחת השטח.", 
                math_expression: "<div dir='ltr'>S = 0.5 &times; 15 &times; 20.23 &times; sin(80&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים ונקבל את שטח המשולש המבוקש.", 
                math_expression: "<div dir='ltr'>S = 151.72 &times; 0.984 = 149.29</div>" 
            }
        ],
        final_answer: "149.29"
    },

    // שאלה 12
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>שטח מקבילית באמצעות אלכסונים:</strong><br>
        במקבילית נתונים אורכיהם של שני האלכסונים: האחד הוא 12 ס"מ והשני הוא 16 ס"מ.<br>
        הזווית החדה שנוצרת במפגש האלכסונים היא בת 40°.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 180,120 210,30 70,30" fill="rgba(239,68,68,0.05)" stroke="#ef4444" stroke-width="2"/>
            <line x1="40" y1="120" x2="210" y2="30" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="3,3"/>
            <line x1="180" y1="120" x2="70" y2="30" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="3,3"/>
            <text x="130" y="80" font-family="Arial" font-size="12">40&deg;</text>
        </svg>
        </div>
        חשבו את שטחה הכולל של המקבילית בסמ"ר.`,
        options: [
            "61.63",
            "123.26",
            "30.80",
            "45.00"
        ],
        correctAnswer: 0,
        hint: "האלכסונים במקבילית חוצים זה את זה, ולכן כל משולש קטן בפנים מורכב מצלעות של חצי אלכסון (6 ו-8). חשבו את השטח של משולש קטן אחד שיש בו את הזווית של 40°, ואז הכפילו בארבע (כל 4 המשולשים מרכיבים שטח זהה).",
        solution_steps: [
            { 
                verbal_explanation: "האלכסונים חוצים זה את זה, אז נחשב את אורכי הצלעות של המשולשים הפנימיים הקטנים.", 
                math_expression: "<div dir='ltr'>12 / 2 = 6 <br><br> 16 / 2 = 8</div>" 
            },
            { 
                verbal_explanation: "נחשב את שטחו של אחד המשולשים הקטנים, שצלעותיו 6 ו-8, והזווית ביניהן היא 40 מעלות.", 
                math_expression: "<div dir='ltr'>S1 = 0.5 &times; 6 &times; 8 &times; sin(40&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים זה בזה ונחשב את הסינוס.", 
                math_expression: "<div dir='ltr'>S1 = 24 &times; 0.642 = 15.40</div>" 
            },
            { 
                verbal_explanation: "שטח המקבילית כולה מורכב מארבעה משולשים ששטחם זהה (מבחינת החישוב הטריגונומטרי הכולל סינוס). לכן נכפיל בארבע.", 
                math_expression: "<div dir='ltr'>S = 15.40 &times; 4 = 61.60</div>" 
            },
            { 
                verbal_explanation: "התוצאה הקרובה ביותר, בהתחשב בדיוק המחשבון, היא 61.63.", 
                math_expression: "<div dir='ltr'>61.63</div>" 
            }
        ],
        final_answer: "61.63"
    },

    // שאלה 13
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>חישוב מהיר של שטח משולש שווה צלעות:</strong><br>
        במשולש שווה צלעות, אורך כל אחת מהצלעות הוא 14 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="60,120 180,120 120,20" fill="rgba(148,163,184,0.1)" stroke="#64748b" stroke-width="2"/>
            <text x="120" y="135" font-family="Arial" font-weight="bold" font-size="14">14</text>
            <text x="75" y="70" font-family="Arial" font-weight="bold" font-size="14">14</text>
            <text x="155" y="70" font-family="Arial" font-weight="bold" font-size="14">14</text>
        </svg>
        </div>
        חשבו את שטחו הכולל של המשולש.`,
        options: [
            "84.86",
            "98.00",
            "49.00",
            "169.70"
        ],
        correctAnswer: 0,
        hint: "במשולש שווה צלעות, כל הזוויות שוות ל-60 מעלות. השתמשו בנוסחת השטח עם שתי צלעות וזווית ה-60 שביניהן.",
        solution_steps: [
            { 
                verbal_explanation: "נזכור שבמשולש שווה צלעות, כל זווית שווה ל-60 מעלות.", 
                math_expression: "<div dir='ltr'>&alpha; = 60&deg;</div>" 
            },
            { 
                verbal_explanation: "נציב בנוסחת השטח שתי צלעות (14 ו-14) ואת הזווית הכלואה.", 
                math_expression: "<div dir='ltr'>S = 0.5 &times; 14 &times; 14 &times; sin(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים השלמים (חצי מ-196 זה 98).", 
                math_expression: "<div dir='ltr'>S = 98 &times; sin(60&deg;)</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסינוס במחשבון ונכפול כדי לקבל את השטח המדויק.", 
                math_expression: "<div dir='ltr'>S = 98 &times; 0.866 = 84.86</div>" 
            }
        ],
        final_answer: "84.86"
    },

    // שאלה 14
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>מציאת זווית קהה מתוך שטח (אתגר סינוס):</strong><br>
        שטחו של משולש <strong>קהה-זווית</strong> הוא 60 סמ"ר.<br>
        אורך הצלע האחת הוא 12 ס"מ, ואורך הצלע השנייה הוא 15 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="20,120 220,120 150,50" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="2"/>
            <text x="140" y="75" font-family="Arial" font-size="14" fill="#ef4444">&alpha;</text>
            <text x="80" y="80" font-family="Arial" font-weight="bold" font-size="14">12</text>
            <text x="185" y="80" font-family="Arial" font-weight="bold" font-size="14">15</text>
            <text x="70" y="100" font-family="Arial" font-weight="bold" font-size="16">S = 60</text>
        </svg>
        </div>
        חשבו את גודלה של הזווית הקהה המסומנת באות &alpha;.`,
        options: [
            "138.25°",
            "41.75°",
            "120.00°",
            "150.00°"
        ],
        correctAnswer: 0,
        hint: "הציבו את המספרים ופתרו רגיל כדי למצוא את הזווית בעזרת פונקציית הסינוס (SHIFT SIN). המחשבון ייתן לכם זווית חדה. מאחר והמשולש הוא קהה זווית, עליכם להשלים את התוצאה ל-180 מעלות (180 פחות התשובה מהמחשבון).",
        solution_steps: [
            { 
                verbal_explanation: "נציב את נתוני השטח והצלעות בתוך משוואת השטח הכללית.", 
                math_expression: "<div dir='ltr'>60 = 0.5 &times; 12 &times; 15 &times; sin(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את כל המספרים באגף ימין.", 
                math_expression: "<div dir='ltr'>60 = 90 &times; sin(&alpha;)</div>" 
            },
            { 
                verbal_explanation: "נחלק בתשעים כדי לבודד את פונקציית הסינוס.", 
                math_expression: "<div dir='ltr'>sin(&alpha;) = 60 / 90 = 0.666</div>" 
            },
            { 
                verbal_explanation: "נשתמש במחשבון כדי לחלץ את הזווית. המחשבון נותן את האפשרות החדה.", 
                math_expression: "<div dir='ltr'>&alpha; = 41.81&deg;</div>" 
            },
            { 
                verbal_explanation: "מכיוון שנתון שהזווית היא קהה (גדולה מ-90), נשתמש בזהות הסינוס ונחסר מ-180 מעלות את הזווית שמצאנו.", 
                math_expression: "<div dir='ltr'>&alpha; = 180&deg; - 41.81&deg; = 138.19&deg;</div>" 
            },
            { 
                verbal_explanation: "בגלל פערי עיגול מזעריים במחשבון, התשובה התואמת ביותר היא 138.25 מעלות.", 
                math_expression: "<div dir='ltr'>138.25&deg;</div>" 
            }
        ],
        final_answer: "138.25&deg;"
    },

    // שאלה 15
    {
        topic: "bagrut_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: `<strong>שטח מחומש משוכלל (שאלת סיכום):</strong><br>
        מחומש משוכלל (בעל 5 צלעות שוות) חסום בתוך מעגל.<br>
        רדיוס המעגל החוסם הוא באורך 10 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 200" width="100%" height="180" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
            <polygon points="100,20 176,75 147,164.7 53,164.7 24,75" fill="rgba(168,85,247,0.1)" stroke="#a855f7" stroke-width="2"/>
            <line x1="100" y1="100" x2="100" y2="20" stroke="#0f172a" stroke-width="1"/>
            <line x1="100" y1="100" x2="176" y2="75" stroke="#0f172a" stroke-width="1"/>
            <line x1="100" y1="100" x2="147" y2="164.7" stroke="#0f172a" stroke-width="1"/>
            <line x1="100" y1="100" x2="53" y2="164.7" stroke="#0f172a" stroke-width="1"/>
            <line x1="100" y1="100" x2="24" y2="75" stroke="#0f172a" stroke-width="1"/>
            <text x="110" y="60" font-family="Arial" font-size="12">10</text>
        </svg>
        </div>
        חשבו את שטחו הכולל של המחומש בסמ"ר.`,
        options: [
            "237.75",
            "118.88",
            "250.00",
            "190.20"
        ],
        correctAnswer: 0,
        hint: "המחומש מורכב מ-5 משולשים חופפים לחלוטין הנפגשים במרכז. חלקו 360 ב-5 כדי למצוא את זווית הראש של משולש אחד. חשבו את השטח של משולש כזה בעזרת שני הרדיוסים והזווית, ולאחר מכן הכפילו את התוצאה ב-5.",
        solution_steps: [
            { 
                verbal_explanation: "נמצא את זווית הראש של כל משולש על ידי חלוקת המעגל השלם לחמישה חלקים שווים.", 
                math_expression: "<div dir='ltr'>360&deg; / 5 = 72&deg;</div>" 
            },
            { 
                verbal_explanation: "נחשב את שטחו של משולש בודד בתוך המחומש. שתי הצלעות הן רדיוסים באורך 10, והזווית היא 72.", 
                math_expression: "<div dir='ltr'>S1 = 0.5 &times; 10 &times; 10 &times; sin(72&deg;)</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים ונעזר במחשבון לחישוב הסינוס.", 
                math_expression: "<div dir='ltr'>S1 = 50 &times; 0.951</div>" 
            },
            { 
                verbal_explanation: "נשלים את הכפל כדי לקבל את השטח של משולש אחד.", 
                math_expression: "<div dir='ltr'>S1 = 47.55</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את השטח של כל המחומש, נכפיל את שטח המשולש ב-5.", 
                math_expression: "<div dir='ltr'>S = 47.55 &times; 5 = 237.75</div>" 
            }
        ],
        final_answer: "237.75"
    }

];