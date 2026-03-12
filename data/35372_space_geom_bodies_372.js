// ========================================================================
// שאלון 35372 | נושא: הנדסת המרחב וגופים
// פעימה 1: 20 שאלות (תתי נושאים: קובייה + תיבה)
// ========================================================================

const questionsDB = [

    // ---------------------------------------------------------
    // תת נושא 1: קובייה (שאלות 1-10)
    // ---------------------------------------------------------

    // שאלה 1
    {
        topic: "bagrut_35372",
        subTopic: "קובייה",
        question_text: `<strong>חישוב נפח קובייה בסיסי:</strong><br>
        נתונה קובייה שאורך המקצוע שלה הוא 4 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 160" width="100%" height="160" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="70,30 150,30 150,110 70,110" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>
            <polygon points="40,60 120,60 120,140 40,140" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
            <line x1="40" y1="60" x2="70" y2="30" stroke="#3b82f6" stroke-width="2"/>
            <line x1="120" y1="60" x2="150" y2="30" stroke="#3b82f6" stroke-width="2"/>
            <line x1="120" y1="140" x2="150" y2="110" stroke="#3b82f6" stroke-width="2"/>
            <line x1="40" y1="140" x2="70" y2="110" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="80" y="155" font-family="Arial" font-size="12" font-weight="bold">4</text>
            <text x="135" y="105" font-family="Arial" font-size="12" font-weight="bold">4</text>
            <text x="30" y="105" font-family="Arial" font-size="12" font-weight="bold">4</text>
        </svg>
        </div>
        מהו <strong>נפח</strong> הקובייה?`,
        options: [
            "<span dir=\"rtl\">64 סמ\"ק</span>",
            "<span dir=\"rtl\">16 סמ\"ק</span>",
            "<span dir=\"rtl\">12 סמ\"ק</span>",
            "<span dir=\"rtl\">96 סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "בקובייה כל המקצועות (הצלעות) שווים. נפח מחושב על ידי הכפלת אורך, רוחב וגובה. לכן יש לחשב 4 כפול 4 כפול 4 (או 4 בחזקת 3).",
        solution_steps: [
            { 
                verbal_explanation: "בקובייה, כל הממדים (אורך, רוחב וגובה) שווים זה לזה. נסמן את אורך המקצוע באות a.", 
                math_expression: "<div dir='ltr'>a = 4</div>" 
            },
            { 
                verbal_explanation: "הנוסחה למציאת נפח (המסומן באות V) היא אורך כפול רוחב כפול גובה, או המקצוע בחזקת שלוש.", 
                math_expression: "<div dir='ltr'>V = a<sup>3</sup></div>" 
            },
            { 
                verbal_explanation: "נציב את הנתון שלנו לתוך הנוסחה ונרשום את תרגיל הכפל המלא.", 
                math_expression: "<div dir='ltr'>V = 4 &times; 4 &times; 4</div>" 
            },
            { 
                verbal_explanation: "נחשב: 4 כפול 4 שווה 16. לאחר מכן נכפיל 16 ב-4 ונקבל 64.", 
                math_expression: "<div dir='ltr'>V = 64</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">64 סמ\"ק</span>"
    },

    // שאלה 2
    {
        topic: "bagrut_35372",
        subTopic: "קובייה",
        question_text: `<strong>חישוב שטח פנים של קובייה:</strong><br>
        נתונה קובייה שאורך מקצועה הוא 5 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 160" width="100%" height="160" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="50,50 110,50 110,110 50,110" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
            <polygon points="110,50 140,20 140,80 110,110" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
            <polygon points="50,50 80,20 140,20 110,50" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
            <text x="80" y="85" font-family="Arial" font-size="12" font-weight="bold">5&times;5</text>
        </svg>
        </div>
        מהו <strong>שטח הפנים</strong> הכולל של הקובייה?`,
        options: [
            "<span dir=\"rtl\">150 סמ\"ר</span>",
            "<span dir=\"rtl\">125 סמ\"ר</span>",
            "<span dir=\"rtl\">25 סמ\"ר</span>",
            "<span dir=\"rtl\">100 סמ\"ר</span>"
        ],
        correctAnswer: 0,
        hint: "שטח פנים משמעותו סך כל השטחים של ה'קירות' (הפאות) שעוטפים את הגוף מבחוץ. לקובייה יש 6 פאות שוות, וכל אחת מהן היא ריבוע. חשבו שטח של פאה אחת (5 כפול 5) והכפילו ב-6.",
        solution_steps: [
            { 
                verbal_explanation: "קובייה מורכבת משישה ריבועים (פאות) הזהים לחלוטין זה לזה.", 
                math_expression: "<div dir='ltr'>n = 6</div>" 
            },
            { 
                verbal_explanation: "נחשב תחילה את השטח של פאה אחת. שטח ריבוע מחושב על ידי צלע כפול צלע.", 
                math_expression: "<div dir='ltr'>S<sub>1</sub> = 5 &times; 5</div>" 
            },
            { 
                verbal_explanation: "שטחה של פאה בודדת הוא עשרים וחמישה.", 
                math_expression: "<div dir='ltr'>S<sub>1</sub> = 25</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את שטח הפנים הכולל, נכפיל את השטח של הפאה הבודדת בשש הפאות של הקובייה.", 
                math_expression: "<div dir='ltr'>S = 6 &times; 25</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ונגלה את שטח הפנים המלא.", 
                math_expression: "<div dir='ltr'>S = 150</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">150 סמ\"ר</span>"
    },

    // שאלה 3
    {
        topic: "bagrut_35372",
        subTopic: "קובייה",
        question_text: `<strong>מציאת מקצוע מתוך נפח נתון (פעולה הפוכה):</strong><br>
        ידוע כי נפחה של קובייה מסוימת הוא 216 סמ"ק.<br>
        מהו אורך המקצוע שלה?`,
        options: [
            "<span dir=\"rtl\">6 ס\"מ</span>",
            "<span dir=\"rtl\">8 ס\"מ</span>",
            "<span dir=\"rtl\">36 ס\"מ</span>",
            "<span dir=\"rtl\">72 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "נפח קובייה הוא המקצוע בחזקת 3. הפעולה ההפוכה היא הוצאת 'שורש שלישי'. איזה מספר כפול עצמו שלוש פעמים ייתן 216? (היעזרו במחשבון או נסו להכפיל 5x5x5 ו- 6x6x6).",
        solution_steps: [
            { 
                verbal_explanation: "הנוסחה לנפח קובייה היא המקצוע (a) מועלה בחזקה שלישית.", 
                math_expression: "<div dir='ltr'>V = a<sup>3</sup></div>" 
            },
            { 
                verbal_explanation: "נציב את הנפח שנתון לנו בשאלה כדי ליצור משוואה.", 
                math_expression: "<div dir='ltr'>216 = a<sup>3</sup></div>" 
            },
            { 
                verbal_explanation: "כדי לבטל חזקה שלישית ולבודד את הצלע, נוציא שורש שלישי משני אגפי המשוואה.", 
                math_expression: "<div dir='ltr'>a = <sup>3</sup>&radic;216</div>" 
            },
            { 
                verbal_explanation: "המספר שפותר זאת הוא 6 (מכיוון ששש כפול שש כפול שש שווה מאתיים ושש עשרה). אורך המקצוע הוא 6.", 
                math_expression: "<div dir='ltr'>a = 6</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">6 ס\"מ</span>"
    },

    // שאלה 4
    {
        topic: "bagrut_35372",
        subTopic: "קובייה",
        question_text: `<strong>חישוב אורך אלכסון של פאה (פיתגורס פשוט):</strong><br>
        אורך מקצוע של קובייה הוא 10 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 160" width="100%" height="160" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="50,50 150,50 150,150 50,150" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
            <line x1="50" y1="150" x2="150" y2="50" stroke="#ef4444" stroke-width="3"/>
            <text x="100" y="145" font-family="Arial" font-size="12" font-weight="bold">10</text>
            <text x="55" y="100" font-family="Arial" font-size="12" font-weight="bold">10</text>
            <path d="M 50,140 L 60,140 L 60,150" fill="none" stroke="#0f172a" stroke-width="2"/>
        </svg>
        </div>
        מהו <strong>אורך האלכסון של הפאה הריבועית</strong> (המסומן באדום)?`,
        options: [
            "<span dir=\"rtl\">&radic;200 ס\"מ</span>",
            "<span dir=\"rtl\">&radic;100 ס\"מ</span>",
            "<span dir=\"rtl\">&radic;300 ס\"מ</span>",
            "<span dir=\"rtl\">20 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "פאה של קובייה היא ריבוע. אלכסון מחלק את הריבוע לשני משולשים ישרי זווית. השתמשו במשפט פיתגורס: ניצב בריבוע ועוד ניצב בריבוע שווה לאלכסון בריבוע.",
        solution_steps: [
            { 
                verbal_explanation: "כל פאה בקובייה היא ריבוע. כאשר מעבירים בה אלכסון, נוצר משולש ישר זווית שהניצבים שלו הם צלעות הקובייה.", 
                math_expression: "<div dir='ltr'>a = 10 , b = 10</div>" 
            },
            { 
                verbal_explanation: "אורך האלכסון הוא היתר (c) במשולש זה. נשתמש במשפט פיתגורס.", 
                math_expression: "<div dir='ltr'>c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נציב את אורכי הצלעות לתוך המשוואה.", 
                math_expression: "<div dir='ltr'>c<sup>2</sup> = 10<sup>2</sup> + 10<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקות. מאה ועוד מאה נותן לנו מאתיים.", 
                math_expression: "<div dir='ltr'>c<sup>2</sup> = 100 + 100 = 200</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את האורך עצמו, נוציא שורש ריבועי.", 
                math_expression: "<div dir='ltr'>c = &radic;200</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">&radic;200 ס\"מ</span>"
    },

    // שאלה 5
    {
        topic: "bagrut_35372",
        subTopic: "קובייה",
        question_text: `<strong>מציאת מקצוע מתוך שטח פנים כולל:</strong><br>
        שטח הפנים של קובייה גדולה הוא 600 סמ"ר.<br>
        מהו אורך המקצוע (צלע) של הקובייה?`,
        options: [
            "<span dir=\"rtl\">10 ס\"מ</span>",
            "<span dir=\"rtl\">100 ס\"מ</span>",
            "<span dir=\"rtl\">15 ס\"מ</span>",
            "<span dir=\"rtl\">20 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "קודם כל, חלקו את שטח הפנים הכולל ב-6 כדי למצוא את השטח של פאה אחת בלבד. איזה מספר כפול עצמו ייתן לכם את השטח שמצאתם? הוציאו ממנו שורש ריבועי.",
        solution_steps: [
            { 
                verbal_explanation: "שטח הפנים (600) הוא הסכום של 6 פאות ריבועיות זהות. נמצא את שטחה של פאה אחת על ידי חילוק ב-6.", 
                math_expression: "<div dir='ltr'>S<sub>1</sub> = 600 / 6</div>" 
            },
            { 
                verbal_explanation: "נקבל שכל פאה תופסת שטח של מאה.", 
                math_expression: "<div dir='ltr'>S<sub>1</sub> = 100</div>" 
            },
            { 
                verbal_explanation: "הפאה היא ריבוע, ושטחה מחושב על ידי צלע בריבוע. נרכיב משוואה.", 
                math_expression: "<div dir='ltr'>a<sup>2</sup> = 100</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי כדי לגלות מהו אורך הצלע שבונה את הריבוע הזה.", 
                math_expression: "<div dir='ltr'>a = &radic;100</div>" 
            },
            { 
                verbal_explanation: "השורש של מאה הוא עשר.", 
                math_expression: "<div dir='ltr'>a = 10</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">10 ס\"מ</span>"
    },

    // שאלה 6
    {
        topic: "bagrut_35372",
        subTopic: "קובייה",
        question_text: `<strong>הבנת ההבדל בין שטח פנים לנפח (שינוי קנה מידה):</strong><br>
        הכפילו את אורך המקצוע של קובייה <strong>פי 2</strong>.<br>
        בכמה גדל <strong>הנפח</strong> של הקובייה החדשה לעומת הישנה?`,
        options: [
            "<span dir=\"rtl\">גדל פי 8</span>",
            "<span dir=\"rtl\">גדל פי 2</span>",
            "<span dir=\"rtl\">גדל פי 4</span>",
            "<span dir=\"rtl\">גדל פי 6</span>"
        ],
        correctAnswer: 0,
        hint: "נפח מחושב ב-3 ממדים (אורך כפול רוחב כפול גובה). אם אתם מכפילים כל אחד מהם פי 2, התוצאה היא 2 כפול 2 כפול 2.",
        solution_steps: [
            { 
                verbal_explanation: "כדי להבין שאלות כאלו בקלות, נמציא קובייה קטנה ונוחה. נניח שמקצוע הקובייה המקורית הוא 1.", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 1</div>" 
            },
            { 
                verbal_explanation: "נחשב את הנפח של הקובייה המקורית: 1 כפול 1 כפול 1.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = 1<sup>3</sup> = 1</div>" 
            },
            { 
                verbal_explanation: "כעת נבנה קובייה חדשה שצלעותיה גדולות פי 2, כלומר אורכן יהיה 2.", 
                math_expression: "<div dir='ltr'>a<sub>2</sub> = 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את הנפח של הקובייה החדשה הגדולה: 2 בחזקת שלוש.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = 2<sup>3</sup> = 8</div>" 
            },
            { 
                verbal_explanation: "הנפח המקורי היה 1, והחדש הוא 8. המסקנה היא שכשהצלע גדלה פי 2, הנפח מזנק פי 8.", 
                math_expression: "<div dir='ltr'>8 / 1 = 8</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">גדל פי 8</span>"
    },

    // שאלה 7
    {
        topic: "bagrut_35372",
        subTopic: "קובייה",
        question_text: `<strong>הבנת פריסה של קובייה:</strong><br>
        השטח של <strong>פריסת הקובייה</strong> (הצורה שמתקבלת כאשר גוזרים את הקובייה ופורסים אותה על משטח שטוח) הוא 54 סמ"ר.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="80" y="20" width="30" height="30" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <rect x="50" y="50" width="30" height="30" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <rect x="80" y="50" width="30" height="30" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
            <rect x="110" y="50" width="30" height="30" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <rect x="140" y="50" width="30" height="30" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <rect x="80" y="80" width="30" height="30" fill="none" stroke="#3b82f6" stroke-width="2"/>
        </svg>
        </div>
        מהו הנפח של קובייה זו?`,
        options: [
            "<span dir=\"rtl\">27 סמ\"ק</span>",
            "<span dir=\"rtl\">9 סמ\"ק</span>",
            "<span dir=\"rtl\">81 סמ\"ק</span>",
            "<span dir=\"rtl\">18 סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "פריסת קובייה היא פשוט דרך אחרת לומר 'שטח הפנים' שלה (סך כל 6 הריבועים שמקיפים אותה). חלקו 54 ב-6 כדי למצוא את שטח הריבוע הבודד. הוציאו ממנו שורש כדי למצוא את הצלע, ואז חשבו את הנפח.",
        solution_steps: [
            { 
                verbal_explanation: "פריסה מורכבת מ-6 פאות זהות. לכן, השטח הנתון הוא למעשה שטח הפנים. נחלק אותו ב-6 למציאת שטח הפאה הבודדת.", 
                math_expression: "<div dir='ltr'>S<sub>1</sub> = 54 / 6 = 9</div>" 
            },
            { 
                verbal_explanation: "שטח הריבוע הבודד הוא 9. כדי למצוא את אורך הצלע, נוציא שורש ריבועי מהשטח.", 
                math_expression: "<div dir='ltr'>a = &radic;9 = 3</div>" 
            },
            { 
                verbal_explanation: "מצאנו שאורך המקצוע הוא 3. כעת נעבור למציאת הנפח. נציב את הצלע בנוסחת הנפח.", 
                math_expression: "<div dir='ltr'>V = a<sup>3</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב 3 בחזקת 3 (שלוש כפול שלוש כפול שלוש).", 
                math_expression: "<div dir='ltr'>V = 3<sup>3</sup> = 27</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">27 סמ\"ק</span>"
    },

    // שאלה 8
    {
        topic: "bagrut_35372",
        subTopic: "קובייה",
        question_text: `<strong>חישוב סכום אורכי כל המקצועות:</strong><br>
        אדם רוצה לבנות מסגרת של קובייה מחוטי ברזל. אורך כל מקצוע חייב להיות 7 ס"מ.<br>
        כמה סנטימטרים של חוט ברזל הוא צריך בסך הכל כדי לבנות את המסגרת?`,
        options: [
            "<span dir=\"rtl\">84 ס\"מ</span>",
            "<span dir=\"rtl\">42 ס\"מ</span>",
            "<span dir=\"rtl\">49 ס\"מ</span>",
            "<span dir=\"rtl\">28 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "חשבו כמה צלעות (מקצועות) יש בקובייה בסך הכל! יש 4 צלעות בבסיס העליון, 4 בבסיס התחתון, ו-4 עמודים שמחברים ביניהם. בסך הכל 12. הכפילו את מספר הצלעות באורך הנדרש.",
        solution_steps: [
            { 
                verbal_explanation: "נספור את כמות המקצועות בקובייה: 4 בריבוע העליון, 4 בריבוע התחתון, ו-4 עמודים ניצבים בפינות.", 
                math_expression: "<div dir='ltr'>n = 12</div>" 
            },
            { 
                verbal_explanation: "נתון שכל מקצוע חייב להיות באורך של 7.", 
                math_expression: "<div dir='ltr'>a = 7</div>" 
            },
            { 
                verbal_explanation: "כדי לגלות את האורך הכולל, נכפיל את אורך המקצוע הבודד בכמות המקצועות הכללית.", 
                math_expression: "<div dir='ltr'>L = 12 &times; 7</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ונקבל שמונים וארבע.", 
                math_expression: "<div dir='ltr'>L = 84</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">84 ס\"מ</span>"
    },

    // שאלה 9
    {
        topic: "bagrut_35372",
        subTopic: "קובייה",
        question_text: `<strong>קובייה פתוחה ללא מכסה:</strong><br>
        נגר בונה קופסת עץ בצורת קובייה שאורך מקצועה 10 ס"מ.<br>
        הקופסה מיועדת לאחסון, ולכן <strong>היא פתוחה מלמעלה (אין לה פאה עליונה)</strong>.<br>
        מהו שטח העץ הכולל שהנגר יזדקק לו לבנייתה?`,
        options: [
            "<span dir=\"rtl\">500 סמ\"ר</span>",
            "<span dir=\"rtl\">600 סמ\"ר</span>",
            "<span dir=\"rtl\">400 סמ\"ר</span>",
            "<span dir=\"rtl\">1000 סמ\"ר</span>"
        ],
        correctAnswer: 0,
        hint: "לקובייה שלמה יש 6 פאות. אם מורידים את המכסה, כמה פאות נשארו לקופסה? חשבו שטח של פאה אחת (10 כפול 10) והכפילו במספר הפאות שנותרו.",
        solution_steps: [
            { 
                verbal_explanation: "לקובייה רגילה יש 6 פאות (קירות). מכיוון שהקופסה פתוחה, אין לה תקרה. נחסר פאה אחת מהסך הכל.", 
                math_expression: "<div dir='ltr'>6 - 1 = 5</div>" 
            },
            { 
                verbal_explanation: "הנגר יצטרך לבנות 5 פאות עץ בלבד.", 
                math_expression: "<div dir='ltr'>n = 5</div>" 
            },
            { 
                verbal_explanation: "נחשב את השטח של פאה אחת (שהיא ריבוע באורך עשר).", 
                math_expression: "<div dir='ltr'>S<sub>1</sub> = 10 &times; 10 = 100</div>" 
            },
            { 
                verbal_explanation: "נכפיל את השטח הבודד בכמות הפאות שעל הנגר לבנות.", 
                math_expression: "<div dir='ltr'>S = 5 &times; 100</div>" 
            },
            { 
                verbal_explanation: "נקבל את שטח העץ הכולל.", 
                math_expression: "<div dir='ltr'>S = 500</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">500 סמ\"ר</span>"
    },

    // שאלה 10
    {
        topic: "bagrut_35372",
        subTopic: "קובייה",
        question_text: `<strong>חישוב האלכסון הראשי בקובייה:</strong><br>
        אורך המקצוע של קובייה הוא 3 ס"מ.<br>
        מעבירים קו אלכסוני המחבר את הפינה הקדמית-תחתונה עם הפינה האחורית-עליונה בתוך חלל הקובייה.<br>
        מהו אורך <strong>האלכסון הראשי</strong> הזה?`,
        options: [
            "<span dir=\"rtl\">&radic;27 ס\"מ</span>",
            "<span dir=\"rtl\">&radic;18 ס\"מ</span>",
            "<span dir=\"rtl\">9 ס\"מ</span>",
            "<span dir=\"rtl\">&radic;9 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "הנוסחה לאלכסון ראשי של כל תיבה היא שורש של (אורך בריבוע + רוחב בריבוע + גובה בריבוע). בקובייה כל הממדים הם 3. לכן: שורש של (3 בריבוע + 3 בריבוע + 3 בריבוע).",
        solution_steps: [
            { 
                verbal_explanation: "הנוסחה המלאה לאלכסון העובר בחלל הצורה היא שורש של סכום ריבועי שלושת הממדים.", 
                math_expression: "<div dir='ltr'>D = &radic;(a<sup>2</sup> + b<sup>2</sup> + h<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "מכיוון שאנו עוסקים בקובייה, כל הממדים שווים ל-3.", 
                math_expression: "<div dir='ltr'>D = &radic;(3<sup>2</sup> + 3<sup>2</sup> + 3<sup>2</sup>)</div>" 
            },
            { 
                verbal_explanation: "נחשב כל חזקה בנפרד (שלוש כפול שלוש הוא תשע).", 
                math_expression: "<div dir='ltr'>D = &radic;(9 + 9 + 9)</div>" 
            },
            { 
                verbal_explanation: "נחבר את המספרים יחד בתוך השורש לקבלת האורך הראשי.", 
                math_expression: "<div dir='ltr'>D = &radic;27</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">&radic;27 ס\"מ</span>"
    },

    // ---------------------------------------------------------
    // תת נושא 2: תיבה (שאלות 11-20)
    // ---------------------------------------------------------

    // שאלה 11
    {
        topic: "bagrut_35372",
        subTopic: "תיבה",
        question_text: `<strong>חישוב נפח תיבה:</strong><br>
        מידותיה של תיבה הן: אורך 10 ס"מ, רוחב 4 ס"מ, וגובה 5 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="60,40 180,40 180,100 60,100" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>
            <polygon points="30,70 150,70 150,130 30,130" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="2"/>
            <line x1="30" y1="70" x2="60" y2="40" stroke="#22c55e" stroke-width="2"/>
            <line x1="150" y1="70" x2="180" y2="40" stroke="#22c55e" stroke-width="2"/>
            <line x1="150" y1="130" x2="180" y2="100" stroke="#22c55e" stroke-width="2"/>
            <line x1="30" y1="130" x2="60" y2="100" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="90" y="145" font-family="Arial" font-size="12" font-weight="bold">10</text>
            <text x="175" y="125" font-family="Arial" font-size="12" font-weight="bold">4</text>
            <text x="15" y="105" font-family="Arial" font-size="12" font-weight="bold">5</text>
        </svg>
        </div>
        מהו <strong>נפח</strong> התיבה?`,
        options: [
            "<span dir=\"rtl\">200 סמ\"ק</span>",
            "<span dir=\"rtl\">100 סמ\"ק</span>",
            "<span dir=\"rtl\">19 סמ\"ק</span>",
            "<span dir=\"rtl\">220 סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "נפח של תיבה הוא פשוט מכפלת כל שלושת הממדים יחד: אורך כפול רוחב כפול גובה (10 כפול 4 כפול 5).",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את שלושת הממדים של התיבה לפי השרטוט.", 
                math_expression: "<div dir='ltr'>a = 10 , b = 4 , h = 5</div>" 
            },
            { 
                verbal_explanation: "נוסחת הנפח קובעת שיש להכפיל את שלושת הממדים זה בזה.", 
                math_expression: "<div dir='ltr'>V = a &times; b &times; h</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים שלנו בתרגיל כפל.", 
                math_expression: "<div dir='ltr'>V = 10 &times; 4 &times; 5</div>" 
            },
            { 
                verbal_explanation: "נחשב משמאל לימין: עשר כפול ארבע זה ארבעים. ארבעים כפול חמש זה מאתיים.", 
                math_expression: "<div dir='ltr'>V = 200</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">200 סמ\"ק</span>"
    },

    // שאלה 12
    {
        topic: "bagrut_35372",
        subTopic: "תיבה",
        question_text: `<strong>חישוב שטח מעטפת בתיבה (ללא הבסיסים):</strong><br>
        לתיבה יש בסיס שאורכו 8 ס"מ ורוחבו 3 ס"מ. גובה התיבה הוא 5 ס"מ.<br>
        התבקשתם לצבוע <strong>רק את קירות הצד</strong> של התיבה (מעטפת), ללא הרצפה והתקרה.<br>
        מהו השטח שתצטרכו לצבוע?`,
        options: [
            "<span dir=\"rtl\">110 סמ\"ר</span>",
            "<span dir=\"rtl\">120 סמ\"ר</span>",
            "<span dir=\"rtl\">158 סמ\"ר</span>",
            "<span dir=\"rtl\">40 סמ\"ר</span>"
        ],
        correctAnswer: 0,
        hint: "המעטפת כוללת 4 פאות צדדיות: פעמיים קיר ימני/שמאלי (3 כפול 5), ופעמיים קיר קדמי/אחורי (8 כפול 5). חברו את כולם. אל תוסיפו את הרצפה והתקרה!",
        solution_steps: [
            { 
                verbal_explanation: "שטח המעטפת לא כולל את התקרה והרצפה. נתחיל מקירות הצד שמידותיהם הן הרוחב והגובה.", 
                math_expression: "<div dir='ltr'>S<sub>1</sub> = 3 &times; 5 = 15</div>" 
            },
            { 
                verbal_explanation: "יש שני קירות צדדיים זהים, אז נכפיל בשתיים.", 
                math_expression: "<div dir='ltr'>2 &times; 15 = 30</div>" 
            },
            { 
                verbal_explanation: "נעבור לקירות הקדמיים והאחוריים. מידותיהם הן האורך והגובה.", 
                math_expression: "<div dir='ltr'>S<sub>2</sub> = 8 &times; 5 = 40</div>" 
            },
            { 
                verbal_explanation: "גם כאן יש שני קירות זהים, נכפיל בשתיים.", 
                math_expression: "<div dir='ltr'>2 &times; 40 = 80</div>" 
            },
            { 
                verbal_explanation: "נחבר את התוצאות יחד לקבלת שטח המעטפת הכולל.", 
                math_expression: "<div dir='ltr'>S = 30 + 80 = 110</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">110 סמ\"ר</span>"
    },

    // שאלה 13
    {
        topic: "bagrut_35372",
        subTopic: "תיבה",
        question_text: `<strong>מציאת גובה חסר מתוך נפח (משוואה):</strong><br>
        הנפח הכולל של תיבה הוא 300 סמ"ק.<br>
        אורך בסיס התיבה הוא 10 ס"מ ורוחבו 6 ס"מ.<br>
        מהו <strong>גובה</strong> התיבה?`,
        options: [
            "<span dir=\"rtl\">5 ס\"מ</span>",
            "<span dir=\"rtl\">10 ס\"מ</span>",
            "<span dir=\"rtl\">6 ס\"מ</span>",
            "<span dir=\"rtl\">15 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחת הנפח: 300 שווה 10 כפול 6 כפול h (הגובה). הכפילו 10 ב-6, וחלקו את הנפח בתוצאה (60) כדי לבודד את הגובה.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את משוואת הנפח הכללית.", 
                math_expression: "<div dir='ltr'>V = a &times; b &times; h</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים לתבנית, כאשר הגובה הוא הנעלם.", 
                math_expression: "<div dir='ltr'>300 = 10 &times; 6 &times; h</div>" 
            },
            { 
                verbal_explanation: "נחשב את המכפלה של אורך הבסיס ברוחבו (זהו השטח של הרצפה).", 
                math_expression: "<div dir='ltr'>300 = 60 &times; h</div>" 
            },
            { 
                verbal_explanation: "נחלק את הנפח ב-60 לחילוץ הגובה.", 
                math_expression: "<div dir='ltr'>h = 300 / 60</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק ונקבל את גובה התיבה.", 
                math_expression: "<div dir='ltr'>h = 5</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">5 ס\"מ</span>"
    },

    // שאלה 14
    {
        topic: "bagrut_35372",
        subTopic: "תיבה",
        question_text: `<strong>תיבה שבסיסה ריבוע:</strong><br>
        נתונה תיבה אשר <strong>בסיסה הוא ריבוע</strong>.<br>
        אורך צלע הבסיס הוא 4 ס"מ, וגובה התיבה הוא 10 ס"מ.<br>
        מהו הנפח של תיבה זו?`,
        options: [
            "<span dir=\"rtl\">160 סמ\"ק</span>",
            "<span dir=\"rtl\">40 סמ\"ק</span>",
            "<span dir=\"rtl\">80 סמ\"ק</span>",
            "<span dir=\"rtl\">200 סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'ריבוע' מסגירה לכם סוד: האורך והרוחב הם שווים! לכן האורך הוא 4 והרוחב הוא 4. הכפילו אותם אחד בשני, ואת התוצאה הכפילו בגובה (10).",
        solution_steps: [
            { 
                verbal_explanation: "בסיס ריבועי אומר שצלע האורך שווה לצלע הרוחב. שניהם ארבע.", 
                math_expression: "<div dir='ltr'>a = 4 , b = 4</div>" 
            },
            { 
                verbal_explanation: "גובה התיבה נתון בנפרד.", 
                math_expression: "<div dir='ltr'>h = 10</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא נפח, נכפיל את שטח הבסיס הריבועי בגובה.", 
                math_expression: "<div dir='ltr'>V = (4 &times; 4) &times; 10</div>" 
            },
            { 
                verbal_explanation: "נחשב את שטח הרצפה.", 
                math_expression: "<div dir='ltr'>V = 16 &times; 10</div>" 
            },
            { 
                verbal_explanation: "נכפול ב-10 ונגלה את הנפח המלא.", 
                math_expression: "<div dir='ltr'>V = 160</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">160 סמ\"ק</span>"
    },

    // שאלה 15
    {
        topic: "bagrut_35372",
        subTopic: "תיבה",
        question_text: `<strong>שימוש במשפט פיתגורס לחישוב אלכסון הבסיס:</strong><br>
        בתיבה, אורך הבסיס הוא 8 ס"מ ורוחב הבסיס הוא 6 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,80 140,80 180,40 80,40" fill="rgba(234,179,8,0.2)" stroke="#ca8a04" stroke-width="2"/>
            <line x1="40" y1="80" x2="180" y2="40" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
            <text x="90" y="95" font-family="Arial" font-size="12" font-weight="bold">8</text>
            <text x="165" y="70" font-family="Arial" font-size="12" font-weight="bold">6</text>
            <text x="110" y="55" font-family="Arial" font-size="12" font-weight="bold" fill="#b91c1c">d</text>
        </svg>
        </div>
        מהו <strong>אורך אלכסון הבסיס</strong> (d)?`,
        options: [
            "<span dir=\"rtl\">10 ס\"מ</span>",
            "<span dir=\"rtl\">14 ס\"מ</span>",
            "<span dir=\"rtl\">100 ס\"מ</span>",
            "<span dir=\"rtl\">48 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "בסיס של תיבה הוא מלבן. כשמעבירים בו אלכסון נוצר משולש ישר זווית. האורך והרוחב הם הניצבים (8 ו-6), והאלכסון הוא היתר. השתמשו בפיתגורס: 8 בריבוע ועוד 6 בריבוע.",
        solution_steps: [
            { 
                verbal_explanation: "האלכסון חוצה את הבסיס המלבני ויוצר משולש ישר זווית שהניצבים שלו הם האורך והרוחב.", 
                math_expression: "<div dir='ltr'>a = 8 , b = 6</div>" 
            },
            { 
                verbal_explanation: "האלכסון הוא היתר במשולש. נפעיל את משפט פיתגורס.", 
                math_expression: "<div dir='ltr'>d<sup>2</sup> = 8<sup>2</sup> + 6<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את ערכי החזקות. שמונה בריבוע זה 64 ושש בריבוע זה 36.", 
                math_expression: "<div dir='ltr'>d<sup>2</sup> = 64 + 36</div>" 
            },
            { 
                verbal_explanation: "נחבר את התוצאות.", 
                math_expression: "<div dir='ltr'>d<sup>2</sup> = 100</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי לקבלת האורך הרגיל.", 
                math_expression: "<div dir='ltr'>d = &radic;100 = 10</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">10 ס\"מ</span>"
    },

    // שאלה 16
    {
        topic: "bagrut_35372",
        subTopic: "תיבה",
        question_text: `<strong>מציאת שטח פנים מלא מתוך ממדים:</strong><br>
        נתונה תיבה בעלת הממדים הבאים:<br>
        אורך = 5 ס"מ, רוחב = 2 ס"מ, גובה = 3 ס"מ.<br>
        מהו <strong>שטח הפנים</strong> הכולל של התיבה?`,
        options: [
            "<span dir=\"rtl\">62 סמ\"ר</span>",
            "<span dir=\"rtl\">30 סמ\"ר</span>",
            "<span dir=\"rtl\">60 סמ\"ר</span>",
            "<span dir=\"rtl\">45 סמ\"ר</span>"
        ],
        correctAnswer: 0,
        hint: "בתיבה יש 3 זוגות של פאות (מלבנים). חשבו את השטח של פאה מכל סוג: רצפה (5 כפול 2), קדמית (5 כפול 3), וצדדית (2 כפול 3). חברו הכל והכפילו פי 2 (כי יש שתיים מכל אחת).",
        solution_steps: [
            { 
                verbal_explanation: "שטח הפנים הוא סכום כל הפאות. התיבה מורכבת מ-3 זוגות של פאות מקבילות.", 
                math_expression: "<div dir='ltr'>a = 5 , b = 2 , h = 3</div>" 
            },
            { 
                verbal_explanation: "נחשב את שטח הרצפה/תקרה. אורך כפול רוחב.", 
                math_expression: "<div dir='ltr'>S<sub>1</sub> = 5 &times; 2 = 10</div>" 
            },
            { 
                verbal_explanation: "נחשב את שטח הפאה הקדמית. אורך כפול גובה.", 
                math_expression: "<div dir='ltr'>S<sub>2</sub> = 5 &times; 3 = 15</div>" 
            },
            { 
                verbal_explanation: "נחשב את שטח קיר הצד. רוחב כפול גובה.", 
                math_expression: "<div dir='ltr'>S<sub>3</sub> = 2 &times; 3 = 6</div>" 
            },
            { 
                verbal_explanation: "נחבר את שלושת השטחים יחד.", 
                math_expression: "<div dir='ltr'>10 + 15 + 6 = 31</div>" 
            },
            { 
                verbal_explanation: "נכפיל את התוצאה ב-2, כיוון שכל פאה מופיעה פעמיים.", 
                math_expression: "<div dir='ltr'>S = 31 &times; 2 = 62</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">62 סמ\"ר</span>"
    },

    // שאלה 17
    {
        topic: "bagrut_35372",
        subTopic: "תיבה",
        question_text: `<strong>יצירת תיבה חדשה (השפעה על הנפח):</strong><br>
        לתיבה יש נפח מסוים. החליטו לבנות תיבה חדשה שבה:<br>
        האורך הוכפל פי 2.<br>
        הרוחב נשאר בדיוק אותו דבר.<br>
        הגובה קָטַן לחצי (חולק ב-2).<br>
        מה קרה לנפח התיבה החדשה בהשוואה לישנה?`,
        options: [
            "<span dir=\"rtl\">הנפח נשאר בדיוק אותו הדבר</span>",
            "<span dir=\"rtl\">הנפח גדל פי 2</span>",
            "<span dir=\"rtl\">הנפח קטן פי 2</span>",
            "<span dir=\"rtl\">לא ניתן לדעת ללא מידות</span>"
        ],
        correctAnswer: 0,
        hint: "נפח מורכב ממכפלת שלושה מספרים. אם אחד מהם הוכפל פי 2, הנפח אמור לגדול פי 2. אבל אם מספר אחר חולק ב-2, הפעולות 'מבטלות' זו את זו.",
        solution_steps: [
            { 
                verbal_explanation: "נוסחת הנפח הבסיסית כופלת את הממדים.", 
                math_expression: "<div dir='ltr'>V = a &times; b &times; h</div>" 
            },
            { 
                verbal_explanation: "האורך החדש הוכפל ב-2.", 
                math_expression: "<div dir='ltr'>2a</div>" 
            },
            { 
                verbal_explanation: "הגובה החדש נחלק ב-2.", 
                math_expression: "<div dir='ltr'>h / 2</div>" 
            },
            { 
                verbal_explanation: "נרשום את הנוסחה המלאה עם השינויים.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = (2 &times; a) &times; b &times; (h / 2)</div>" 
            },
            { 
                verbal_explanation: "אפשר לצמצם את ה-2 שמוכפל עם ה-2 שמחלק. המשוואה חוזרת בדיוק למצבה המקורי.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = V</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">הנפח נשאר בדיוק אותו הדבר</span>"
    },

    // שאלה 18
    {
        topic: "bagrut_35372",
        subTopic: "תיבה",
        question_text: `<strong>מציאת גובה התיבה באמצעות האלכסון הראשי:</strong><br>
        בתיבה, אורך אלכסון הבסיס הוא 5 ס"מ.<br>
        אורך האלכסון הראשי (החוצה את חלל התיבה) הוא 13 ס"מ.<br>
        מהו <strong>גובה</strong> התיבה?`,
        options: [
            "<span dir=\"rtl\">12 ס\"מ</span>",
            "<span dir=\"rtl\">18 ס\"מ</span>",
            "<span dir=\"rtl\">144 ס\"מ</span>",
            "<span dir=\"rtl\">8 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "נוצר משולש ישר זווית שעומד בתוך התיבה: בסיסו 5, היתר 13, והניצב האנכי הוא הגובה h. השתמשו בפיתגורס: 5 בריבוע ועוד h בריבוע שווה ל-13 בריבוע.",
        solution_steps: [
            { 
                verbal_explanation: "בתוך התיבה ישנו משולש ישר זווית שבו הניצב התחתון הוא אלכסון הרצפה.", 
                math_expression: "<div dir='ltr'>d = 5</div>" 
            },
            { 
                verbal_explanation: "היתר של המשולש הוא האלכסון הראשי.", 
                math_expression: "<div dir='ltr'>c = 13</div>" 
            },
            { 
                verbal_explanation: "הניצב האנכי החסר הוא גובה התיבה. נציב בפיתגורס.", 
                math_expression: "<div dir='ltr'>5<sup>2</sup> + h<sup>2</sup> = 13<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקות.", 
                math_expression: "<div dir='ltr'>25 + h<sup>2</sup> = 169</div>" 
            },
            { 
                verbal_explanation: "נעביר את ה-25 ימינה ונחסר.", 
                math_expression: "<div dir='ltr'>h<sup>2</sup> = 169 - 25 = 144</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש כדי למצוא את הגובה.", 
                math_expression: "<div dir='ltr'>h = &radic;144 = 12</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">12 ס\"מ</span>"
    },

    // שאלה 19
    {
        topic: "bagrut_35372",
        subTopic: "תיבה",
        question_text: `<strong>זיהוי פאה גדולה ביותר בתיבה:</strong><br>
        לתיבה מידות של: 2 ס"מ, 7 ס"מ, ו- 10 ס"מ.<br>
        מהו שטחה של ה<strong>פאה הגדולה ביותר</strong> בתיבה זו?`,
        options: [
            "<span dir=\"rtl\">70 סמ\"ר</span>",
            "<span dir=\"rtl\">14 סמ\"ר</span>",
            "<span dir=\"rtl\">20 סמ\"ר</span>",
            "<span dir=\"rtl\">140 סמ\"ר</span>"
        ],
        correctAnswer: 0,
        hint: "פאה היא מלבן שנוצר משניים מתוך שלושת הממדים. כדי לקבל את השטח המקסימלי, עליכם לבחור את שני המספרים הגדולים ביותר ולהכפיל אותם.",
        solution_steps: [
            { 
                verbal_explanation: "הפאות השונות מחושבות על ידי שילובים של שני ממדים מתוך השלושה.", 
                math_expression: "<div dir='ltr'>a = 2 , b = 7 , c = 10</div>" 
            },
            { 
                verbal_explanation: "פאה ראשונה (2 ו-7).", 
                math_expression: "<div dir='ltr'>S<sub>1</sub> = 2 &times; 7 = 14</div>" 
            },
            { 
                verbal_explanation: "פאה שנייה (2 ו-10).", 
                math_expression: "<div dir='ltr'>S<sub>2</sub> = 2 &times; 10 = 20</div>" 
            },
            { 
                verbal_explanation: "פאה שלישית מורכבת מהצלעות הארוכות ביותר, 7 ו-10, ולכן היא תניב שטח מקסימלי.", 
                math_expression: "<div dir='ltr'>S<sub>3</sub> = 7 &times; 10 = 70</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">70 סמ\"ר</span>"
    },

    // שאלה 20
    {
        topic: "bagrut_35372",
        subTopic: "תיבה",
        question_text: `<strong>חיבור גופים ליצירת תיבה:</strong><br>
        לקחו 3 קוביות זהות בעלות צלע באורך 3 ס"מ כל אחת.<br>
        הדביקו אותן זו לזו ברצף כדי ליצור תיבה אחת גדולה.<br>
        מהו הנפח של התיבה הגדולה שנוצרה?`,
        options: [
            "<span dir=\"rtl\">81 סמ\"ק</span>",
            "<span dir=\"rtl\">27 סמ\"ק</span>",
            "<span dir=\"rtl\">9 סמ\"ק</span>",
            "<span dir=\"rtl\">729 סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "נפחים תמיד מתחברים! הדרך המהירה ביותר: מצאו נפח של קובייה קטנה אחת (3 כפול 3 כפול 3), והכפילו אותו פי 3.",
        solution_steps: [
            { 
                verbal_explanation: "נמצא את נפחה של קובייה קטנה אחת שאורך צלעה הוא 3.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = 3<sup>3</sup> = 27</div>" 
            },
            { 
                verbal_explanation: "התיבה המלאה מורכבת משלוש קוביות כאלו שהוצמדו יחד. נפחה הכולל הוא סכום הנפחים.", 
                math_expression: "<div dir='ltr'>V = 3 &times; 27</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ונקבל את נפח התיבה השלמה.", 
                math_expression: "<div dir='ltr'>V = 81</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">81 סמ\"ק</span>"
    },// ---------------------------------------------------------
    // תת נושא 3: פירמידה (שאלות 21-30)
    // ---------------------------------------------------------

    // שאלה 21
    {
        topic: "bagrut_35372",
        subTopic: "פירמידה",
        question_text: `<strong>חישוב נפח פירמידה בעלת בסיס ריבועי:</strong><br>
        נתונה פירמידה ישרה שבסיסה הוא ריבוע.<br>
        אורך צלע הבסיס הריבועי הוא 6 ס"מ.<br>
        גובה הפירמידה (h) הוא 10 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 160" width="100%" height="160" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 120,120 160,90 80,90" fill="rgba(234,179,8,0.2)" stroke="#ca8a04" stroke-width="2"/>
            <line x1="40,120" x2="100" y2="20" stroke="#3b82f6" stroke-width="2"/>
            <line x1="120" y1="120" x2="100" y2="20" stroke="#3b82f6" stroke-width="2"/>
            <line x1="160" y1="90" x2="100" y2="20" stroke="#3b82f6" stroke-width="2"/>
            <line x1="80" y1="90" x2="100" y2="20" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>
            <line x1="100" y1="20" x2="100" y2="105" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="110" y="70" font-family="Arial" font-size="12" font-weight="bold" fill="#ef4444">10</text>
            <text x="80" y="135" font-family="Arial" font-size="12" font-weight="bold">6</text>
        </svg>
        </div>
        מהו <strong>נפח</strong> הפירמידה?`,
        options: [
            "<span dir=\"rtl\">120 סמ\"ק</span>",
            "<span dir=\"rtl\">360 סמ\"ק</span>",
            "<span dir=\"rtl\">60 סמ\"ק</span>",
            "<span dir=\"rtl\">100 סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "נפח של פירמידה שווה לשטח הבסיס כפול הגובה, לחלק ב-3. חשבו קודם את שטח הבסיס הריבועי (6 כפול 6), הכפילו בגובה (10) וחלקו הכל ב-3.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב תחילה את השטח של בסיס הפירמידה (S). מכיוון שזהו ריבוע, השטח הוא צלע כפול צלע.", 
                math_expression: "<div dir='ltr'>S = 6 &times; 6 = 36</div>" 
            },
            { 
                verbal_explanation: "הנוסחה לנפח פירמידה (V) קובעת שיש להכפיל את שטח הבסיס בגובה (h), ואת התוצאה לחלק ב-3.", 
                math_expression: "<div dir='ltr'>V = (S &times; h) / 3</div>" 
            },
            { 
                verbal_explanation: "נציב את שטח הבסיס שמצאנו ואת הגובה הנתון.", 
                math_expression: "<div dir='ltr'>V = (36 &times; 10) / 3</div>" 
            },
            { 
                verbal_explanation: "נחשב את המונה.", 
                math_expression: "<div dir='ltr'>V = 360 / 3</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החילוק כדי לקבל את הנפח הסופי.", 
                math_expression: "<div dir='ltr'>V = 120</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">120 סמ\"ק</span>"
    },

    // שאלה 22
    {
        topic: "bagrut_35372",
        subTopic: "פירמידה",
        question_text: `<strong>חישוב נפח פירמידה בעלת בסיס מלבני:</strong><br>
        בפירמידה ישרה הבסיס הוא מלבן שאורכו 8 ס"מ ורוחבו 5 ס"מ.<br>
        גובה הפירמידה הוא 9 ס"מ.<br>
        מהו הנפח של פירמידה זו?`,
        options: [
            "<span dir=\"rtl\">120 סמ\"ק</span>",
            "<span dir=\"rtl\">360 סמ\"ק</span>",
            "<span dir=\"rtl\">40 סמ\"ק</span>",
            "<span dir=\"rtl\">72 סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "הבסיס הוא מלבן, לכן שטחו הוא אורך כפול רוחב (8 כפול 5). לאחר מכן, הכפילו את התוצאה בגובה (9) וזכרו לחלק ב-3 בסוף התהליך.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את שטח בסיס הפירמידה, נחשב שטח מלבן: אורך כפול רוחב.", 
                math_expression: "<div dir='ltr'>S = 8 &times; 5 = 40</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בנוסחת הנפח של פירמידה (שטח הבסיס כפול הגובה, חלקי שלוש).", 
                math_expression: "<div dir='ltr'>V = (40 &times; 9) / 3</div>" 
            },
            { 
                verbal_explanation: "נפתור קודם כל את המונה.", 
                math_expression: "<div dir='ltr'>V = 360 / 3</div>" 
            },
            { 
                verbal_explanation: "נחלק בשלוש לקבלת הנפח המלא.", 
                math_expression: "<div dir='ltr'>V = 120</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">120 סמ\"ק</span>"
    },

    // שאלה 23
    {
        topic: "bagrut_35372",
        subTopic: "פירמידה",
        question_text: `<strong>מציאת גובה חסר מתוך נפח פירמידה (משוואה):</strong><br>
        נפחה של פירמידה ישרה הוא 200 סמ"ק.<br>
        שטח הבסיס שלה ידוע והוא שווה ל-50 סמ"ר.<br>
        מהו <strong>גובה</strong> הפירמידה (h)?`,
        options: [
            "<span dir=\"rtl\">12 ס\"מ</span>",
            "<span dir=\"rtl\">4 ס\"מ</span>",
            "<span dir=\"rtl\">15 ס\"מ</span>",
            "<span dir=\"rtl\">8 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "בנו משוואה: 200 שווה ל-(50 כפול h) חלקי 3. כדי להיפטר מהחלוקה ב-3, הכפילו את ה-200 פי 3 (תקבלו 600). עכשיו המשוואה היא 600 = 50h. מהו h?",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את נוסחת הנפח הבסיסית של פירמידה.", 
                math_expression: "<div dir='ltr'>V = (S &times; h) / 3</div>" 
            },
            { 
                verbal_explanation: "נציב את המספרים הנתונים בשאלה.", 
                math_expression: "<div dir='ltr'>200 = (50 &times; h) / 3</div>" 
            },
            { 
                verbal_explanation: "כדי לבטל את המכנה, נכפיל את שני אגפי המשוואה ב-3.", 
                math_expression: "<div dir='ltr'>600 = 50 &times; h</div>" 
            },
            { 
                verbal_explanation: "כעת, נחלק את שני האגפים ב-50 כדי לחלץ את הגובה לבדו.", 
                math_expression: "<div dir='ltr'>h = 600 / 50</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק ונגלה את גובה הפירמידה.", 
                math_expression: "<div dir='ltr'>h = 12</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">12 ס\"מ</span>"
    },

    // שאלה 24
    {
        topic: "bagrut_35372",
        subTopic: "פירמידה",
        question_text: `<strong>מציאת צלע הבסיס הריבועי מתוך הנפח:</strong><br>
        נתונה פירמידה בעלת <strong>בסיס ריבועי</strong>.<br>
        נפח הפירמידה הוא 48 סמ"ק, וגובה הפירמידה הוא 4 ס"מ.<br>
        מהו אורך <strong>צלע הבסיס</strong>?`,
        options: [
            "<span dir=\"rtl\">6 ס\"מ</span>",
            "<span dir=\"rtl\">36 ס\"מ</span>",
            "<span dir=\"rtl\">12 ס\"מ</span>",
            "<span dir=\"rtl\">8 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "הציבו בנוסחה: 48 שווה (שטח בסיס כפול 4) חלקי 3. כפלו ב-3 וקבלו 144 = שטח בסיס כפול 4. חלקו ב-4, וגלו ששטח הבסיס הוא 36. מכיוון שהבסיס ריבוע, איזו צלע כפול עצמה שווה 36?",
        solution_steps: [
            { 
                verbal_explanation: "נציב את הנפח והגובה הידועים בנוסחת הפירמידה. שטח הבסיס יהיה הנעלם שלנו.", 
                math_expression: "<div dir='ltr'>48 = (S &times; 4) / 3</div>" 
            },
            { 
                verbal_explanation: "נכפיל את המשוואה ב-3 כדי להיפטר מהשבר.", 
                math_expression: "<div dir='ltr'>144 = S &times; 4</div>" 
            },
            { 
                verbal_explanation: "נחלק את שני הצדדים בארבע כדי למצוא את השטח המלא של הבסיס.", 
                math_expression: "<div dir='ltr'>S = 144 / 4 = 36</div>" 
            },
            { 
                verbal_explanation: "מכיוון שנתון לנו שהבסיס הוא ריבוע, השטח שלו שווה לצלע בריבוע.", 
                math_expression: "<div dir='ltr'>a<sup>2</sup> = 36</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי כדי לגלות את אורך הצלע של הריבוע.", 
                math_expression: "<div dir='ltr'>a = &radic;36 = 6</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">6 ס\"מ</span>"
    },

    // שאלה 25
    {
        topic: "bagrut_35372",
        subTopic: "פירמידה",
        question_text: `<strong>הבנת שטח פנים של פירמידה ריבועית:</strong><br>
        בפירמידה בעלת בסיס ריבועי, אורך צלע הבסיס הוא 5 ס"מ.<br>
        שטחה של <strong>כל אחת מארבע הפאות הצדדיות</strong> (שהן משולשים) הוא 10 סמ"ר.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 160" width="100%" height="160" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,120 120,120 160,90 80,90" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
            <polygon points="40,120 120,120 100,20" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
            <text x="95" y="85" font-family="Arial" font-size="12" font-weight="bold" fill="#1d4ed8">S=10</text>
            <line x1="120" y1="120" x2="160" y2="90" stroke="#0f172a" stroke-width="2"/>
            <line x1="160" y1="90" x2="100" y2="20" stroke="#0f172a" stroke-width="2"/>
        </svg>
        </div>
        מהו <strong>שטח הפנים הכולל</strong> של הפירמידה (בסיס + כל הפאות)?`,
        options: [
            "<span dir=\"rtl\">65 סמ\"ר</span>",
            "<span dir=\"rtl\">40 סמ\"ר</span>",
            "<span dir=\"rtl\">90 סמ\"ר</span>",
            "<span dir=\"rtl\">25 סמ\"ר</span>"
        ],
        correctAnswer: 0,
        hint: "שטח הפנים שווה לשטח הבסיס ועוד השטח של כל 4 המשולשים שעוטפים אותו מסביב. חשבו את שטח הבסיס הריבועי (5 כפול 5). לאחר מכן הוסיפו את השטח של המשולשים (4 כפול 10).",
        solution_steps: [
            { 
                verbal_explanation: "שטח פנים של גוף הוא סכום השטחים של כל הצורות המרכיבות את המעטפת שלו. נתחיל בשטח הבסיס (ריבוע).", 
                math_expression: "<div dir='ltr'>S<sub>1</sub> = 5 &times; 5 = 25</div>" 
            },
            { 
                verbal_explanation: "מעטפת הפירמידה מורכבת מארבעה משולשים. נתון לנו שטח משולש בודד.", 
                math_expression: "<div dir='ltr'>S<sub>2</sub> = 10</div>" 
            },
            { 
                verbal_explanation: "נכפיל את שטח המשולש ב-4 כדי לקבל את סך שטח הצדדים.", 
                math_expression: "<div dir='ltr'>S<sub>3</sub> = 4 &times; 10 = 40</div>" 
            },
            { 
                verbal_explanation: "נחבר את שטח הבסיס אל שטח הצדדים יחד כדי למצוא את שטח הפנים המלא.", 
                math_expression: "<div dir='ltr'>S = 25 + 40</div>" 
            },
            { 
                verbal_explanation: "נבצע חיבור ונקבל את השטח הכולל.", 
                math_expression: "<div dir='ltr'>S = 65</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">65 סמ\"ר</span>"
    },

    // שאלה 26
    {
        topic: "bagrut_35372",
        subTopic: "פירמידה",
        question_text: `<strong>מציאת גובה פאה באמצעות משפט פיתגורס פנימי:</strong><br>
        בפירמידה ישרה וריבועית, אורך צלע הבסיס הוא 8 ס"מ.<br>
        גובה הפירמידה (היורד למרכז הבסיס) הוא 3 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="30,120 130,120 170,80 70,80" fill="none" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="30" y1="120" x2="100" y2="20" stroke="#94a3b8" stroke-width="1"/>
            <line x1="130" y1="120" x2="100" y2="20" stroke="#94a3b8" stroke-width="1"/>
            <line x1="100" y1="20" x2="100" y2="100" stroke="#ef4444" stroke-width="2"/> <line x1="100" y1="100" x2="150" y2="100" stroke="#3b82f6" stroke-width="2"/> <line x1="100" y1="20" x2="150" y2="100" stroke="#22c55e" stroke-width="3"/> <text x="90" y="70" font-family="Arial" font-size="12" font-weight="bold" fill="#ef4444">3</text>
            <text x="120" y="115" font-family="Arial" font-size="12" font-weight="bold" fill="#3b82f6">4</text>
            <text x="135" y="60" font-family="Arial" font-size="12" font-weight="bold" fill="#15803d">l = ?</text>
        </svg>
        </div>
        מהו אורך <strong>גובה הפאה הצדדית</strong> (המסומן כיתר ירוק במשולש)?`,
        options: [
            "<span dir=\"rtl\">5 ס\"מ</span>",
            "<span dir=\"rtl\">7 ס\"מ</span>",
            "<span dir=\"rtl\">25 ס\"מ</span>",
            "<span dir=\"rtl\">10 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "בתוך הפירמידה מסתתר משולש ישר זווית. הניצב האנכי הוא גובה הפירמידה (3). הניצב האופקי הוא בדיוק חצי מצלע הבסיס (8 חלקי 2 שווה 4). גובה הפאה הוא היתר. הפעילו פיתגורס: 3 בריבוע ועוד 4 בריבוע.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את המשולש ישר הזווית הפנימי. הניצב האנכי שלו הוא גובה הפירמידה.", 
                math_expression: "<div dir='ltr'>a = 3</div>" 
            },
            { 
                verbal_explanation: "הניצב האופקי שעל הרצפה שווה בדיוק למחצית מאורך צלע הבסיס (שמונה לחלק לשתיים).", 
                math_expression: "<div dir='ltr'>b = 8 / 2 = 4</div>" 
            },
            { 
                verbal_explanation: "גובה הפאה הוא היתר (l). נחשב אותו בעזרת משפט פיתגורס.", 
                math_expression: "<div dir='ltr'>l<sup>2</sup> = 3<sup>2</sup> + 4<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את הריבועים ונחבר אותם.", 
                math_expression: "<div dir='ltr'>l<sup>2</sup> = 9 + 16 = 25</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי כדי למצוא את האורך.", 
                math_expression: "<div dir='ltr'>l = &radic;25 = 5</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">5 ס\"מ</span>"
    },

    // שאלה 27
    {
        topic: "bagrut_35372",
        subTopic: "פירמידה",
        question_text: `<strong>פיתגורס במרחב (מציאת מקצוע צדדי):</strong><br>
        בפירמידה, נוצר משולש ישר זווית פנימי שבו הניצב האנכי (הגובה) הוא 4 ס"מ, וניצב הבסיס הוא 3 ס"מ.<br>
        מהו אורך היתר, שהוא למעשה <strong>המקצוע הצדדי</strong> של הפירמידה?`,
        options: [
            "<span dir=\"rtl\">5 ס\"מ</span>",
            "<span dir=\"rtl\">7 ס\"מ</span>",
            "<span dir=\"rtl\">25 ס\"מ</span>",
            "<span dir=\"rtl\">12 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "זהו משולש פיתגורס המפורסם (שלשה פיתגורית). יש לכם ניצבים 3 ו-4. חברו את הריבועים שלהם והוציאו שורש מהתוצאה.",
        solution_steps: [
            { 
                verbal_explanation: "המשולש מורכב מגובה הפירמידה, מרכז הבסיס, והמקצוע הצדדי היורד לאחת הפינות. נציב בפיתגורס.", 
                math_expression: "<div dir='ltr'>k<sup>2</sup> = 4<sup>2</sup> + 3<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקות.", 
                math_expression: "<div dir='ltr'>k<sup>2</sup> = 16 + 9</div>" 
            },
            { 
                verbal_explanation: "נחבר את התוצאות.", 
                math_expression: "<div dir='ltr'>k<sup>2</sup> = 25</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש כדי לגלות את אורך המקצוע הצדדי.", 
                math_expression: "<div dir='ltr'>k = &radic;25 = 5</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">5 ס\"מ</span>"
    },

    // שאלה 28
    {
        topic: "bagrut_35372",
        subTopic: "פירמידה",
        question_text: `<strong>הבנת טריגונומטריה פשוטה בפירמידה (זווית נטייה):</strong><br>
        בפירמידה ישרה, הניצב האנכי (גובה הפירמידה) שווה באורכו בדיוק לניצב האופקי שעל הבסיס.<br>
        כאשר במשולש ישר זווית שני הניצבים שווים זה לזה, המשולש הוא גם שווה שוקיים.<br>
        מהי ה<strong>זווית</strong> שנוצרת בין היתר לבין הבסיס במקרה כזה?`,
        options: [
            "<span dir=\"rtl\">45 מעלות</span>",
            "<span dir=\"rtl\">90 מעלות</span>",
            "<span dir=\"rtl\">30 מעלות</span>",
            "<span dir=\"rtl\">60 מעלות</span>"
        ],
        correctAnswer: 0,
        hint: "סכום הזוויות במשולש הוא 180 מעלות. זווית אחת ישרה (90). נותרו 90 מעלות לחלוקה לשתים. מכיוון שהמשולש שווה שוקיים, שתי הזוויות שוות. כמה זה 90 חלקי 2?",
        solution_steps: [
            { 
                verbal_explanation: "במשולש ישר זווית, זווית אחת שווה לתשעים מעלות.", 
                math_expression: "<div dir='ltr'>&ang;A = 90&deg;</div>" 
            },
            { 
                verbal_explanation: "סכום הזוויות בכל משולש הוא תמיד 180. נחשב כמה נותר לשתי הזוויות הנותרות.", 
                math_expression: "<div dir='ltr'>180 - 90 = 90&deg;</div>" 
            },
            { 
                verbal_explanation: "המשולש שווה שוקיים ולכן זוויות הבסיס שוות זו לזו. נחלק לשתיים.", 
                math_expression: "<div dir='ltr'>90 / 2</div>" 
            },
            { 
                verbal_explanation: "המסקנה היא שכל זווית בסיס (זווית הנטייה של הפאה או המקצוע) היא 45 מעלות.", 
                math_expression: "<div dir='ltr'>&ang;B = 45&deg;</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">45 מעלות</span>"
    },

    // שאלה 29
    {
        topic: "bagrut_35372",
        subTopic: "פירמידה",
        question_text: `<strong>השפעת שינוי ממדים על נפח הפירמידה:</strong><br>
        לפירמידה מסוימת יש שטח בסיס וגובה נתונים.<br>
        אם נכפיל את גובה הפירמידה <strong>פי 2</strong>, מבלי לשנות כלל את שטח הבסיס שלה, מה יקרה לנפח הפירמידה?`,
        options: [
            "<span dir=\"rtl\">הנפח יוכפל פי 2</span>",
            "<span dir=\"rtl\">הנפח יגדל פי 4</span>",
            "<span dir=\"rtl\">הנפח לא ישתנה</span>",
            "<span dir=\"rtl\">הנפח יגדל פי 8</span>"
        ],
        correctAnswer: 0,
        hint: "הביטו בנוסחת הנפח: (שטח בסיס כפול גובה) חלקי 3. הגובה (h) אינו מועלה בשום חזקה. לכן, כל שינוי בו גורר שינוי זהה וישיר בתוצאה כולה.",
        solution_steps: [
            { 
                verbal_explanation: "נוסחת הנפח הרגילה של פירמידה משתמשת בגובה ללא חזקות.", 
                math_expression: "<div dir='ltr'>V = (S &times; h) / 3</div>" 
            },
            { 
                verbal_explanation: "גובה הפירמידה גדל פי 2. נחליף את הגובה במשוואה בפעמיים h.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = (S &times; (2 &times; h)) / 3</div>" 
            },
            { 
                verbal_explanation: "נוציא את ה-2 מחוץ לסוגריים כמקדם.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = 2 &times; ((S &times; h) / 3)</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהביטוי בסוגריים הוא הנפח המקורי, הגענו למסקנה שהנפח החדש כפול מהישן.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = 2 &times; V</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">הנפח יוכפל פי 2</span>"
    },

    // שאלה 30
    {
        topic: "bagrut_35372",
        subTopic: "פירמידה",
        question_text: `<strong>היחס הקבוע בין תיבה לפירמידה (שאלת הבנה):</strong><br>
        נתונות תיבה ופירמידה. לשתיהן יש <strong>בדיוק את אותו שטח בסיס ובדיוק את אותו גובה</strong>.<br>
        אם נמלא את הפירמידה במים, ונשפוך את המים לתוך התיבה - כמה פעמים נצטרך לעשות זאת כדי למלא את התיבה עד הסוף?`,
        options: [
            "<span dir=\"rtl\">3 פעמים בדיוק</span>",
            "<span dir=\"rtl\">2 פעמים</span>",
            "<span dir=\"rtl\">4 פעמים</span>",
            "<span dir=\"rtl\">פעם אחת (אותו נפח)</span>"
        ],
        correctAnswer: 0,
        hint: "זוכרים את נוסחאות הנפח? נוסחת התיבה היא S כפול h. נוסחת הפירמידה היא S כפול h, חלקי 3. המשמעות היא שנפח פירמידה קטן פי 3 מנפח תיבה בעלת אותם ממדים.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את נוסחת הנפח של התיבה.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = S &times; h</div>" 
            },
            { 
                verbal_explanation: "נרשום את נוסחת הנפח של הפירמידה, שיש לה נתונים זהים.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = (S &times; h) / 3</div>" 
            },
            { 
                verbal_explanation: "מכאן ניתן לראות בבירור שהפירמידה שווה בדיוק לשליש מהתיבה.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = V<sub>1</sub> / 3</div>" 
            },
            { 
                verbal_explanation: "ולכן, צריך להכפיל את הפירמידה 3 פעמים כדי להגיע לנפח התיבה השלם.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = 3 &times; V<sub>2</sub></div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">3 פעמים בדיוק</span>"
    },

    // ---------------------------------------------------------
    // תת נושא 4: גליל וחרוט (שאלות 31-40)
    // ---------------------------------------------------------

    // שאלה 31
    {
        topic: "bagrut_35372",
        subTopic: "גליל",
        question_text: `<strong>חישוב נפח גליל בסיסי:</strong><br>
        נתון גליל שרדיוס הבסיס המעגלי שלו הוא 3 ס"מ (r = 3).<br>
        גובה הגליל (h) הוא 10 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <ellipse cx="100" cy="120" rx="50" ry="15" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
            <ellipse cx="100" cy="30" rx="50" ry="15" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <line x1="50" y1="30" x2="50" y2="120" stroke="#3b82f6" stroke-width="2"/>
            <line x1="150" y1="30" x2="150" y2="120" stroke="#3b82f6" stroke-width="2"/>
            <line x1="100" y1="120" x2="150" y2="120" stroke="#0f172a" stroke-width="2" stroke-dasharray="3,3"/>
            <text x="125" y="115" font-family="Arial" font-size="12" font-weight="bold">r=3</text>
            <line x1="100" y1="30" x2="100" y2="120" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="105" y="80" font-family="Arial" font-size="12" font-weight="bold" fill="#ef4444">h=10</text>
        </svg>
        </div>
        מהו <strong>נפח</strong> הגליל?`,
        options: [
            "<span dir=\"rtl\">90&pi; סמ\"ק</span>",
            "<span dir=\"rtl\">30&pi; סמ\"ק</span>",
            "<span dir=\"rtl\">60&pi; סמ\"ק</span>",
            "<span dir=\"rtl\">100&pi; סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "נפח גליל הוא שטח הבסיס (עיגול) כפול הגובה. שטח עיגול הוא פאי כפול רדיוס בריבוע. לכן חוק הנפח הוא: פאי כפול 3 בריבוע, כפול 10.",
        solution_steps: [
            { 
                verbal_explanation: "בסיס הגליל הוא עיגול. נחשב את שטחו בעזרת הנוסחה: פאי כפול הרדיוס בריבוע.", 
                math_expression: "<div dir='ltr'>S = &pi; &times; r<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נציב את הרדיוס (3) ונעלה אותו בריבוע. נקבל תשע פאי.", 
                math_expression: "<div dir='ltr'>S = &pi; &times; 3<sup>2</sup> = 9&pi;</div>" 
            },
            { 
                verbal_explanation: "נוסחת נפח הגליל מכפילה את שטח הבסיס המעגלי בגובה.", 
                math_expression: "<div dir='ltr'>V = S &times; h</div>" 
            },
            { 
                verbal_explanation: "נציב את השטח שמצאנו ואת הגובה הנתון.", 
                math_expression: "<div dir='ltr'>V = 9&pi; &times; 10</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים ונקבל את התשובה הסופית המשלבת את פאי.", 
                math_expression: "<div dir='ltr'>V = 90&pi;</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">90&pi; סמ\"ק</span>"
    },

    // שאלה 32
    {
        topic: "bagrut_35372",
        subTopic: "גליל",
        question_text: `<strong>חישוב נפח כאשר נתון הקוטר השלם:</strong><br>
        נתון גליל שבו <strong>קוטר הבסיס</strong> (הרוחב המלא) הוא 8 ס"מ.<br>
        גובה הגליל הוא 5 ס"מ.<br>
        מהו הנפח שלו?`,
        options: [
            "<span dir=\"rtl\">80&pi; סמ\"ק</span>",
            "<span dir=\"rtl\">320&pi; סמ\"ק</span>",
            "<span dir=\"rtl\">40&pi; סמ\"ק</span>",
            "<span dir=\"rtl\">160&pi; סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "זהירות! הנוסחה דורשת את הרדיוס (r), לא את הקוטר! הרדיוס הוא בדיוק חצי מהקוטר. קודם חלקו את 8 ב-2. אחרי שמצאתם רדיוס 4, הפעילו את הנוסחה: פאי כפול 4 בריבוע כפול 5.",
        solution_steps: [
            { 
                verbal_explanation: "הטעות הנפוצה ביותר היא להציב את הקוטר (d) בנוסחה. עלינו למצוא את הרדיוס, שהוא מחצית מהקוטר.", 
                math_expression: "<div dir='ltr'>r = d / 2</div>" 
            },
            { 
                verbal_explanation: "נחלק את הקוטר הנתון ב-2 לקבלת הרדיוס.", 
                math_expression: "<div dir='ltr'>r = 8 / 2 = 4</div>" 
            },
            { 
                verbal_explanation: "נציב את הרדיוס ואת הגובה בנוסחת הנפח המלאה של גליל.", 
                math_expression: "<div dir='ltr'>V = &pi; &times; r<sup>2</sup> &times; h</div>" 
            },
            { 
                verbal_explanation: "נציב את המספרים לתוך המשוואה.", 
                math_expression: "<div dir='ltr'>V = &pi; &times; 4<sup>2</sup> &times; 5</div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקה.", 
                math_expression: "<div dir='ltr'>V = &pi; &times; 16 &times; 5</div>" 
            },
            { 
                verbal_explanation: "נכפיל את שש עשרה בחמש ונקבל שמונים פאי.", 
                math_expression: "<div dir='ltr'>V = 80&pi;</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">80&pi; סמ\"ק</span>"
    },

    // שאלה 33
    {
        topic: "bagrut_35372",
        subTopic: "גליל",
        question_text: `<strong>מציאת גובה חסר מתוך נפח של גליל:</strong><br>
        הנפח של גליל הוא 200&pi; סמ"ק.<br>
        רדיוס הבסיס שלו הוא 5 ס"מ.<br>
        מהו <strong>גובה</strong> הגליל (h)?`,
        options: [
            "<span dir=\"rtl\">8 ס\"מ</span>",
            "<span dir=\"rtl\">10 ס\"מ</span>",
            "<span dir=\"rtl\">40 ס\"מ</span>",
            "<span dir=\"rtl\">5 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "בנו משוואה. מצד אחד הנפח (200 פאי). מצד שני הנוסחה (פאי כפול 5 בריבוע כפול h). אפשר לבטל את סימן הפאי משני הצדדים! תקבלו 200 = 25h. פתרו זאת.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את משוואת הנפח עם התוצאה הסופית שניתנה לנו.", 
                math_expression: "<div dir='ltr'>200&pi; = &pi; &times; 5<sup>2</sup> &times; h</div>" 
            },
            { 
                verbal_explanation: "נצמצם את סימן הפאי משני צידי המשוואה.", 
                math_expression: "<div dir='ltr'>200 = 5<sup>2</sup> &times; h</div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקה של הרדיוס.", 
                math_expression: "<div dir='ltr'>200 = 25 &times; h</div>" 
            },
            { 
                verbal_explanation: "נחלק את הנפח ב-25 כדי לבודד את הגובה.", 
                math_expression: "<div dir='ltr'>h = 200 / 25</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק ונקבל את התשובה הסופית.", 
                math_expression: "<div dir='ltr'>h = 8</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">8 ס\"מ</span>"
    },

    // שאלה 34
    {
        topic: "bagrut_35372",
        subTopic: "גליל",
        question_text: `<strong>חישוב שטח המעטפת של הגליל:</strong><br>
        התבקשתם להדביק מדבקה שמקיפה בדיוק את כל <strong>דופן הצד</strong> של פחית גלילית.<br>
        רדיוס הפחית הוא 2 ס"מ, וגובה הפחית הוא 10 ס"מ.<br>
        מהו שטח המעטפת הנדרש?`,
        options: [
            "<span dir=\"rtl\">40&pi; סמ\"ר</span>",
            "<span dir=\"rtl\">20&pi; סמ\"ר</span>",
            "<span dir=\"rtl\">10&pi; סמ\"ר</span>",
            "<span dir=\"rtl\">100&pi; סמ\"ר</span>"
        ],
        correctAnswer: 0,
        hint: "שטח מעטפת גליל מחושב על ידי הכפלת היקף המעגל בגובה הגליל. היקף מעגל הוא שתי פאי כפול רדיוס. לכן הנוסחה למעטפת היא: 2 כפול פאי כפול r כפול h.",
        solution_steps: [
            { 
                verbal_explanation: "שטח המעטפת הוא למעשה מלבן שמגולגל לצורת צינור. רוחבו הוא הגובה, ואורכו הוא היקף המעגל.", 
                math_expression: "<div dir='ltr'>S = C &times; h</div>" 
            },
            { 
                verbal_explanation: "נוסחת היקף מעגל (C) היא שתיים כפול פאי כפול רדיוס.", 
                math_expression: "<div dir='ltr'>C = 2 &times; &pi; &times; r</div>" 
            },
            { 
                verbal_explanation: "לכן, הנוסחה השלמה לשטח המעטפת היא שתיים כפול פאי כפול רדיוס כפול גובה.", 
                math_expression: "<div dir='ltr'>S = 2 &times; &pi; &times; r &times; h</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים שלנו: רדיוס שווה 2, גובה שווה 10.", 
                math_expression: "<div dir='ltr'>S = 2 &times; &pi; &times; 2 &times; 10</div>" 
            },
            { 
                verbal_explanation: "נכפיל את המספרים (2 כפול 2 כפול 10) ונשאיר את הפאי.", 
                math_expression: "<div dir='ltr'>S = 40&pi;</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">40&pi; סמ\"ר</span>"
    },

    // שאלה 35
    {
        topic: "bagrut_35372",
        subTopic: "חרוט",
        question_text: `<strong>חישוב נפח חרוט (קודקוד שפיצי):</strong><br>
        נתון חרוט שרדיוס הבסיס שלו הוא 6 ס"מ.<br>
        הגובה האנכי של החרוט הוא 10 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <ellipse cx="100" cy="120" rx="50" ry="15" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
            <path d="M 50,120 L 100,20 L 150,120" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <line x1="100" y1="20" x2="100" y2="120" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="110" y="80" font-family="Arial" font-size="12" font-weight="bold" fill="#ef4444">10</text>
            <line x1="100" y1="120" x2="150" y2="120" stroke="#0f172a" stroke-width="2" stroke-dasharray="3,3"/>
            <text x="125" y="135" font-family="Arial" font-size="12" font-weight="bold">6</text>
        </svg>
        </div>
        מהו הנפח של החרוט?`,
        options: [
            "<span dir=\"rtl\">120&pi; סמ\"ק</span>",
            "<span dir=\"rtl\">360&pi; סמ\"ק</span>",
            "<span dir=\"rtl\">60&pi; סמ\"ק</span>",
            "<span dir=\"rtl\">40&pi; סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "בדומה לפירמידה, ברגע שלצורה יש קודקוד עליון (שפיץ), הנוסחה מתחלקת ב-3. חשבו כאילו זה גליל (פאי כפול 6 בריבוע כפול 10) וחלקו את התוצאה ב-3.",
        solution_steps: [
            { 
                verbal_explanation: "חרוט שייך למשפחת צורות ה'שפיץ'. נוסחת הנפח שלו דורשת חלוקה בשלוש.", 
                math_expression: "<div dir='ltr'>V = (&pi; &times; r<sup>2</sup> &times; h) / 3</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים המוכרים לתוך הנוסחה.", 
                math_expression: "<div dir='ltr'>V = (&pi; &times; 6<sup>2</sup> &times; 10) / 3</div>" 
            },
            { 
                verbal_explanation: "נחשב את ריבוע הרדיוס.", 
                math_expression: "<div dir='ltr'>V = (&pi; &times; 36 &times; 10) / 3</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים במונה ונקבל שלוש מאות ושישים פאי.", 
                math_expression: "<div dir='ltr'>V = 360&pi; / 3</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק בשלוש ונקבל את הנפח.", 
                math_expression: "<div dir='ltr'>V = 120&pi;</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">120&pi; סמ\"ק</span>"
    },

    // שאלה 36
    {
        topic: "bagrut_35372",
        subTopic: "חרוט",
        question_text: `<strong>מציאת גובה החרוט מתוך הנפח:</strong><br>
        נפחו של חרוט הוא 100&pi; סמ"ק.<br>
        רדיוס הבסיס הוא 5 ס"מ.<br>
        מהו <strong>גובה</strong> החרוט?`,
        options: [
            "<span dir=\"rtl\">12 ס\"מ</span>",
            "<span dir=\"rtl\">4 ס\"מ</span>",
            "<span dir=\"rtl\">15 ס\"מ</span>",
            "<span dir=\"rtl\">20 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "בנו משוואה: 100 פאי שווה (פאי כפול 5 בריבוע כפול h) חלקי 3. בטלו את הפאי. הכפילו הכל פי 3 וקבלו 300 = 25h. פתרו למציאת הגובה.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את משוואת נפח החרוט עם התוצאה הנתונה.", 
                math_expression: "<div dir='ltr'>100&pi; = (&pi; &times; 5<sup>2</sup> &times; h) / 3</div>" 
            },
            { 
                verbal_explanation: "נצמצם את הפאי משני הצדדים, ונחשב את החזקה.", 
                math_expression: "<div dir='ltr'>100 = (25 &times; h) / 3</div>" 
            },
            { 
                verbal_explanation: "כדי להיפטר מהשבר, נכפול את שני האגפים בשלוש. המאה הופך לשלוש מאות.", 
                math_expression: "<div dir='ltr'>300 = 25 &times; h</div>" 
            },
            { 
                verbal_explanation: "נחלק את המשוואה ב-25 כדי לבודד את הגובה.", 
                math_expression: "<div dir='ltr'>h = 300 / 25</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק ונמצא את גובה החרוט.", 
                math_expression: "<div dir='ltr'>h = 12</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">12 ס\"מ</span>"
    },

    // שאלה 37
    {
        topic: "bagrut_35372",
        subTopic: "חרוט",
        question_text: `<strong>חישוב אורך הקו היוצר (פיתגורס):</strong><br>
        בחרוט ישר, גובה החרוט הוא 4 ס"מ, ורדיוס הבסיס הוא 3 ס"מ.<br>
        הגובה, הרדיוס, והקו המשופע בצד יוצרים משולש ישר זווית פנימי.<br>
        מהו אורך <strong>הקו היוצר</strong> (מסומן באות l)?`,
        options: [
            "<span dir=\"rtl\">5 ס\"מ</span>",
            "<span dir=\"rtl\">7 ס\"מ</span>",
            "<span dir=\"rtl\">25 ס\"מ</span>",
            "<span dir=\"rtl\">12 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "זהו משולש ישר זווית מוכר. הניצבים שלו הם הגובה (4) והרדיוס (3). הקו המלוכסן הוא היתר. הפעילו את פיתגורס על 3 ו-4.",
        solution_steps: [
            { 
                verbal_explanation: "בחרוט, גובה האמצע נופל למרכז המעגל ויוצר זווית ישרה עם הרדיוס.", 
                math_expression: "<div dir='ltr'>h = 4 , r = 3</div>" 
            },
            { 
                verbal_explanation: "הצלע המשופעת היא היתר במשולש זה ומסומנת כ-l. נשתמש בפיתגורס.", 
                math_expression: "<div dir='ltr'>l<sup>2</sup> = h<sup>2</sup> + r<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים במשוואה.", 
                math_expression: "<div dir='ltr'>l<sup>2</sup> = 4<sup>2</sup> + 3<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את הריבועים ונחבר: שש עשרה ועוד תשע.", 
                math_expression: "<div dir='ltr'>l<sup>2</sup> = 16 + 9 = 25</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש כדי למצוא את האורך.", 
                math_expression: "<div dir='ltr'>l = &radic;25 = 5</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">5 ס\"מ</span>"
    },

    // שאלה 38
    {
        topic: "bagrut_35372",
        subTopic: "חרוט",
        question_text: `<strong>חישוב שטח מעטפת החרוט:</strong><br>
        יצרנו חרוט שבו: רדיוס הבסיס (r) הוא 3, ואורך הקו היוצר (l) הוא 5.<br>
        הנוסחה לשטח המעטפת (קירות הצד) של חרוט היא: <span dir="ltr"><strong>S = &pi; &times; r &times; l</strong></span>.<br>
        מהו שטח המעטפת של חרוט זה?`,
        options: [
            "<span dir=\"rtl\">15&pi; סמ\"ר</span>",
            "<span dir=\"rtl\">12&pi; סמ\"ר</span>",
            "<span dir=\"rtl\">30&pi; סמ\"ר</span>",
            "<span dir=\"rtl\">45&pi; סמ\"ר</span>"
        ],
        correctAnswer: 0,
        hint: "כל מה שצריך זה להכפיל את הרדיוס (3) בקו היוצר (5) ובפאי. זכרו שלא משתמשים כאן בגובה הרגיל של החרוט!",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את הנתונים הרלוונטיים. הגובה h אינו משתתף בנוסחה זו.", 
                math_expression: "<div dir='ltr'>r = 3 , l = 5</div>" 
            },
            { 
                verbal_explanation: "נרשום את הנוסחה הייעודית לשטח הצד.", 
                math_expression: "<div dir='ltr'>S = &pi; &times; r &times; l</div>" 
            },
            { 
                verbal_explanation: "נציב את הערכים.", 
                math_expression: "<div dir='ltr'>S = &pi; &times; 3 &times; 5</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים ונשאיר את הפאי.", 
                math_expression: "<div dir='ltr'>S = 15&pi;</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">15&pi; סמ\"ר</span>"
    },

    // שאלה 39
    {
        topic: "bagrut_35372",
        subTopic: "גליל",
        question_text: `<strong>היחס התאורטי בין גליל לחרוט:</strong><br>
        לתוך כוס בצורת גליל בעלת נפח 300 סמ"ק, מכניסים צורת חרוט מפלסטיק.<br>
        לחרוט זה יש <strong>בדיוק את אותו מעגל בסיס ואותו הגובה</strong> כמו לכוס.<br>
        מהו הנפח של החרוט שהוכנס פנימה?`,
        options: [
            "<span dir=\"rtl\">100 סמ\"ק</span>",
            "<span dir=\"rtl\">150 סמ\"ק</span>",
            "<span dir=\"rtl\">300 סמ\"ק</span>",
            "<span dir=\"rtl\">50 סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "זהו כלל הזהב התלת-מימדי. חרוט מתייחס לגליל בדיוק כפי שפירמידה מתייחסת לתיבה. חרוט תמיד מהווה בדיוק שליש מהגליל שחוסם אותו. חלקו את הנפח ב-3.",
        solution_steps: [
            { 
                verbal_explanation: "נוסחת הנפח של גליל היא בסיס כפול גובה.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = S &times; h</div>" 
            },
            { 
                verbal_explanation: "נוסחת הנפח של חרוט היא בסיס כפול גובה, לחלק בשלוש.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = (S &times; h) / 3</div>" 
            },
            { 
                verbal_explanation: "לכן, חרוט קטן פי 3 מגליל בעל אותם ממדים.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = V<sub>1</sub> / 3</div>" 
            },
            { 
                verbal_explanation: "נציב את נפח הגליל הנתון.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = 300 / 3</div>" 
            },
            { 
                verbal_explanation: "התוצאה היא הנפח של צורת החרוט הפנימית.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = 100</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">100 סמ\"ק</span>"
    },

    // שאלה 40
    {
        topic: "bagrut_35372",
        subTopic: "גליל",
        question_text: `<strong>השפעת הרדיוס לעומת הגובה (שאלת אתגר והבנה):</strong><br>
        היו שני גלילים זהים לחלוטין.<br>
        בגליל הראשון, <strong>הכפילו את הגובה פי 2</strong>.<br>
        בגליל השני, <strong>הכפילו את הרדיוס פי 2</strong> (והשאירו את הגובה זהה).<br>
        באיזה גליל הנפח הסופי יהיה גדול יותר?`,
        options: [
            "<span dir=\"rtl\">בגליל השני (זה שהרדיוס שלו הוכפל)</span>",
            "<span dir=\"rtl\">בגליל הראשון (זה שהגובה הוכפל)</span>",
            "<span dir=\"rtl\">בשניהם הנפח יגדל באותה מידה בדיוק</span>",
            "<span dir=\"rtl\">לא ניתן לדעת ללא המספרים המקוריים</span>"
        ],
        correctAnswer: 0,
        hint: "בנוסחת הנפח, הרדיוס מועלה בריבוע, ואילו הגובה לא. לכן הכפלת הגובה מכפילה את הנפח פי 2, אבל הכפלת הרדיוס מכפילה את הנפח פי 4 (שתיים בריבוע).",
        solution_steps: [
            { 
                verbal_explanation: "נבחן את נוסחת הנפח. הרדיוס נמצא תחת חזקה שתיים, והגובה הוא מספר רגיל.", 
                math_expression: "<div dir='ltr'>V = &pi; &times; r<sup>2</sup> &times; h</div>" 
            },
            { 
                verbal_explanation: "בגליל הראשון מכפילים את הגובה פי 2, לכן כל הנפח גדל פי 2 בלבד.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = 2 &times; V</div>" 
            },
            { 
                verbal_explanation: "בגליל השני מכפילים את הרדיוס פי 2. מכיוון שהרדיוס מועלה בריבוע, ההכפלה מועלית בריבוע גם היא.", 
                math_expression: "<div dir='ltr'>(2r)<sup>2</sup> = 4r<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "שתיים בריבוע שווה לארבע, ולכן נפח הגליל השני גדל פי 4.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = 4 &times; V</div>" 
            },
            { 
                verbal_explanation: "המסקנה היא ששינוי בעובי (רדיוס) משפיע על הנפח הרבה יותר מאשר שינוי באורך (גובה).", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> > V<sub>1</sub></div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">בגליל השני (זה שהרדיוס שלו הוכפל)</span>"
    },// ---------------------------------------------------------
    // תת נושא 5: שטח פנים ונפח - בעיות שילוב (שאלות 41-50)
    // ---------------------------------------------------------

    // שאלה 41
    {
        topic: "bagrut_35372",
        subTopic: "שטח פנים ונפח",
        question_text: `<strong>חישוב נפח של גוף מורכב (תיבה + פירמידה):</strong><br>
        לפניכם מבנה בצורת מגדל. החלק התחתון הוא תיבה בעלת בסיס ריבועי של 10&times;10 ס"מ וגובה 5 ס"מ.<br>
        החלק העליון הוא פירמידה ישרה המונחת בדיוק על בסיס התיבה, וגובהה 6 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 200" width="100%" height="200" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="40,150 120,150 160,120 80,120" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
            <polygon points="40,150 120,150 120,180 40,180" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
            <polygon points="120,150 160,120 160,150 120,180" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
            <line x1="40" y1="150" x2="100" y2="40" stroke="#ca8a04" stroke-width="2"/>
            <line x1="120" y1="150" x2="100" y2="40" stroke="#ca8a04" stroke-width="2"/>
            <line x1="160" y1="120" x2="100" y2="40" stroke="#ca8a04" stroke-width="2"/>
            <line x1="80" y1="120" x2="100" y2="40" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>
            <line x1="100" y1="40" x2="100" y2="135" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
            <text x="105" y="90" font-family="Arial" font-size="12" font-weight="bold" fill="#ef4444">6</text>
            <text x="75" y="170" font-family="Arial" font-size="12" font-weight="bold">10</text>
            <text x="30" y="170" font-family="Arial" font-size="12" font-weight="bold">5</text>
        </svg>
        </div>
        מהו <strong>הנפח הכולל</strong> של המבנה?`,
        options: [
            "<span dir=\"rtl\">700 סמ\"ק</span>",
            "<span dir=\"rtl\">1100 סמ\"ק</span>",
            "<span dir=\"rtl\">500 סמ\"ק</span>",
            "<span dir=\"rtl\">800 סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "נפח של גוף מורכב שווה לחיבור הנפחים של חלקיו. חשבו את נפח התיבה (10 כפול 10 כפול 5). לאחר מכן, חשבו את נפח הפירמידה (10 כפול 10 כפול 6, חלקי 3). חברו את התוצאות.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב תחילה את נפח התיבה התחתונה. הנוסחה היא אורך כפול רוחב כפול גובה.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = 10 &times; 10 &times; 5</div>" 
            },
            { 
                verbal_explanation: "מאה כפול חמש שווה חמש מאות. זהו נפח החלק התחתון.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = 500</div>" 
            },
            { 
                verbal_explanation: "נחשב את נפח הפירמידה העליונה. הבסיס שלה זהה לבסיס התיבה (מאה). נכפיל בגובה הפירמידה (שש) ונחלק בשלוש.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = (100 &times; 6) / 3</div>" 
            },
            { 
                verbal_explanation: "שש מאות לחלק לשלוש נותן לנו מאתיים. זהו נפח החלק העליון.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = 200</div>" 
            },
            { 
                verbal_explanation: "נחבר את שני הנפחים כדי למצוא את הנפח הכולל של הגוף.", 
                math_expression: "<div dir='ltr'>V = 500 + 200 = 700</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">700 סמ\"ק</span>"
    },

    // שאלה 42
    {
        topic: "bagrut_35372",
        subTopic: "שטח פנים ונפח",
        question_text: `<strong>מציאת שטח פנים מתוך נפח (שאלה דו-שלבית):</strong><br>
        נתונה קובייה שהנפח שלה הוא בדיוק 1,000 סמ"ק.<br>
        מהו <strong>שטח הפנים</strong> הכולל של קובייה זו?`,
        options: [
            "<span dir=\"rtl\">600 סמ\"ר</span>",
            "<span dir=\"rtl\">100 סמ\"ר</span>",
            "<span dir=\"rtl\">10,000 סמ\"ר</span>",
            "<span dir=\"rtl\">6,000 סמ\"ר</span>"
        ],
        correctAnswer: 0,
        hint: "שלב א': מצאו את אורך המקצוע. איזה מספר בחזקת 3 נותן 1000? (זה 10). שלב ב': חשבו את שטח הפנים. לקובייה יש 6 פאות, כל אחת מהן ריבוע של 10 כפול 10.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את שטח הפנים, עלינו לדעת קודם את אורך הצלע של הקובייה. ניעזר בנפח הנתון.", 
                math_expression: "<div dir='ltr'>V = a<sup>3</sup> = 1000</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש שלישי מאלף כדי למצוא את הצלע.", 
                math_expression: "<div dir='ltr'>a = <sup>3</sup>&radic;1000 = 10</div>" 
            },
            { 
                verbal_explanation: "הצלע היא עשר. כעת נחשב את שטחה של פאה אחת ריבועית.", 
                math_expression: "<div dir='ltr'>S<sub>1</sub> = 10 &times; 10 = 100</div>" 
            },
            { 
                verbal_explanation: "לקובייה יש שש פאות זהות. נכפיל את שטח הפאה בשש.", 
                math_expression: "<div dir='ltr'>S = 6 &times; 100</div>" 
            },
            { 
                verbal_explanation: "נקבל את שטח הפנים הכולל.", 
                math_expression: "<div dir='ltr'>S = 600</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">600 סמ\"ר</span>"
    },

    // שאלה 43
    {
        topic: "bagrut_35372",
        subTopic: "שטח פנים ונפח",
        question_text: `<strong>התכת צורות (שמירה על נפח):</strong><br>
        התיכו (המיסו) גוש מתכת בצורת תיבה שמידותיה הן 10 ס"מ &times; 4 ס"מ &times; 5 ס"מ.<br>
        מהחומר הנוזלי יצקו תיבה חדשה, בעלת בסיס ריבועי של 10 ס"מ &times; 10 ס"מ.<br>
        מה יהיה <strong>הגובה</strong> של התיבה החדשה שנוצרה?`,
        options: [
            "<span dir=\"rtl\">2 ס\"מ</span>",
            "<span dir=\"rtl\">5 ס\"מ</span>",
            "<span dir=\"rtl\">4 ס\"מ</span>",
            "<span dir=\"rtl\">10 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "כאשר מתיכים גוף ויוצרים גוף חדש, הנפח של החומר נשאר בדיוק אותו הדבר! חשבו את נפח התיבה הישנה, והשוו אותו לנוסחת הנפח של התיבה החדשה כדי לחלץ את הגובה.",
        solution_steps: [
            { 
                verbal_explanation: "חוק שימור החומר: הנפח של התיבה הישנה חייב להיות שווה לנפח התיבה החדשה.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = V<sub>2</sub></div>" 
            },
            { 
                verbal_explanation: "נחשב את נפח התיבה הישנה בעזרת הממדים הנתונים.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = 10 &times; 4 &times; 5 = 200</div>" 
            },
            { 
                verbal_explanation: "נרשום את משוואת הנפח עבור התיבה החדשה. הבסיס שלה הוא עשר על עשר, והגובה חסר.", 
                math_expression: "<div dir='ltr'>200 = 10 &times; 10 &times; h</div>" 
            },
            { 
                verbal_explanation: "נחשב את שטח הבסיס החדש.", 
                math_expression: "<div dir='ltr'>200 = 100 &times; h</div>" 
            },
            { 
                verbal_explanation: "נחלק את הנפח בשטח הבסיס החדש כדי לגלות לאיזה גובה יגיע החומר.", 
                math_expression: "<div dir='ltr'>h = 200 / 100 = 2</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">2 ס\"מ</span>"
    },

    // שאלה 44
    {
        topic: "bagrut_35372",
        subTopic: "שטח פנים ונפח",
        question_text: `<strong>חישוב נפח של צינור חלול (גליל בתוך גליל):</strong><br>
        לפניכם צינור בצורת גליל. רדיוסו החיצוני (כולל דופן הצינור) הוא 5 ס"מ.<br>
        הצינור חלול מבפנים, והרדיוס הפנימי של החלל הוא 3 ס"מ.<br>
        גובה הצינור הוא 10 ס"מ.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <ellipse cx="100" cy="120" rx="60" ry="20" fill="rgba(148,163,184,0.5)" stroke="#64748b" stroke-width="2"/>
            <ellipse cx="100" cy="30" rx="60" ry="20" fill="none" stroke="#64748b" stroke-width="2"/>
            <line x1="40" y1="30" x2="40" y2="120" stroke="#64748b" stroke-width="2"/>
            <line x1="160" y1="30" x2="160" y2="120" stroke="#64748b" stroke-width="2"/>
            <ellipse cx="100" cy="30" rx="35" ry="10" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
            <ellipse cx="100" cy="120" rx="35" ry="10" fill="#ffffff" stroke="#64748b" stroke-width="2" stroke-dasharray="2,2"/>
            <line x1="100" y1="30" x2="160" y2="30" stroke="#ef4444" stroke-width="2"/>
            <line x1="100" y1="30" x2="135" y2="30" stroke="#0f172a" stroke-width="2"/>
            <text x="145" y="25" font-family="Arial" font-size="12" font-weight="bold" fill="#ef4444">5</text>
            <text x="115" y="45" font-family="Arial" font-size="12" font-weight="bold">3</text>
        </svg>
        </div>
        מהו <strong>נפח החומר (הדופן)</strong> ממנו עשוי הצינור?`,
        options: [
            "<span dir=\"rtl\">160&pi; סמ\"ק</span>",
            "<span dir=\"rtl\">250&pi; סמ\"ק</span>",
            "<span dir=\"rtl\">90&pi; סמ\"ק</span>",
            "<span dir=\"rtl\">340&pi; סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "הדרך לחשב נפח של גוף חלול היא לחשב את הנפח של הגוף המלא (הגדול), ואז להחסיר (להפחית) ממנו את הנפח של החלל הפנימי (הגוף הקטן).",
        solution_steps: [
            { 
                verbal_explanation: "נחשב תחילה את הנפח של הגליל החיצוני הגדול כאילו היה אטום לגמרי. הרדיוס הגדול הוא 5.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = &pi; &times; 5<sup>2</sup> &times; 10</div>" 
            },
            { 
                verbal_explanation: "חמש בריבוע זה 25. כפול עשר שווה מאתיים וחמישים פאי.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = 250&pi;</div>" 
            },
            { 
                verbal_explanation: "כעת נחשב את נפח האוויר בפנים (החלל). זהו גליל קטן יותר עם רדיוס 3 וגובה זהה.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = &pi; &times; 3<sup>2</sup> &times; 10</div>" 
            },
            { 
                verbal_explanation: "שלוש בריבוע זה 9. כפול עשר שווה תשעים פאי.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = 90&pi;</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את נפח דופן הצינור עצמו, נחסר את החלל מהגליל השלם.", 
                math_expression: "<div dir='ltr'>V = 250&pi; - 90&pi; = 160&pi;</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">160&pi; סמ\"ק</span>"
    },

    // שאלה 45
    {
        topic: "bagrut_35372",
        subTopic: "שטח פנים ונפח",
        question_text: `<strong>שטח פנים של כוס גלילית (גליל ללא מכסה):</strong><br>
        מייצרים כוסות שתייה בצורת גליל. לכוס יש תחתית (בסיס אחד) ודופן עגולה, אך <strong>אין לה מכסה עליון</strong>.<br>
        רדיוס בסיס הכוס הוא 5 ס"מ, וגובהה הוא 10 ס"מ.<br>
        כמה חומר (בסמ"ר) נדרש כדי לייצר כוס אחת?`,
        options: [
            "<span dir=\"rtl\">125&pi; סמ\"ר</span>",
            "<span dir=\"rtl\">150&pi; סמ\"ר</span>",
            "<span dir=\"rtl\">100&pi; סמ\"ר</span>",
            "<span dir=\"rtl\">25&pi; סמ\"ר</span>"
        ],
        correctAnswer: 0,
        hint: "החומר הנדרש שווה לשטח הבסיס התחתון בלבד (פאי כפול r בריבוע) פלוס שטח המעטפת (2 כפול פאי כפול r כפול h). אל תכפילו את הבסיס ב-2 כי אין מכסה עליון!",
        solution_steps: [
            { 
                verbal_explanation: "הכוס בנויה משני חלקים: עיגול אחד שמשמש כרצפה (בסיס תחתון), ודופן מעוגלת שעוטפת את הצדדים. אין מכסה.", 
                math_expression: "<div dir='ltr'>S = S<sub>base</sub> + S<sub>side</sub></div>" 
            },
            { 
                verbal_explanation: "נחשב את שטח הרצפה העגולה. פאי כפול הרדיוס בריבוע.", 
                math_expression: "<div dir='ltr'>S<sub>base</sub> = &pi; &times; 5<sup>2</sup> = 25&pi;</div>" 
            },
            { 
                verbal_explanation: "נחשב את שטח דופן הצד (המעטפת). הנוסחה היא שתיים כפול פאי כפול רדיוס כפול גובה.", 
                math_expression: "<div dir='ltr'>S<sub>side</sub> = 2 &times; &pi; &times; 5 &times; 10</div>" 
            },
            { 
                verbal_explanation: "שתיים כפול חמש כפול עשר נותן מאה.", 
                math_expression: "<div dir='ltr'>S<sub>side</sub> = 100&pi;</div>" 
            },
            { 
                verbal_explanation: "נחבר את רצפת הכוס למעטפת הכוס כדי לקבל את כמות החומר הדרושה.", 
                math_expression: "<div dir='ltr'>S = 25&pi; + 100&pi; = 125&pi;</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">125&pi; סמ\"ר</span>"
    },

    // שאלה 46
    {
        topic: "bagrut_35372",
        subTopic: "שטח פנים ונפח",
        question_text: `<strong>העברת נוזלים בין גופים שונים (גליל לכוסיות חרוט):</strong><br>
        בתוך כלי גדול בצורת גליל נמצאים <strong>160&pi; סמ"ק</strong> של מיץ.<br>
        מוזגים את המיץ לתוך כוסות קטנות בצורת <strong>חרוט</strong>.<br>
        לכל כוסית חרוט יש רדיוס של 2 ס"מ וגובה של 3 ס"מ.<br>
        כמה כוסות חרוט מלאות ניתן למזוג מהכלי הגדול?`,
        options: [
            "<span dir=\"rtl\">40 כוסות</span>",
            "<span dir=\"rtl\">20 כוסות</span>",
            "<span dir=\"rtl\">60 כוסות</span>",
            "<span dir=\"rtl\">80 כוסות</span>"
        ],
        correctAnswer: 0,
        hint: "קודם כל, חשבו את הנפח של כוסית חרוט אחת בעזרת הנוסחה: (פאי כפול r בריבוע כפול h) חלקי 3. לאחר שמצאתם את הנפח של כוסית אחת, חלקו את הנפח הגוללי של המיץ בנפח של כוסית אחת.",
        solution_steps: [
            { 
                verbal_explanation: "כדי לדעת כמה כוסות נמלא, עלינו לדעת מה הקיבולת (נפח) של כוסית חרוט בודדת.", 
                math_expression: "<div dir='ltr'>V<sub>cone</sub> = (&pi; &times; r<sup>2</sup> &times; h) / 3</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים של הכוסית הקטנה (רדיוס שתיים וגובה שלוש).", 
                math_expression: "<div dir='ltr'>V<sub>cone</sub> = (&pi; &times; 2<sup>2</sup> &times; 3) / 3</div>" 
            },
            { 
                verbal_explanation: "נחשב את המונה: ארבע כפול שלוש שווה שנים עשר. שנים עשר חלקי שלוש נותן ארבע.", 
                math_expression: "<div dir='ltr'>V<sub>cone</sub> = 12&pi; / 3 = 4&pi;</div>" 
            },
            { 
                verbal_explanation: "כעת, נחלק את כל כמות המיץ שיש לנו בקיבולת של כוסית אחת.", 
                math_expression: "<div dir='ltr'>n = 160&pi; / 4&pi;</div>" 
            },
            { 
                verbal_explanation: "הפאי מצטמצם, ומאה שישים חלקי ארבע שווה ארבעים. לכן יתמלאו ארבעים כוסות.", 
                math_expression: "<div dir='ltr'>n = 40</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">40 כוסות</span>"
    },

    // שאלה 47
    {
        topic: "bagrut_35372",
        subTopic: "שטח פנים ונפח",
        question_text: `<strong>מציאת גובה חסר מתוך שטח פנים (אלגברה בתיבה):</strong><br>
        שטח הפנים המלא של תיבה הוא 112 סמ"ר.<br>
        הבסיס של התיבה הוא ריבוע שאורך צלעותיו הוא 4 ס"מ (אורך=4, רוחב=4).<br>
        מהו <strong>הגובה</strong> של תיבה זו?`,
        options: [
            "<span dir=\"rtl\">5 ס\"מ</span>",
            "<span dir=\"rtl\">4 ס\"מ</span>",
            "<span dir=\"rtl\">8 ס\"מ</span>",
            "<span dir=\"rtl\">10 ס\"מ</span>"
        ],
        correctAnswer: 0,
        hint: "בנו משוואת שטח פנים. יש לכם שני בסיסים ריבועיים (שטח כל אחד הוא 16), וארבע פאות צדדיות שהן מלבנים (שטח כל אחד הוא 4 כפול h). חברו הכל והשוו ל-112. פתרו את המשוואה לחילוץ הגובה.",
        solution_steps: [
            { 
                verbal_explanation: "בתיבה עם בסיס ריבועי, שני הבסיסים (תקרה ורצפה) זהים בשטחם. שטח בסיס אחד הוא ארבע כפול ארבע.", 
                math_expression: "<div dir='ltr'>2 &times; (4 &times; 4) = 32</div>" 
            },
            { 
                verbal_explanation: "ארבעת קירות הצד (המעטפת) זהים לחלוטין. שטח של קיר אחד הוא רוחב הבסיס (4) כפול הגובה הלא ידוע (h).", 
                math_expression: "<div dir='ltr'>4 &times; (4 &times; h) = 16h</div>" 
            },
            { 
                verbal_explanation: "סך הכל שטח הפנים הוא חיבור של הבסיסים והמעטפת. נשווה את זה לנתון בשאלה (112).", 
                math_expression: "<div dir='ltr'>32 + 16h = 112</div>" 
            },
            { 
                verbal_explanation: "נעביר את 32 לאגף ימין ונחסר אותו.", 
                math_expression: "<div dir='ltr'>16h = 112 - 32 = 80</div>" 
            },
            { 
                verbal_explanation: "נחלק בשש עשרה כדי למצוא את הגובה.", 
                math_expression: "<div dir='ltr'>h = 80 / 16 = 5</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">5 ס\"מ</span>"
    },

    // שאלה 48
    {
        topic: "bagrut_35372",
        subTopic: "שטח פנים ונפח",
        question_text: `<strong>ההשפעה של הכפלת כל הממדים על שטח פנים:</strong><br>
        קובייה אחת גדולה פי 2 בכל ממדיה (אורך, רוחב וגובה) מקובייה שנייה קטנה יותר.<br>
        בכמה גדול <strong>שטח הפנים</strong> של הקובייה הגדולה לעומת שטח הפנים של הקטנה?`,
        options: [
            "<span dir=\"rtl\">גדול פי 4</span>",
            "<span dir=\"rtl\">גדול פי 2</span>",
            "<span dir=\"rtl\">גדול פי 8</span>",
            "<span dir=\"rtl\">גדול פי 6</span>"
        ],
        correctAnswer: 0,
        hint: "שימו לב: שואלים על *שטח פנים*, לא על נפח! שטח הוא גודל דו-מימדי. מכיוון שמחשבים אותו על ידי הכפלת צלע בצלע, אם כל צלע הוכפלה ב-2, השטח מוכפל ב-2 כפול 2 (כלומר פי 4).",
        solution_steps: [
            { 
                verbal_explanation: "נמציא קובייה קטנה שאורך צלעה 1. שטח הפנים שלה מורכב משש פאות ששטח כל אחת מהן הוא 1 כפול 1.", 
                math_expression: "<div dir='ltr'>S<sub>1</sub> = 6 &times; 1<sup>2</sup> = 6</div>" 
            },
            { 
                verbal_explanation: "הקובייה הגדולה עברה הכפלה של כל הממדים, ולכן אורך צלעה הוא 2.", 
                math_expression: "<div dir='ltr'>a = 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את שטח הפנים של הקובייה הגדולה. יש לה 6 פאות ששטח כל אחת הוא 2 כפול 2 (שזה 4).", 
                math_expression: "<div dir='ltr'>S<sub>2</sub> = 6 &times; 2<sup>2</sup> = 6 &times; 4 = 24</div>" 
            },
            { 
                verbal_explanation: "השטח המקורי היה 6, והשטח החדש הוא 24. נבדוק פי כמה הוא גדל על ידי חלוקה.", 
                math_expression: "<div dir='ltr'>24 / 6 = 4</div>" 
            },
            { 
                verbal_explanation: "כלל מתמטי: כאשר מגדילים צורה פי X, שטח הפנים שלה יגדל פי X בריבוע.", 
                math_expression: "<div dir='ltr'>2<sup>2</sup> = 4</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">גדול פי 4</span>"
    },

    // שאלה 49
    {
        topic: "bagrut_35372",
        subTopic: "שטח פנים ונפח",
        question_text: `<strong>חישוב נפח של גוף חלול עם נקב מרובע:</strong><br>
        לפניכם קובייה שאורך מקצועה הוא 5 ס"מ.<br>
        קדחו בקובייה חור (תעלה חלולה) העובר מצידה העליון עד לצידה התחתון.<br>
        צורת החור היא תיבה בעלת בסיס של 1&times;1 ס"מ, שגובהה שווה לגובה הקובייה.<br>
        מהו הנפח של <strong>החומר הנותר</strong> בקובייה לאחר הקידוח?`,
        options: [
            "<span dir=\"rtl\">120 סמ\"ק</span>",
            "<span dir=\"rtl\">124 סמ\"ק</span>",
            "<span dir=\"rtl\">115 סמ\"ק</span>",
            "<span dir=\"rtl\">100 סמ\"ק</span>"
        ],
        correctAnswer: 0,
        hint: "חשבו את הנפח של הקובייה השלמה (לפני הקידוח). לאחר מכן, חשבו את הנפח של ה'אוויר' שנמצא בתוך התעלה (זו למעשה תיבה קטנה שמידותיה הן 1 כפול 1 כפול 5). החסירו את החלל מהקובייה השלמה.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב תחילה את הנפח של הקובייה השלמה והמלאה (5 בחזקת 3).", 
                math_expression: "<div dir='ltr'>V<sub>cube</sub> = 5 &times; 5 &times; 5 = 125</div>" 
            },
            { 
                verbal_explanation: "התעלה שנקדחה יוצרת חלל בצורת תיבה צרה וארוכה. נחשב את נפחה. מידותיה הן אורך ורוחב של 1, וגובה של 5 (שחוצה את כל הקובייה).", 
                math_expression: "<div dir='ltr'>V<sub>hole</sub> = 1 &times; 1 &times; 5 = 5</div>" 
            },
            { 
                verbal_explanation: "כדי לגלות כמה חומר נותר במבנה, נחסר את נפח האוויר (החור) מתוך נפח הקובייה הכולל.", 
                math_expression: "<div dir='ltr'>V = 125 - 5</div>" 
            },
            { 
                verbal_explanation: "התוצאה היא הנפח הפעיל של הגוף החדש.", 
                math_expression: "<div dir='ltr'>V = 120</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">120 סמ\"ק</span>"
    },

    // שאלה 50
    {
        topic: "bagrut_35372",
        subTopic: "שטח פנים ונפח",
        question_text: `<strong>יחס בין נפחים: פירמידה ותיבה עם שינויים:</strong><br>
        נתונה פירמידה בעלת בסיס ריבועי של 6&times;6 ס"מ וגובה של 10 ס"מ.<br>
        נתונה גם תיבה בעלת אותו בסיס ריבועי של 6&times;6 ס"מ, אך הגובה של התיבה הוא <strong>רק 5 ס"מ</strong> (חצי מגובה הפירמידה).<br>
        מהו ההפרש (בסמ"ק) בין נפח התיבה לנפח הפירמידה?`,
        options: [
            "<span dir=\"rtl\">60 סמ\"ק (התיבה גדולה יותר)</span>",
            "<span dir=\"rtl\">60 סמ\"ק (הפירמידה גדולה יותר)</span>",
            "<span dir=\"rtl\">120 סמ\"ק (התיבה גדולה יותר)</span>",
            "<span dir=\"rtl\">הנפחים שלהם שווים לגמרי</span>"
        ],
        correctAnswer: 0,
        hint: "אל תנחשו, פשוט חשבו כל אחד בנפרד! נפח התיבה: 6 כפול 6 כפול 5. נפח הפירמידה: (6 כפול 6 כפול 10) חלקי 3. לאחר שחישבתם, החסירו את הקטן מהגדול.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את הנפח של התיבה לפי הממדים הנתונים לה.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = 6 &times; 6 &times; 5</div>" 
            },
            { 
                verbal_explanation: "מאה ושמונים זהו הנפח של התיבה.", 
                math_expression: "<div dir='ltr'>V<sub>1</sub> = 180</div>" 
            },
            { 
                verbal_explanation: "נחשב כעת את נפח הפירמידה. הבסיס אותו בסיס, אך הגובה כפול ויש לחלק בשלוש.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = (6 &times; 6 &times; 10) / 3</div>" 
            },
            { 
                verbal_explanation: "שלוש מאות ושישים לחלק לשלוש נותן מאה ועשרים. זהו נפח הפירמידה.", 
                math_expression: "<div dir='ltr'>V<sub>2</sub> = 360 / 3 = 120</div>" 
            },
            { 
                verbal_explanation: "התיבה בעלת הנפח הגדול יותר (למרות שהיא נמוכה, היא לא שפיצית ולכן מכילה יותר). ההפרש ביניהן הוא החיסור של הקטנה מהגדולה.", 
                math_expression: "<div dir='ltr'>180 - 120 = 60</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">60 סמ\"ק (התיבה גדולה יותר)</span>"
    }
];