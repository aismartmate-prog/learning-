// ========================================================================
// שאלון 35371 | נושא: מודלים מעריכיים
// פעימה 1: 20 שאלות (הגדרת מודל מעריכי + שימוש בנוסחאות לבעיה נתונה)
// ========================================================================

const questionsDB = [

    // ---------------------------------------------------------
    // תת נושא 1: הגדרת מודל מעריכי (שאלות 1-10)
    // ---------------------------------------------------------

    // שאלה 1
    {
        topic: "bagrut_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: `<strong>מציאת מקדם גדילה מתוך אחוזים:</strong><br>
        אוכלוסיית תושבים בעיר מסוימת גדלה בכל שנה ב-15%.<br>
        כדי להשתמש בנוסחת הגדילה והדעיכה, עלינו למצוא את <strong>מקדם הגדילה</strong> (המכונה q).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 20,100 L 60,80 L 100,70 L 140,40 L 180,20" fill="none" stroke="#22c55e" stroke-width="3"/>
            <circle cx="20" cy="100" r="4" fill="#22c55e"/>
            <circle cx="60" cy="80" r="4" fill="#22c55e"/>
            <circle cx="100" cy="70" r="4" fill="#22c55e"/>
            <circle cx="140" cy="40" r="4" fill="#22c55e"/>
            <circle cx="180" cy="20" r="4" fill="#22c55e"/>
            <text x="75" y="45" font-family="Arial" font-size="16" font-weight="bold" fill="#15803d">+15%</text>
        </svg>
        </div>
        מהו המקדם הקבוע (q) שבו נכפיל את האוכלוסייה בכל שנה?`,
        options: [
            "1.15",
            "0.15",
            "15.00",
            "0.85"
        ],
        correctAnswer: 0,
        hint: "כדי להפוך אחוז גדילה למקדם עשרוני: מתחילים מ-100%, מוסיפים את אחוז הגדילה הנתון, ואת התוצאה כולה מחלקים ב-100.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את מקדם הגדילה, נתחיל מהבנת הכמות ההתחלתית. כמות התחלתית תמיד מיוצגת על ידי 100 אחוזים שלמים.", 
                math_expression: "<div dir='ltr'>100</div>" 
            },
            { 
                verbal_explanation: "מכיוון שאוכלוסיית התושבים גדלה, נוסיף את אחוז הגדילה הנתון בשאלה אל 100 האחוזים ההתחלתיים.", 
                math_expression: "<div dir='ltr'>100 + 15</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החיבור כדי למצוא את סך כל האחוזים שיהיו בעיר לאחר שנה אחת.", 
                math_expression: "<div dir='ltr'>115</div>" 
            },
            { 
                verbal_explanation: "כעת, עלינו להפוך את סך האחוזים שמצאנו למספר עשרוני. מספר זה נקרא 'מקדם הגדילה' ונסמן אותו באות q.", 
                math_expression: "<div dir='ltr'>q</div>" 
            },
            { 
                verbal_explanation: "כדי להפוך אחוזים למספר עשרוני המשמש לכפל, נרשום תרגיל חילוק של סך האחוזים במאה.", 
                math_expression: "<div dir='ltr'>q = 115 / 100</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החילוק כדי לקבל את המקדם הסופי.", 
                math_expression: "<div dir='ltr'>q = 1.15</div>" 
            }
        ],
        final_answer: "1.15"
    },

    // שאלה 2
    {
        topic: "bagrut_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: `<strong>מציאת מקדם דעיכה מתוך אחוזים:</strong><br>
        ערכה של מכונית חדשה יורד (דועך) בכל שנה ב-12%.<br>
        כדי לחשב את ערך המכונית בעתיד, יש למצוא את <strong>מקדם הדעיכה</strong> (q).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 20,20 L 60,40 L 100,60 L 140,85 L 180,105" fill="none" stroke="#ef4444" stroke-width="3"/>
            <circle cx="20" cy="20" r="4" fill="#ef4444"/>
            <circle cx="60" cy="40" r="4" fill="#ef4444"/>
            <circle cx="100" cy="60" r="4" fill="#ef4444"/>
            <circle cx="140" cy="85" r="4" fill="#ef4444"/>
            <circle cx="180" cy="105" r="4" fill="#ef4444"/>
            <text x="75" y="100" font-family="Arial" font-size="16" font-weight="bold" fill="#b91c1c">-12%</text>
        </svg>
        </div>
        מהו המקדם הקבוע (q) שבו נכפיל את ערך המכונית בכל שנה?`,
        options: [
            "0.88",
            "1.12",
            "0.12",
            "88.00"
        ],
        correctAnswer: 0,
        hint: "בדעיכה (ירידה של ערך), תמיד מתחילים מ-100% ומחסרים ממנו את האחוז הנתון. את התוצאה שנשארה מחלקים ב-100 כדי לקבל את המקדם העשרוני.",
        solution_steps: [
            { 
                verbal_explanation: "בבעיות של ירידת ערך (דעיכה), אנו תמיד מתחילים מהכמות המלאה ההתחלתית, המיוצגת על ידי 100 אחוזים.", 
                math_expression: "<div dir='ltr'>100</div>" 
            },
            { 
                verbal_explanation: "מכיוון שערך המכונית יורד, עלינו לחסר את אחוז הירידה הנתון (12) מתוך המאה.", 
                math_expression: "<div dir='ltr'>100 - 12</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החיסור כדי לגלות כמה אחוזים בדיוק נותרו מערך המכונית לאחר שנה אחת של שימוש.", 
                math_expression: "<div dir='ltr'>88</div>" 
            },
            { 
                verbal_explanation: "כדי להשתמש בנתון זה בתוך נוסחה, עלינו להפוך את האחוזים שנותרו למספר עשרוני. זהו מקדם הדעיכה (q).", 
                math_expression: "<div dir='ltr'>q</div>" 
            },
            { 
                verbal_explanation: "נרשום תרגיל חילוק שבו אנו מחלקים את האחוזים שנותרו במאה.", 
                math_expression: "<div dir='ltr'>q = 88 / 100</div>" 
            },
            { 
                verbal_explanation: "נשלים את פעולת החילוק. שימו לב שמקדם דעיכה תמיד יהיה קטן מאחת.", 
                math_expression: "<div dir='ltr'>q = 0.88</div>" 
            }
        ],
        final_answer: "0.88"
    },

    // שאלה 3
    {
        topic: "bagrut_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: `<strong>מעבר ממקדם גדילה לאחוז:</strong><br>
        התקבלה נוסחה המתארת צמיחה של חיידקים. ידוע כי המקדם (q) בנוסחה הוא 1.45.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="50" cy="60" r="10" fill="rgba(59,130,246,0.5)" stroke="#3b82f6" stroke-width="2"/>
            <path d="M 70,60 L 130,60 M 120,50 L 130,60 L 120,70" fill="none" stroke="#0f172a" stroke-width="2"/>
            <circle cx="150" cy="30" r="10" fill="rgba(59,130,246,0.5)" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="150" cy="60" r="10" fill="rgba(59,130,246,0.5)" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="150" cy="90" r="10" fill="rgba(59,130,246,0.5)" stroke="#3b82f6" stroke-width="2"/>
            <text x="100" y="45" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">q = 1.45</text>
        </svg>
        </div>
        בכמה אחוזים גדלה אוכלוסיית החיידקים בכל שעה?`,
        options: [
            "45%",
            "145%",
            "1.45%",
            "55%"
        ],
        correctAnswer: 0,
        hint: "כדי לחזור ממקדם עשרוני לאחוזים, מבצעים את הפעולה ההפוכה: קודם כופלים את המקדם ב-100, ולאחר מכן מחסרים 100 כדי לראות מהי התוספת האמיתית.",
        solution_steps: [
            { 
                verbal_explanation: "נתון לנו מקדם הגדילה כפי שהוא, בתור מספר עשרוני. מטרתנו לחלץ ממנו את אחוז הגדילה ההתחלתי.", 
                math_expression: "<div dir='ltr'>q = 1.45</div>" 
            },
            { 
                verbal_explanation: "השלב הראשון בהפיכת מספר עשרוני לאחוזים הוא הכפלת המספר במאה.", 
                math_expression: "<div dir='ltr'>1.45 &times; 100</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת הכפל כדי לגלות כמה אחוזים מהווה הכמות החדשה ביחס לכמות המקורית.", 
                math_expression: "<div dir='ltr'>145</div>" 
            },
            { 
                verbal_explanation: "המספר שקיבלנו כולל בתוכו גם את הכמות ההתחלתית (שהיא תמיד מאה אחוזים) וגם את התוספת. נרשום תרגיל חיסור כדי להוריד את המאה.", 
                math_expression: "<div dir='ltr'>145 - 100</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור לקבלת אחוז הגדילה הנקי המתווסף בכל שעה.", 
                math_expression: "<div dir='ltr'>45</div>" 
            }
        ],
        final_answer: "45%"
    },

    // שאלה 4
    {
        topic: "bagrut_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: `<strong>מעבר ממקדם דעיכה לאחוז:</strong><br>
        התקבלה נוסחה המתארת את כמות החומר הפעיל בתרופה לאורך זמן.<br>
        בנוסחה זו, המקדם (q) הוא 0.93.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="40" y="30" width="120" height="60" rx="30" fill="rgba(14,165,233,0.2)" stroke="#0ea5e9" stroke-width="2"/>
            <line x1="100" y1="30" x2="100" y2="90" stroke="#0ea5e9" stroke-width="2"/>
            <text x="100" y="65" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">q = 0.93</text>
        </svg>
        </div>
        בכמה אחוזים פוחתת כמות החומר בכל שעה?`,
        options: [
            "7%",
            "93%",
            "0.07%",
            "1.07%"
        ],
        correctAnswer: 0,
        hint: "הכפילו את המקדם ב-100 כדי לקבל את האחוז שנותר. כדי לדעת כמה 'נעלם', חסרו מ-100 את המספר שקיבלתם.",
        solution_steps: [
            { 
                verbal_explanation: "בשאלה זו אנו מקבלים מקדם דעיכה. עלינו לגלות מהו אחוז הירידה שהוא מייצג.", 
                math_expression: "<div dir='ltr'>q = 0.93</div>" 
            },
            { 
                verbal_explanation: "תחילה, נהפוך את המספר העשרוני לאחוזים על ידי הכפלה במאה.", 
                math_expression: "<div dir='ltr'>0.93 &times; 100</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל. המספר שנקבל מייצג את אחוז החומר שנותר בגוף ולא התפרק.", 
                math_expression: "<div dir='ltr'>93</div>" 
            },
            { 
                verbal_explanation: "כדי לגלות כמה חומר אבד (אחוז הדעיכה), נרשום תרגיל חיסור של האחוז הנותר מתוך השלם (100).", 
                math_expression: "<div dir='ltr'>100 - 93</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור הפשוט כדי לקבל את האחוז המדויק שפוחת מהחומר בכל שעה.", 
                math_expression: "<div dir='ltr'>7</div>" 
            }
        ],
        final_answer: "7%"
    },

    // שאלה 5
    {
        topic: "bagrut_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: `<strong>מציאת המקדם מתוך נתונים כמותיים (גדילה):</strong><br>
        ביום ראשון נספרו 400 כניסות לאתר אינטרנט.<br>
        ביום שני (לאחר יום אחד בדיוק), נספרו 460 כניסות לאתר.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <text x="10" y="40" font-family="Arial" font-size="12">Day 1</text>
            <text x="10" y="65" font-family="Arial" font-size="18" font-weight="bold">400</text>
            <path d="M 70,55 L 110,55 M 100,45 L 110,55 L 100,65" fill="none" stroke="#0f172a" stroke-width="2"/>
            <text x="130" y="40" font-family="Arial" font-size="12">Day 2</text>
            <text x="130" y="65" font-family="Arial" font-size="18" font-weight="bold" fill="#22c55e">460</text>
        </svg>
        </div>
        מהו מקדם הגדילה היומי (q) של הכניסות לאתר?`,
        options: [
            "1.15",
            "1.06",
            "60",
            "1.60"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא את המקדם מתוך שתי כמויות בזמנים עוקבים (יום אחרי יום), פשוט רשמו תרגיל חילוק שבו הכמות החדשה מחולקת בכמות הישנה (ההתחלתית).",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא מקדם גדילה כאשר נתונות שתי כמויות בזמנים עוקבים, מחלקים את הכמות החדשה בכמות הישנה.", 
                math_expression: "<div dir='ltr'>M = 460</div>" 
            },
            { 
                verbal_explanation: "נרשום את הכמות ההתחלתית (הישנה).", 
                math_expression: "<div dir='ltr'>M<sub>0</sub> = 400</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים לתוך תרגיל חילוק של הכמות החדשה חלקי הכמות הישנה.", 
                math_expression: "<div dir='ltr'>q = 460 / 400</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החילוק במחשבון כדי לקבל את המספר העשרוני שהוא המקדם.", 
                math_expression: "<div dir='ltr'>q = 1.15</div>" 
            }
        ],
        final_answer: "1.15"
    },

    // שאלה 6
    {
        topic: "bagrut_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: `<strong>מציאת המקדם מתוך נתונים כמותיים (דעיכה):</strong><br>
        בבריכת דגים היו בתחילת השבוע 500 דגים.<br>
        שבוע לאחר מכן, נותרו בבריכה רק 410 דגים עקב מחלה.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <text x="10" y="40" font-family="Arial" font-size="12">Week 1</text>
            <text x="10" y="65" font-family="Arial" font-size="18" font-weight="bold">500</text>
            <path d="M 70,55 L 110,55 M 100,45 L 110,55 L 100,65" fill="none" stroke="#0f172a" stroke-width="2"/>
            <text x="130" y="40" font-family="Arial" font-size="12">Week 2</text>
            <text x="130" y="65" font-family="Arial" font-size="18" font-weight="bold" fill="#ef4444">410</text>
        </svg>
        </div>
        מהו מקדם הדעיכה השבועי (q)?`,
        options: [
            "0.82",
            "1.18",
            "90",
            "0.90"
        ],
        correctAnswer: 0,
        hint: "כמו בגדילה, חלקו תמיד את הכמות המאוחרת (החדשה) בכמות המוקדמת (ההתחלתית). בגלל שזו דעיכה, התוצאה חייבת לצאת קטנה מ-1.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את המקדם, ניקח את הכמות בסוף השבוע (המאוחרת).", 
                math_expression: "<div dir='ltr'>M = 410</div>" 
            },
            { 
                verbal_explanation: "נרשום את הכמות שהייתה בתחילת השבוע.", 
                math_expression: "<div dir='ltr'>M<sub>0</sub> = 500</div>" 
            },
            { 
                verbal_explanation: "נבנה תרגיל שבו הכמות החדשה מחולקת בכמות הישנה.", 
                math_expression: "<div dir='ltr'>q = 410 / 500</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק. תוצאה קטנה מ-1 מאשרת שאכן מדובר בירידה.", 
                math_expression: "<div dir='ltr'>q = 0.82</div>" 
            }
        ],
        final_answer: "0.82"
    },

    // שאלה 7
    {
        topic: "bagrut_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: `<strong>אחוזים זעירים לגדילה:</strong><br>
        סכום כסף בתוכנית חיסכון נושא ריבית שנתית קטנה של 2.5%.<br>
        הסכום ההתחלתי שהופקד בתוכנית הוא 3,000 שקלים.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="60" r="40" fill="rgba(234,179,8,0.2)" stroke="#eab308" stroke-width="2"/>
            <text x="100" y="65" font-family="Arial" font-size="20" font-weight="bold" fill="#ca8a04" text-anchor="middle">&#8362;</text>
            <text x="100" y="25" font-family="Arial" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">+2.5%</text>
        </svg>
        </div>
        איזו מהמשוואות הבאות מתארת נכון את סכום הכסף שייצבר לאחר t שנים?`,
        options: [
            "M = 3000 &times; 1.025<sup>t</sup>",
            "M = 3000 &times; 1.25<sup>t</sup>",
            "M = 3000 &times; 2.5<sup>t</sup>",
            "M = 1.025 &times; 3000<sup>t</sup>"
        ],
        correctAnswer: 0,
        hint: "היזהרו עם אחוזים שקטנים מ-10! כדי להפוך 2.5% למקדם, הוסיפו אותו ל-100 (תקבלו 102.5) ואז חלקו ב-100. שימו לב היטב היכן נופלת הנקודה העשרונית.",
        solution_steps: [
            { 
                verbal_explanation: "הכמות ההתחלתית היא תמיד מאה אחוזים. נוסיף לה את אחוז הריבית הנתון.", 
                math_expression: "<div dir='ltr'>100 + 2.5 = 102.5</div>" 
            },
            { 
                verbal_explanation: "נחלק את סך האחוזים ב-100 כדי לקבל את מקדם הגדילה العשרוני.", 
                math_expression: "<div dir='ltr'>q = 102.5 / 100</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק בזהירות כדי לא לטעות במיקום הנקודה העשרונית.", 
                math_expression: "<div dir='ltr'>q = 1.025</div>" 
            },
            { 
                verbal_explanation: "נזהה את הסכום ההתחלתי שניתן בשאלה.", 
                math_expression: "<div dir='ltr'>M<sub>0</sub> = 3000</div>" 
            },
            { 
                verbal_explanation: "נרכיב את המשוואה: כמות התחלתית כפול המקדם בחזקת הזמן.", 
                math_expression: "<div dir='ltr'>M = 3000 &times; 1.025<sup>t</sup></div>" 
            }
        ],
        final_answer: "M = 3000 &times; 1.025<sup>t</sup>"
    },

    // שאלה 8
    {
        topic: "bagrut_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: `<strong>אחוזים זעירים לדעיכה:</strong><br>
        כמות של חומר כימי במעבדה פוחתת בכל יום בשיעור של 4.5%.<br>
        הכמות ההתחלתית שנמדדה במעבדה הייתה 500 גרם.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 80,90 L 80,40 C 80,30 120,30 120,40 L 120,90 Z" fill="rgba(14,165,233,0.2)" stroke="#0ea5e9" stroke-width="2"/>
            <text x="100" y="70" font-family="Arial" font-size="14" font-weight="bold" fill="#0284c7" text-anchor="middle">-4.5%</text>
        </svg>
        </div>
        איזו משוואה מתארת נכון את תהליך הפחת של כמות החומר (M) לאחר t ימים?`,
        options: [
            "M = 500 &times; 0.955<sup>t</sup>",
            "M = 500 &times; 0.55<sup>t</sup>",
            "M = 500 &times; 1.045<sup>t</sup>",
            "M = 500 &times; 0.965<sup>t</sup>"
        ],
        correctAnswer: 0,
        hint: "מכיוון שהחומר פוחת, רשמו חיסור של 4.5 מתוך 100. את התוצאה חלקו ב-100 כדי למצוא את המקדם, ואז הציבו בתבנית המשוואה.",
        solution_steps: [
            { 
                verbal_explanation: "תהליך דעיכה אומר שעלינו לחסר את אחוז הפחת הנתון מתוך מאה אחוזים שלמים.", 
                math_expression: "<div dir='ltr'>100 - 4.5 = 95.5</div>" 
            },
            { 
                verbal_explanation: "נהפוך את האחוזים הנותרים למספר עשרוני (מקדם q) על ידי חלוקה במאה.", 
                math_expression: "<div dir='ltr'>q = 95.5 / 100</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק לקבלת המקדם.", 
                math_expression: "<div dir='ltr'>q = 0.955</div>" 
            },
            { 
                verbal_explanation: "נזהה את הכמות ההתחלתית של החומר.", 
                math_expression: "<div dir='ltr'>M<sub>0</sub> = 500</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בתבנית הנוסחה המעריכית.", 
                math_expression: "<div dir='ltr'>M = 500 &times; 0.955<sup>t</sup></div>" 
            }
        ],
        final_answer: "M = 500 &times; 0.955<sup>t</sup>"
    },

    // שאלה 9
    {
        topic: "bagrut_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: `<strong>זיהוי הכמות והאחוז מתוך נוסחה קיימת:</strong><br>
        תלמיד קיבל במבחן את הנוסחה הבאה המתארת כמות של חומר לאורך זמן מסוים (בגרמים):<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin: 10px 0;">M = 850 &times; 1.06<sup>t</sup></div>
        א. לפי הנוסחה, מהי הכמות ההתחלתית של החומר (בזמן אפס)?<br>
        ב. האם החומר גדל או דועך, ובכמה אחוזים בדיוק הוא עושה זאת בכל יחידת זמן?`,
        options: [
            "א. 850 גרם | ב. גדל ב-6%",
            "א. 1.06 גרם | ב. גדל ב-850%",
            "א. 850 גרם | ב. דועך ב-6%",
            "א. 850 גרם | ב. גדל ב-106%"
        ],
        correctAnswer: 0,
        hint: "בתבנית הנוסחה, המספר החופשי הראשון הוא תמיד הכמות ההתחלתית. המספר המועלה בחזקה הוא המקדם. אם המקדם עולה על 1 זוהי גדילה. האחוז הוא מה שיש מעבר למספר 1.",
        solution_steps: [
            { 
                verbal_explanation: "נתונה לנו נוסחה וברצוננו לזהות את חלקיה.", 
                math_expression: "<div dir='ltr'>M = 850 &times; 1.06<sup>t</sup></div>" 
            },
            { 
                verbal_explanation: "המספר העומד לבדו בתחילה הוא תמיד הכמות ההתחלתית של התהליך.", 
                math_expression: "<div dir='ltr'>M<sub>0</sub> = 850</div>" 
            },
            { 
                verbal_explanation: "המספר המועלה בחזקת הזמן הוא מקדם השינוי (q).", 
                math_expression: "<div dir='ltr'>q = 1.06</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהמקדם גדול מ-1, זהו תהליך של גדילה. כדי למצוא את אחוז הגדילה, נכפול את המקדם ב-100.", 
                math_expression: "<div dir='ltr'>1.06 &times; 100 = 106</div>" 
            },
            { 
                verbal_explanation: "נחסר 100 אחוזים התחלתיים, ונגלה את תוספת האחוזים נטו.", 
                math_expression: "<div dir='ltr'>106 - 100 = 6</div>" 
            }
        ],
        final_answer: "א. 850 | ב. גדל ב-6%"
    },

    // שאלה 10
    {
        topic: "bagrut_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: `<strong>הבנת המשמעות של כפולה מלאה במקום אחוזים:</strong><br>
        חוקר צופה באוכלוסיית תאים שמתחלקת בצלחת פטרי במעבדה.<br>
        הוא מגלה שהכמות של התאים <strong>משלשת את עצמה (כלומר מוכפלת פי 3)</strong> בכל שעה שעוברת.<br>
        הכמות ההתחלתית של התאים בצלחת היא 50 תאים.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="60" r="40" fill="none" stroke="#0f172a" stroke-width="2"/>
            <circle cx="80" cy="50" r="4" fill="#3b82f6"/>
            <circle cx="120" cy="50" r="4" fill="#3b82f6"/>
            <circle cx="100" cy="80" r="4" fill="#3b82f6"/>
            <text x="100" y="30" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">&times; 3</text>
        </svg>
        </div>
        מה תהיה משוואת המודל המעריכי המתאימה לתיאור כמות התאים (M) לאחר t שעות?`,
        options: [
            "M = 50 &times; 3<sup>t</sup>",
            "M = 3 &times; 50<sup>t</sup>",
            "M = 50 &times; 1.3<sup>t</sup>",
            "M = 50 &times; 0.3<sup>t</sup>"
        ],
        correctAnswer: 0,
        hint: "כאשר כתוב בבעיה 'מוכפל פי משהו' (כמו פי 2 או פי 3), אין שום צורך באחוזים! המספר הזה הוא המקדם עצמו. הציבו אותו ישירות בנוסחה יחד עם הכמות ההתחלתית.",
        solution_steps: [
            { 
                verbal_explanation: "כאשר קצב השינוי נתון מראש ככפולה קבועה (פי 3), המספר הזה הוא המקדם. אין צורך בחישובי אחוזים.", 
                math_expression: "<div dir='ltr'>q = 3</div>" 
            },
            { 
                verbal_explanation: "נזהה את הכמות ההתחלתית של התאים שהיו בתחילת הניסוי.", 
                math_expression: "<div dir='ltr'>M<sub>0</sub> = 50</div>" 
            },
            { 
                verbal_explanation: "נציב את שני הנתונים שלנו לתוך התבנית הכללית של מודל מעריכי.", 
                math_expression: "<div dir='ltr'>M = 50 &times; 3<sup>t</sup></div>" 
            }
        ],
        final_answer: "M = 50 &times; 3<sup>t</sup>"
    },

    // ---------------------------------------------------------
    // תת נושא 2: שימוש בנוסחאות מעריכיות לבעיה נתונה (שאלות 11-20)
    // ---------------------------------------------------------

    // שאלה 11
    {
        topic: "bagrut_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: `<strong>הצבה בסיסית - חישוב עתידי (גדילה):</strong><br>
        שטח מיוער גדל בכל שנה ב-5%.<br>
        כיום יש ביער 2,000 עצים.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <polygon points="50,90 30,50 70,50" fill="#22c55e"/>
            <rect x="45" y="90" width="10" height="20" fill="#78350f"/>
            <polygon points="150,90 120,30 180,30" fill="#22c55e"/>
            <rect x="145" y="90" width="10" height="20" fill="#78350f"/>
            <text x="100" y="50" font-family="Arial" font-size="16" font-weight="bold" fill="#000000" text-anchor="middle">&rarr;</text>
            <text x="100" y="80" font-family="Arial" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">+5%</text>
        </svg>
        </div>
        כמה עצים יהיו ביער בעוד 4 שנים בדיוק?<br>
        (עגלו את התשובה למספר שלם).`,
        options: [
            "2431",
            "2400",
            "2500",
            "2100"
        ],
        correctAnswer: 0,
        hint: "מצאו את מקדם הגדילה (הוסיפו ל-100 וחלקו ב-100). הציבו את הכמות ההתחלתית, את המקדם, ואת הזמן שחלף (4) במשוואת הגדילה.",
        solution_steps: [
            { 
                verbal_explanation: "נתחיל במציאת המקדם הקבוע (מקדם הגדילה). נוסיף 5 אחוזים ל-100 אחוזים שלמים.", 
                math_expression: "<div dir='ltr'>100 + 5 = 105</div>" 
            },
            { 
                verbal_explanation: "נחלק את סך האחוזים במאה כדי להפוך אותם לשבר עשרוני שבו נשתמש ככופל.", 
                math_expression: "<div dir='ltr'>q = 105 / 100 = 1.05</div>" 
            },
            { 
                verbal_explanation: "נרכיב את התרגיל עם הכמות ההתחלתית, המקדם, והזמן (4 שנים).", 
                math_expression: "<div dir='ltr'>M = 2000 &times; 1.05<sup>4</sup></div>" 
            },
            { 
                verbal_explanation: "קודם כל נחשב את החזקה (1.05 כפול עצמו 4 פעמים).", 
                math_expression: "<div dir='ltr'>1.05<sup>4</sup> = 1.2155</div>" 
            },
            { 
                verbal_explanation: "נרשום את התרגיל מחדש עם התוצאה שחישבנו ונבצע את הכפל.", 
                math_expression: "<div dir='ltr'>M = 2000 &times; 1.2155 = 2431.01</div>" 
            },
            { 
                verbal_explanation: "כיוון שמדובר בעצים, נעגל את התוצאה למספר שלם.", 
                math_expression: "<div dir='ltr'>2431</div>" 
            }
        ],
        final_answer: "2431"
    },

    // שאלה 12
    {
        topic: "bagrut_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: `<strong>הצבה בסיסית - חישוב עתידי (דעיכה):</strong><br>
        משקלו של חומר כימי פוחת בכל יום ב-10%.<br>
        המשקל ההתחלתי של החומר היה 300 גרם.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="50" y="40" width="100" height="40" fill="rgba(148,163,184,0.2)" stroke="#64748b" stroke-width="2"/>
            <rect x="50" y="40" width="40" height="40" fill="#64748b"/>
            <text x="100" y="65" font-family="Arial" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">300</text>
        </svg>
        </div>
        מה יהיה משקל החומר בעוד 3 ימים?`,
        options: [
            "218.7 גרם",
            "210.0 גרם",
            "270.0 גרם",
            "196.8 גרם"
        ],
        correctAnswer: 0,
        hint: "מכיוון שהחומר פוחת, מצאו את מקדם הדעיכה (100 פחות 10, חלקי 100). הציבו את הכמות ההתחלתית והעלו את המקדם שמצאתם בחזקת 3.",
        solution_steps: [
            { 
                verbal_explanation: "מדובר בירידה, לכן נחסר את 10 אחוזי הפחת מתוך 100 אחוזים שלמים.", 
                math_expression: "<div dir='ltr'>100 - 10 = 90</div>" 
            },
            { 
                verbal_explanation: "נחלק את 90 האחוזים במאה כדי לקבל את מקדם הדעיכה למשוואה.", 
                math_expression: "<div dir='ltr'>q = 90 / 100 = 0.90</div>" 
            },
            { 
                verbal_explanation: "נציב את המשקל ההתחלתי והזמן בתוך משוואת המודל המעריכי.", 
                math_expression: "<div dir='ltr'>M = 300 &times; 0.90<sup>3</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב במחשבון את התוצאה של המקדם מועלה בחזקת שלוש.", 
                math_expression: "<div dir='ltr'>0.90<sup>3</sup> = 0.729</div>" 
            },
            { 
                verbal_explanation: "נרשום את התרגיל עם השבר העשרוני ונבצע את ההכפלה למציאת המשקל הנותר.", 
                math_expression: "<div dir='ltr'>M = 300 &times; 0.729 = 218.7</div>" 
            }
        ],
        final_answer: "218.7"
    },

    // שאלה 13
    {
        topic: "bagrut_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: `<strong>מציאת כמות התחלתית (פעולה הפוכה) - גדילה:</strong><br>
        מחירו של אוסף בולים נדיר עולה בכל שנה ב-8%.<br>
        היום, לאחר שנתיים של עליות ערך, ערכו עומד על 5,832 שקלים.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="70" y="30" width="60" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
            <text x="100" y="65" font-family="Arial" font-size="20" font-weight="bold" fill="#000000" text-anchor="middle">&#8362;</text>
            <text x="100" y="110" font-family="Arial" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">5,832</text>
        </svg>
        </div>
        מה היה מחירו המקורי של האוסף (לפני שנתיים)?`,
        options: [
            "5000 שקלים",
            "4800 שקלים",
            "5200 שקלים",
            "5400 שקלים"
        ],
        correctAnswer: 0,
        hint: "בנו את המשוואה כשהמקור (M0) נשאר כנעלם. חשבו את המקדם בחזקת 2, וחלקו את הערך הידוע והסופי (5832) בתוצאה שקיבלתם כדי לבודד את הנעלם.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את מקדם הגדילה על ידי הוספת אחוז העלייה ל-100 וחלוקה במאה.", 
                math_expression: "<div dir='ltr'>q = ( 100 + 8 ) / 100 = 108 / 100 = 1.08</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בנוסחה, כאשר הכמות ההתחלתית מסומנת כנעלם.", 
                math_expression: "<div dir='ltr'>5832 = M<sub>0</sub> &times; 1.08<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את הריבוע של המקדם.", 
                math_expression: "<div dir='ltr'>1.08<sup>2</sup> = 1.1664</div>" 
            },
            { 
                verbal_explanation: "נכתוב את המשוואה בצורה פשוטה יותר.", 
                math_expression: "<div dir='ltr'>5832 = M<sub>0</sub> &times; 1.1664</div>" 
            },
            { 
                verbal_explanation: "כדי לבודד את הכמות ההתחלתית, נחלק את המשוואה במספר הכופל את הנעלם.", 
                math_expression: "<div dir='ltr'>M<sub>0</sub> = 5832 / 1.1664</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק לקבלת המחיר המקורי של האוסף.", 
                math_expression: "<div dir='ltr'>M<sub>0</sub> = 5000</div>" 
            }
        ],
        final_answer: "5000"
    },

    // שאלה 14
    {
        topic: "bagrut_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: `<strong>מציאת כמות התחלתית (פעולה הפוכה) - דעיכה:</strong><br>
        סוללה של טלפון סלולרי מאבדת 5% מקיבולת ההטענה המקורית שלה בכל שנת שימוש.<br>
        לאחר 4 שנים, הקיבולת של הסוללה ירדה ועומדת על 3,258 מיליאמפר.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="60" y="40" width="80" height="40" rx="5" fill="none" stroke="#000000" stroke-width="3"/>
            <rect x="140" y="50" width="5" height="20" fill="#000000"/>
            <rect x="65" y="45" width="40" height="30" rx="3" fill="#ef4444"/>
            <text x="100" y="30" font-family="Arial" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">3258</text>
        </svg>
        </div>
        מה הייתה קיבולת הסוללה ההתחלתית, ביום שהטלפון היה חדש?`,
        options: [
            "4000",
            "3800",
            "4500",
            "3500"
        ],
        correctAnswer: 0,
        hint: "הציבו את כל הנתונים, העלו את המקדם (0.95) בחזקת 4, וחלקו את הכמות שנותרה בתוצאה שקיבלתם כדי למצוא את המקור (הכמות ההתחלתית).",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את מקדם הדעיכה. נחסר את 5 אחוזי הירידה מ-100 ונחלק במאה.", 
                math_expression: "<div dir='ltr'>q = ( 100 - 5 ) / 100 = 95 / 100 = 0.95</div>" 
            },
            { 
                verbal_explanation: "נרכיב משוואה. הקיבולת הנוכחית שווה לקיבולת ההתחלתית שאנו מחפשים כפול המקדם בחזקת 4 שנים.", 
                math_expression: "<div dir='ltr'>3258 = M<sub>0</sub> &times; 0.95<sup>4</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב תחילה את ערך החזקה במחשבון.", 
                math_expression: "<div dir='ltr'>0.95<sup>4</sup> = 0.8145</div>" 
            },
            { 
                verbal_explanation: "נרשום את המשוואה בצורה מסודרת.", 
                math_expression: "<div dir='ltr'>3258 = M<sub>0</sub> &times; 0.8145</div>" 
            },
            { 
                verbal_explanation: "נבודד את הקיבולת ההתחלתית על ידי חלוקת הקיבולת הנוכחית בערך שהעלנו בחזקה.", 
                math_expression: "<div dir='ltr'>M<sub>0</sub> = 3258 / 0.8145</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק הסופי.", 
                math_expression: "<div dir='ltr'>M<sub>0</sub> = 4000</div>" 
            }
        ],
        final_answer: "4000"
    },

    // שאלה 15
    {
        topic: "bagrut_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: `<strong>הצבה עם חזקות של חצאי זמנים:</strong><br>
        הנוסחה הבאה מתארת את סכום הכסף (y) בתוכנית חיסכון לאחר t שנים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin: 10px 0;">y = 5000 &times; 1.05<sup>t</sup></div>
        הלקוח מעוניין למשוך את הכסף מוקדם, לאחר שנתיים וחצי (t = 2.5).<br>
        מה יהיה סכום הכסף שלו באותה נקודת זמן?`,
        options: [
            "5648.5 שקלים",
            "5500.0 שקלים",
            "5250.0 שקלים",
            "6000.5 שקלים"
        ],
        correctAnswer: 0,
        hint: "הנוסחה עובדת בדיוק אותו הדבר גם עבור מספרים עשרוניים. פשוט הציבו 2.5 בנוסחה הקיימת במקום t, והשתמשו במחשבון לחישוב החזקה.",
        solution_steps: [
            { 
                verbal_explanation: "הזמן שלנו הוא שנתיים וחצי. מודל מעריכי עובד גם על שברים.", 
                math_expression: "<div dir='ltr'>t = 2.5</div>" 
            },
            { 
                verbal_explanation: "נציב את הזמן הנתון ישירות במשוואה המוכנה שלנו במקום המשתנה של הזמן.", 
                math_expression: "<div dir='ltr'>y = 5000 &times; 1.05<sup>2.5</sup></div>" 
            },
            { 
                verbal_explanation: "נשתמש במחשבון כדי למצוא את הערך של המקדם בחזקת שתיים וחצי. נשמור כמה ספרות כדי לדייק.", 
                math_expression: "<div dir='ltr'>1.05<sup>2.5</sup> = 1.1297</div>" 
            },
            { 
                verbal_explanation: "נכתוב את התרגיל המעודכן ונכפול את התוצאה בסכום ההתחלתי לקבלת סכום הכסף שייצבר.", 
                math_expression: "<div dir='ltr'>y = 5000 &times; 1.1297 = 5648.5</div>" 
            }
        ],
        final_answer: "5648.5"
    },

    // שאלה 16
    {
        topic: "bagrut_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: `<strong>מציאת מקדם בעזרת שורש ריבועי (גדילה):</strong><br>
        הכנסותיה של חנות אינטרנטית גדלות באחוז קבוע בכל חודש.<br>
        בחודש הראשון היו ההכנסות 10,000 שקלים.<br>
        כעבור <strong>חודשיים</strong>, הגיעו ההכנסות ל-12,100 שקלים.<br>
        מהו מקדם הגדילה החודשי של ההכנסות?`,
        options: [
            "1.10",
            "1.21",
            "1.05",
            "1.20"
        ],
        correctAnswer: 0,
        hint: "הציבו בנוסחה את ההכנסה ההתחלתית (10,000), ההכנסה הסופית (12,100), והזמן (2 חודשים). בודדו את המקדם בריבוע על ידי חלוקה, ואז הוציאו שורש ריבועי.",
        solution_steps: [
            { 
                verbal_explanation: "נרכיב משוואה שבה המקדם q הוא הנעלם. הזמן הוא חודשיים, לכן מעריך החזקה יהיה 2.", 
                math_expression: "<div dir='ltr'>12100 = 10000 &times; q<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחלק את ההכנסה המאוחרת בהכנסה ההתחלתית כדי לבודד את המקדם בריבוע.", 
                math_expression: "<div dir='ltr'>q<sup>2</sup> = 12100 / 10000</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק הפשוט.", 
                math_expression: "<div dir='ltr'>q<sup>2</sup> = 1.21</div>" 
            },
            { 
                verbal_explanation: "כדי להיפטר מהריבוע ולמצוא את המקדם הנקי, נוציא שורש ריבועי.", 
                math_expression: "<div dir='ltr'>q = &radic;1.21</div>" 
            },
            { 
                verbal_explanation: "התוצאה היא המקדם החודשי שבו ההכנסות מוכפלות.", 
                math_expression: "<div dir='ltr'>q = 1.10</div>" 
            }
        ],
        final_answer: "1.10"
    },

    // שאלה 17
    {
        topic: "bagrut_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: `<strong>מציאת מקדם בעזרת שורש שלישי (דעיכה):</strong><br>
        עיר מסוימת סובלת מהגירה שלילית, ואוכלוסייתה פוחתת באחוז קבוע בכל שנה.<br>
        בתחילת המדידה היו בעיר 50,000 תושבים.<br>
        לאחר <strong>שלוש שנים</strong> בדיוק, נותרו בעיר 36,450 תושבים.<br>
        מהו המקדם השנתי שמתאר את דעיכת האוכלוסייה?`,
        options: [
            "0.90",
            "0.80",
            "0.85",
            "0.72"
        ],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחה עם זמן 3. חלצו את המקדם בשלישית על ידי חלוקת המספרים. לסיום, הפעילו שורש שלישי במחשבון.",
        solution_steps: [
            { 
                verbal_explanation: "נרכיב את משוואת הדעיכה שבה המקדם הוא הנעלם המרכזי. הזמן שעבר הוא 3 שנים.", 
                math_expression: "<div dir='ltr'>36450 = 50000 &times; q<sup>3</sup></div>" 
            },
            { 
                verbal_explanation: "נחלק את המשוואה בכמות ההתחלתית כדי לבודד את החזקה השלישית.", 
                math_expression: "<div dir='ltr'>q<sup>3</sup> = 36450 / 50000</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החילוק.", 
                math_expression: "<div dir='ltr'>q<sup>3</sup> = 0.729</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את המקדם הבודד, נוציא שורש שלישי במחשבון מתוך התוצאה שקיבלנו.", 
                math_expression: "<div dir='ltr'>q = <sup>3</sup>&radic;0.729</div>" 
            },
            { 
                verbal_explanation: "נקבל את המקדם המדויק.", 
                math_expression: "<div dir='ltr'>q = 0.90</div>" 
            }
        ],
        final_answer: "0.90"
    },

    // שאלה 18
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>שימוש בזמן שלילי למציאת ערך בעבר (גדילה):</strong><br>
        ביום שלישי נמדדו 1,440 חיידקים בצלחת מעבדה.<br>
        ידוע כי האוכלוסייה גדלה בקצב קבוע של 20% בכל יום.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="60" r="30" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
            <text x="100" y="65" font-family="Arial" font-size="14" font-weight="bold" fill="#000000" text-anchor="middle">1,440</text>
            <path d="M 60,60 L 20,60 M 30,50 L 20,60 L 30,70" fill="none" stroke="#0f172a" stroke-width="2"/>
            <text x="40" y="45" font-family="Arial" font-size="12" text-anchor="middle">-2</text>
        </svg>
        </div>
        כמה חיידקים היו בצלחת <strong>ביום ראשון</strong> (כלומר יומיים קודם)?`,
        options: [
            "1000",
            "1200",
            "960",
            "1150"
        ],
        correctAnswer: 0,
        hint: "כדי ללכת אחורה בזמן, אפשר להשתמש בזמן שלילי. חשבו את המקדם. הציבו את הכמות של היום ככמות התחלתית, ובחזקה הציבו 2- (שזה שקול לחלוקה במקדם בריבוע).",
        solution_steps: [
            { 
                verbal_explanation: "נחשב תחילה את המקדם של הגדילה על ידי חיבור אחוז הגידול למאה וחלוקה במאה.", 
                math_expression: "<div dir='ltr'>q = ( 100 + 20 ) / 100 = 1.20</div>" 
            },
            { 
                verbal_explanation: "אנו רוצים למצוא כמות שהייתה בעבר. לכן נציב מספר שלילי (2-) במעריך החזקה.", 
                math_expression: "<div dir='ltr'>M = 1440 &times; 1.20<sup>-2</sup></div>" 
            },
            { 
                verbal_explanation: "חזקה שלילית משמעותה חילוק. נהפוך את התרגיל לחילוק במקדם בריבוע.", 
                math_expression: "<div dir='ltr'>M = 1440 / 1.20<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את המקדם מועלה בריבוע.", 
                math_expression: "<div dir='ltr'>1.20<sup>2</sup> = 1.44</div>" 
            },
            { 
                verbal_explanation: "נחלק את הכמות מיום שלישי בערך שחישבנו, כדי לגלות כמה חיידקים היו יומיים קודם.", 
                math_expression: "<div dir='ltr'>M = 1440 / 1.44</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק הסופי.", 
                math_expression: "<div dir='ltr'>M = 1000</div>" 
            }
        ],
        final_answer: "1000"
    },

    // שאלה 19
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>חישוב אחוז השינוי הכולל - טעות נפוצה:</strong><br>
        הכנסותיו של עסק עולות בכל חודש ב-20% בדיוק לעומת החודש הקודם.<br>
        תלמיד טען: "אם זה עולה ב-20% החודש, ועוד 20% בחודש הבא, ההכנסות עלו ב-40% בסך הכל".<br>
        האם התלמיד צודק? חשבו את <strong>אחוז הגידול האמיתי</strong> לאחר חודשיים שלמים.`,
        options: [
            "לא, הגידול האמיתי הוא 44%",
            "כן, התלמיד צודק בהחלט",
            "לא, הגידול האמיתי הוא 400%",
            "לא, הגידול האמיתי הוא 24%"
        ],
        correctAnswer: 0,
        hint: "בגדילה מעריכית לא מחברים אחוזים. קחו סכום התחלתי נוח כמו 100. הכפילו אותו במקדם של ה-20% בחזקת 2. ראו כמה שקלים התווספו מעל ה-100 המקוריים.",
        solution_steps: [
            { 
                verbal_explanation: "כדי להוכיח את שיעור השינוי האמיתי, ניקח כמות התחלתית דמיונית ונוחה לבדיקה: 100.", 
                math_expression: "<div dir='ltr'>100</div>" 
            },
            { 
                verbal_explanation: "נמצא את המקדם המייצג עלייה של 20 אחוזים.", 
                math_expression: "<div dir='ltr'>q = ( 100 + 20 ) / 100 = 1.20</div>" 
            },
            { 
                verbal_explanation: "נחשב כמה כסף יהיה בסוף החודש השני בעזרת חזקה של שתיים.", 
                math_expression: "<div dir='ltr'>100 &times; 1.20<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב קודם את ערך המקדם המצטבר בריבוע.", 
                math_expression: "<div dir='ltr'>1.20<sup>2</sup> = 1.44</div>" 
            },
            { 
                verbal_explanation: "נכפול במאה ונקבל את התוצאה הסופית שהצטברה.", 
                math_expression: "<div dir='ltr'>100 &times; 1.44 = 144</div>" 
            },
            { 
                verbal_explanation: "התחלנו עם 100 והגענו ל-144. הפער הוא 44. לכן, הגידול האמיתי הוא 44 אחוזים, והתלמיד טעה.", 
                math_expression: "<div dir='ltr'>144 - 100 = 44</div>" 
            }
        ],
        final_answer: "לא, הגידול האמיתי הוא 44%"
    },

    // שאלה 20
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>חישוב שינוי מעורב (גדילה ולאחריה דעיכה):</strong><br>
        במפעל הוחלט על תהליך דו-שלבי למחיר מוצר, שמחירו ההתחלתי הוא 1,000 שקלים.<br>
        בשנה הראשונה המחיר <strong>עולה ב-20%</strong>.<br>
        בשנה השנייה, המחיר <strong>יורד ב-20%</strong>.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 120" width="100%" height="120" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 40,80 L 100,30" fill="none" stroke="#22c55e" stroke-width="2"/>
            <polygon points="100,30 90,35 95,45" fill="#22c55e"/>
            <path d="M 140,30 L 200,80" fill="none" stroke="#ef4444" stroke-width="2"/>
            <polygon points="200,80 190,75 195,65" fill="#ef4444"/>
            <text x="70" y="45" font-family="Arial" font-size="12" font-weight="bold" fill="#15803d">+20%</text>
            <text x="170" y="45" font-family="Arial" font-size="12" font-weight="bold" fill="#b91c1c">-20%</text>
        </svg>
        </div>
        מה יהיה מחירו הסופי של המוצר בסוף השנה השנייה?`,
        options: [
            "960 שקלים",
            "1000 שקלים",
            "1040 שקלים",
            "900 שקלים"
        ],
        correctAnswer: 0,
        hint: "תחילה הכפילו את המחיר המקורי במקדם העלייה (1.20). לאחר מכן, קחו את התוצאה החדשה שקיבלתם והכפילו אותה במקדם הירידה (0.80).",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את המקדם עבור השנה הראשונה שבה יש עליית מחיר.", 
                math_expression: "<div dir='ltr'>( 100 + 20 ) / 100 = 1.20</div>" 
            },
            { 
                verbal_explanation: "נמצא את המחיר החדש בסוף השנה הראשונה על ידי הכפלת המחיר המקורי במקדם.", 
                math_expression: "<div dir='ltr'>1000 &times; 1.20 = 1200</div>" 
            },
            { 
                verbal_explanation: "עבור השנה השנייה יש ירידת מחיר. נחשב את מקדם הדעיכה שלה.", 
                math_expression: "<div dir='ltr'>( 100 - 20 ) / 100 = 0.80</div>" 
            },
            { 
                verbal_explanation: "הירידה פועלת על המחיר החדש (1200) ולא על המקורי. נכפיל את מחיר השנה הראשונה במקדם הירידה.", 
                math_expression: "<div dir='ltr'>1200 &times; 0.80</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ונראה שהמחיר הסופי למעשה ירד מתחת למחיר ההתחלתי.", 
                math_expression: "<div dir='ltr'>960</div>" 
            }
        ],
        final_answer: "960"
    },// שאלה 21
    {
        topic: "bagrut_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: `<strong>חישוב גדילה מעריכית על פני זמן:</strong><br>
        לקוח הפקיד 5,000 שקלים בתוכנית חיסכון בבנק.<br>
        התוכנית נושאת ריבית קבועה של 6% בכל שנה.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="60" r="40" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="2"/>
            <text x="100" y="55" font-family="Arial" font-size="20" font-weight="bold" fill="#15803d" text-anchor="middle">&#8362;</text>
            <text x="100" y="80" font-family="Arial" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">+6%</text>
        </svg>
        </div>
        כמה כסף יהיה בחשבונו לאחר 4 שנים בדיוק?`,
        options: [
            "6312.38 שקלים",
            "6200.00 שקלים",
            "5800.50 שקלים",
            "6500.00 שקלים"
        ],
        correctAnswer: 0,
        hint: "חשבו את המקדם על ידי הוספת 6 ל-100 וחלוקה ב-100. לאחר מכן, הכפילו את הסכום ההתחלתי (5,000) במקדם שהועלה בחזקת 4.",
        solution_steps: [
            { 
                verbal_explanation: "נתחיל במציאת המקדם הקבוע. הכמות ההתחלתית היא מאה אחוזים, ונוסיף לה את אחוז הריבית.", 
                math_expression: "<div dir='ltr'>100 + 6 = 106</div>" 
            },
            { 
                verbal_explanation: "נחלק את סך האחוזים במאה כדי להפוך אותם למספר עשרוני שישמש אותנו לכפל.", 
                math_expression: "<div dir='ltr'>106 / 100 = 1.06</div>" 
            },
            { 
                verbal_explanation: "נרכיב את התרגיל: הסכום ההתחלתי כפול המקדם בחזקת 4 שנים.", 
                math_expression: "<div dir='ltr'>5000 &times; 1.06<sup>4</sup></div>" 
            },
            { 
                verbal_explanation: "לפי סדר פעולות חשבון, נחשב קודם את החזקה (1.06 כפול עצמו 4 פעמים) במחשבון.", 
                math_expression: "<div dir='ltr'>1.06<sup>4</sup> = 1.26247</div>" 
            },
            { 
                verbal_explanation: "נרשום את התרגיל מחדש עם התוצאה שחישבנו.", 
                math_expression: "<div dir='ltr'>5000 &times; 1.26247</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת הכפל כדי למצוא את הסכום הסופי שיהיה בחשבון הלקוח.", 
                math_expression: "<div dir='ltr'>6312.38</div>" 
            }
        ],
        final_answer: "6312.38"
    },

    // שאלה 22
    {
        topic: "bagrut_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: `<strong>חישוב דעיכה מעריכית (ירידת ערך):</strong><br>
        אדם רכש מכונית חדשה במחיר של 80,000 שקלים.<br>
        ערכה של המכונית יורד בכל שנה בשיעור קבוע של 10%.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 40,80 L 80,40 L 160,40 L 180,80 Z" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="70" cy="90" r="10" fill="#0f172a"/>
            <circle cx="150" cy="90" r="10" fill="#0f172a"/>
            <text x="110" y="65" font-family="Arial" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">-10%</text>
        </svg>
        </div>
        מה יהיה מחירה של המכונית לאחר 3 שנים?`,
        options: [
            "58320 שקלים",
            "56000 שקלים",
            "60000 שקלים",
            "51200 שקלים"
        ],
        correctAnswer: 0,
        hint: "ירידת ערך משמעותה דעיכה. חסרו 10 מתוך 100 ורק אז חלקו ב-100 כדי למצוא את המקדם. העלו את המקדם שקיבלתם בחזקת 3 והכפילו ב-80,000.",
        solution_steps: [
            { 
                verbal_explanation: "מכיוון שהערך יורד, נחסר את האחוז הנתון מתוך מאה אחוזים שלמים.", 
                math_expression: "<div dir='ltr'>100 - 10 = 90</div>" 
            },
            { 
                verbal_explanation: "נחלק במאה כדי לקבל את מקדם הדעיכה כתור מספר עשרוני.", 
                math_expression: "<div dir='ltr'>90 / 100 = 0.90</div>" 
            },
            { 
                verbal_explanation: "נרשום את התרגיל המלא: המחיר ההתחלתי כפול המקדם בחזקת שלוש שנים.", 
                math_expression: "<div dir='ltr'>80000 &times; 0.90<sup>3</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב במחשבון את המקדם מועלה בחזקת שלוש.", 
                math_expression: "<div dir='ltr'>0.90<sup>3</sup> = 0.729</div>" 
            },
            { 
                verbal_explanation: "נציב את התוצאה בחזרה לתרגיל.", 
                math_expression: "<div dir='ltr'>80000 &times; 0.729</div>" 
            },
            { 
                verbal_explanation: "נבצע את ההכפלה האחרונה כדי למצוא כמה המכונית תהיה שווה.", 
                math_expression: "<div dir='ltr'>58320</div>" 
            }
        ],
        final_answer: "58320"
    },

    // שאלה 23
    {
        topic: "bagrut_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: `<strong>חישוב גדילה עם זמן שאינו מספר שלם:</strong><br>
        במעבדה נבדקת תרבית חיידקים. הכמות גדלה ב-20% בכל שעה.<br>
        בתחילת הניסוי היו בדיוק 400 חיידקים.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="60" cy="60" r="15" fill="rgba(34,197,94,0.3)" stroke="#22c55e" stroke-width="2"/>
            <circle cx="100" cy="50" r="10" fill="rgba(34,197,94,0.3)" stroke="#22c55e" stroke-width="2"/>
            <circle cx="130" cy="70" r="20" fill="rgba(34,197,94,0.3)" stroke="#22c55e" stroke-width="2"/>
            <text x="100" y="105" font-family="Arial" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">+20% / hr</text>
        </svg>
        </div>
        כמה חיידקים יהיו בתרבית לאחר 2.5 שעות בדיוק? (עגלו למספר שלם).`,
        options: [
            "631",
            "560",
            "600",
            "720"
        ],
        correctAnswer: 0,
        hint: "נוסחה מעריכית עובדת גם עם חצאי שעות. המקדם שלכם הוא 1.20. העלו אותו בחזקת 2.5 בדיוק כפי שהוא, והכפילו ב-400.",
        solution_steps: [
            { 
                verbal_explanation: "נמצא את מקדם הגדילה על ידי הוספת עשרים למאה.", 
                math_expression: "<div dir='ltr'>100 + 20 = 120</div>" 
            },
            { 
                verbal_explanation: "נחלק במאה לקבלת המספר העשרוני.", 
                math_expression: "<div dir='ltr'>120 / 100 = 1.20</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בתרגיל: 400 חיידקים התחלתיים כפול המקדם בחזקת שעתיים וחצי.", 
                math_expression: "<div dir='ltr'>400 &times; 1.20<sup>2.5</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך החזקה העשרונית במחשבון ונשמור על דיוק של כמה ספרות.", 
                math_expression: "<div dir='ltr'>1.20<sup>2.5</sup> = 1.5774</div>" 
            },
            { 
                verbal_explanation: "נרשום את התרגיל המסודר ונבצע את הכפל.", 
                math_expression: "<div dir='ltr'>400 &times; 1.5774 = 630.96</div>" 
            },
            { 
                verbal_explanation: "מכיוון שמדובר ביצורים חיים שלא ניתן לחצות, נעגל לתוצאה השלמה הקרובה.", 
                math_expression: "<div dir='ltr'>631</div>" 
            }
        ],
        final_answer: "631"
    },

    // שאלה 24
    {
        topic: "bagrut_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: `<strong>מציאת כמות התחלתית (פעולה הפוכה):</strong><br>
        שטחו של אגם קטן מתרחב בכל שנה ב-10%.<br>
        כיום, לאחר שעברו בדיוק 4 שנים מתחילת המדידות, שטח האגם הוא 1,464.1 מ"ר.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <ellipse cx="100" cy="60" rx="70" ry="40" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
            <text x="100" y="65" font-family="Arial" font-size="14" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1464.1</text>
        </svg>
        </div>
        מה היה שטחו המקורי של האגם לפני 4 שנים (בתחילת המדידות)?`,
        options: [
            "1000 מ\"ר",
            "1100 מ\"ר",
            "1200 מ\"ר",
            "900 מ\"ר"
        ],
        correctAnswer: 0,
        hint: "זהו תהליך 'הליכה אחורה'. הכמות ההתחלתית היא נעלם. הציבו בנוסחה את השטח הסופי כתוצאה. חשבו את המקדם (1.10) בחזקת 4, וחלקו את השטח הסופי בתוצאה שקיבלתם כדי למצוא את ההתחלה.",
        solution_steps: [
            { 
                verbal_explanation: "ראשית, נמצא את מקדם הגדילה. נוסיף את אחוז הגדילה ל-100 האחוזים ההתחלתיים.", 
                math_expression: "<div dir='ltr'>100 + 10 = 110</div>" 
            },
            { 
                verbal_explanation: "נחלק במאה כדי להפוך למספר עשרוני.", 
                math_expression: "<div dir='ltr'>110 / 100 = 1.10</div>" 
            },
            { 
                verbal_explanation: "נרכיב משוואה. נשתמש בסימן שאלה או ריבוע ריק עבור הכמות ההתחלתית. היא הוכפלה במקדם בחזקת 4 והגיעה לשטח הנוכחי.", 
                math_expression: "<div dir='ltr'>? &times; 1.10<sup>4</sup> = 1464.1</div>" 
            },
            { 
                verbal_explanation: "נחשב במחשבון את הערך של 1.10 מועלה בחזקת 4.", 
                math_expression: "<div dir='ltr'>1.10<sup>4</sup> = 1.4641</div>" 
            },
            { 
                verbal_explanation: "נרשום את המשוואה מחדש עם המספר שחישבנו.", 
                math_expression: "<div dir='ltr'>? &times; 1.4641 = 1464.1</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את ההתחלה, נבצע את הפעולה ההפוכה לכפל ונחלק את התוצאה במספר שמצאנו.", 
                math_expression: "<div dir='ltr'>1464.1 / 1.4641</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק לקבלת השטח המקורי.", 
                math_expression: "<div dir='ltr'>1000</div>" 
            }
        ],
        final_answer: "1000"
    },

    // שאלה 25
    {
        topic: "bagrut_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: `<strong>מציאת כמות התחלתית (דעיכה):</strong><br>
        אוכלוסיית דגים באגם קטנה בכל שנה ב-20% בגלל זיהום.<br>
        לאחר 3 שנים של מדידות, נותרו באגם 1,024 דגים בלבד.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 20,60 Q 50,20 100,60 T 180,60" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="150" cy="60" r="15" fill="#ef4444"/>
            <text x="150" y="65" font-family="Arial" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">1024</text>
            <text x="100" y="100" font-family="Arial" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">-20% / year</text>
        </svg>
        </div>
        כמה דגים היו באגם בתחילת המדידות?`,
        options: [
            "2000",
            "1500",
            "2500",
            "1800"
        ],
        correctAnswer: 0,
        hint: "זוהי ירידה, ולכן המקדם הוא 0.80. רשמו משוואה שבה הכמות ההתחלתית היא הנעלם. העלו את המקדם בחזקת 3, וחלקו את הכמות הסופית בתוצאת החזקה.",
        solution_steps: [
            { 
                verbal_explanation: "נתחיל ממציאת מקדם הדעיכה. נחסר את אחוז הירידה מתוך 100 אחוזים שלמים.", 
                math_expression: "<div dir='ltr'>100 - 20 = 80</div>" 
            },
            { 
                verbal_explanation: "נחלק את ה-80 במאה כדי לקבל את המקדם העשרוני.", 
                math_expression: "<div dir='ltr'>80 / 100 = 0.80</div>" 
            },
            { 
                verbal_explanation: "הכמות ההתחלתית היא נעלם. היא הוכפלה במקדם בחזקת 3 והגיעה ל-1024.", 
                math_expression: "<div dir='ltr'>? &times; 0.80<sup>3</sup> = 1024</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך המקדם מועלה בחזקת שלוש במחשבון.", 
                math_expression: "<div dir='ltr'>0.80<sup>3</sup> = 0.512</div>" 
            },
            { 
                verbal_explanation: "נכתוב את המשוואה בצורה פשוטה ונוחה יותר לחילוק.", 
                math_expression: "<div dir='ltr'>? &times; 0.512 = 1024</div>" 
            },
            { 
                verbal_explanation: "נבצע את הפעולה ההפוכה: נחלק את הכמות הסופית במספר שצמוד לנעלם.", 
                math_expression: "<div dir='ltr'>1024 / 0.512</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק כדי לגלות את כמות הדגים המקורית.", 
                math_expression: "<div dir='ltr'>2000</div>" 
            }
        ],
        final_answer: "2000"
    },

    // שאלה 26
    {
        topic: "bagrut_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: `<strong>שימוש בזמן שלילי למציאת ערך בעבר (חישוב ישיר):</strong><br>
        היום נמדדו 1,210 צפיות בסרטון באתר מסוים.<br>
        ידוע כי כמות הצפיות עולה בקצב קבוע של 10% בכל יום.<br>
        היוצר רוצה לדעת כמה צפיות היו לסרטון <strong>לפני יומיים</strong> (כלומר t = -2).<br>
        כמה צפיות היו אז?`,
        options: [
            "1000",
            "900",
            "1100",
            "850"
        ],
        correctAnswer: 0,
        hint: "הציבו את הכמות של היום (1210) ככמות התחלתית בנוסחה. במעריך החזקה, הציבו את המספר 2- . מתמטית, זה זהה לחלוקת הכמות במקדם בריבוע.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את המקדם של הגדילה.", 
                math_expression: "<div dir='ltr'>100 + 10 = 110</div>" 
            },
            { 
                verbal_explanation: "נחלק במאה לקבלת המספר העשרוני.", 
                math_expression: "<div dir='ltr'>110 / 100 = 1.10</div>" 
            },
            { 
                verbal_explanation: "נרשום את התרגיל עם הכמות של היום והזמן השלילי (מינוס שתיים) שמחזיר אותנו לעבר.", 
                math_expression: "<div dir='ltr'>1210 &times; 1.10<sup>-2</sup></div>" 
            },
            { 
                verbal_explanation: "על פי חוקי המתמטיקה, כפל בחזקה שלילית זהה לחילוק בחזקה חיובית.", 
                math_expression: "<div dir='ltr'>1210 / 1.10<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את המקדם מועלה בריבוע.", 
                math_expression: "<div dir='ltr'>1.10<sup>2</sup> = 1.21</div>" 
            },
            { 
                verbal_explanation: "נחלק את הכמות של היום במספר שמצאנו כדי לגלות את העבר.", 
                math_expression: "<div dir='ltr'>1210 / 1.21</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק הסופי.", 
                math_expression: "<div dir='ltr'>1000</div>" 
            }
        ],
        final_answer: "1000"
    },

    // שאלה 27
    {
        topic: "bagrut_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: `<strong>גדילה במכפלות שלמות (ללא אחוזים):</strong><br>
        חוקר צופה בתאים אשר <strong>מכפילים את עצמם פי 3</strong> בכל שעה.<br>
        בתחילת התצפית היו 10 תאים בלבד.<br>
        כמה תאים יהיו לאחר 4 שעות בדיוק?`,
        options: [
            "810",
            "120",
            "400",
            "81"
        ],
        correctAnswer: 0,
        hint: "כאשר כתוב 'מוכפל פי מספר', המספר הזה הוא המקדם עצמו. אין צורך לחשב אחוזים. המקדם הוא 3. העלו את 3 בחזקת 4 והכפילו ב-10.",
        solution_steps: [
            { 
                verbal_explanation: "המשפט אומר לנו שהכמות מוכפלת פי שלוש. לכן אין צורך לחשב אחוזים, המקדם נתון לנו ישירות.", 
                math_expression: "<div dir='ltr'>q = 3</div>" 
            },
            { 
                verbal_explanation: "נרשום את התרגיל המלא: הכמות ההתחלתית (10) כפול המקדם (3) מועלה בחזקת הזמן (4 שעות).", 
                math_expression: "<div dir='ltr'>10 &times; 3<sup>4</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקה (שלוש כפול שלוש כפול שלוש כפול שלוש).", 
                math_expression: "<div dir='ltr'>3<sup>4</sup> = 81</div>" 
            },
            { 
                verbal_explanation: "נרשום את התרגיל בצורתו הפשוטה לאחר פתרון החזקה.", 
                math_expression: "<div dir='ltr'>10 &times; 81</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת הכפל כדי לקבל את מספר התאים הסופי.", 
                math_expression: "<div dir='ltr'>810</div>" 
            }
        ],
        final_answer: "810"
    },

    // שאלה 28
    {
        topic: "bagrut_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: `<strong>דעיכה במכפלות שלמות (זמן מחצית חיים):</strong><br>
        חומר רדיואקטיבי מתפרק כך שבכל יום משקלו <strong>יורד בדיוק לחצי</strong>.<br>
        המשקל ההתחלתי של החומר היה 640 גרם.<br>
        כמה גרמים של חומר יישארו לאחר 5 ימים מלאים?`,
        options: [
            "20",
            "40",
            "10",
            "32"
        ],
        correctAnswer: 0,
        hint: "המשפט 'יורד לחצי' אומר שהכמות מוכפלת כל פעם ב-0.5. לכן, מקדם הדעיכה הוא 0.5. הציבו זאת בנוסחה עם חזקה של 5 והכפילו ב-640.",
        solution_steps: [
            { 
                verbal_explanation: "מכיוון שהמסה יורדת לחצי בכל פעם, המקדם שלנו הוא בדיוק המספר העשרוני המייצג חצי.", 
                math_expression: "<div dir='ltr'>q = 0.5</div>" 
            },
            { 
                verbal_explanation: "נרכיב את תרגיל הדעיכה עם כמות התחלתית של 640 וזמן של 5 ימים.", 
                math_expression: "<div dir='ltr'>640 &times; 0.5<sup>5</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך המקדם בחזקת חמש במחשבון.", 
                math_expression: "<div dir='ltr'>0.5<sup>5</sup> = 0.03125</div>" 
            },
            { 
                verbal_explanation: "נרשום את התרגיל המעודכן עם התוצאה.", 
                math_expression: "<div dir='ltr'>640 &times; 0.03125</div>" 
            },
            { 
                verbal_explanation: "נכפיל את המספרים לקבלת המשקל הסופי שנותר מהחומר.", 
                math_expression: "<div dir='ltr'>20</div>" 
            }
        ],
        final_answer: "20"
    },

    // שאלה 29
    {
        topic: "bagrut_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: `<strong>מציאת הזמן מתוך בדיקת אפשרויות:</strong><br>
        הכנסותיו של עסק עולות ב-20% בכל חודש באופן קבוע.<br>
        בחודש הראשון (ההתחלתי) ההכנסות היו 100 שקלים.<br>
        כעבור מספר חודשים ההכנסות הגיעו בדיוק ל-172.8 שקלים.<br>
        כמה חודשים חלפו?`,
        options: [
            "3 חודשים",
            "2 חודשים",
            "4 חודשים",
            "5 חודשים"
        ],
        correctAnswer: 0,
        hint: "מאחר ומדובר במספר חודשים שלם וקטן, הדרך הפשוטה ביותר היא ניסוי וטעייה. הכפילו את ה-100 במקדם (1.20) שוב ושוב עד שתגיעו לתוצאה המבוקשת, וספרו כמה פעמים הכפלתם.",
        solution_steps: [
            { 
                verbal_explanation: "נמצא את המקדם המייצג עלייה של 20 אחוזים.", 
                math_expression: "<div dir='ltr'>( 100 + 20 ) / 100 = 1.20</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את הזמן נבדוק את האפשרויות על ידי הכפלות חוזרות. נתחיל עם הכמות ההתחלתית והכפלה אחת (חודש ראשון).", 
                math_expression: "<div dir='ltr'>100 &times; 1.20 = 120</div>" 
            },
            { 
                verbal_explanation: "נמשיך לחודש השני: נכפיל את התוצאה שוב באותו מקדם.", 
                math_expression: "<div dir='ltr'>120 &times; 1.20 = 144</div>" 
            },
            { 
                verbal_explanation: "נמשיך לחודש השלישי: נכפיל את התוצאה האחרונה פעם נוספת במקדם.", 
                math_expression: "<div dir='ltr'>144 &times; 1.20 = 172.8</div>" 
            },
            { 
                verbal_explanation: "הגענו בדיוק לסכום הנדרש שבשאלה. ספרנו 3 פעולות כפל רצופות, כלומר חלפו 3 חודשים.", 
                math_expression: "<div dir='ltr'>3</div>" 
            }
        ],
        final_answer: "3 חודשים"
    },

    // שאלה 30
    {
        topic: "bagrut_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: `<strong>חישוב משולב - נוסחה ולאחריה חיסור רגיל:</strong><br>
        אדם פותח תוכנית חיסכון ומפקיד בה 2,000 שקלים.<br>
        התוכנית מוסיפה 5% ריבית בכל שנה.<br>
        לאחר שעברו שנתיים שלמות, החליט האדם למשוך 400 שקלים מתוך החשבון לטובת קנייה.<br>
        כמה כסף נשאר בחשבון מיד לאחר המשיכה?`,
        options: [
            "1805 שקלים",
            "1600 שקלים",
            "1700 שקלים",
            "1905 שקלים"
        ],
        correctAnswer: 0,
        hint: "חשבו את כמות הכסף שתהיה בחיסכון לאחר שנתיים במלואן (בעזרת הנוסחה והמקדם). רק לאחר שתקבלו את התוצאה הסופית, חסרו ממנה את ה-400 שקלים.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את מקדם הגדילה של תוכנית החיסכון (תוספת של 5 אחוזים).", 
                math_expression: "<div dir='ltr'>( 100 + 5 ) / 100 = 1.05</div>" 
            },
            { 
                verbal_explanation: "נחשב כמה כסף הצטבר בסך הכל בחשבון לאחר שנתיים שלמות.", 
                math_expression: "<div dir='ltr'>2000 &times; 1.05<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את הריבוע של המקדם (1.05 כפול עצמו).", 
                math_expression: "<div dir='ltr'>1.05<sup>2</sup> = 1.1025</div>" 
            },
            { 
                verbal_explanation: "נכפול בסכום ההתחלתי לקבלת היתרה המלאה לפני משיכת הכסף.", 
                math_expression: "<div dir='ltr'>2000 &times; 1.1025 = 2205</div>" 
            },
            { 
                verbal_explanation: "כעת, מתוך הסכום המלא נבצע את המשיכה, כלומר חיסור רגיל של 400 שקלים.", 
                math_expression: "<div dir='ltr'>2205 - 400</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור לקבלת הסכום הסופי שנשאר בחשבון.", 
                math_expression: "<div dir='ltr'>1805</div>" 
            }
        ],
        final_answer: "1805"
    },

    // ---------------------------------------------------------
    // תת נושא 3: חיזוי שינויים על פי מודל מעריכי (שאלות 31-40)
    // ---------------------------------------------------------

    // שאלה 31
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>מציאת מקדם בעזרת שורש ריבועי וחישוב האחוז (גדילה):</strong><br>
        השקעה של 10,000 שקלים הגיעה לאחר <strong>שנתיים</strong> לסכום של 14,400 שקלים.<br>
        ההשקעה גדלה באחוז שנתי קבוע.<br>
        בכמה אחוזים בדיוק גדלה ההשקעה בכל שנה?`,
        options: [
            "20%",
            "44%",
            "22%",
            "12%"
        ],
        correctAnswer: 0,
        hint: "זהו תהליך בשלושה שלבים. 1) בנו משוואה ומצאו את המקדם בריבוע על ידי חלוקת הסכום הסופי בהתחלתי. 2) הוציאו שורש ריבועי כדי למצוא את המקדם הרגיל. 3) הפכו את המקדם בחזרה לאחוזים (כפול 100 ופחות 100).",
        solution_steps: [
            { 
                verbal_explanation: "נרכיב משוואה שבה מקדם הגדילה נמצא בחזקת שתיים (כי עברו שנתיים).", 
                math_expression: "<div dir='ltr'>10000 &times; q<sup>2</sup> = 14400</div>" 
            },
            { 
                verbal_explanation: "נחלק את הסכום הסופי בסכום ההתחלתי כדי לבודד את המקדם בריבוע.", 
                math_expression: "<div dir='ltr'>q<sup>2</sup> = 14400 / 10000</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק הפשוט במחשבון.", 
                math_expression: "<div dir='ltr'>q<sup>2</sup> = 1.44</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי כדי למצוא את המקדם העשרוני הבודד של שנה אחת.", 
                math_expression: "<div dir='ltr'>q = &radic;1.44 = 1.20</div>" 
            },
            { 
                verbal_explanation: "כעת עלינו לתרגם את המקדם לאחוזים. נכפיל במאה.", 
                math_expression: "<div dir='ltr'>1.20 &times; 100 = 120</div>" 
            },
            { 
                verbal_explanation: "נחסר מתוך התוצאה את מאה האחוזים ההתחלתיים ונקבל את אחוז הגדילה הנקי לשנה.", 
                math_expression: "<div dir='ltr'>120 - 100 = 20</div>" 
            }
        ],
        final_answer: "20%"
    },

    // שאלה 32
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>מציאת אחוז באמצעות שורש שלישי (דעיכה):</strong><br>
        מכונה תעשייתית שעלתה 1,000 שקלים ירדה בערכה.<br>
        לאחר <strong>שלוש שנים</strong> מיום הקנייה, שוויה של המכונה עומד על 512 שקלים.<br>
        הירידה היא באחוז קבוע בכל שנה.<br>
        באיזה אחוז יורד ערך המכונה בכל שנה?`,
        options: [
            "20%",
            "80%",
            "16%",
            "30%"
        ],
        correctAnswer: 0,
        hint: "בנו משוואה, חלקו את 512 ב-1000 והוציאו שורש שלישי. התוצאה שתקבלו היא המקדם העשרוני. הכפילו אותו ב-100, וראו כמה אחוזים חסרים לכם עד ל-100 השלמים (כי זו ירידה).",
        solution_steps: [
            { 
                verbal_explanation: "נרכיב משוואת דעיכה שבה המקדם נמצא בחזקת שלוש (מכיוון שעברו 3 שנים).", 
                math_expression: "<div dir='ltr'>1000 &times; q<sup>3</sup> = 512</div>" 
            },
            { 
                verbal_explanation: "נחלק את הסכום הסופי בסכום ההתחלתי כדי לבודד את החזקה השלישית.", 
                math_expression: "<div dir='ltr'>q<sup>3</sup> = 512 / 1000</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק לקבלת מספר עשרוני.", 
                math_expression: "<div dir='ltr'>q<sup>3</sup> = 0.512</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש שלישי באמצעות המחשבון כדי למצוא את המקדם של השנה הבודדת.", 
                math_expression: "<div dir='ltr'>q = <sup>3</sup>&radic;0.512 = 0.80</div>" 
            },
            { 
                verbal_explanation: "נכפיל את המקדם במאה כדי לראות איזה אחוז מהערך נשאר בכל שנה.", 
                math_expression: "<div dir='ltr'>0.80 &times; 100 = 80</div>" 
            },
            { 
                verbal_explanation: "נשארו 80 אחוזים מהשלם (100). נחסר מ-100 כדי לגלות בדיוק כמה ירד.", 
                math_expression: "<div dir='ltr'>100 - 80 = 20</div>" 
            }
        ],
        final_answer: "20%"
    },

    // שאלה 33
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>השוואה בין עלייה רצופה לעלייה חד-פעמית:</strong><br>
        מה עדיף לעובד שמשכורתו היא 100 שקלים ליום:<br>
        אפשרות א': לקבל העלאה של 10% מחר, <strong>ועוד העלאה של 10%</strong> מחרתיים (מתוך המשכורת המעודכנת).<br>
        אפשרות ב': לקבל העלאה <strong>חד-פעמית של 20%</strong> מחרתיים.<br>
        מי משתי האפשרויות תניב משכורת יומית גבוהה יותר מחרתיים?`,
        options: [
            "אפשרות א' גבוהה יותר",
            "אפשרות ב' גבוהה יותר",
            "האפשרויות שוות בדיוק",
            "אי אפשר לחשב"
        ],
        correctAnswer: 0,
        hint: "חשבו את אפשרות א': 100 כפול 1.10 בחזקת 2. חשבו את אפשרות ב': 100 כפול 1.20 (פעם אחת בלבד). השוו בין התוצאות.",
        solution_steps: [
            { 
                verbal_explanation: "נבדוק את אפשרות א', המייצגת עלייה רצופה (ריבית דריבית). נחשב תחילה את המקדם של 10 אחוזים.", 
                math_expression: "<div dir='ltr'>( 100 + 10 ) / 100 = 1.10</div>" 
            },
            { 
                verbal_explanation: "נחשב את המשכורת לאחר שתי העלאות רצופות באמצעות חזקה שנייה.", 
                math_expression: "<div dir='ltr'>100 &times; 1.10<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקה והכפל לקבלת הסכום באפשרות א'.", 
                math_expression: "<div dir='ltr'>100 &times; 1.21 = 121</div>" 
            },
            { 
                verbal_explanation: "נבדוק את אפשרות ב', שבה יש עלייה בודדת של 20 אחוזים. נחשב את המקדם שלה.", 
                math_expression: "<div dir='ltr'>( 100 + 20 ) / 100 = 1.20</div>" 
            },
            { 
                verbal_explanation: "נחשב את המשכורת לאחר ההעלאה החד-פעמית.", 
                math_expression: "<div dir='ltr'>100 &times; 1.20 = 120</div>" 
            },
            { 
                verbal_explanation: "נשווה: 121 שקלים גדולים מ-120 שקלים. לכן עלייה הדרגתית של פעמיים עשר אחוזים טובה יותר.", 
                math_expression: "<div dir='ltr'>121 > 120</div>" 
            }
        ],
        final_answer: "אפשרות א' גבוהה יותר"
    },

    // שאלה 34
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>חישוב אחוז השינוי הכולל - גדילה כפולה:</strong><br>
        המחיר של מוצר עלה פעמיים ברציפות, בכל פעם ב-20%.<br>
        בכמה אחוזים סך הכל עלה המחיר מהרגע ההתחלתי ועד הסוף?`,
        options: [
            "44%",
            "40%",
            "20%",
            "42%"
        ],
        correctAnswer: 0,
        hint: "בגדילה מעריכית לא מחברים אחוזים. קחו מחיר התחלתי נוח (100). הכפילו אותו במקדם של ה-20% בחזקת 2. ראו כמה שקלים התווספו למחיר המקורי. המספר הזה הוא האחוז.",
        solution_steps: [
            { 
                verbal_explanation: "ניקח מחיר התחלתי דמיוני של 100 שקלים כדי שיהיה קל לתרגם את התוצאה לאחוזים.", 
                math_expression: "<div dir='ltr'>100</div>" 
            },
            { 
                verbal_explanation: "נמצא את המקדם המייצג עלייה של 20 אחוזים.", 
                math_expression: "<div dir='ltr'>( 100 + 20 ) / 100 = 1.20</div>" 
            },
            { 
                verbal_explanation: "נחשב את המחיר לאחר שתי העליות בעזרת חזקה.", 
                math_expression: "<div dir='ltr'>100 &times; 1.20<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך המקדם המצטבר (1.20 כפול 1.20).", 
                math_expression: "<div dir='ltr'>1.20<sup>2</sup> = 1.44</div>" 
            },
            { 
                verbal_explanation: "נכפול במאה ונקבל את המחיר הסופי.", 
                math_expression: "<div dir='ltr'>100 &times; 1.44 = 144</div>" 
            },
            { 
                verbal_explanation: "התחלנו עם 100 והגענו ל-144. הפער הוא 44. לכן הגידול האמיתי הוא 44 אחוזים.", 
                math_expression: "<div dir='ltr'>144 - 100 = 44</div>" 
            }
        ],
        final_answer: "44%"
    },

    // שאלה 35
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>חישוב אחוז השינוי הכולל - דעיכה כפולה:</strong><br>
        המחיר של מוצר מסוים ירד פעמיים ברציפות (הנחה על הנחה), בכל פעם ב-20%.<br>
        בכמה אחוזים סך הכל ירד המחיר מהמחיר המקורי שלו?`,
        options: [
            "36%",
            "40%",
            "20%",
            "44%"
        ],
        correctAnswer: 0,
        hint: "כמו בשאלה הקודמת, התחילו מ-100 שקלים. מצאו את מקדם הירידה של 20% (0.80) והעלו אותו בחזקת 2. הכפילו ב-100 וראו מה המחיר הסופי. החסירו את התוצאה מ-100 כדי לגלות כמה חסכתם באמת.",
        solution_steps: [
            { 
                verbal_explanation: "ניקח מוצר שמחירו המקורי והנוח לחישוב הוא 100 שקלים.", 
                math_expression: "<div dir='ltr'>100</div>" 
            },
            { 
                verbal_explanation: "נמצא את מקדם ההנחה על ידי חיסור מ-100 וחלוקה במאה.", 
                math_expression: "<div dir='ltr'>( 100 - 20 ) / 100 = 0.80</div>" 
            },
            { 
                verbal_explanation: "נחשב כמה יעלה המוצר לאחר שתי הנחות רצופות (נכפיל במקדם בחזקת שתיים).", 
                math_expression: "<div dir='ltr'>100 &times; 0.80<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך המקדם המצטבר (0.80 כפול 0.80).", 
                math_expression: "<div dir='ltr'>0.80<sup>2</sup> = 0.64</div>" 
            },
            { 
                verbal_explanation: "נכפול במחיר המקורי ונגלה שהמוצר עולה כעת 64 שקלים בלבד.", 
                math_expression: "<div dir='ltr'>100 &times; 0.64 = 64</div>" 
            },
            { 
                verbal_explanation: "אם התחלנו ב-100 שילמנו בסוף 64, חסכנו 36 שקלים. לכן ההנחה הכוללת היא 36 אחוזים.", 
                math_expression: "<div dir='ltr'>100 - 64 = 36</div>" 
            }
        ],
        final_answer: "36%"
    },

    // שאלה 36
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>חישוב שינוי מעורב (מתי האחוזים מקזזים זה את זה?):</strong><br>
        המחיר של מוצר מסוים עלה ב-25%.<br>
        לאחר חודש, בעקבות תלונות, בעל החנות ביצע הוזלה של 20% על המחיר החדש.<br>
        מה קרה למחיר המוצר בסוף התהליך ביחס למחירו המקורי (לפני כל השינויים)?`,
        options: [
            "הוא חזר בדיוק למחיר המקורי",
            "הוא גבוה יותר ב-5%",
            "הוא נמוך יותר ב-5%",
            "הוא גבוה יותר ב-1%"
        ],
        correctAnswer: 0,
        hint: "התחילו ממחיר של 100. הכפילו אותו במקדם העלייה (1.25). לאחר מכן, קחו את התוצאה והכפילו אותה במקדם הירידה (0.80).",
        solution_steps: [
            { 
                verbal_explanation: "ניקח מוצר שמחירו המקורי 100 שקלים ונחשב את המקדם עבור העלייה של ה-25 אחוזים.", 
                math_expression: "<div dir='ltr'>( 100 + 25 ) / 100 = 1.25</div>" 
            },
            { 
                verbal_explanation: "נמצא את המחיר החדש לאחר העלייה על ידי הכפלה.", 
                math_expression: "<div dir='ltr'>100 &times; 1.25 = 125</div>" 
            },
            { 
                verbal_explanation: "כעת ישנה הוזלה של 20 אחוזים מהמחיר החדש. נחשב את מקדם ההוזלה.", 
                math_expression: "<div dir='ltr'>( 100 - 20 ) / 100 = 0.80</div>" 
            },
            { 
                verbal_explanation: "נכפיל את המחיר הגבוה (125) במקדם ההוזלה.", 
                math_expression: "<div dir='ltr'>125 &times; 0.80</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ונגלה שהתוצאה היא שוב 100.", 
                math_expression: "<div dir='ltr'>100</div>" 
            },
            { 
                verbal_explanation: "כלומר, עלייה של רבע (25%) ואחריה ירידה של חמישית (20%) מחזירות אותנו בדיוק לאותה נקודת התחלה.", 
                math_expression: "<div dir='ltr'>100 = 100</div>" 
            }
        ],
        final_answer: "הוא חזר בדיוק למחיר המקורי"
    },

    // שאלה 37
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>חישוב שינוי מעורב לא מקזז (עלייה וירידה קיצוניות):</strong><br>
        המחיר של מנייה זינק ביום אחד ב-50%.<br>
        למחרת, המניה התרסקה וירדה ב-50% מתוך המחיר אליו הגיעה.<br>
        מה מצב המניה בסוף התהליך ביחס למחירה המקורי?`,
        options: [
            "היא זולה יותר (הפסידה 25% מערכה)",
            "היא חזרה למחיר המקורי",
            "היא יקרה יותר ב-10%",
            "היא שווה אפס"
        ],
        correctAnswer: 0,
        hint: "התחילו ממחיר דמיוני של 100 שקלים. הכפילו אותו במקדם העלייה של ה-50% (שהוא 1.50). לאחר מכן, קחו את התוצאה והכפילו אותה במקדם הירידה של ה-50% (שהוא 0.50). ראו כמה נשאר.",
        solution_steps: [
            { 
                verbal_explanation: "נניח שמחיר המניה המקורי היה 100 שקלים. נמצא את המקדם של הזינוק ב-50 אחוזים.", 
                math_expression: "<div dir='ltr'>( 100 + 50 ) / 100 = 1.50</div>" 
            },
            { 
                verbal_explanation: "נחשב את שווי המניה לאחר הזינוק.", 
                math_expression: "<div dir='ltr'>100 &times; 1.50 = 150</div>" 
            },
            { 
                verbal_explanation: "ביום השני יש התרסקות של 50 אחוזים. נחשב את מקדם הדעיכה.", 
                math_expression: "<div dir='ltr'>( 100 - 50 ) / 100 = 0.50</div>" 
            },
            { 
                verbal_explanation: "נכפיל את השווי החדש והגבוה (150) במקדם ההתרסקות.", 
                math_expression: "<div dir='ltr'>150 &times; 0.50</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ונראה שהשווי צנח ל-75 שקלים.", 
                math_expression: "<div dir='ltr'>75</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהתחלנו עם 100 וסיימנו עם 75, המניה איבדה 25 שקלים (או 25 אחוזים) מערכה המקורי.", 
                math_expression: "<div dir='ltr'>100 - 75 = 25</div>" 
            }
        ],
        final_answer: "היא זולה יותר (הפסידה 25% מערכה)"
    },

    // שאלה 38
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>מציאת הבא בסדרה (זיהוי חוקיות מעריכית):</strong><br>
        חוקר מודד כמות של פטריות בצלחת.<br>
        ביום הראשון הוא ספר 50 פטריות.<br>
        ביום השני הוא ספר 60 פטריות.<br>
        ביום השלישי הוא ספר 72 פטריות.<br>
        אם החוקיות תימשך, כמה פטריות יהיו ביום הרביעי?`,
        options: [
            "86.4",
            "84.0",
            "82.0",
            "90.5"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא את המקדם, חלקו איבר אחד באיבר שלפניו (למשל 60 לחלק ל-50). בידקו שזה עובד גם על הזוג הבא (72 לחלק ל-60). אם קיבלתם את אותו מקדם, פשוט הכפילו בו את ה-72 כדי למצוא את היום הבא.",
        solution_steps: [
            { 
                verbal_explanation: "נבדוק האם קיים מקדם קבוע (גדילה מעריכית). נחלק את היום השני ביום הראשון.", 
                math_expression: "<div dir='ltr'>60 / 50 = 1.20</div>" 
            },
            { 
                verbal_explanation: "נוודא שהמקדם עקבי על ידי חלוקת היום השלישי ביום השני.", 
                math_expression: "<div dir='ltr'>72 / 60 = 1.20</div>" 
            },
            { 
                verbal_explanation: "המקדם קבוע. כלומר, בכל יום הכמות מוכפלת ב-1.20. כדי למצוא את היום הרביעי, ניקח את היום השלישי ונכפיל במקדם.", 
                math_expression: "<div dir='ltr'>72 &times; 1.20</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת הכפל לקבלת מספר הפטריות המדויק ליום הרביעי.", 
                math_expression: "<div dir='ltr'>86.4</div>" 
            }
        ],
        final_answer: "86.4"
    },

    // שאלה 39
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>הבנת ההשפעה של מעריך גדול (חישוב אחוז כולל לשנים רבות):</strong><br>
        אוכלוסיית מדינה גדלה ב-5% בכל שנה.<br>
        בכמה אחוזים (בסך הכל) תגדל האוכלוסייה לאחר 10 שנים רצופות? (עגלו לשתי ספרות).`,
        options: [
            "62.88%",
            "50.00%",
            "10.50%",
            "162.88%"
        ],
        correctAnswer: 0,
        hint: "מצאו את המקדם של 5% גדילה. העלו אותו בחזקת 10 במחשבון כדי למצוא את המקדם המצטבר. הכפילו ב-100 כדי להפוך לאחוזים, והחסירו את ה-100 ההתחלתיים.",
        solution_steps: [
            { 
                verbal_explanation: "נמצא את המקדם הרגיל של שנה אחת המייצג גדילה של 5 אחוזים.", 
                math_expression: "<div dir='ltr'>( 100 + 5 ) / 100 = 1.05</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את המקדם המצטבר של עשור שלם, נעלה את המקדם הרגיל בחזקת עשר.", 
                math_expression: "<div dir='ltr'>1.05<sup>10</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך החזקה במחשבון (זהו מקדם הגדילה המייצג 10 שנים ביחד).", 
                math_expression: "<div dir='ltr'>1.62889</div>" 
            },
            { 
                verbal_explanation: "כדי להמיר את המקדם הזה לשפת האחוזים, נכפול אותו במאה.", 
                math_expression: "<div dir='ltr'>1.62889 &times; 100 = 162.889</div>" 
            },
            { 
                verbal_explanation: "המספר שקיבלנו כולל את 100 האחוזים המקוריים של האוכלוסייה. נחסר אותם כדי לקבל את תוספת הגדילה נטו.", 
                math_expression: "<div dir='ltr'>162.889 - 100 = 62.889</div>" 
            },
            { 
                verbal_explanation: "לאחר עיגול קל, נקבל שהאוכלוסייה גדלה כמעט ב-63 אחוזים.", 
                math_expression: "<div dir='ltr'>62.88</div>" 
            }
        ],
        final_answer: "62.88%"
    },

    // שאלה 40
    {
        topic: "bagrut_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: `<strong>שאלת אתגר - שינוי ביחידות זמן שונות:</strong><br>
        במעבדה נחקר חומר כימי שמשקלו <strong>יורד לחצי</strong> בכל 4 שעות.<br>
        בתחילת הניסוי משקלו של החומר היה 80 גרם.<br>
        כמה גרמים של חומר יישארו לאחר 12 שעות?`,
        options: [
            "10 גרם",
            "20 גרם",
            "5 גרם",
            "40 גרם"
        ],
        correctAnswer: 0,
        hint: "שימו לב היטב: המחזור של החומר הוא 4 שעות. לכן, ב-12 שעות יש בדיוק 3 מחזורים שלמים (12 לחלק ל-4). הציבו בחזקה את המספר 3 ולא 12.",
        solution_steps: [
            { 
                verbal_explanation: "המשפט 'יורד לחצי' נותן לנו את המקדם ישירות. אין צורך באחוזים.", 
                math_expression: "<div dir='ltr'>q = 0.5</div>" 
            },
            { 
                verbal_explanation: "עלינו לבדוק כמה 'קפיצות' (מחזורים) של זמן התרחשו. אם כל קפיצה לוקחת 4 שעות, ועברו 12 שעות, נחלק כדי למצוא את כמות המחזורים.", 
                math_expression: "<div dir='ltr'>t = 12 / 4 = 3</div>" 
            },
            { 
                verbal_explanation: "נרכיב את התרגיל המעריכי: כמות התחלתית (80) כפול המקדם (0.5) בחזקת 3 מחזורים בלבד.", 
                math_expression: "<div dir='ltr'>80 &times; 0.5<sup>3</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך החזקה השלישית של חצי.", 
                math_expression: "<div dir='ltr'>0.5<sup>3</sup> = 0.125</div>" 
            },
            { 
                verbal_explanation: "נכפול את המספרים שקיבלנו.", 
                math_expression: "<div dir='ltr'>80 &times; 0.125</div>" 
            },
            { 
                verbal_explanation: "נקבל את משקל החומר הסופי שנשאר לאחר 3 מחזורי פירוק.", 
                math_expression: "<div dir='ltr'>10</div>" 
            }
        ],
        final_answer: "10"
    }
];