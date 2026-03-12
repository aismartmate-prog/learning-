// ========================================================================
// שאלון 35372 | נושא: משוואות ריבועיות
// פעימה 1: 20 שאלות (תת נושא: נוסחת השורשים)
// ========================================================================

const questionsDB = [

    // שאלה 1
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>הצבה בסיסית בנוסחת השורשים (2 פתרונות חיוביים):</strong><br>
        פתרו את המשוואה הריבועית הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">x<sup>2</sup> - 7x + 10 = 0</div>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 300 80" width="100%" height="80" style="max-width:300px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <text x="150" y="45" font-family="Arial" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">x = (-b &plusmn; &radic;(b&sup2; - 4ac)) / 2a</text>
        </svg>
        </div>
        מהם פתרונות המשוואה?`,
        options: [
            "x = 5 <bdi dir=\"rtl\">וגם</bdi> x = 2",
            "x = -5 <bdi dir=\"rtl\">וגם</bdi> x = -2",
            "x = 10 <bdi dir=\"rtl\">וגם</bdi> x = 1",
            "x = 7 <bdi dir=\"rtl\">וגם</bdi> x = 10"
        ],
        correctAnswer: 0,
        hint: "זהו את הפרמטרים: a=1, b=-7, c=10. הציבו אותם בזהירות בנוסחה. שימו לב שמינוס b הופך ל-7 חיובי. חשבו את הביטוי שבתוך השורש תחילה.",
        solution_steps: [
            { 
                verbal_explanation: "כדי לפתור משוואה ריבועית, נזהה תחילה את שלושת המקדמים (הפרמטרים) מתוך המשוואה המסודרת.", 
                math_expression: "<div dir='ltr'>a = 1 , b = -7 , c = 10</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים לתוך נוסחת השורשים. נשים לב שמינוס לפני ה-b הופך את מינוס 7 לפלוס 7.", 
                math_expression: "<div dir='ltr'>x = ( 7 &plusmn; &radic;((-7)<sup>2</sup> - 4 &times; 1 &times; 10) ) / (2 &times; 1)</div>" 
            },
            { 
                verbal_explanation: "נחשב את הביטוי שנמצא בתוך השורש: מינוס 7 בריבוע זה 49, ומכפלת המספרים היא 40.", 
                math_expression: "<div dir='ltr'>49 - 40 = 9</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי מהתוצאה שקיבלנו.", 
                math_expression: "<div dir='ltr'>&radic;9 = 3</div>" 
            },
            { 
                verbal_explanation: "נרשום את הנוסחה מחדש לאחר שפתרנו את השורש. כעת נפצל אותה לשני פתרונות אפשריים (אחד עם פלוס ואחד עם מינוס).", 
                math_expression: "<div dir='ltr'>x = ( 7 &plusmn; 3 ) / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את הפתרון הראשון עם סימן החיבור (פלוס). עשר חלקי שתיים.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = ( 7 + 3 ) / 2 = 5</div>" 
            },
            { 
                verbal_explanation: "נחשב את הפתרון השני עם סימן החיסור (מינוס). ארבע חלקי שתיים.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = ( 7 - 3 ) / 2 = 2</div>" 
            }
        ],
        final_answer: "x = 5 <bdi dir=\"rtl\">וגם</bdi> x = 2"
    },

    // שאלה 2
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>משוואה עם פתרונות שליליים:</strong><br>
        פתרו את המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">x<sup>2</sup> + 6x + 8 = 0</div>
        מהם ערכי x המקיימים את המשוואה?`,
        options: [
            "x = -2 <bdi dir=\"rtl\">וגם</bdi> x = -4",
            "x = 2 <bdi dir=\"rtl\">וגם</bdi> x = 4",
            "x = -6 <bdi dir=\"rtl\">וגם</bdi> x = -8",
            "x = 6 <bdi dir=\"rtl\">וגם</bdi> x = 8"
        ],
        correctAnswer: 0,
        hint: "הפעם b חיובי (6), לכן בתחילת הנוסחה יופיע מינוס 6. חשבו את תוכן השורש: 6 בריבוע פחות 4 כפול 1 כפול 8.",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את המקדמים מתוך המשוואה.", 
                math_expression: "<div dir='ltr'>a = 1 , b = 6 , c = 8</div>" 
            },
            { 
                verbal_explanation: "נציב בנוסחת השורשים. b הוא 6 חיובי, ולכן בתחילת הנוסחה יירשם מינוס 6.", 
                math_expression: "<div dir='ltr'>x = ( -6 &plusmn; &radic;(6<sup>2</sup> - 4 &times; 1 &times; 8) ) / (2 &times; 1)</div>" 
            },
            { 
                verbal_explanation: "נפתור את התרגיל שמתחת לשורש: שלושים ושש פחות שלושים ושתיים.", 
                math_expression: "<div dir='ltr'>36 - 32 = 4</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי למספר שקיבלנו.", 
                math_expression: "<div dir='ltr'>&radic;4 = 2</div>" 
            },
            { 
                verbal_explanation: "נכתוב את הנוסחה המפושטת המוכנה לפיצול.", 
                math_expression: "<div dir='ltr'>x = ( -6 &plusmn; 2 ) / 2</div>" 
            },
            { 
                verbal_explanation: "הפתרון הראשון (חיבור): מינוס ארבע לחלק לשתיים.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = ( -6 + 2 ) / 2 = -2</div>" 
            },
            { 
                verbal_explanation: "הפתרון השני (חיסור): מינוס שמונה לחלק לשתיים.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = ( -6 - 2 ) / 2 = -4</div>" 
            }
        ],
        final_answer: "x = -2 <bdi dir=\"rtl\">וגם</bdi> x = -4"
    },

    // שאלה 3
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>משוואה שבה המקדם a אינו 1:</strong><br>
        פתרו את המשוואה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">2x<sup>2</sup> - 10x + 12 = 0</div>
        מהם שורשי המשוואה (הפתרונות)?`,
        options: [
            "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = 2",
            "x = -3 <bdi dir=\"rtl\">וגם</bdi> x = -2",
            "x = 6 <bdi dir=\"rtl\">וגם</bdi> x = 1",
            "x = 4 <bdi dir=\"rtl\">וגם</bdi> x = 2.5"
        ],
        correctAnswer: 0,
        hint: "שימו לב שהפעם a=2 (ולא 1). הקפידו להכפיל בו בתוך השורש (4 כפול 2 כפול 12) ובמכנה (2 כפול 2 שווה 4). אפשר גם לחלק את כל המשוואה ב-2 מראש כדי להקל על החישובים!",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את שלושת הפרמטרים במשוואה הנתונה.", 
                math_expression: "<div dir='ltr'>a = 2 , b = -10 , c = 12</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בנוסחה.", 
                math_expression: "<div dir='ltr'>x = ( 10 &plusmn; &radic;((-10)<sup>2</sup> - 4 &times; 2 &times; 12) ) / (2 &times; 2)</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך הביטוי הפנימי שבתוך השורש: מאה פחות תשעים ושש.", 
                math_expression: "<div dir='ltr'>100 - 96 = 4</div>" 
            },
            { 
                verbal_explanation: "נחשב את השורש של התוצאה.", 
                math_expression: "<div dir='ltr'>&radic;4 = 2</div>" 
            },
            { 
                verbal_explanation: "נרשום את התבנית המפושטת לקראת מציאת שני הפתרונות. שימו לב שהמכנה הפעם הוא 4.", 
                math_expression: "<div dir='ltr'>x = ( 10 &plusmn; 2 ) / 4</div>" 
            },
            { 
                verbal_explanation: "האפשרות עם הפלוס: שנים עשר לחלק לארבע.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = ( 10 + 2 ) / 4 = 3</div>" 
            },
            { 
                verbal_explanation: "האפשרות עם המינוס: שמונה לחלק לארבע.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = ( 10 - 2 ) / 4 = 2</div>" 
            }
        ],
        final_answer: "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = 2"
    },

    // שאלה 4
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>משוואה שבה מקדם a הוא שלילי:</strong><br>
        פתרו את המשוואה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">-x<sup>2</sup> + 8x - 15 = 0</div>
        מהם הפתרונות למשוואה זו?`,
        options: [
            "x = 5 <bdi dir=\"rtl\">וגם</bdi> x = 3",
            "x = -5 <bdi dir=\"rtl\">וגם</bdi> x = -3",
            "x = 15 <bdi dir=\"rtl\">וגם</bdi> x = 1",
            "<bdi dir=\"rtl\">אין פתרון ממשי</bdi>"
        ],
        correctAnswer: 0,
        hint: "כשיש מינוס לפני ה-x בריבוע, זה אומר ש-a שווה למינוס 1. אתם יכולים להשתמש בנוסחה כמו שהיא, או לכפול את כל המשוואה במינוס 1 (להפוך את כל הסימנים) כדי שיהיה קל יותר. שתי הדרכים נכונות.",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את הפרמטרים כפי שהם כתובים.", 
                math_expression: "<div dir='ltr'>a = -1 , b = 8 , c = -15</div>" 
            },
            { 
                verbal_explanation: "נציב בנוסחת השורשים. המכנה יהיה שתיים כפול מינוס אחת.", 
                math_expression: "<div dir='ltr'>x = ( -8 &plusmn; &radic;(8<sup>2</sup> - 4 &times; (-1) &times; (-15)) ) / (2 &times; -1)</div>" 
            },
            { 
                verbal_explanation: "נחשב את הביטוי בתוך השורש. שימו לב שכפל של שלושה מינוסים יחד (מינוס 4, מינוס 1, מינוס 15) נשאר מינוס.", 
                math_expression: "<div dir='ltr'>64 - 60 = 4</div>" 
            },
            { 
                verbal_explanation: "שורש של 4 נותן לנו 2.", 
                math_expression: "<div dir='ltr'>&radic;4 = 2</div>" 
            },
            { 
                verbal_explanation: "נרשום את התבנית המפושטת עם מכנה שלילי.", 
                math_expression: "<div dir='ltr'>x = ( -8 &plusmn; 2 ) / -2</div>" 
            },
            { 
                verbal_explanation: "פתרון עם פלוס: מינוס שש חלקי מינוס שתיים, הופך לחיובי.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = ( -8 + 2 ) / -2 = 3</div>" 
            },
            { 
                verbal_explanation: "פתרון עם מינוס: מינוס עשר חלקי מינוס שתיים, הופך גם הוא לחיובי.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = ( -8 - 2 ) / -2 = 5</div>" 
            }
        ],
        final_answer: "x = 5 <bdi dir=\"rtl\">וגם</bdi> x = 3"
    },

    // שאלה 5
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>משוואה חסרה (ללא איבר חופשי c):</strong><br>
        פתרו את המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">x<sup>2</sup> - 9x = 0</div>`,
        options: [
            "x = 9 <bdi dir=\"rtl\">וגם</bdi> x = 0",
            "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = -3",
            "x = 9 <bdi dir=\"rtl\">בלבד</bdi>",
            "x = -9 <bdi dir=\"rtl\">וגם</bdi> x = 0"
        ],
        correctAnswer: 0,
        hint: "כשאין c (הוא שווה אפס), קל מאוד לפתור על ידי הוצאת x כגורם משותף מחוץ לסוגריים: x(x - 9) = 0. כך תקבלו מיד את שני הפתרונות מבלי להסתבך עם נוסחת השורשים.",
        solution_steps: [
            { 
                verbal_explanation: "כאשר המספר החופשי (c) אינו קיים, שוויו הוא אפס. אפשר להשתמש בנוסחת השורשים, אך הדרך המהירה היא הוצאת גורם משותף.", 
                math_expression: "<div dir='ltr'>x &times; (x - 9) = 0</div>" 
            },
            { 
                verbal_explanation: "במתמטיקה, כאשר מכפלה של שני גורמים שווה לאפס, לפחות אחד מהם חייב להיות שווה לאפס. נבדוק את הגורם הראשון.", 
                math_expression: "<div dir='ltr'>x = 0</div>" 
            },
            { 
                verbal_explanation: "זהו הפתרון הראשון שלנו. כעת נבדוק מתי הגורם השני (הביטוי שבתוך הסוגריים) שווה לאפס.", 
                math_expression: "<div dir='ltr'>x - 9 = 0</div>" 
            },
            { 
                verbal_explanation: "נעביר את המספר אגף ונקבל את הפתרון השני.", 
                math_expression: "<div dir='ltr'>x = 9</div>" 
            }
        ],
        final_answer: "x = 9 <bdi dir=\"rtl\">וגם</bdi> x = 0"
    },

    // שאלה 6
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>משוואה חסרה (ללא איבר b):</strong><br>
        פתרו את המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">2x<sup>2</sup> - 18 = 0</div>`,
        options: [
            "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = -3",
            "x = 9 <bdi dir=\"rtl\">וגם</bdi> x = -9",
            "x = 3 <bdi dir=\"rtl\">בלבד</bdi>",
            "x = 9 <bdi dir=\"rtl\">בלבד</bdi>"
        ],
        correctAnswer: 0,
        hint: "כשאין x רגיל (b=0), הדרך הנוחה היא להעביר את המספר החופשי לאגף השני (18), לחלק במקדם (2), ואז להוציא שורש ריבועי. אל תשכחו ששורש נותן תוצאה חיובית ושלילית!",
        solution_steps: [
            { 
                verbal_explanation: "כיוון שאין רכיב הכולל את הנעלם x ללא חזקה, אפשר לפתור כמשוואה רגילה ללא נוסחת השורשים. נעביר את המספר 18 ימינה.", 
                math_expression: "<div dir='ltr'>2x<sup>2</sup> = 18</div>" 
            },
            { 
                verbal_explanation: "נחלק את שני האגפים ב-2 כדי לבודד את איקס בריבוע.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 9</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את ערכו של x, נוציא שורש ריבועי משני צידי המשוואה.", 
                math_expression: "<div dir='ltr'>x = &plusmn;&radic;9</div>" 
            },
            { 
                verbal_explanation: "שורש ריבועי מחזיר תמיד שתי תשובות, שכן גם מספר חיובי וגם מספר שלילי שמועלים בריבוע יתנו תוצאה חיובית.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 3 , x<sub>2</sub> = -3</div>" 
            }
        ],
        final_answer: "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = -3"
    },

    // שאלה 7
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>מצב של פתרון יחיד (שורש כפול):</strong><br>
        פתרו את המשוואה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">x<sup>2</sup> - 6x + 9 = 0</div>
        כמה פתרונות יש למשוואה ומהם?`,
        options: [
            "<bdi dir=\"rtl\">פתרון אחד בלבד:</bdi> x = 3",
            "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = -3",
            "<bdi dir=\"rtl\">פתרון אחד בלבד:</bdi> x = 9",
            "<bdi dir=\"rtl\">אין פתרונות למשוואה זו</bdi>"
        ],
        correctAnswer: 0,
        hint: "כאשר תחשבו את הביטוי מתחת לשורש בנוסחה (b בריבוע פחות 4ac), תגלו שהוא שווה בדיוק לאפס! זה אומר שהשורש מתבטל, ונשאר רק פתרון יחיד (הקודקוד).",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את המקדמים של המשוואה הריבועית.", 
                math_expression: "<div dir='ltr'>a = 1 , b = -6 , c = 9</div>" 
            },
            { 
                verbal_explanation: "נציב את הערכים בתוך החלק הפנימי של השורש בלבד (ביטוי זה נקרא גם דיסקרימיננטה).", 
                math_expression: "<div dir='ltr'>(-6)<sup>2</sup> - 4 &times; 1 &times; 9</div>" 
            },
            { 
                verbal_explanation: "נחשב ונגלה שהתוצאה מתאפסת (שלושים ושש פחות שלושים ושש).", 
                math_expression: "<div dir='ltr'>36 - 36 = 0</div>" 
            },
            { 
                verbal_explanation: "כאשר השורש הוא אפס, הפיצול לפלוס ולמינוס אינו משנה כלום. נציב אפס בנוסחה השלמה.", 
                math_expression: "<div dir='ltr'>x = ( 6 &plusmn; 0 ) / 2</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק הנותר ונקבל את הפתרון היחיד של המשוואה.", 
                math_expression: "<div dir='ltr'>x = 6 / 2 = 3</div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">פתרון אחד בלבד:</bdi> x = 3"
    },

    // שאלה 8
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>מצב שבו אין פתרון ממשי:</strong><br>
        התבקשתם לפתור את המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">x<sup>2</sup> + 2x + 5 = 0</div>
        מה תהיה התוצאה?`,
        options: [
            "<bdi dir=\"rtl\">למשוואה זו אין פתרונות</bdi>",
            "x = 5 <bdi dir=\"rtl\">וגם</bdi> x = 2",
            "x = -2.5 <bdi dir=\"rtl\">בלבד</bdi>",
            "x = 1 <bdi dir=\"rtl\">וגם</bdi> x = -5"
        ],
        correctAnswer: 0,
        hint: "חשבו את תוכן השורש (הדיסקרימיננטה): 2 בריבוע פחות 4 כפול 1 כפול 5. תקבלו מספר שלילי! מכיוון שאי אפשר להוציא שורש למספר שלילי, למשוואה אין פתרון.",
        solution_steps: [
            { 
                verbal_explanation: "נבדוק את מצב הפתרונות על ידי חישוב הביטוי שבתוך השורש בנוסחה. נזהה מקדמים.", 
                math_expression: "<div dir='ltr'>a = 1 , b = 2 , c = 5</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בתוך ביטוי השורש.", 
                math_expression: "<div dir='ltr'>2<sup>2</sup> - 4 &times; 1 &times; 5</div>" 
            },
            { 
                verbal_explanation: "נבצע את כפל המספרים והחזקה.", 
                math_expression: "<div dir='ltr'>4 - 20 = -16</div>" 
            },
            { 
                verbal_explanation: "התוצאה היא מספר שלילי. במתמטיקה אין פתרון לשורש של מספר שלילי (במספרים ממשיים).", 
                math_expression: "<div dir='ltr'>&radic;(-16) &nbsp;&#10132;&nbsp; <bdi dir='rtl'>שגיאה</bdi></div>" 
            },
            { 
                verbal_explanation: "המשמעות היא שאין אף מספר x שמקיים את המשוואה הזו.", 
                math_expression: "<div dir='ltr'><bdi dir='rtl'>אין פתרון</bdi></div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">למשוואה זו אין פתרונות</bdi>"
    },

    // שאלה 9
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>סידור משוואה לפני פתרון (העברת אגפים):</strong><br>
        פתרו את המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">x<sup>2</sup> - 3x = 4</div>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 80" width="100%" height="80" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <text x="100" y="45" font-family="Arial" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">= 0 ?</text>
        </svg>
        </div>`,
        options: [
            "x = 4 <bdi dir=\"rtl\">וגם</bdi> x = -1",
            "x = -4 <bdi dir=\"rtl\">וגם</bdi> x = 1",
            "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = 4",
            "x = 4 <bdi dir=\"rtl\">בלבד</bdi>"
        ],
        correctAnswer: 0,
        hint: "זהירות! אי אפשר להשתמש בנוסחת השורשים לפני שהמשוואה שווה לאפס. העבירו את ה-4 אגף (כך שיהפוך למינוס 4), ורק אז זהו את a, b, c והציבו בנוסחה.",
        solution_steps: [
            { 
                verbal_explanation: "כדי לפתור משוואה ריבועית, חובה קודם כל לדאוג שצד אחד שלה יהיה שווה לאפס. נעביר את המספר 4 שמאלה.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> - 3x - 4 = 0</div>" 
            },
            { 
                verbal_explanation: "כעת כשהמשוואה מסודרת, נוכל לזהות את המקדמים בבטחה.", 
                math_expression: "<div dir='ltr'>a = 1 , b = -3 , c = -4</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בנוסחת השורשים. b השלילי יהפוך לחיובי בתחילת הנוסחה.", 
                math_expression: "<div dir='ltr'>x = ( 3 &plusmn; &radic;((-3)<sup>2</sup> - 4 &times; 1 &times; (-4)) ) / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך השורש: תשע ועוד שישה עשר נותן עשרים וחמש, והשורש הוא חמש.", 
                math_expression: "<div dir='ltr'>&radic;(9 + 16) = &radic;25 = 5</div>" 
            },
            { 
                verbal_explanation: "נציב את התוצאה בנוסחה המפושטת ונמצא את שני הערכים.", 
                math_expression: "<div dir='ltr'>x = ( 3 &plusmn; 5 ) / 2</div>" 
            },
            { 
                verbal_explanation: "הפתרון הראשון (עם החיבור): שמונה חלקי שתיים.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 8 / 2 = 4</div>" 
            },
            { 
                verbal_explanation: "הפתרון השני (עם החיסור): מינוס שתיים חלקי שתיים.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = -2 / 2 = -1</div>" 
            }
        ],
        final_answer: "x = 4 <bdi dir=\"rtl\">וגם</bdi> x = -1"
    },

    // שאלה 10
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>סידור משוואה כשיש איקסים בשני האגפים:</strong><br>
        פתרו את המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">2x<sup>2</sup> = 8x</div>`,
        options: [
            "x = 0 <bdi dir=\"rtl\">וגם</bdi> x = 4",
            "x = 4 <bdi dir=\"rtl\">בלבד</bdi>",
            "x = 2 <bdi dir=\"rtl\">וגם</bdi> x = 8",
            "x = -4 <bdi dir=\"rtl\">וגם</bdi> x = 0"
        ],
        correctAnswer: 0,
        hint: "אסור לחלק ב-x (כי אולי הוא אפס)! תמיד מעבירים הכל לאגף אחד כדי לקבל משוואה שווה לאפס: 2x בריבוע מינוס 8x שווה 0. הוציאו 2x גורם משותף או השתמשו בנוסחה (c=0).",
        solution_steps: [
            { 
                verbal_explanation: "נעביר את האיבר שמימין לאגף השמאלי בסימן הפוך, כדי להגיע למצב שבו המשוואה שווה לאפס.", 
                math_expression: "<div dir='ltr'>2x<sup>2</sup> - 8x = 0</div>" 
            },
            { 
                verbal_explanation: "כעת יש לנו משוואה ללא איבר חופשי. נוציא את הגורם המשותף המקסימלי (2x) מחוץ לסוגריים.", 
                math_expression: "<div dir='ltr'>2x &times; (x - 4) = 0</div>" 
            },
            { 
                verbal_explanation: "כדי שהמכפלה תתאפס, נבדוק כל גורם בנפרד. הגורם הראשון (החיצוני) מתאפס כאשר x שווה אפס.", 
                math_expression: "<div dir='ltr'>2x = 0 &nbsp;&#10132;&nbsp; x<sub>1</sub> = 0</div>" 
            },
            { 
                verbal_explanation: "נבדוק את הגורם השני (בתוך הסוגריים) ונשווה גם אותו לאפס.", 
                math_expression: "<div dir='ltr'>x - 4 = 0</div>" 
            },
            { 
                verbal_explanation: "נעביר את המספר לאגף ימין ונקבל את הפתרון השני למשוואה.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = 4</div>" 
            }
        ],
        final_answer: "x = 0 <bdi dir=\"rtl\">וגם</bdi> x = 4"
    },

    // שאלה 11
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>פתיחת סוגריים לקבלת משוואה ריבועית (כפל בפתיחה):</strong><br>
        פתרו את המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">x(x - 5) = 14</div>`,
        options: [
            "x = 7 <bdi dir=\"rtl\">וגם</bdi> x = -2",
            "x = 5 <bdi dir=\"rtl\">וגם</bdi> x = 14",
            "x = -7 <bdi dir=\"rtl\">וגם</bdi> x = 2",
            "x = 0 <bdi dir=\"rtl\">וגם</bdi> x = 5"
        ],
        correctAnswer: 0,
        hint: "1. פתחו את הסוגריים על ידי הכפלת ה-x שבחוץ בכל אחד מהאיברים שבפנים. <br>2. העבירו את ה-14 אגף כך שהמשוואה תהיה שווה ל-0. <br>3. הפעילו את נוסחת השורשים.",
        solution_steps: [
            { 
                verbal_explanation: "לפני הכל, נפתח את הסוגריים. נכפיל את האיקס שבחוץ בשני האיברים שבפנים.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> - 5x = 14</div>" 
            },
            { 
                verbal_explanation: "נאפס את המשוואה על ידי העברת המספר 14 לאגף השמאלי (בסימן מינוס).", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> - 5x - 14 = 0</div>" 
            },
            { 
                verbal_explanation: "נזהה את המקדמים של המשוואה המסודרת לקראת הצבה.", 
                math_expression: "<div dir='ltr'>a = 1 , b = -5 , c = -14</div>" 
            },
            { 
                verbal_explanation: "נציב את הערכים בנוסחת השורשים.", 
                math_expression: "<div dir='ltr'>x = ( 5 &plusmn; &radic;((-5)<sup>2</sup> - 4 &times; 1 &times; (-14)) ) / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את הביטוי הפנימי (עשרים וחמש ועוד חמישים ושש). שורש של 81 הוא 9.", 
                math_expression: "<div dir='ltr'>&radic;(25 + 56) = &radic;81 = 9</div>" 
            },
            { 
                verbal_explanation: "נציב את התוצאה ונפתור לשני הכיוונים (פלוס ומינוס).", 
                math_expression: "<div dir='ltr'>x = ( 5 &plusmn; 9 ) / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את שני הפתרונות הסופיים המדויקים.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 14 / 2 = 7 , x<sub>2</sub> = -4 / 2 = -2</div>" 
            }
        ],
        final_answer: "x = 7 <bdi dir=\"rtl\">וגם</bdi> x = -2"
    },

    // שאלה 12
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>פתיחת סוגריים כפולים (שיטת התוכי/חץ):</strong><br>
        פתרו את המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">(x - 3)(x + 2) = 0</div>`,
        options: [
            "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = -2",
            "x = -3 <bdi dir=\"rtl\">וגם</bdi> x = 2",
            "x = 0 <bdi dir=\"rtl\">בלבד</bdi>",
            "x = 6 <bdi dir=\"rtl\">וגם</bdi> x = -1"
        ],
        correctAnswer: 0,
        hint: "סוד קטן: כשיש שני סוגריים שמוכפלים ונותנים אפס, אין צורך באמת לפתוח אותם! מספיק לבדוק מתי הסוגר הראשון מתאפס (איקס שווה 3), ומתי הסוגר השני מתאפס (איקס שווה מינוס 2).",
        solution_steps: [
            { 
                verbal_explanation: "במתמטיקה קיים כלל שנקרא 'חוק מכפלת האפס'. הכלל אומר שאם כפל של מספר ביטויים שווה לאפס, לפחות אחד מהם חייב להיות אפס.", 
                math_expression: "<div dir='ltr'>A &times; B = 0 &nbsp;&#10132;&nbsp; A = 0 &nbsp;<bdi dir='rtl'>או</bdi>&nbsp; B = 0</div>" 
            },
            { 
                verbal_explanation: "לכן, במקום להסתבך בפתיחת סוגריים ארוכה, נוכל פשוט להשוות כל סוגר בנפרד לאפס. נתחיל מהסוגריים השמאליים.", 
                math_expression: "<div dir='ltr'>x - 3 = 0</div>" 
            },
            { 
                verbal_explanation: "نعביר את המספר לאגף השני, ונקבל את הפתרון הראשון.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 3</div>" 
            },
            { 
                verbal_explanation: "כעת, נשווה את הביטוי שבסוגריים הימניים לאפס.", 
                math_expression: "<div dir='ltr'>x + 2 = 0</div>" 
            },
            { 
                verbal_explanation: "نعביר את המספר ונמצא את הפתרון השני בקלות ובמהירות.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = -2</div>" 
            }
        ],
        final_answer: "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = -2"
    },

    // שאלה 13
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>התמודדות עם שורש עשרוני / שבר:</strong><br>
        פתרו את המשוואה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">4x<sup>2</sup> - 12x + 9 = 0</div>`,
        options: [
            "x = 1.5 <bdi dir=\"rtl\">בלבד (שורש כפול)</bdi>",
            "x = 1.5 <bdi dir=\"rtl\">וגם</bdi> x = -1.5",
            "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = 4",
            "<bdi dir=\"rtl\">אין פתרונות</bdi>"
        ],
        correctAnswer: 0,
        hint: "הציבו את הערכים בנוסחת השורשים (היעזרו במחשבון לחישוב המספרים הגדולים). תגלו שהביטוי בתוך השורש מתאפס. לאחר מכן, חלקו 12 (מכיוון שמינוס מינוס 12 זה 12 חיובי) ב-8 (פעמיים 4).",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את המקדמים הנתונים במשוואה, שכוללים מספרים מעט גדולים יותר.", 
                math_expression: "<div dir='ltr'>a = 4 , b = -12 , c = 9</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערכו של הביטוי מתחת לשורש (הדיסקרימיננטה).", 
                math_expression: "<div dir='ltr'>(-12)<sup>2</sup> - 4 &times; 4 &times; 9</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ונגלה ששני הצדדים שווים למאה ארבעים וארבע.", 
                math_expression: "<div dir='ltr'>144 - 144 = 0</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהשורש התאפס, נותר לנו רק פתרון יחיד שמורכב מהמונה ללא השורש, חלקי המכנה המלא.", 
                math_expression: "<div dir='ltr'>x = 12 / (2 &times; 4)</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק של שנים עשר בשמונה לקבלת מספר עשרוני.", 
                math_expression: "<div dir='ltr'>x = 12 / 8 = 1.5</div>" 
            }
        ],
        final_answer: "x = 1.5 <bdi dir=\"rtl\">בלבד (שורש כפול)</bdi>"
    },

    // שאלה 14
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>הבנת המשמעות הגיאומטרית של הדיסקרימיננטה (ביטוי השורש):</strong><br>
        תלמיד התבקש למצוא כמה נקודות חיתוך יש לפרבולה מסוימת עם ציר ה-x.<br>
        הוא חישב את הערך של <strong>(b<sup>2</sup> - 4ac)</strong> בתוך נוסחת השורשים, וקיבל את התוצאה <strong>25</strong>.<br>
        כמה נקודות חיתוך יש לפרבולה זו עם ציר x?`,
        options: [
            "<bdi dir=\"rtl\">שתי נקודות חיתוך שונות</bdi>",
            "<bdi dir=\"rtl\">נקודת חיתוך אחת (משיקה לציר)</bdi>",
            "<bdi dir=\"rtl\">אפס נקודות חיתוך (מרחפת)</bdi>",
            "<bdi dir=\"rtl\">אי אפשר לדעת ללא ידיעת a, b, c עצמם</bdi>"
        ],
        correctAnswer: 0,
        hint: "הביטוי בתוך השורש (הדיסקרימיננטה) 'מנבא' את מספר הפתרונות. אם הוא חיובי - יש 2 פתרונות (כי עושים פלוס/מינוס לשורש). אם הוא אפס - יש פתרון 1. אם הוא שלילי - אין פתרון. המספר 25 הוא חיובי.",
        solution_steps: [
            { 
                verbal_explanation: "הביטוי הנמצא בתוך השורש בנוסחה נקרא 'הדיסקרימיננטה' ותפקידו להצביע על מספר הפתרונות למשוואה.", 
                math_expression: "<div dir='ltr'>&Delta; = b<sup>2</sup> - 4ac</div>" 
            },
            { 
                verbal_explanation: "התלמיד חישב את הביטוי ומצא שהוא שווה ל-25. עשרים וחמש הוא מספר חיובי (גדול מאפס).", 
                math_expression: "<div dir='ltr'>25 > 0</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהביטוי חיובי, ניתן להוציא ממנו שורש ממשי (שייתן 5).", 
                math_expression: "<div dir='ltr'>&radic;25 = 5</div>" 
            },
            { 
                verbal_explanation: "הנוסחה מתפצלת כעת לפלוס 5 ולמינוס 5, ולכן היא תייצר בוודאות שתי תשובות שונות. המשמעות היא שתי נקודות חיתוך עם הציר.", 
                math_expression: "<div dir='ltr'>&plusmn; 5 &nbsp;&#10132;&nbsp; <bdi dir='rtl'>2 פתרונות</bdi></div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">שתי נקודות חיתוך שונות</bdi>"
    },

    // שאלה 15
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>משוואה ריבועית לאחר העברת אגפים וסידור:</strong><br>
        פתרו את המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">x<sup>2</sup> + x = 12</div>`,
        options: [
            "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = -4",
            "x = -3 <bdi dir=\"rtl\">וגם</bdi> x = 4",
            "x = 6 <bdi dir=\"rtl\">וגם</bdi> x = -2",
            "x = 2 <bdi dir=\"rtl\">וגם</bdi> x = -6"
        ],
        correctAnswer: 0,
        hint: "העבירו את ה-12 שמאלה (כך שיהפוך למינוס 12) ואפסו את המשוואה. הציבו a=1, b=1, c=-12. פתרו בעזרת נוסחת השורשים.",
        solution_steps: [
            { 
                verbal_explanation: "המשוואה לא מאופסת ולכן אינה מוכנה לפתרון. נעביר את המספר 12 לאגף שמאל כדי לאפס אותה.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> + x - 12 = 0</div>" 
            },
            { 
                verbal_explanation: "נזהה את המקדמים של הפונקציה לאחר הסידור.", 
                math_expression: "<div dir='ltr'>a = 1 , b = 1 , c = -12</div>" 
            },
            { 
                verbal_explanation: "נציב את הערכים בתוך נוסחת השורשים המוכרת.", 
                math_expression: "<div dir='ltr'>x = ( -1 &plusmn; &radic;(1<sup>2</sup> - 4 &times; 1 &times; (-12)) ) / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך הביטוי הפנימי תחת השורש (אחת ועוד ארבעים ושמונה).", 
                math_expression: "<div dir='ltr'>&radic;(1 + 48) = &radic;49 = 7</div>" 
            },
            { 
                verbal_explanation: "נרשום את הנוסחה המפושטת המוכנה לפיצול.", 
                math_expression: "<div dir='ltr'>x = ( -1 &plusmn; 7 ) / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את הפתרון הראשון (עם החיבור): שש לחלק בשתיים.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 6 / 2 = 3</div>" 
            },
            { 
                verbal_explanation: "נחשב את הפתרון השני (עם החיסור): מינוס שמונה לחלק בשתיים.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = -8 / 2 = -4</div>" 
            }
        ],
        final_answer: "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = -4"
    },

    // שאלה 16
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>משוואה ריבועית גדולה עם מכנה משותף (רמת קושי גבוהה):</strong><br>
        פתרו את המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">5x<sup>2</sup> - 5x - 30 = 0</div>`,
        options: [
            "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = -2",
            "x = -3 <bdi dir=\"rtl\">וגם</bdi> x = 2",
            "x = 6 <bdi dir=\"rtl\">וגם</bdi> x = -1",
            "x = 5 <bdi dir=\"rtl\">וגם</bdi> x = -6"
        ],
        correctAnswer: 0,
        hint: "אפשר להציב מספרים גדולים בנוסחה, אבל שימו לב לטריק! כל המספרים במשוואה (5, 5 ו-30) מתחלקים ב-5. חלקו את כל המשוואה ב-5 לפני שאתם מתחילים, ותקבלו משוואה קלה בהרבה לפתרון.",
        solution_steps: [
            { 
                verbal_explanation: "אנו רואים שכל מקדמי המשוואה הם כפולות של המספר חמש. כדי לפשט את החישובים, נחלק את שני האגפים ב-5.", 
                math_expression: "<div dir='ltr'>(5x<sup>2</sup> - 5x - 30) / 5 = 0 / 5</div>" 
            },
            { 
                verbal_explanation: "כעת נקבל משוואה שקולה, פשוטה הרבה יותר לפתרון, שבה המקדם a הוא 1.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> - x - 6 = 0</div>" 
            },
            { 
                verbal_explanation: "נזהה את המקדמים החדשים והנוחים.", 
                math_expression: "<div dir='ltr'>a = 1 , b = -1 , c = -6</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים המעודכנים אל תוך נוסחת השורשים.", 
                math_expression: "<div dir='ltr'>x = ( 1 &plusmn; &radic;((-1)<sup>2</sup> - 4 &times; 1 &times; (-6)) ) / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך השורש (אחת ועוד עשרים וארבע נותן עשרים וחמש). שורש של 25 הוא 5.", 
                math_expression: "<div dir='ltr'>&radic;(1 + 24) = &radic;25 = 5</div>" 
            },
            { 
                verbal_explanation: "נחשב את הפתרון החיובי (שישה חלקי שתיים) ואת הפתרון השלילי (מינוס ארבע חלקי שתיים).", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 6 / 2 = 3 , x<sub>2</sub> = -4 / 2 = -2</div>" 
            }
        ],
        final_answer: "x = 3 <bdi dir=\"rtl\">וגם</bdi> x = -2"
    },

    // שאלה 17
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>מציאת חיתוך עם הצירים ללא גרף (חישוב ישיר):</strong><br>
        נתונה הפונקציה הריבועית:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> + 9x + 20</div>
        מהן נקודות החיתוך של הפונקציה עם ציר ה-x?`,
        options: [
            "(-4, 0) , (-5, 0)",
            "(4, 0) , (5, 0)",
            "(-20, 0) , (1, 0)",
            "(0, 20) <bdi dir=\"rtl\">בלבד</bdi>"
        ],
        correctAnswer: 0,
        hint: "הציבו y=0, זהו את הפרמטרים (a=1, b=9, c=20) והשתמשו בנוסחת השורשים. התשובות יהיו שליליות הפעם.",
        solution_steps: [
            { 
                verbal_explanation: "נקודות חיתוך עם הציר האופקי מחייבות שגובה הנקודה (y) יהיה אפס.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> + 9x + 20 = 0</div>" 
            },
            { 
                verbal_explanation: "נזהה את המקדמים של הפונקציה.", 
                math_expression: "<div dir='ltr'>a = 1 , b = 9 , c = 20</div>" 
            },
            { 
                verbal_explanation: "נציב את המספרים בתוך השורש של הנוסחה (תשע בריבוע פחות ארבע כפול אחת כפול עשרים).", 
                math_expression: "<div dir='ltr'>81 - 80 = 1</div>" 
            },
            { 
                verbal_explanation: "השורש של אחת הוא אחת. נציב זאת בנוסחה המלאה.", 
                math_expression: "<div dir='ltr'>x = ( -9 &plusmn; 1 ) / 2</div>" 
            },
            { 
                verbal_explanation: "הפתרון הראשון (חיבור): מינוס שמונה לחלק לשתיים.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = -8 / 2 = -4</div>" 
            },
            { 
                verbal_explanation: "הפתרון השני (חיסור): מינוס עשר לחלק לשתיים. נוסיף אפס ב-y ונרשום את הנקודות.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = -10 / 2 = -5</div>" 
            }
        ],
        final_answer: "(-4, 0) , (-5, 0)"
    },

    // שאלה 18
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>הוצאת גורם שלילי משותף (פשטות בחישוב):</strong><br>
        פתרו את המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">-3x<sup>2</sup> + 12x - 12 = 0</div>`,
        options: [
            "x = 2 <bdi dir=\"rtl\">בלבד</bdi>",
            "x = 2 <bdi dir=\"rtl\">וגם</bdi> x = -2",
            "x = -2 <bdi dir=\"rtl\">בלבד</bdi>",
            "<bdi dir=\"rtl\">אין למשוואה פתרון</bdi>"
        ],
        correctAnswer: 0,
        hint: "הדרך הארוכה היא להציב מספרים גדולים בנוסחה. הדרך החכמה היא לחלק את כל המשוואה במינוס 3! כך תקבלו x בריבוע נקי וחיובי בהתחלה: איקס בריבוע פחות 4 איקס ועוד 4. פתרו את זה.",
        solution_steps: [
            { 
                verbal_explanation: "המקדמים הנתונים גדולים ושליליים בחלקם. נוכל להקל על עצמנו על ידי חלוקת כל המשוואה במינוס 3.", 
                math_expression: "<div dir='ltr'>(-3x<sup>2</sup> + 12x - 12) / (-3) = 0</div>" 
            },
            { 
                verbal_explanation: "המשוואה החדשה שנקבל היא שקולה ופשוטה הרבה יותר. (שימו לב להיפוך הסימנים).", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> - 4x + 4 = 0</div>" 
            },
            { 
                verbal_explanation: "נזהה את המקדמים החדשים למשוואה המפושטת.", 
                math_expression: "<div dir='ltr'>a = 1 , b = -4 , c = 4</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערכו של החלק הפנימי של השורש (הדיסקרימיננטה).", 
                math_expression: "<div dir='ltr'>(-4)<sup>2</sup> - 4 &times; 1 &times; 4 = 16 - 16 = 0</div>" 
            },
            { 
                verbal_explanation: "כאשר השורש מתאפס, יש לנו רק פתרון אחד שנובע מהמונה והמכנה הנותרים.", 
                math_expression: "<div dir='ltr'>x = 4 / 2 = 2</div>" 
            }
        ],
        final_answer: "x = 2 <bdi dir=\"rtl\">בלבד</bdi>"
    },

    // שאלה 19
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>הקשר בין מספר פתרונות למצב בגרף:</strong><br>
        התקבלה המשוואה הריבועית הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">x<sup>2</sup> + 5x + 7 = 0</div>
        במהלך פתרון המשוואה, גילינו שהביטוי בתוך השורש שווה למינוס 3 (מספר שלילי).<br>
        מה המשמעות של תוצאה זו לגבי גרף הפרבולה <span dir="ltr">y = x<sup>2</sup> + 5x + 7</span>?`,
        options: [
            "<bdi dir=\"rtl\">הפרבולה אינה חותכת את ציר ה-x כלל (היא כולה מעליו)</bdi>",
            "<bdi dir=\"rtl\">הפרבולה חותכת את ציר ה-x בנקודה מינוס 3</bdi>",
            "<bdi dir=\"rtl\">הפרבולה משיקה לציר ה-x בנקודה אחת</bdi>",
            "<bdi dir=\"rtl\">הפרבולה פונה כלפי מטה (בוכה)</bdi>"
        ],
        correctAnswer: 0,
        hint: "כאשר הביטוי בתוך השורש שלילי, אין פתרון למשוואה. משמעות 'אין פתרון' כשמחפשים חיתוך עם ציר x היא שפשוט אין חיתוך כזה - הגרף מרחף באוויר ואינו פוגע בציר לעולם.",
        solution_steps: [
            { 
                verbal_explanation: "המשוואה שפתרנו ניסתה למצוא עבור אילו ערכי x, גובה הפונקציה (y) שווה לאפס. כלומר, חיפשנו נקודות חיתוך עם הציר האופקי.", 
                math_expression: "<div dir='ltr'>y = 0 &nbsp;&#10132;&nbsp; <bdi dir='rtl'>חיתוך ציר</bdi> x</div>" 
            },
            { 
                verbal_explanation: "נתון שביטוי השורש ('הדיסקרימיננטה') יצא שלילי.", 
                math_expression: "<div dir='ltr'>&Delta; = -3 < 0</div>" 
            },
            { 
                verbal_explanation: "מתמטית, לא ניתן להוציא שורש ממספר שלילי, ולכן החישוב נתקע ואין למשוואה פתרון.", 
                math_expression: "<div dir='ltr'>&radic;(-3) &nbsp;&#10132;&nbsp; <bdi dir='rtl'>אין פתרון</bdi></div>" 
            },
            { 
                verbal_explanation: "מבחינה גיאומטרית בגרף, 'אין פתרון' אומר שהפונקציה לעולם לא מצליחה לגעת או לחצות את ציר האיקס.", 
                math_expression: "<div dir='ltr'><bdi dir='rtl'>אין מגע בציר</bdi></div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">הפרבולה אינה חותכת את ציר ה-x כלל</bdi>"
    },

    // שאלה 20
    {
        topic: "bagrut_35372",
        subTopic: "נוסחת השורשים",
        question_text: `<strong>מציאת שורשים של פונקציה מעורבת (סידור מחדש):</strong><br>
        פתרו את המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">-x<sup>2</sup> + x + 2 = 0</div>
        מהם שורשי המשוואה?`,
        options: [
            "x = 2 <bdi dir=\"rtl\">וגם</bdi> x = -1",
            "x = -2 <bdi dir=\"rtl\">וגם</bdi> x = 1",
            "x = 2 <bdi dir=\"rtl\">וגם</bdi> x = 1",
            "x = -2 <bdi dir=\"rtl\">וגם</bdi> x = -1"
        ],
        correctAnswer: 0,
        hint: "זהו את הפרמטרים: a שווה מינוס 1. b שווה פלוס 1. c שווה 2. הציבו בזהירות בנוסחת השורשים וזכרו את הסימנים החיוביים והשליליים.",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את המקדמים של הפונקציה מתוך המשוואה המסודרת.", 
                math_expression: "<div dir='ltr'>a = -1 , b = 1 , c = 2</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים לתוך נוסחת השורשים.", 
                math_expression: "<div dir='ltr'>x = ( -1 &plusmn; &radic;(1<sup>2</sup> - 4 &times; (-1) &times; 2) ) / (2 &times; -1)</div>" 
            },
            { 
                verbal_explanation: "נחשב את ערך הביטוי הפנימי תחת השורש. שימו לב: מינוס כפול מינוס כפול פלוס נותן פלוס. (1 ועוד 8).", 
                math_expression: "<div dir='ltr'>&radic;(1 + 8) = &radic;9 = 3</div>" 
            },
            { 
                verbal_explanation: "נציב את פתרון השורש בנוסחה. המכנה הוא מינוס שתיים.", 
                math_expression: "<div dir='ltr'>x = ( -1 &plusmn; 3 ) / -2</div>" 
            },
            { 
                verbal_explanation: "הפתרון הראשון (חיבור): שתיים חלקי מינוס שתיים.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 2 / -2 = -1</div>" 
            },
            { 
                verbal_explanation: "הפתרון השני (חיסור): מינוס ארבע חלקי מינוס שתיים.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = -4 / -2 = 2</div>" 
            }
        ],
        final_answer: "x = 2 <bdi dir=\"rtl\">וגם</bdi> x = -1"
    }
];