// ========================================================================
// שאלון 35372 | נושא: סדרות
// פעימה 1: 20 שאלות (תתי נושאים: סדרה חשבונית + סכום סדרה)
// ========================================================================

const questionsDB = [

    // ---------------------------------------------------------
    // תת נושא 1: סדרה חשבונית (שאלות 1-10)
    // ---------------------------------------------------------

    // שאלה 1
    {
        topic: "bagrut_35372",
        subTopic: "סדרה חשבונית",
        question_text: `<strong>מציאת איבר כללי בסדרה חשבונית:</strong><br>
        בסדרה חשבונית, האיבר הראשון הוא 5, והפרש הסדרה הוא 3.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 300 80" width="100%" height="80" style="max-width:300px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <text x="30" y="45" font-family="Arial" font-size="16" font-weight="bold">5</text>
            <text x="70" y="45" font-family="Arial" font-size="16" font-weight="bold">8</text>
            <text x="110" y="45" font-family="Arial" font-size="16" font-weight="bold">11</text>
            <text x="150" y="45" font-family="Arial" font-size="16" font-weight="bold">14</text>
            <text x="190" y="45" font-family="Arial" font-size="16" font-weight="bold">...</text>
            <path d="M 35,25 Q 50,10 65,25" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <polygon points="65,25 60,20 68,18" fill="#3b82f6"/>
            <text x="50" y="15" font-family="Arial" font-size="10" font-weight="bold" fill="#3b82f6" text-anchor="middle">+3</text>
        </svg>
        </div>
        מהו <strong>האיבר ה-10</strong> בסדרה זו?`,
        options: [
            "32",
            "35",
            "30",
            "28"
        ],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת האיבר הכללי: a<sub>n</sub> = a<sub>1</sub> + (n-1)d. הציבו: a<sub>1</sub>=5, d=3, n=10.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את הנתונים מתוך השאלה. האיבר הראשון (a1) והפרש הסדרה (d).", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 5 , d = 3</div>" 
            },
            { 
                verbal_explanation: "אנו מחפשים את האיבר העשירי, לכן מיקומו בסדרה (n) הוא 10.", 
                math_expression: "<div dir='ltr'>n = 10</div>" 
            },
            { 
                verbal_explanation: "נרשום את נוסחת האיבר הכללי של סדרה חשבונית.", 
                math_expression: "<div dir='ltr'>a<sub>n</sub> = a<sub>1</sub> + (n - 1) &times; d</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים שלנו לתוך הנוסחה.", 
                math_expression: "<div dir='ltr'>a<sub>10</sub> = 5 + (10 - 1) &times; 3</div>" 
            },
            { 
                verbal_explanation: "נחשב קודם את מה שבתוך הסוגריים (10 פחות 1 זה 9).", 
                math_expression: "<div dir='ltr'>a<sub>10</sub> = 5 + 9 &times; 3</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ואז נחבר כדי למצוא את האיבר העשירי.", 
                math_expression: "<div dir='ltr'>a<sub>10</sub> = 5 + 27 = 32</div>" 
            }
        ],
        final_answer: "32"
    },

    // שאלה 2
    {
        topic: "bagrut_35372",
        subTopic: "סדרה חשבונית",
        question_text: `<strong>מציאת האיבר הראשון:</strong><br>
        בסדרה חשבונית, האיבר ה-8 הוא 26 (a<sub>8</sub> = 26).<br>
        הפרש הסדרה הוא 4 (d = 4).<br>
        מהו <strong>האיבר הראשון</strong> בסדרה (a<sub>1</sub>)?`,
        options: [
            "-2",
            "2",
            "4",
            "-6"
        ],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחה a<sub>n</sub> = a<sub>1</sub> + (n-1)d. המשוואה תהיה: 26 = a<sub>1</sub> + (8-1)*4. פתרו עבור a<sub>1</sub>.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את הנתונים הידועים לנו מהשאלה.", 
                math_expression: "<div dir='ltr'>a<sub>8</sub> = 26 , d = 4 , n = 8</div>" 
            },
            { 
                verbal_explanation: "נציב את כל הנתונים בנוסחת האיבר הכללי. הנעלם היחיד שיישאר הוא האיבר הראשון.", 
                math_expression: "<div dir='ltr'>26 = a<sub>1</sub> + (8 - 1) &times; 4</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסוגריים (8 פחות 1 שווה 7).", 
                math_expression: "<div dir='ltr'>26 = a<sub>1</sub> + 7 &times; 4</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל (7 כפול 4 שווה 28).", 
                math_expression: "<div dir='ltr'>26 = a<sub>1</sub> + 28</div>" 
            },
            { 
                verbal_explanation: "נעביר את 28 לאגף השני ונחסר אותו מ-26 כדי לבודד את האיבר הראשון.", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 26 - 28 = -2</div>" 
            }
        ],
        final_answer: "-2"
    },

    // שאלה 3
    {
        topic: "bagrut_35372",
        subTopic: "סדרה חשבונית",
        question_text: `<strong>זיהוי הפרש ומציאת איבר רחוק:</strong><br>
        נתונה הסדרה החשבונית הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">7, 11, 15, 19...</div>
        מהו <strong>האיבר ה-20</strong> בסדרה זו?`,
        options: [
            "83",
            "87",
            "79",
            "100"
        ],
        correctAnswer: 0,
        hint: "קודם גלו את ההפרש (d) על ידי חיסור איבר מהאיבר שלפניו (11 פחות 7). לאחר שמצאתם ש-d=4 ו-a<sub>1</sub>=7, הציבו בנוסחה עבור n=20.",
        solution_steps: [
            { 
                verbal_explanation: "תחילה נזהה את האיבר הראשון ישירות מהסדרה המוצגת.", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 7</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את ההפרש (d), נחסר את האיבר הראשון מהשני (או השני מהשלישי).", 
                math_expression: "<div dir='ltr'>d = 11 - 7 = 4</div>" 
            },
            { 
                verbal_explanation: "כעת יש לנו את כל הנתונים. נציב בנוסחת האיבר הכללי עבור מיקום 20.", 
                math_expression: "<div dir='ltr'>a<sub>20</sub> = 7 + (20 - 1) &times; 4</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסוגריים.", 
                math_expression: "<div dir='ltr'>a<sub>20</sub> = 7 + 19 &times; 4</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל (19 כפול 4) ואז נוסיף 7.", 
                math_expression: "<div dir='ltr'>a<sub>20</sub> = 7 + 76 = 83</div>" 
            }
        ],
        final_answer: "83"
    },

    // שאלה 4
    {
        topic: "bagrut_35372",
        subTopic: "סדרה חשבונית",
        question_text: `<strong>מציאת מספר האיברים (n):</strong><br>
        נתונה סדרה חשבונית סופית:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">2, 5, 8, ... , 29</div>
        כמה איברים יש בסדרה זו בסך הכל?`,
        options: [
            "<span dir=\"rtl\">10 איברים</span>",
            "<span dir=\"rtl\">9 איברים</span>",
            "<span dir=\"rtl\">11 איברים</span>",
            "<span dir=\"rtl\">12 איברים</span>"
        ],
        correctAnswer: 0,
        hint: "זהו את הנתונים: האיבר הראשון הוא 2, ההפרש הוא 3 (5-2), והאיבר האחרון (a<sub>n</sub>) הוא 29. הציבו הכל בנוסחה: 29 = 2 + (n-1)*3 ופתרו כדי למצוא את n.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את הנתונים. האיבר הראשון הוא 2. ההפרש הוא 3.", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 2 , d = 3</div>" 
            },
            { 
                verbal_explanation: "האיבר האחרון ידוע לנו. נתייחס אליו כאל האיבר הכללי שאת מיקומו אנו מחפשים.", 
                math_expression: "<div dir='ltr'>a<sub>n</sub> = 29</div>" 
            },
            { 
                verbal_explanation: "נציב הכל בנוסחת האיבר הכללי. הנעלם היחיד שיישאר הוא n.", 
                math_expression: "<div dir='ltr'>29 = 2 + (n - 1) &times; 3</div>" 
            },
            { 
                verbal_explanation: "נעביר את 2 לאגף שמאל ונחסר אותו מ-29.", 
                math_expression: "<div dir='ltr'>27 = (n - 1) &times; 3</div>" 
            },
            { 
                verbal_explanation: "נחלק את שני האגפים ב-3 כדי להיפטר מהכפל.", 
                math_expression: "<div dir='ltr'>9 = n - 1</div>" 
            },
            { 
                verbal_explanation: "נעביר את מינוס אחת אגף ונקבל את מספר האיברים.", 
                math_expression: "<div dir='ltr'>n = 9 + 1 = 10</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">10 איברים</span>"
    },

    // שאלה 5
    {
        topic: "bagrut_35372",
        subTopic: "סדרה חשבונית",
        question_text: `<strong>שאלת יישום מילולית:</strong><br>
        תלמיד החליט לחסוך כסף לקניית אופניים.<br>
        בחודש הראשון הוא חסך 100 שקלים.<br>
        בכל חודש לאחר מכן, הוא הגדיל את החיסכון החודשי שלו ב-50 שקלים קבועים (בחודש השני שמר 150, וכן הלאה).<br>
        כמה כסף הוא יכניס לקופה <strong>בחודש ה-12</strong> בלבד?`,
        options: [
            "<span dir=\"rtl\">650 שקלים</span>",
            "<span dir=\"rtl\">600 שקלים</span>",
            "<span dir=\"rtl\">700 שקלים</span>",
            "<span dir=\"rtl\">550 שקלים</span>"
        ],
        correctAnswer: 0,
        hint: "זוהי סדרה חשבונית! החודש הראשון הוא האיבר הראשון (100). התוספת הקבועה היא ההפרש (50). אנו מחפשים את האיבר ה-12 (a<sub>12</sub>).",
        solution_steps: [
            { 
                verbal_explanation: "נתרגם את הבעיה המילולית לשפת הסדרות. הסכום בחודש הראשון הוא האיבר הראשון.", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 100</div>" 
            },
            { 
                verbal_explanation: "התוספת הקבועה בכל חודש היא הפרש הסדרה.", 
                math_expression: "<div dir='ltr'>d = 50</div>" 
            },
            { 
                verbal_explanation: "אנו מעוניינים לדעת מה קרה בחודש ה-12, כלומר האיבר ה-12.", 
                math_expression: "<div dir='ltr'>n = 12</div>" 
            },
            { 
                verbal_explanation: "נציב הכל בנוסחה.", 
                math_expression: "<div dir='ltr'>a<sub>12</sub> = 100 + (12 - 1) &times; 50</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסוגריים ואת הכפל (11 כפול 50 שווה 550).", 
                math_expression: "<div dir='ltr'>a<sub>12</sub> = 100 + 11 &times; 50 = 100 + 550</div>" 
            },
            { 
                verbal_explanation: "נחבר ונקבל את הסכום ששם התלמיד בחודש זה.", 
                math_expression: "<div dir='ltr'>a<sub>12</sub> = 650</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">650 שקלים</span>"
    },

    // שאלה 6
    {
        topic: "bagrut_35372",
        subTopic: "סדרה חשבונית",
        question_text: `<strong>מציאת ההפרש מתוך שני איברים שאינם עוקבים:</strong><br>
        בסדרה חשבונית נתון כי:<br>
        האיבר ה-3 הוא 10 (a<sub>3</sub> = 10).<br>
        האיבר ה-5 הוא 16 (a<sub>5</sub> = 16).<br>
        מהו <strong>הפרש הסדרה</strong> (d)?`,
        options: [
            "3",
            "6",
            "2",
            "4"
        ],
        correctAnswer: 0,
        hint: "המרחק במיקומים בין האיבר ה-5 לאיבר ה-3 הוא 2 'קפיצות' (5 פחות 3). המרחק במספרים הוא 6 (16 פחות 10). לכן 2 קפיצות שוות ל-6. קפיצה אחת (d) שווה...?",
        solution_steps: [
            { 
                verbal_explanation: "נבדוק בכמה 'קפיצות' (פעמים של הוספת ההפרש) אנחנו מתקדמים מהאיבר השלישי לחמישי.", 
                math_expression: "<div dir='ltr'>5 - 3 = 2</div>" 
            },
            { 
                verbal_explanation: "זה אומר שפעמיים d שווה להפרש בערכים של האיברים עצמם. נחשב את ההפרש בערכים.", 
                math_expression: "<div dir='ltr'>16 - 10 = 6</div>" 
            },
            { 
                verbal_explanation: "נרכיב משוואה: שתי קפיצות שוות לערך של שש.", 
                math_expression: "<div dir='ltr'>2d = 6</div>" 
            },
            { 
                verbal_explanation: "נחלק בשתיים כדי למצוא את ההפרש עבור קפיצה אחת בודדת.", 
                math_expression: "<div dir='ltr'>d = 6 / 2 = 3</div>" 
            }
        ],
        final_answer: "3"
    },

    // שאלה 7
    {
        topic: "bagrut_35372",
        subTopic: "סדרה חשבונית",
        question_text: `<strong>מציאת האיבר הראשון מתוך שני איברים מתקדמים:</strong><br>
        בסדרה חשבונית נתון:<br>
        a<sub>4</sub> = 15<br>
        a<sub>8</sub> = 35<br>
        מהו <strong>האיבר הראשון</strong> (a<sub>1</sub>) בסדרה זו?`,
        options: [
            "0",
            "5",
            "10",
            "-5"
        ],
        correctAnswer: 0,
        hint: "שלב א': מצאו את ההפרש d. (בין איבר 8 לאיבר 4 יש 4 קפיצות. ההפרש בערך הוא 35-15=20. מכאן d=5). שלב ב': 'לכו אחורה' מהאיבר הרביעי לאיבר הראשון בעזרת הנוסחה.",
        solution_steps: [
            { 
                verbal_explanation: "נמצא את הפרש הסדרה (d). נבדוק כמה קפיצות יש בין איבר 8 לאיבר 4.", 
                math_expression: "<div dir='ltr'>8 - 4 = 4</div>" 
            },
            { 
                verbal_explanation: "המרחק המספרי בין שני האיברים הוא עשרים.", 
                math_expression: "<div dir='ltr'>35 - 15 = 20</div>" 
            },
            { 
                verbal_explanation: "ארבע קפיצות שוות לעשרים, לכן קפיצה אחת (d) שווה חמש.", 
                math_expression: "<div dir='ltr'>4d = 20 &nbsp;&#10132;&nbsp; d = 5</div>" 
            },
            { 
                verbal_explanation: "כעת נמצא את האיבר הראשון בעזרת a4 והנוסחה. נציב את מה שידוע לנו.", 
                math_expression: "<div dir='ltr'>a<sub>4</sub> = a<sub>1</sub> + 3d</div>" 
            },
            { 
                verbal_explanation: "נציב את הערך של a4 ואת ה-d שמצאנו.", 
                math_expression: "<div dir='ltr'>15 = a<sub>1</sub> + 3 &times; 5</div>" 
            },
            { 
                verbal_explanation: "נעביר את 15 לאגף השני ונחסר אותו.", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 15 - 15 = 0</div>" 
            }
        ],
        final_answer: "0"
    },

    // שאלה 8
    {
        topic: "bagrut_35372",
        subTopic: "סדרה חשבונית",
        question_text: `<strong>התמודדות עם הפרש שלילי (סדרה יורדת):</strong><br>
        נתונה הסדרה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">20, 17, 14, 11...</div>
        מהו <strong>האיבר ה-15</strong> (a<sub>15</sub>) בסדרה?`,
        options: [
            "-22",
            "-20",
            "62",
            "-25"
        ],
        correctAnswer: 0,
        hint: "הסדרה יורדת, כלומר ההפרש הוא מספר שלילי. 17 פחות 20 נותן מינוס 3 (d=-3). הציבו את המינוס בזהירות בנוסחה: 20 פלוס 14 כפול (מינוס 3).",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את האיבר הראשון בסדרה.", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 20</div>" 
            },
            { 
                verbal_explanation: "נחשב את ההפרש על ידי חיסור האיבר הראשון מהשני. נקבל מספר שלילי מכיוון שהסדרה יורדת.", 
                math_expression: "<div dir='ltr'>d = 17 - 20 = -3</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בנוסחה למציאת האיבר החמישה עשר.", 
                math_expression: "<div dir='ltr'>a<sub>15</sub> = 20 + (15 - 1) &times; (-3)</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסוגריים.", 
                math_expression: "<div dir='ltr'>a<sub>15</sub> = 20 + 14 &times; (-3)</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל. מספר חיובי כפול שלילי נותן תוצאה שלילית.", 
                math_expression: "<div dir='ltr'>14 &times; (-3) = -42</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור מ-20 לקבלת התשובה הסופית.", 
                math_expression: "<div dir='ltr'>a<sub>15</sub> = 20 - 42 = -22</div>" 
            }
        ],
        final_answer: "-22"
    },

    // שאלה 9
    {
        topic: "bagrut_35372",
        subTopic: "סדרה חשבונית",
        question_text: `<strong>בדיקה האם מספר נמצא בסדרה:</strong><br>
        בסדרה חשבונית האיבר הראשון הוא 3, וההפרש הוא 4.<br>
        האם המספר <strong>32</strong> יכול להיות אחד מאיברי הסדרה?`,
        options: [
            "<span dir=\"rtl\">לא, מכיוון שהמיקום שיצא אינו מספר שלם חיובי</span>",
            "<span dir=\"rtl\">כן, זהו האיבר ה-8</span>",
            "<span dir=\"rtl\">כן, זהו האיבר ה-9</span>",
            "<span dir=\"rtl\">לא, מכיוון שהמספר 32 הוא זוגי</span>"
        ],
        correctAnswer: 0,
        hint: "הציבו את 32 בתור a<sub>n</sub> ונסו למצוא את n (המיקום). אם ה-n יוצא מספר שלם וחיובי (למשל האיבר ה-5), הוא בסדרה. אם ה-n יוצא שבר (כמו 7.25), המספר לא בסדרה, כי אין דבר כזה 'האיבר במקום השבע ורבע'.",
        solution_steps: [
            { 
                verbal_explanation: "נציב את הנתונים למשוואה כאילו אנו יודעים ש-32 נמצא בסדרה, וננסה למצוא את המיקום שלו (n).", 
                math_expression: "<div dir='ltr'>32 = 3 + (n - 1) &times; 4</div>" 
            },
            { 
                verbal_explanation: "נעביר את ה-3 לאגף השמאלי ונחסר אותו.", 
                math_expression: "<div dir='ltr'>29 = (n - 1) &times; 4</div>" 
            },
            { 
                verbal_explanation: "נחלק את המשוואה ב-4.", 
                math_expression: "<div dir='ltr'>n - 1 = 29 / 4</div>" 
            },
            { 
                verbal_explanation: "התוצאה של החילוק היא 7.25.", 
                math_expression: "<div dir='ltr'>n - 1 = 7.25 &nbsp;&#10132;&nbsp; n = 8.25</div>" 
            },
            { 
                verbal_explanation: "n חייב להיות מספר טבעי שלם (מיקום של איבר). כיוון שקיבלנו שבר, המספר כלל לא מופיע בסדרה.", 
                math_expression: "<div dir='ltr'>8.25 <bdi dir='rtl'>אינו שלם</bdi></div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">לא, מכיוון שהמיקום שיצא אינו מספר שלם</span>"
    },

    // שאלה 10
    {
        topic: "bagrut_35372",
        subTopic: "סדרה חשבונית",
        question_text: `<strong>הבנת סדרה מתוך מודל גיאומטרי:</strong><br>
        קבלן בונה גרם מדרגות מלבנים. <br>
        במדרגה הראשונה (העליונה ביותר) הוא מניח 5 לבנים.<br>
        במדרגה השנייה הוא מניח 7 לבנים.<br>
        במדרגה השלישית הוא מניח 9 לבנים, וכן הלאה.<br>
        כמה לבנים הוא יניח <strong>במדרגה ה-8</strong>?`,
        options: [
            "<span dir=\"rtl\">19 לבנים</span>",
            "<span dir=\"rtl\">21 לבנים</span>",
            "<span dir=\"rtl\">15 לבנים</span>",
            "<span dir=\"rtl\">17 לבנים</span>"
        ],
        correctAnswer: 0,
        hint: "תרגמו את הבעיה לסדרה מתמטית: 5, 7, 9... זה אומר שהאיבר הראשון הוא 5, וההפרש הוא 2. חשבו את האיבר ה-8 בעזרת הנוסחה.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את הנתונים מתוך הסיפור. כמות הלבנים במדרגה הראשונה היא האיבר הראשון.", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 5</div>" 
            },
            { 
                verbal_explanation: "בכל מדרגה מתווספות שתי לבנים לעומת המדרגה הקודמת. זהו ההפרש.", 
                math_expression: "<div dir='ltr'>d = 7 - 5 = 2</div>" 
            },
            { 
                verbal_explanation: "אנו מחפשים את כמות הלבנים במדרגה השמינית.", 
                math_expression: "<div dir='ltr'>n = 8</div>" 
            },
            { 
                verbal_explanation: "נציב הכל בנוסחת האיבר הכללי.", 
                math_expression: "<div dir='ltr'>a<sub>8</sub> = 5 + (8 - 1) &times; 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסוגריים והכפל.", 
                math_expression: "<div dir='ltr'>a<sub>8</sub> = 5 + 7 &times; 2 = 5 + 14</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיבור ונקבל את הכמות הנדרשת.", 
                math_expression: "<div dir='ltr'>a<sub>8</sub> = 19</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">19 לבנים</span>"
    },

    // ---------------------------------------------------------
    // תת נושא 2: סכום סדרה (שאלות 11-20)
    // ---------------------------------------------------------

    // שאלה 11
    {
        topic: "bagrut_35372",
        subTopic: "סכום סדרה",
        question_text: `<strong>חישוב סכום סדרה כאשר האיבר הראשון והאחרון ידועים:</strong><br>
        בסדרה חשבונית יש 10 איברים בסך הכל (n = 10).<br>
        האיבר הראשון בסדרה הוא 2.<br>
        האיבר האחרון (העשירי) בסדרה הוא 29.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 80" width="100%" height="80" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <text x="125" y="45" font-family="Arial" font-size="16" font-weight="bold" fill="#1d4ed8" text-anchor="middle">S&#8340; = n &times; (a&#8321; + a&#8340;) / 2</text>
        </svg>
        </div>
        מהו <strong>סכום</strong> כל 10 איברי הסדרה?`,
        options: [
            "155",
            "310",
            "145",
            "290"
        ],
        correctAnswer: 0,
        hint: "הנוסחה הקצרה לסכום סדרה היא: מספר האיברים כפול (האיבר הראשון + האיבר האחרון), וכל זה חלקי 2. הציבו: 10 כפול (2 + 29), לחלק ב-2.",
        solution_steps: [
            { 
                verbal_explanation: "כאשר האיבר הראשון והאחרון ידועים, ניתן להשתמש בנוסחת הסכום הקצרה של גאוס.", 
                math_expression: "<div dir='ltr'>S<sub>n</sub> = n &times; (a<sub>1</sub> + a<sub>n</sub>) / 2</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים הידועים לנו מהשאלה למשוואה.", 
                math_expression: "<div dir='ltr'>S<sub>10</sub> = 10 &times; (2 + 29) / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב תחילה את הסכום בתוך הסוגריים.", 
                math_expression: "<div dir='ltr'>S<sub>10</sub> = 10 &times; 31 / 2</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל במונה (עשר כפול שלושים ואחת).", 
                math_expression: "<div dir='ltr'>S<sub>10</sub> = 310 / 2</div>" 
            },
            { 
                verbal_explanation: "נחלק בשתיים לקבלת הסכום הכולל של הסדרה.", 
                math_expression: "<div dir='ltr'>S<sub>10</sub> = 155</div>" 
            }
        ],
        final_answer: "155"
    },

    // שאלה 12
    {
        topic: "bagrut_35372",
        subTopic: "סכום סדרה",
        question_text: `<strong>חישוב סכום בעזרת הנוסחה המלאה (כשהאיבר האחרון חסר):</strong><br>
        בסדרה חשבונית, האיבר הראשון הוא 5, וההפרש הוא 3.<br>
        מהו הסכום של <strong>20 האיברים הראשונים</strong> בסדרה זו?`,
        options: [
            "670",
            "700",
            "640",
            "1340"
        ],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה המלאה המשלבת את ההפרש: Sn = (n/2) * [2*a1 + (n-1)*d]. הציבו: n=20, a1=5, d=3. פתרו קודם את מה שבתוך הסוגריים המרובעים.",
        solution_steps: [
            { 
                verbal_explanation: "מכיוון שהאיבר האחרון אינו נתון, נשתמש בנוסחת הסכום המלאה המבוססת על ההפרש.", 
                math_expression: "<div dir='ltr'>S<sub>n</sub> = (n / 2) &times; [2a<sub>1</sub> + (n - 1)d]</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים הידועים: האיבר הראשון, ההפרש, וכמות האיברים.", 
                math_expression: "<div dir='ltr'>S<sub>20</sub> = (20 / 2) &times; [2 &times; 5 + (20 - 1) &times; 3]</div>" 
            },
            { 
                verbal_explanation: "נחשב את החלוקה שבחוץ ואת הסוגריים הפנימיים.", 
                math_expression: "<div dir='ltr'>S<sub>20</sub> = 10 &times; [10 + 19 &times; 3]</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל שבתוך הסוגריים המרובעים (תשע עשרה כפול שלוש).", 
                math_expression: "<div dir='ltr'>S<sub>20</sub> = 10 &times; [10 + 57]</div>" 
            },
            { 
                verbal_explanation: "נחבר בתוך הסוגריים, ולבסוף נכפיל בעשר.", 
                math_expression: "<div dir='ltr'>S<sub>20</sub> = 10 &times; 67 = 670</div>" 
            }
        ],
        final_answer: "670"
    },

    // שאלה 13
    {
        topic: "bagrut_35372",
        subTopic: "סכום סדרה",
        question_text: `<strong>שאלת אתגר - חישוב רצף מספרים (סכום גאוס):</strong><br>
        ילד התבקש לחבר את כל המספרים השלמים מ-1 עד 100.<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">1 + 2 + 3 + ... + 100 = ?</div>
        כמה זה יוצא בסך הכל? (נסו להשתמש בנוסחת הסכום!)`,
        options: [
            "5050",
            "10000",
            "5000",
            "4950"
        ],
        correctAnswer: 0,
        hint: "המספרים מ-1 עד 100 יוצרים סדרה חשבונית פשוטה. האיבר הראשון הוא 1. האיבר האחרון הוא 100. כמות האיברים היא 100. הציבו בנוסחה הקצרה של ממוצע הקצוות כפול הכמות.",
        solution_steps: [
            { 
                verbal_explanation: "רצף המספרים מתנהג כמו סדרה חשבונית שבה ההפרש הוא 1. נזהה את נתוני הקצוות.", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 1 , a<sub>n</sub> = 100 , n = 100</div>" 
            },
            { 
                verbal_explanation: "נשתמש בנוסחת הסכום הקצרה המחברת את האיבר הראשון והאחרון.", 
                math_expression: "<div dir='ltr'>S<sub>100</sub> = 100 &times; (1 + 100) / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסכום בסוגריים.", 
                math_expression: "<div dir='ltr'>S<sub>100</sub> = 100 &times; 101 / 2</div>" 
            },
            { 
                verbal_explanation: "נחלק את מאה בשתיים (כדי להקל על הכפל).", 
                math_expression: "<div dir='ltr'>S<sub>100</sub> = 50 &times; 101</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל הסופי ונגלה את הסכום של מאה המספרים הראשונים.", 
                math_expression: "<div dir='ltr'>S<sub>100</sub> = 5050</div>" 
            }
        ],
        final_answer: "5050"
    },

    // שאלה 14
    {
        topic: "bagrut_35372",
        subTopic: "סכום סדרה",
        question_text: `<strong>מציאת כמות האיברים (n) מתוך סכום:</strong><br>
        ידוע כי סכום סדרה חשבונית הוא 150 (S<sub>n</sub> = 150).<br>
        האיבר הראשון הוא 5, והאיבר האחרון הוא 25.<br>
        כמה <strong>איברים</strong> יש בסדרה זו?`,
        options: [
            "<span dir=\"rtl\">10 איברים</span>",
            "<span dir=\"rtl\">15 איברים</span>",
            "<span dir=\"rtl\">5 איברים</span>",
            "<span dir=\"rtl\">12 איברים</span>"
        ],
        correctAnswer: 0,
        hint: "בנו משוואה על פי נוסחת הסכום הקצרה: 150 שווה n כפול (5 פלוס 25) חלקי 2. חשבו את הסוגריים. הכפילו ב-2 וחילקו למציאת n.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את נוסחת הסכום התלויה באיבר הראשון והאחרון הנתונים לנו.", 
                math_expression: "<div dir='ltr'>S<sub>n</sub> = n &times; (a<sub>1</sub> + a<sub>n</sub>) / 2</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים, כאשר הפעם דווקא מספר האיברים (n) חסר לנו.", 
                math_expression: "<div dir='ltr'>150 = n &times; (5 + 25) / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את החיבור בסוגריים.", 
                math_expression: "<div dir='ltr'>150 = n &times; 30 / 2</div>" 
            },
            { 
                verbal_explanation: "נחלק את 30 ב-2 ונפשט את המשוואה.", 
                math_expression: "<div dir='ltr'>150 = 15n</div>" 
            },
            { 
                verbal_explanation: "נחלק את המשוואה ב-15 כדי לבודד את כמות האיברים.", 
                math_expression: "<div dir='ltr'>n = 150 / 15 = 10</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">10 איברים</span>"
    },

    // שאלה 15
    {
        topic: "bagrut_35372",
        subTopic: "סכום סדרה",
        question_text: `<strong>סכום סדרה שמתחילה במספרים שליליים:</strong><br>
        נתונה הסדרה החשבונית הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">-10, -8, -6, -4...</div>
        חשבו את הסכום של <strong>15 האיברים הראשונים</strong> בסדרה זו.`,
        options: [
            "60",
            "150",
            "-60",
            "90"
        ],
        correctAnswer: 0,
        hint: "האיבר הראשון שלילי (-10). ההפרש חיובי (פלוס 2). הציבו בנוסחה המלאה: n=15, a1=-10, d=2. הקפידו על סימני המינוס בעת ההכפלה.",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את הנתונים הבסיסיים. האיבר הראשון שלילי. ההפרש הוא חיובי (כי הסדרה עולה ממינוס עשר למינוס שמונה).", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = -10 , d = 2 , n = 15</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בנוסחת הסכום המלאה.", 
                math_expression: "<div dir='ltr'>S<sub>15</sub> = (15 / 2) &times; [2 &times; (-10) + (15 - 1) &times; 2]</div>" 
            },
            { 
                verbal_explanation: "נחשב את החלוקה שבחוץ ואת ההכפלה במינוס שבפנים.", 
                math_expression: "<div dir='ltr'>S<sub>15</sub> = 7.5 &times; [-20 + 14 &times; 2]</div>" 
            },
            { 
                verbal_explanation: "נחשב את הכפל בתוך הסוגריים.", 
                math_expression: "<div dir='ltr'>S<sub>15</sub> = 7.5 &times; [-20 + 28]</div>" 
            },
            { 
                verbal_explanation: "נחבר את המספרים בסוגריים ונקבל ערך חיובי.", 
                math_expression: "<div dir='ltr'>S<sub>15</sub> = 7.5 &times; 8</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל הסופי (אפשר להשתמש במחשבון או להכפיל 7 בשמונה ולהוסיף חצי משמונה).", 
                math_expression: "<div dir='ltr'>S<sub>15</sub> = 60</div>" 
            }
        ],
        final_answer: "60"
    },

    // שאלה 16
    {
        topic: "bagrut_35372",
        subTopic: "סכום סדרה",
        question_text: `<strong>שאלת יישום מילולית (סכום - אולם תיאטרון):</strong><br>
        באולם תיאטרון מסודרים כיסאות בשורות. <br>
        בשורה הראשונה יש 20 כיסאות.<br>
        בכל שורה יש 4 כיסאות <strong>יותר</strong> מאשר בשורה שלפניה.<br>
        באולם יש 10 שורות בסך הכל.<br>
        כמה כיסאות יש <strong>בכל האולם יחד</strong>?`,
        options: [
            "<span dir=\"rtl\">380 כיסאות</span>",
            "<span dir=\"rtl\">400 כיסאות</span>",
            "<span dir=\"rtl\">56 כיסאות</span>",
            "<span dir=\"rtl\">240 כיסאות</span>"
        ],
        correctAnswer: 0,
        hint: "כאשר שואלים על 'הסך הכל יחד', מדובר בחישוב סכום (Sn) של סדרה חשבונית! a1=20, d=4, n=10. הציבו הכל בנוסחת הסכום המלאה.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את הנתונים מתוך הסיפור. שורה ראשונה היא האיבר הראשון, תוספת הכיסאות היא ההפרש, וכמות השורות היא n.", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 20 , d = 4 , n = 10</div>" 
            },
            { 
                verbal_explanation: "מכיוון שמבקשים את סך כל הכיסאות, נשתמש בנוסחת הסכום המלאה.", 
                math_expression: "<div dir='ltr'>S<sub>10</sub> = (10 / 2) &times; [2 &times; 20 + (10 - 1) &times; 4]</div>" 
            },
            { 
                verbal_explanation: "נחשב את הביטויים הבסיסיים.", 
                math_expression: "<div dir='ltr'>S<sub>10</sub> = 5 &times; [40 + 9 &times; 4]</div>" 
            },
            { 
                verbal_explanation: "נחשב את הכפל בסוגריים.", 
                math_expression: "<div dir='ltr'>S<sub>10</sub> = 5 &times; [40 + 36]</div>" 
            },
            { 
                verbal_explanation: "נחבר את המספרים בתוך הסוגריים המרובעים.", 
                math_expression: "<div dir='ltr'>S<sub>10</sub> = 5 &times; 76</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל הסופי לקבלת כלל הכיסאות באולם.", 
                math_expression: "<div dir='ltr'>S<sub>10</sub> = 380</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">380 כיסאות</span>"
    },

    // שאלה 17
    {
        topic: "bagrut_35372",
        subTopic: "סכום סדרה",
        question_text: `<strong>שאלת יישום מילולית (סכום משכורות):</strong><br>
        עובד חתם על חוזה עבודה לשנה (12 חודשים).<br>
        בחודש הראשון משכורתו היא 5,000 שקלים.<br>
        מובטח לו שבכל חודש הוא יקבל תוספת של 100 שקלים לעומת החודש הקודם.<br>
        מהו <strong>הסכום הכולל</strong> של הכסף שירוויח במשך שנת עבודה שלמה?`,
        options: [
            "<span dir=\"rtl\">66,600 שקלים</span>",
            "<span dir=\"rtl\">60,000 שקלים</span>",
            "<span dir=\"rtl\">6,100 שקלים</span>",
            "<span dir=\"rtl\">65,000 שקלים</span>"
        ],
        correctAnswer: 0,
        hint: "הציבו בנוסחת הסכום (Sn) כאשר n=12 (מספר חודשי עבודה), a1=5000, ו-d=100. זה יחבר את כל המשכורות שלו יחד.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את הנתונים הפיננסיים: משכורת בסיס (a1), קצב עלייה (d) וזמן (n=12 חודשים).", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 5000 , d = 100 , n = 12</div>" 
            },
            { 
                verbal_explanation: "נציב את הערכים בנוסחת הסכום הכולל.", 
                math_expression: "<div dir='ltr'>S<sub>12</sub> = (12 / 2) &times; [2 &times; 5000 + (12 - 1) &times; 100]</div>" 
            },
            { 
                verbal_explanation: "נפשט את התרגיל צעד אחר צעד.", 
                math_expression: "<div dir='ltr'>S<sub>12</sub> = 6 &times; [10000 + 11 &times; 100]</div>" 
            },
            { 
                verbal_explanation: "נחשב את הכפל ואת החיבור שבתוך הסוגריים.", 
                math_expression: "<div dir='ltr'>S<sub>12</sub> = 6 &times; [10000 + 1100] = 6 &times; 11100</div>" 
            },
            { 
                verbal_explanation: "נכפול ב-6 ונקבל את הרווח השנתי המצטבר של העובד.", 
                math_expression: "<div dir='ltr'>S<sub>12</sub> = 66600</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">66,600 שקלים</span>"
    },

    // שאלה 18
    {
        topic: "bagrut_35372",
        subTopic: "סכום סדרה",
        question_text: `<strong>שאלת אתגר - סכום אי-זוגיים בלבד:</strong><br>
        מהו הסכום של כל המספרים <strong>האי-זוגיים</strong> מ-1 עד 49 (כולל)?<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">1 + 3 + 5 + ... + 49</div>
        (רמז: מצאו קודם כמה מספרים אי זוגיים כאלה קיימים על ידי נוסחת האיבר הכללי, ואז חשבו את סכומם).`,
        options: [
            "625",
            "1250",
            "600",
            "2450"
        ],
        correctAnswer: 0,
        hint: "בסדרה זו a1=1, d=2, an=49. מצאו את n: משוואה 49 = 1 + (n-1)*2. תגלו שיש 25 מספרים כאלה. לאחר מכן הציבו n=25, a1=1, a25=49 בנוסחת הסכום הקצרה.",
        solution_steps: [
            { 
                verbal_explanation: "מספרים אי זוגיים עוקבים יוצרים סדרה חשבונית שבה הקפיצה היא 2. נרשום את הנתונים הידועים.", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 1 , d = 2 , a<sub>n</sub> = 49</div>" 
            },
            { 
                verbal_explanation: "תחילה חייבים לגלות כמה איברים יש. נשתמש בנוסחת האיבר הכללי ונציב את האיבר האחרון כתוצאה.", 
                math_expression: "<div dir='ltr'>49 = 1 + (n - 1) &times; 2</div>" 
            },
            { 
                verbal_explanation: "נעביר את 1 ונחלק ב-2.", 
                math_expression: "<div dir='ltr'>48 = (n - 1) &times; 2 &nbsp;&#10132;&nbsp; 24 = n - 1</div>" 
            },
            { 
                verbal_explanation: "גילינו שיש 25 מספרים אי-זוגיים בסדרה.", 
                math_expression: "<div dir='ltr'>n = 25</div>" 
            },
            { 
                verbal_explanation: "כעת נחשב את הסכום שלהם בעזרת הנוסחה הקצרה (כי יש לנו את ההתחלה והסוף).", 
                math_expression: "<div dir='ltr'>S<sub>25</sub> = 25 &times; (1 + 49) / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את הסוגריים, נחלק ונכפיל.", 
                math_expression: "<div dir='ltr'>S<sub>25</sub> = 25 &times; 50 / 2 = 25 &times; 25 = 625</div>" 
            }
        ],
        final_answer: "625"
    },

    // שאלה 19
    {
        topic: "bagrut_35372",
        subTopic: "סכום סדרה",
        question_text: `<strong>מציאת האיבר הראשון מתוך הסכום (משוואה):</strong><br>
        סכום של 10 האיברים הראשונים בסדרה חשבונית הוא 210.<br>
        הפרש הסדרה הוא 4.<br>
        מהו <strong>האיבר הראשון</strong> בסדרה?`,
        options: [
            "3",
            "5",
            "1",
            "-2"
        ],
        correctAnswer: 0,
        hint: "הציבו בנוסחת הסכום המלאה: 210 שווה (10 חלקי 2) כפול [שתיים a1 ועוד 9 כפול 4]. כלומר, 210 שווה 5 כפול (2a1 + 36). חלקו ב-5 ופתרו את המשוואה עבור a1.",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את הנתונים הידועים: הסכום, כמות האיברים, וההפרש.", 
                math_expression: "<div dir='ltr'>S<sub>10</sub> = 210 , n = 10 , d = 4</div>" 
            },
            { 
                verbal_explanation: "נציב בנוסחת הסכום המלאה, כאשר האיבר הראשון הוא הנעלם במשוואה זו.", 
                math_expression: "<div dir='ltr'>210 = (10 / 2) &times; [2a<sub>1</sub> + (10 - 1) &times; 4]</div>" 
            },
            { 
                verbal_explanation: "נפשט את הביטויים (10 חלקי 2 זה 5, והכפל בפנים נותן 36).", 
                math_expression: "<div dir='ltr'>210 = 5 &times; [2a<sub>1</sub> + 36]</div>" 
            },
            { 
                verbal_explanation: "נחלק את שני האגפים ב-5 כדי לבטל את הכפל שמחוץ לסוגריים.", 
                math_expression: "<div dir='ltr'>42 = 2a<sub>1</sub> + 36</div>" 
            },
            { 
                verbal_explanation: "נעביר אגפים ונבודד את האיבר הראשון.", 
                math_expression: "<div dir='ltr'>2a<sub>1</sub> = 42 - 36 = 6</div>" 
            },
            { 
                verbal_explanation: "נחלק ב-2 למציאת התשובה.", 
                math_expression: "<div dir='ltr'>a<sub>1</sub> = 3</div>" 
            }
        ],
        final_answer: "3"
    },

    // שאלה 20
    {
        topic: "bagrut_35372",
        subTopic: "סכום סדרה",
        question_text: `<strong>הבנת הקשר בין סכומים עוקבים לאיבר הבודד:</strong><br>
        בסדרה חשבונית ידוע הנתון הבא:<br>
        סכום 10 האיברים הראשונים הוא 100 (S<sub>10</sub> = 100).<br>
        סכום 9 האיברים הראשונים הוא 85 (S<sub>9</sub> = 85).<br>
        מהו ערכו של <strong>האיבר העשירי</strong> עצמו (a<sub>10</sub>)?`,
        options: [
            "15",
            "10",
            "85",
            "185"
        ],
        correctAnswer: 0,
        hint: "חשבו בהיגיון: הקבוצה של 10 האיברים שוקלת 100. הקבוצה של 9 האיברים שוקלת 85. מה ההבדל בין שתי הקבוצות? בדיוק האיבר ה-10! פשוט חסרו את הסכומים זה מזה.",
        solution_steps: [
            { 
                verbal_explanation: "לפנינו חוק מתמטי חשוב בסדרות: ההפרש בין סכום של N איברים לסכום של (N-1) איברים שווה לאיבר האחרון בעצמו.", 
                math_expression: "<div dir='ltr'>a<sub>n</sub> = S<sub>n</sub> - S<sub>n-1</sub></div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את האיבר העשירי, כל מה שעלינו לעשות הוא לחסר את סכום תשעת האיברים מתוך הסכום הכולל של עשרת האיברים.", 
                math_expression: "<div dir='ltr'>a<sub>10</sub> = S<sub>10</sub> - S<sub>9</sub></div>" 
            },
            { 
                verbal_explanation: "נציב את המספרים שניתנו בשאלה.", 
                math_expression: "<div dir='ltr'>a<sub>10</sub> = 100 - 85</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור הפשוט ונגלה את הערך המדויק של האיבר העשירי העומד לבדו.", 
                math_expression: "<div dir='ltr'>a<sub>10</sub> = 15</div>" 
            }
        ],
        final_answer: "15"
    }
];