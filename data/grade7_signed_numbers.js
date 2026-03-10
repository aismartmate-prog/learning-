const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: הערך המוחלט ומספרים נגדיים (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "Low",
        "question_text": "מהו <strong>הערך המוחלט</strong> של המספר 8- ? ( |-8| )<br><div style='text-align:center; margin:15px 0;'><svg width='240' height='60'><line x1='20' y1='30' x2='220' y2='30' stroke='#1e293b' stroke-width='2'/><circle cx='170' cy='30' r='4' fill='#1e293b'/><text x='170' y='50' font-size='14' text-anchor='middle'>0</text><circle cx='30' cy='30' r='4' fill='#b09151'/><text x='30' y='50' font-size='14' text-anchor='middle'>-8</text><path d='M170,20 Q100,-10 30,20' fill='none' stroke='#b09151' stroke-width='2' stroke-dasharray='4'/><polygon points='30,20 35,10 40,22' fill='#b09151'/><text x='100' y='12' font-size='12' fill='#b09151' text-anchor='middle'>מרחק?</text></svg></div>",
        "hint": "ערך מוחלט (המסומן בשני קווים אנכיים) מודד אך ורק מרחק מאפס. האם מרחק יכול להיות שלילי?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את משמעות הפעולה. הערך המוחלט בודק כמה 'צעדים' המספר נמצא מהאפס, ללא קשר לכיוון שלו (ימינה או שמאלה).", "math_expression": "|-8|" },
            { "verbal_explanation": "שלב 2: המספר 8- נמצא בדיוק 8 צעדים שמאלה מהאפס על ציר המספרים.", "math_expression": "8 צעדים" },
            { "verbal_explanation": "שלב 3: מכיוון שמרחק תמיד נמדד במספר חיובי או אפס, התשובה תהיה 8 חיובי.", "math_expression": "|-8| = 8" }
        ],
        "final_answer": "8",
        "options": ["8-", "8", "0", "16"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "Low",
        "question_text": "מהו ה<strong>מספר הנגדי</strong> למספר 15?",
        "hint": "מספרים נגדיים נמצאים באותו מרחק מהאפס, אבל בצדדים הפוכים (אחד חיובי והשני שלילי).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מספר נגדי הוא 'תמונת הראי' של המספר ביחס לאפס. יש לו את אותו ערך מוחלט אבל סימן הפוך.", "math_expression": "15" },
            { "verbal_explanation": "שלב 2: המספר שלנו הוא 15 חיובי (+15).", "math_expression": "+15" },
            { "verbal_explanation": "שלב 3: לכן, הנגדי שלו יהיה באותו מרחק אבל בצד השלילי של הציר, כלומר מינוס 15.", "math_expression": "-15" }
        ],
        "final_answer": "15-",
        "options": ["15", "15-", "0", "1/15"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה של חיבור מספר ו<strong>המספר הנגדי שלו</strong>? לדוגמה: <strong> 8 + (-8) </strong>",
        "hint": "אם הלכתם 8 צעדים קדימה ואז 8 צעדים אחורה, באיזו נקודה אתם נמצאים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נדמיין תנועה על ציר המספרים. אנחנו מתחילים באפס והולכים 8 צעדים ימינה למספר החיובי 8.", "math_expression": "+8" },
            { "verbal_explanation": "שלב 2: כעת אנו צריכים להוסיף 8-, כלומר ללכת 8 צעדים שמאלה (אחורה) מאותה נקודה.", "math_expression": "8 - 8" },
            { "verbal_explanation": "שלב 3: מכיוון שחזרנו בדיוק על עקבותינו, הגענו חזרה לאפס. זהו כלל: סכום של כל מספר והנגדי שלו הוא תמיד 0.", "math_expression": "0" }
        ],
        "final_answer": "0",
        "options": ["16", "16-", "0", "8"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <strong> |X| = 5 </strong>. מהן התשובות האפשריות עבור הנעלם X?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='40'><line x1='10' y1='20' x2='190' y2='20' stroke='#1e293b' stroke-width='2'/><circle cx='100' cy='20' r='4' fill='#1e293b'/><text x='100' y='10' font-size='12' text-anchor='middle'>0</text><circle cx='150' cy='20' r='4' fill='#b09151'/><circle cx='50' cy='20' r='4' fill='#b09151'/><text x='125' y='10' font-size='10'>מרחק 5</text><text x='75' y='10' font-size='10'>מרחק 5</text></svg></div>",
        "hint": "אילו מספרים על הציר רחוקים בדיוק 5 צעדים מהאפס?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתרגם את המשוואה לעברית: 'לאיזה מספרים יש מרחק של בדיוק 5 מהאפס?'.", "math_expression": "|X| = 5" },
            { "verbal_explanation": "שלב 2: נבדוק ימינה מהאפס. המספר 5 חיובי נמצא במרחק של 5 צעדים.", "math_expression": "X = 5" },
            { "verbal_explanation": "שלב 3: נבדוק שמאלה מהאפס. גם המספר 5- נמצא במרחק של בדיוק 5 צעדים. לכן למשוואה זו יש שני פתרונות נכונים.", "math_expression": "X = -5" }
        ],
        "final_answer": "5 וגם 5-",
        "options": ["רק 5", "רק 5-", "5 וגם 5-", "אין פתרון"],
        "correctAnswer": 2
    },
    {
        "id": 5,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "Medium",
        "question_text": "חשבו את תוצאת התרגיל הבא: <strong> |-6| + |-4| </strong>",
        "hint": "הקווים האנכיים דורשים מאיתנו להוציא את המספר כחיובי לפני שמבצעים את החיבור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הערך המוחלט הראשון. המרחק של 6- מהאפס הוא 6.", "math_expression": "|-6| = 6" },
            { "verbal_explanation": "שלב 2: נחשב את הערך המוחלט השני. המרחק של 4- מהאפס הוא 4.", "math_expression": "|-4| = 4" },
            { "verbal_explanation": "שלב 3: נציב את התוצאות החיוביות בתרגיל ונחבר אותן.", "math_expression": "6 + 4 = 10" }
        ],
        "final_answer": "10",
        "options": ["10-", "10", "2", "2-"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "Medium",
        "question_text": "איזה סימן מתמטי מתאים כדי להשלים את ההשוואה הבאה: <strong> |-12| ___ 10 </strong> ?",
        "hint": "קודם 'תפתרו' את הערך המוחלט של 12-, ואז השוו את התוצאה למספר 10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נטפל באגף שמאל. הערך המוחלט של 12- הוא המרחק שלו מאפס, שהוא המספר החיובי 12.", "math_expression": "|-12| = 12" },
            { "verbal_explanation": "שלב 2: כעת נשווה את התוצאה שקיבלנו (12) עם המספר באגף ימין (10). מי גדול יותר?", "math_expression": "12 > 10" },
            { "verbal_explanation": "שלב 3: מכיוון ש-12 גדול מ-10, הסימן המתאים הוא '>' (גדול מ).", "math_expression": ">" }
        ],
        "final_answer": "> (גדול מ)",
        "options": ["< (קטן מ)", "> (גדול מ)", "= (שווה)", "לא ניתן לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "High",
        "question_text": "צוללת שטה בעומק של 300 מטרים מתחת לפני הים (300-). מטוס טס בגובה של 250 מטרים מעל פני הים (250+). מי מהם <strong>רחוק יותר</strong> מפני הים (שנחשבים לאפס)?",
        "hint": "המרחק מפני הים נמדד תמיד במספר חיובי (ערך מוחלט). למי יש מרחק גדול יותר?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פני הים מייצגים את נקודת האפס. נחשב את מרחק הצוללת מהאפס על ידי ערך מוחלט.", "math_expression": "|-300| = 300" },
            { "verbal_explanation": "שלב 2: נחשב את מרחק המטוס מפני הים.", "math_expression": "|250| = 250" },
            { "verbal_explanation": "שלב 3: נשווה בין המרחקים: 300 מטרים גדול יותר מ-250 מטרים. לכן, הצוללת רחוקה יותר.", "math_expression": "300 > 250" }
        ],
        "final_answer": "הצוללת רחוקה יותר",
        "options": ["המטוס רחוק יותר", "הצוללת רחוקה יותר", "הם באותו מרחק", "המים רחוקים יותר"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "High",
        "question_text": "כמה פתרונות נכונים יש למשוואה הבאה: <strong> |X| = -3 </strong>?",
        "hint": "האם מרחק פיזי יכול להיות מספר שלילי (כמו מינוס 3 מטרים)?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נקרא את המשוואה במילים: 'לאיזה מספר יש מרחק של מינוס 3 מהאפס?'.", "math_expression": "|X| = -3" },
            { "verbal_explanation": "שלב 2: מכיוון שערך מוחלט מודד מרחק, התוצאה שלו חייבת להיות תמיד 0 או מספר חיובי. מרחק לעולם לא יכול להיות שלילי.", "math_expression": "|X| \u2265 0" },
            { "verbal_explanation": "שלב 3: לכן, אין אף מספר בעולם שהערך המוחלט שלו יהיה 3-. למשוואה אין פתרון.", "math_expression": "אין פתרון" }
        ],
        "final_answer": "אין פתרון",
        "options": ["שני פתרונות (3, 3-)", "פתרון אחד (3-)", "אין פתרון", "אינסוף פתרונות"],
        "correctAnswer": 2
    },
    {
        "id": 9,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "Medium",
        "question_text": "חשבו בזהירות את הביטוי הבא: <strong> -|-9| </strong>",
        "hint": "פתרו קודם את מה שבתוך הערך המוחלט, ורק לאחר מכן הוסיפו את המינוס שחיכה בחוץ.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתעלם לרגע מהמינוס החיצוני ונטפל בערך המוחלט. המרחק של 9- מהאפס הוא המספר החיובי 9.", "math_expression": "|-9| = 9" },
            { "verbal_explanation": "שלב 2: כעת נחזור לתרגיל השלם. יש לנו מינוס שנמצא מחוץ לערך המוחלט. נצמיד אותו לתוצאה שקיבלנו (9).", "math_expression": "-(9)" },
            { "verbal_explanation": "שלב 3: התוצאה הסופית הופכת בחזרה לשלילית.", "math_expression": "-9" }
        ],
        "final_answer": "9-",
        "options": ["9", "9-", "0", "81"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "High",
        "question_text": "מהו <strong>המרחק הכולל</strong> (ביחידות) בין המספר <strong>4-</strong> לבין המספר <strong>6</strong> על ציר המספרים?<br><div style='text-align:center; margin:15px 0;'><svg width='240' height='50'><line x1='20' y1='30' x2='220' y2='30' stroke='#1e293b' stroke-width='2'/><circle cx='100' cy='30' r='4' fill='#1e293b'/><text x='100' y='50' font-size='12' text-anchor='middle'>0</text><circle cx='40' cy='30' r='4' fill='red'/><text x='40' y='50' font-size='12' text-anchor='middle'>-4</text><circle cx='190' cy='30' r='4' fill='blue'/><text x='190' y='50' font-size='12' text-anchor='middle'>6</text></svg></div>",
        "hint": "חשבו כמה יחידות יש מ-4- עד לאפס, ועוד כמה יחידות יש מהאפס ועד ל-6. חברו אותן יחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את המרחק של הנקודה הראשונה מהאפס באמצעות ערך מוחלט. מ-4- עד 0 יש 4 צעדים.", "math_expression": "|-4| = 4" },
            { "verbal_explanation": "שלב 2: נחשב את המרחק של הנקודה השנייה מהאפס. מ-0 עד 6 יש 6 צעדים.", "math_expression": "|6| = 6" },
            { "verbal_explanation": "שלב 3: נחבר את שני המרחקים כדי למצוא את המרחק הכולל ביניהם.", "math_expression": "4 + 6 = 10" }
        ],
        "final_answer": "10",
        "options": ["2", "10", "2-", "24"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "Medium",
        "question_text": "אם נתון שהמשתנה <strong>X הוא מספר חיובי</strong> (למשל 5), אז מה יהיה הביטוי <strong>X-</strong> (מינוס X)?",
        "hint": "הסימן מינוס לפני אות מסמן 'הנגדי של'. מהו הנגדי של מספר חיובי?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניקח מספר חיובי כלשהו לדוגמה, נניח ש-X שווה ל-5.", "math_expression": "X = 5" },
            { "verbal_explanation": "שלב 2: נציב את המספר בתוך הביטוי X- ונקבל 5-.", "math_expression": "-X = -5" },
            { "verbal_explanation": "שלב 3: כלומר, הוספת סימן מינוס למספר חיובי הופכת אותו למספר שלילי (הנגדי שלו).", "math_expression": "מספר שלילי" }
        ],
        "final_answer": "מספר שלילי",
        "options": ["מספר חיובי", "מספר שלילי", "אפס", "תלוי בערך של X"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "Low",
        "question_text": "סדרו את המספרים הבאים מהקטן ביותר לגדול ביותר: <strong> 5, 8-, 0, 3- </strong>",
        "hint": "דמיינו את ציר המספרים. המספר השמאלי ביותר הוא הקטן ביותר (הוא נמצא ב'מינוס' הכי עמוק).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל מהמספרים השליליים. המספר שרחוק יותר שמאלה מהאפס הוא הקטן ביותר. 8- קטן יותר מ-3-.", "math_expression": "-8 < -3" },
            { "verbal_explanation": "שלב 2: כעת נמקם את המספרים הניטרליים והחיוביים. האפס תמיד גדול מכל המספרים השליליים.", "math_expression": "-8, -3, 0" },
            { "verbal_explanation": "שלב 3: המספר 5 הוא חיובי, ולכן הוא הגדול ביותר ברשימה ויופיע בסוף.", "math_expression": "-8, -3, 0, 5" }
        ],
        "final_answer": "8- , 3- , 0 , 5",
        "options": ["8-, 0, 3-, 5", "0, 3-, 5, 8-", "8-, 3-, 0, 5", "5, 0, 3-, 8-"],
        "correctAnswer": 2
    },
    {
        "id": 13,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "High",
        "question_text": "חשבו את תוצאת התרגיל שבתוך הערך המוחלט: <strong> |10 - 15| </strong>",
        "hint": "פתרו קודם את תרגיל החיסור (קטן פחות גדול נותן תוצאה שלילית), ולאחר מכן הפעילו את הערך המוחלט.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: קווי הערך המוחלט פועלים כמו סוגריים. עלינו קודם כל לבצע את החישוב הפנימי: 10 פחות 15.", "math_expression": "10 - 15 = -5" },
            { "verbal_explanation": "שלב 2: נציב את התוצאה השלילית שקיבלנו בחזרה בתוך הקווים האנכיים.", "math_expression": "|-5|" },
            { "verbal_explanation": "שלב 3: כעת נפעיל את הערך המוחלט, שהופך כל מספר למרחק החיובי שלו מהאפס.", "math_expression": "5" }
        ],
        "final_answer": "5",
        "options": ["5-", "5", "25", "25-"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "High",
        "question_text": "למשוואה הבאה יש פתרון אחד בלבד. מצאו את X: <strong> |X - 3| = 0 </strong>",
        "hint": "המרחק היחיד ששווה לאפס הוא מנקודת האפס עצמה. לכן, הביטוי שבתוך הקווים חייב להיות 0.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המשוואה מציינת שהערך המוחלט של הביטוי הוא אפס. מכיוון שרק למספר 0 יש מרחק 0 מאפס, הביטוי עצמו חייב להיות שווה לאפס.", "math_expression": "X - 3 = 0" },
            { "verbal_explanation": "שלב 2: פותרים את המשוואה הפשוטה: איזה מספר פחות 3 נותן 0? נעביר את 3 אגף ונקבל את התשובה.", "math_expression": "X = 3" }
        ],
        "final_answer": "3",
        "options": ["0", "3-", "3", "אין פתרון"],
        "correctAnswer": 2
    },
    {
        "id": 15,
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "difficulty": "Medium",
        "question_text": "אם ידוע ש- <strong> |A| = |B| </strong> (הערך המוחלט שלהם זהה), אילו שתי אפשרויות קיימות עבור הקשר בין A ל-B?",
        "hint": "הם נמצאים באותו מרחק מהאפס. האם הם חייבים להיות באותו צד של הציר?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: משמעות הנתון היא ששני המספרים מרוחקים באותה מידה מנקודת האפס על ציר המספרים.", "math_expression": "מרחק שווה" },
            { "verbal_explanation": "שלב 2: האפשרות הראשונה היא שהם נמצאים באותו צד ובאותה נקודה בדיוק (למשל 4 ו-4).", "math_expression": "A = B" },
            { "verbal_explanation": "שלב 3: האפשרות השנייה היא שהם נמצאים בצדדים נגדיים של הציר (למשל 4 ומינוס 4).", "math_expression": "A = -B" }
        ],
        "final_answer": "הם שווים זה לזה או שהם מספרים נגדיים",
        "options": ["הם שווים זה לזה בוודאות", "הם שניהם חיוביים", "הם שווים זה לזה או שהם מספרים נגדיים", "סכומם תמיד שווה לאפס"],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 2: חיבור וחיסור (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "חיבור וחיסור",
        "difficulty": "Low",
        "question_text": "חשבו את תוצאת תרגיל החיבור של שני מספרים שליליים: <strong> (-3) + (-6) </strong><br><div style='text-align:center; margin:15px 0;'><svg width='150' height='100'><rect x='65' y='10' width='20' height='80' rx='10' fill='#e2e8f0' stroke='#1e293b' stroke-width='2'/><rect x='65' y='40' width='20' height='50' rx='10' fill='#ef4444'/><line x1='50' y1='40' x2='65' y2='40' stroke='#1e293b'/><text x='35' y='45' font-size='12'>0</text><line x1='50' y1='60' x2='65' y2='60' stroke='#1e293b'/><text x='35' y='65' font-size='12'>-3</text></svg></div>",
        "hint": "חיבור של שני מספרים שליליים מקביל לחיבור של שני חובות יחד. החוב הכולל שלכם יגדל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כאשר מחברים שני מספרים בעלי אותו סימן (שניהם שליליים), אנו צוברים כמות גדולה יותר מאותו סימן.", "math_expression": "מינוס + מינוס" },
            { "verbal_explanation": "שלב 2: נתעלם מהסימנים ונחבר את המספרים עצמם: 3 ועוד 6 שווה 9.", "math_expression": "3 + 6 = 9" },
            { "verbal_explanation": "שלב 3: מכיוון ששני המספרים היו שליליים (חובות), התוצאה נשארת שלילית.", "math_expression": "-9" }
        ],
        "final_answer": "9-",
        "options": ["3-", "9", "9-", "18-"],
        "correctAnswer": 2
    },
    {
        "id": 17,
        "subTopic": "חיבור וחיסור",
        "difficulty": "Medium",
        "question_text": "חשבו את התוצאה של חיבור מספרים בעלי סימנים שונים: <strong> -10 + 4 </strong>",
        "hint": "דמיינו שיש לכם חוב של 10 שקלים בחשבון (-10), ואתם מפקידים 4 שקלים חיוביים. מה המצב כעת?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כאשר מחברים מספרים בעלי סימנים שונים, הם 'מקזזים' זה את זה. לכן, נבצע פעולת חיסור בין הגדלים: 10 פחות 4 שווה 6.", "math_expression": "10 - 4 = 6" },
            { "verbal_explanation": "שלב 2: כעת עלינו להחליט על הסימן. נבדוק למי מהמספרים המקוריים היה ערך מוחלט גדול יותר ('מי היה חזק יותר').", "math_expression": "|-10| > |4|" },
            { "verbal_explanation": "שלב 3: מכיוון ש-10 (השלילי) גדול מ-4, הסימן של התוצאה יהיה שלילי.", "math_expression": "-6" }
        ],
        "final_answer": "6-",
        "options": ["14-", "6", "6-", "14"],
        "correctAnswer": 2
    },
    {
        "id": 18,
        "subTopic": "חיבור וחיסור",
        "difficulty": "Medium",
        "question_text": "כיצד נפתור את תרגיל החיסור הבא: <strong> 7 - (-2) </strong>?",
        "hint": "חיסור של מספר שלילי משמעו 'ביטול חוב'. כשמבטלים לכם חוב, בעצם מוסיפים לכם כסף! מינוס ליד מינוס הופך לפלוס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במתמטיקה קיים כלל חשוב: כאשר סימן חיסור מופיע מיד לפני סימן מינוס נוסף, הם הופכים יחד לפעולת חיבור חיובית.", "math_expression": "- ( - ) \u2192 +" },
            { "verbal_explanation": "שלב 2: נכתוב את התרגיל מחדש בצורה קלה יותר עם סימן החיבור החדש שנוצר.", "math_expression": "7 + 2" },
            { "verbal_explanation": "שלב 3: נחשב את תרגיל החיבור הפשוט.", "math_expression": "9" }
        ],
        "final_answer": "9",
        "options": ["5", "9", "5-", "9-"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "חיבור וחיסור",
        "difficulty": "Low",
        "question_text": "חשבו את תוצאת התרגיל הבא: <strong> -5 - 8 </strong>",
        "hint": "אתם מתחילים בנקודה 5- על ציר המספרים, ואז יורדים (מחסרים) עוד 8 צעדים לכיוון השלילי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: התרגיל הוא בעצם מינוס 5, שממנו אנחנו מחסרים עוד 8. אפשר לראות זאת כצבירה של שני חובות.", "math_expression": "-5 + (-8)" },
            { "verbal_explanation": "שלב 2: נחבר את כמות הצעדים שאנו הולכים שמאלה (5 ועוד 8 הם 13).", "math_expression": "13" },
            { "verbal_explanation": "שלב 3: מכיוון שאנו מעמיקים בצד השלילי, התוצאה נשארת במינוס.", "math_expression": "-13" }
        ],
        "final_answer": "13-",
        "options": ["3-", "3", "13-", "40-"],
        "correctAnswer": 2
    },
    {
        "id": 20,
        "subTopic": "חיבור וחיסור",
        "difficulty": "Medium",
        "question_text": "הטמפרטורה בירושלים הייתה בבוקר <strong>3°C מעלות</strong>. עד שעות הערב, הטמפרטורה <strong>צנחה ב-7 מעלות</strong>. מה הייתה הטמפרטורה בערב?",
        "hint": "התחילו במספר 3 חיובי וחסרו ממנו 7. אתם תעברו את האפס ותיכנסו לטמפרטורות השליליות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתרגם את הסיפור לתרגיל חשבוני. טמפרטורת הפתיחה היא 3, והירידה מסומנת כפחות 7.", "math_expression": "3 - 7" },
            { "verbal_explanation": "שלב 2: מכיוון שאנו מחסרים מספר גדול יותר מהמספר ההתחלתי, התוצאה תהיה שלילית. נחשב את ההפרש בין 7 ל-3.", "math_expression": "7 - 3 = 4" },
            { "verbal_explanation": "שלב 3: נוסיף לתוצאה סימן מינוס, כיוון שירדנו מתחת לאפס.", "math_expression": "-4" }
        ],
        "final_answer": "4- מעלות",
        "options": ["10- מעלות", "4 מעלות", "4- מעלות", "10 מעלות"],
        "correctAnswer": 2
    },
    {
        "id": 21,
        "subTopic": "חיבור וחיסור",
        "difficulty": "High",
        "question_text": "חשבו את תוצאת התרגיל הארוך הבא: <strong> 15 + (-15) + 8 </strong>",
        "hint": "הסתכלו היטב על שני המספרים הראשונים. האם אתם מזהים שם מספרים נגדיים? היעזרו בהם כדי לפשט את התרגיל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חוק הקיבוץ מאפשר לנו לבחור אילו מספרים לחבר קודם. נסתכל על 15 ועל (15-). אלו הם מספרים נגדיים.", "math_expression": "15 + (-15)" },
            { "verbal_explanation": "שלב 2: סכום של כל מספר והנגדי שלו הוא בדיוק אפס. הם פשוט מבטלים אחד את השני.", "math_expression": "0" },
            { "verbal_explanation": "שלב 3: נציב את האפס במקום שני המספרים ונוסיף את המספר האחרון (8).", "math_expression": "0 + 8 = 8" }
        ],
        "final_answer": "8",
        "options": ["8-", "38", "8", "30"],
        "correctAnswer": 2
    },
    {
        "id": 22,
        "subTopic": "חיבור וחיסור",
        "difficulty": "Medium",
        "question_text": "החשבון של רועי בבנק עמד על מינוס של <strong>200- שקלים</strong>. ביום למחרת הוא הפקיד לחשבון <strong>300 שקלים</strong>. מהי היתרה בחשבונו כעת?",
        "hint": "בנו תרגיל חיבור פשוט: החוב ההתחלתי (-200) ועוד ההפקדה החיובית (300).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את התרגיל. אנחנו מחברים 300 למספר השלילי 200-.", "math_expression": "-200 + 300" },
            { "verbal_explanation": "שלב 2: אנו רשאים להחליף את סדר המספרים לפי חוק החילוף, כדי שיהיה לנו קל יותר לראות את התרגיל.", "math_expression": "300 - 200" },
            { "verbal_explanation": "שלב 3: נחשב את החיסור הפשוט ונקבל שהיתרה הפכה לחיובית.", "math_expression": "100" }
        ],
        "final_answer": "100 שקלים (פלוס)",
        "options": ["100- שקלים", "500 שקלים", "100 שקלים (פלוס)", "500- שקלים"],
        "correctAnswer": 2
    },
    {
        "id": 23,
        "subTopic": "חיבור וחיסור",
        "difficulty": "Low",
        "question_text": "חשבו: <strong> -12 + 12 </strong>",
        "hint": "מה קורה כשמחברים חוב ורווח באותו הסכום בדיוק?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אנו מזהים כאן חיבור של מספר עם המספר הנגדי שלו.", "math_expression": "נגדיים" },
            { "verbal_explanation": "שלב 2: 12 צעדים שמאלה, ואז 12 צעדים ימינה, מחזירים אותנו בדיוק לאותה הנקודה.", "math_expression": "0" }
        ],
        "final_answer": "0",
        "options": ["24", "24-", "0", "144-"],
        "correctAnswer": 2
    },
    {
        "id": 24,
        "subTopic": "חיבור וחיסור",
        "difficulty": "Medium",
        "question_text": "חשבו את תוצאת התרגיל: <strong> -7 - (-7) </strong>",
        "hint": "טפלו ב'מינוס מינוס' שבתוך התרגיל. למה הוא הופך?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אנו רואים סימן חיסור צמוד למינוס של ה-7. לפי הכללים, מינוס ומינוס צמודים הופכים לפלוס.", "math_expression": "- ( - ) \u2192 +" },
            { "verbal_explanation": "שלב 2: נכתוב את התרגיל מחדש עם הסימן המעודכן.", "math_expression": "-7 + 7" },
            { "verbal_explanation": "שלב 3: חיבור של מספר והנגדי שלו נותן תמיד אפס.", "math_expression": "0" }
        ],
        "final_answer": "0",
        "options": ["14-", "0", "14", "49"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "חיבור וחיסור",
        "difficulty": "High",
        "question_text": "מצאו את הנעלם במשוואה: <strong> -5 + X = -2 </strong>",
        "hint": "אתם נמצאים בקומה מינוס 5, ואתם רוצים להגיע לקומה מינוס 2. כמה קומות ובאיזה כיוון עליכם לעלות?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המטרה היא לבודד את X. נעשה זאת על ידי ביטול ה- (-5) שנמצא באגף שמאל. נוסיף 5 לשני אגפי המשוואה.", "math_expression": "X = -2 + 5" },
            { "verbal_explanation": "שלב 2: נפתור את תרגיל החיבור בצד ימין (או 5 פחות 2).", "math_expression": "X = 3" }
        ],
        "final_answer": "3",
        "options": ["7-", "3-", "3", "7"],
        "correctAnswer": 2
    },
    {
        "id": 26,
        "subTopic": "חיבור וחיסור",
        "difficulty": "High",
        "question_text": "מהו ה<strong>הפרש</strong> (תרגיל חיסור) בין המספר 5 לבין המספר 5-? (חשבו: <strong> 5 - (-5) </strong> )",
        "hint": "ההפרש מתאר למעשה את המרחק בין המספרים. זכרו מה עושים עם פעמיים מינוס ברצף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את התרגיל במדויק: המספר הראשון פחות המספר השני (שהוא שלילי).", "math_expression": "5 - (-5)" },
            { "verbal_explanation": "שלב 2: נשתמש בכלל שקובע שסימן חיסור לפני מינוס הופך לחיבור חיובי.", "math_expression": "5 + 5" },
            { "verbal_explanation": "שלב 3: נחבר את המספרים ונקבל את ההפרש (שהוא למעשה המרחק בין שתי הנקודות על הציר).", "math_expression": "10" }
        ],
        "final_answer": "10",
        "options": ["0", "10-", "10", "25"],
        "correctAnswer": 2
    },
    {
        "id": 27,
        "subTopic": "חיבור וחיסור",
        "difficulty": "Low",
        "question_text": "חשבו: <strong> 0 - 8 </strong>",
        "hint": "חיסור מתוך אפס פירושו ירידה אל מתחת לאפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: התחלנו באפס, ולא הוספנו כלום. אנחנו פשוט צריכים לחסר 8.", "math_expression": "0 - 8" },
            { "verbal_explanation": "שלב 2: ירידה של 8 צעדים מהאפס מביאה אותנו בדיוק למספר מינוס 8.", "math_expression": "-8" }
        ],
        "final_answer": "8-",
        "options": ["8", "8-", "0", "אין פתרון"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "חיבור וחיסור",
        "difficulty": "High",
        "question_text": "פתרו את התרגיל המורכב: <strong> -3 + (-4) - (-10) </strong>",
        "hint": "עבדו צעד אחר צעד משמאל לימין. זכרו לטפל קודם בסימן החיסור שלפני ה- (-10).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל בפישוט הסימנים. נהפוך את החיסור של מינוס 10 לחיבור של 10 חיובי.", "math_expression": "-3 + (-4) + 10" },
            { "verbal_explanation": "שלב 2: נפתור את החלק הראשון משמאל. חיבור של שני חובות (3- ועוד 4-) נותן חוב גדול יותר (7-).", "math_expression": "-7 + 10" },
            { "verbal_explanation": "שלב 3: נפתור את החלק האחרון. חוב של 7 שקלים ורווח של 10 שקלים. מותר להפוך את הסדר (10 פחות 7).", "math_expression": "3" }
        ],
        "final_answer": "3",
        "options": ["17-", "3-", "3", "7"],
        "correctAnswer": 2
    },
    {
        "id": 29,
        "subTopic": "חיבור וחיסור",
        "difficulty": "Medium",
        "question_text": "מעלית בבניין התחילה את נסיעתה מהחניון התת-קרקעי בקומה <strong>2-</strong>. היא <strong>עלתה 5 קומות</strong> למעלה. לאיזו קומה היא הגיעה?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100'><rect x='40' y='10' width='40' height='80' fill='#fdfbf7' stroke='#1e293b' stroke-width='2'/><line x1='40' y1='50' x2='80' y2='50' stroke='#1e293b'/><text x='25' y='55' font-size='12'>0</text><rect x='45' y='70' width='30' height='15' fill='#b09151'/><text x='15' y='82' font-size='12'>-2</text><path d='M85,75 Q110,40 85,20' fill='none' stroke='#1e293b' stroke-width='2' stroke-dasharray='4'/><polygon points='85,20 90,15 95,25' fill='#1e293b'/></svg></div>",
        "hint": "תרגמו זאת לתרגיל חיבור פשוט: (2-) ועוד 5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את התרגיל. התחלנו במינוס 2, ו'עלייה' משמעותה חיבור חיובי של 5.", "math_expression": "-2 + 5" },
            { "verbal_explanation": "שלב 2: מכיוון שאנו מחברים מספר חיובי שגדול בערכו מהמספר השלילי, נעבור את קומת הקרקע (האפס). נחשב 5 פחות 2.", "math_expression": "5 - 2 = 3" },
            { "verbal_explanation": "שלב 3: המעלית תעצור בקומה 3 מעל הקרקע.", "math_expression": "3" }
        ],
        "final_answer": "קומה 3",
        "options": ["קומה 3-", "קומה 7-", "קומה 3", "קומה 7"],
        "correctAnswer": 2
    },
    {
        "id": 30,
        "subTopic": "חיבור וחיסור",
        "difficulty": "High",
        "question_text": "מצאו את הערך של X במשוואה: <strong> X - (-4) = 1 </strong>",
        "hint": "קודם כל, פשטו את ה'מינוס מינוס'. לאחר מכן פתרו את המשוואה הרגילה שתתקבל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל בפישוט האגף השמאלי. חיסור של מספר שלילי הופך לפעולת חיבור. נרשום את המשוואה מחדש.", "math_expression": "X + 4 = 1" },
            { "verbal_explanation": "שלב 2: נשאל את עצמנו: איזה מספר שנוסיף לו 4 ייתן לנו 1? כדי למצוא אותו, נחסיר 4 משני האגפים.", "math_expression": "X = 1 - 4" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה הסופית. 1 פחות 4 מוביל אותנו מתחת לאפס, למינוס 3.", "math_expression": "X = -3" }
        ],
        "final_answer": "3-",
        "options": ["5", "3-", "5-", "3"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 3: כפל וחילוק (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "כפל וחילוק",
        "difficulty": "Low",
        "question_text": "חשבו את תוצאת תרגיל הכפל הבא: <strong> 5 × (-4) </strong>",
        "hint": "כפל של מספר חיובי במספר שלילי נותן תמיד תוצאה שלילית (כמו לקחת חוב של 4 שקלים, 5 פעמים).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתעלם לרגע מהסימנים ונבצע את פעולת הכפל הרגילה בין המספרים (5 כפול 4).", "math_expression": "5 × 4 = 20" },
            { "verbal_explanation": "שלב 2: כעת נקבע את הסימן. לפי חוקי הכפל, 'פלוס' כפול 'מינוס' מנצח ה'מינוס'.", "math_expression": "(+) × (-) = -" },
            { "verbal_explanation": "שלב 3: נצמיד את סימן המינוס לתוצאה שקיבלנו.", "math_expression": "-20" }
        ],
        "final_answer": "20-",
        "options": ["20", "20-", "9-", "1-"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "כפל וחילוק",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה של כפל שני מספרים שליליים: <strong> (-6) × (-3) </strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='160' height='60'><rect x='10' y='10' width='140' height='40' rx='8' fill='#fefce8' stroke='#b09151' stroke-width='2'/><text x='80' y='35' font-size='16' font-weight='bold' text-anchor='middle'>(-) × (-) = (+)</text></svg></div>",
        "hint": "זכרו את חוק הקסם במתמטיקה: כפל של שני סימנים זהים (מינוס ומינוס) נותן תמיד פלוס!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבצע את פעולת הכפל על המספרים עצמם ללא הסימנים. 6 כפול 3 נותן 18.", "math_expression": "6 × 3 = 18" },
            { "verbal_explanation": "שלב 2: נבדוק את הסימנים. אנו מכפילים מספר שלילי במספר שלילי. חוק הסימנים קובע ש'מינוס כפול מינוס שווה פלוס'.", "math_expression": "(-) × (-) = +" },
            { "verbal_explanation": "שלב 3: התוצאה הסופית היא מספר חיובי.", "math_expression": "18" }
        ],
        "final_answer": "18",
        "options": ["18-", "9-", "18", "9"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "כפל וחילוק",
        "difficulty": "High",
        "question_text": "חשבו את תוצאת התרגיל המורכב הבא: <strong> (-2) × 3 × (-4) </strong>",
        "hint": "בצעו את הכפל צעד אחר צעד, משמאל לימין. קודם הכפילו את שני המספרים הראשונים, ואת התוצאה הכפילו בשלישי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל מהחלק השמאלי של התרגיל: מינוס 2 כפול 3 (שלילי כפול חיובי נותן שלילי).", "math_expression": "-2 × 3 = -6" },
            { "verbal_explanation": "שלב 2: כעת נציב את התוצאה חזרה. נשאר לנו להכפיל את המינוס 6 שקיבלנו במספר האחרון שבתרגיל, מינוס 4.", "math_expression": "-6 × (-4)" },
            { "verbal_explanation": "שלב 3: כפל של שני מספרים שליליים נותן תוצאה חיובית. 6 כפול 4 זה 24.", "math_expression": "24" }
        ],
        "final_answer": "24",
        "options": ["24-", "24", "10-", "14"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "כפל וחילוק",
        "difficulty": "Low",
        "question_text": "פתרו את תרגיל החילוק: <strong> 20 ÷ (-5) </strong>",
        "hint": "חוקי הסימנים בחילוק זהים לחוקי הסימנים בכפל. חיובי לחלק לשלילי נותן...",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבצע את פעולת החילוק על המספרים עצמם: 20 לחלק ל-5 הם 4.", "math_expression": "20 ÷ 5 = 4" },
            { "verbal_explanation": "שלב 2: נבדוק את הסימנים. חילקנו מספר חיובי במספר שלילי. בדיוק כמו בכפל, התוצאה תהיה שלילית.", "math_expression": "(+) ÷ (-) = -" },
            { "verbal_explanation": "שלב 3: נצמיד את סימן המינוס לתוצאה.", "math_expression": "-4" }
        ],
        "final_answer": "4-",
        "options": ["4", "4-", "25", "15-"],
        "correctAnswer": 1
    },
    {
        "id": 35,
        "subTopic": "כפל וחילוק",
        "difficulty": "Medium",
        "question_text": "חשבו את התוצאה: <strong> -100 ÷ (-10) </strong>",
        "hint": "מספר שלילי מחולק במספר שלילי. מהו חוק הסימנים המתאים כאן?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את המספרים ללא התייחסות לסימן: 100 לחלק ל-10 הם 10.", "math_expression": "100 ÷ 10 = 10" },
            { "verbal_explanation": "שלב 2: נבחן את הסימנים. אנו מחלקים מינוס במינוס. כמו בכפל, מינוס לחלק למינוס נותן פלוס.", "math_expression": "(-) ÷ (-) = +" },
            { "verbal_explanation": "שלב 3: לכן התוצאה הסופית היא 10 חיובי.", "math_expression": "10" }
        ],
        "final_answer": "10",
        "options": ["10-", "10", "110-", "0"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "כפל וחילוק",
        "difficulty": "High",
        "question_text": "חשבו, משמאל לימין: <strong> -48 ÷ 6 × (-2) </strong>",
        "hint": "בכפל וחילוק אין עדיפות לאחד על השני, פותרים פשוט לפי הסדר (משמאל לימין).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל מהפעולה הראשונה משמאל (החילוק). מינוס 48 לחלק ל-6 החיובי. התוצאה תהיה שלילית.", "math_expression": "-48 ÷ 6 = -8" },
            { "verbal_explanation": "שלב 2: ניקח את התוצאה (8-) ונבצע את הפעולה הבאה: כפל במינוס 2.", "math_expression": "-8 × (-2)" },
            { "verbal_explanation": "שלב 3: כפל של שני מספרים שליליים נותן תוצאה חיובית. 8 כפול 2 הם 16.", "math_expression": "16" }
        ],
        "final_answer": "16",
        "options": ["16-", "16", "4", "4-"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "כפל וחילוק",
        "difficulty": "Medium",
        "question_text": "צוללת צוללת לעומק הים בקצב קבוע של <strong>5- מטרים בכל דקה</strong>. היכן תהיה הצוללת ביחס לפני הים לאחר <strong>10 דקות</strong>?",
        "hint": "בנו תרגיל כפל: קצב הירידה (שלילי) כפול מספר הדקות (חיובי).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את התרגיל. בכל דקה הצוללת יורדת 5 מטרים (זהו 5-). תהליך זה קורה 10 פעמים.", "math_expression": "-5 × 10" },
            { "verbal_explanation": "שלב 2: נכפיל את המספרים: 5 כפול 10 שווה 50.", "math_expression": "50" },
            { "verbal_explanation": "שלב 3: שלילי כפול חיובי נותן שלילי. לכן התוצאה היא מינוס 50 (כלומר, 50 מטרים מתחת לפני הים).", "math_expression": "-50" }
        ],
        "final_answer": "50- מטרים",
        "options": ["50 מטרים", "50- מטרים", "15- מטרים", "2- מטרים"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "כפל וחילוק",
        "difficulty": "Low",
        "question_text": "מה יהיה ה<strong>סימן</strong> של התוצאה, אם נכפיל יחד <strong>3 מספרים שליליים</strong>?",
        "hint": "חשבו צעד צעד: מינוס כפול מינוס שווה פלוס. ואז פלוס שקיבלנו כפול המינוס השלישי שווה...?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נדמיין כפל של שלושה סימני מינוס.", "math_expression": "(-) × (-) × (-)" },
            { "verbal_explanation": "שלב 2: נכפיל את השניים הראשונים. כפי שלמדנו, מינוס כפול מינוס הופך לפלוס.", "math_expression": "(+) × (-)" },
            { "verbal_explanation": "שלב 3: כעת נשאר להכפיל את התוצאה החיובית במינוס האחרון. חיובי כפול שלילי נותן שלילי.", "math_expression": "-" }
        ],
        "final_answer": "הסימן יהיה שלילי",
        "options": ["הסימן יהיה חיובי", "הסימן יהיה שלילי", "התוצאה תהיה תמיד 0", "לא ניתן לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "כפל וחילוק",
        "difficulty": "High",
        "question_text": "חשבו: <strong> (-1) × (-1) × (-1) × (-1) </strong>",
        "hint": "ספרו כמה מספרי 1- יש בתרגיל. אם הכמות זוגית, כל זוג הופך לפלוס אחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שיש לנו 4 מופעים של המספר (1-). כמות זוגית של מספרים שליליים בכפל תמיד נותנת תוצאה חיובית.", "math_expression": "4 פעמים (-)" },
            { "verbal_explanation": "שלב 2: נחלק אותם לזוגות: הזוג הראשון (1- כפול 1-) נותן 1 חיובי. הזוג השני נותן גם הוא 1 חיובי.", "math_expression": "(+1) × (+1)" },
            { "verbal_explanation": "שלב 3: 1 כפול 1 נשאר פשוט 1.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["1-", "4-", "1", "4"],
        "correctAnswer": 2
    },
    {
        "id": 40,
        "subTopic": "כפל וחילוק",
        "difficulty": "Medium",
        "question_text": "מצאו את הנעלם X במשוואה הבאה: <strong> X × (-4) = 24 </strong>",
        "hint": "איזה מספר נכפיל ב-4 כדי לקבל 24? והאם הוא צריך להיות חיובי או שלילי כדי שהתוצאה תהיה פלוס 24?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחילה נבדוק את המספרים בלי הסימן. איזה מספר כפול 4 נותן 24? התשובה היא 6.", "math_expression": "? × 4 = 24 \u2192 6" },
            { "verbal_explanation": "שלב 2: עכשיו נבדוק את הסימנים. התוצאה (24) היא חיובית, ואחד הגורמים (-4) הוא שלילי. כדי שהתוצאה תהיה חיובית, הגורם השני חייב להיות שלילי גם הוא (כי מינוס כפול מינוס שווה פלוס).", "math_expression": "(-) × (-) = +" },
            { "verbal_explanation": "שלב 3: לכן, המספר הנעלם חייב להיות מינוס 6.", "math_expression": "X = -6" }
        ],
        "final_answer": "6-",
        "options": ["6", "6-", "8-", "8"],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "subTopic": "כפל וחילוק",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה הבאה ומצאו את X: <strong> -36 ÷ X = -9 </strong>",
        "hint": "התוצאה שלילית ואחד המספרים שלילי. מה זה אומר על הסימן של X?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתעלם מהסימנים ונשאל את עצמנו: 36 לחלק לאיזה מספר ייתן 9? התשובה היא 4.", "math_expression": "36 ÷ ? = 9 \u2192 4" },
            { "verbal_explanation": "שלב 2: נבדוק את חוקי הסימנים. חילקנו מספר שלילי (-36) ב-X וקיבלנו תוצאה שלילית (-9).", "math_expression": "(-) ÷ (?) = -" },
            { "verbal_explanation": "שלב 3: כדי שהסימן השלילי יישמר, חובה לחלק את המספר השלילי במספר חיובי.", "math_expression": "X = 4" }
        ],
        "final_answer": "4",
        "options": ["4-", "4", "9", "9-"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "כפל וחילוק",
        "difficulty": "Low",
        "question_text": "חשבו: <strong> 0 ÷ (-8) </strong>",
        "hint": "מה קורה שמחלקים כלום (אפס) לכמה חלקים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חילוק אפס בכל מספר (שאינו אפס) אומר שאנחנו מנסים לחלק כמות של 'כלום'.", "math_expression": "0 ÷ A" },
            { "verbal_explanation": "שלב 2: התוצאה תמיד תהיה אפס, ללא קשר אם המספר בו מחלקים הוא חיובי או שלילי.", "math_expression": "0" }
        ],
        "final_answer": "0",
        "options": ["8-", "8", "0", "אין פתרון"],
        "correctAnswer": 2
    },
    {
        "id": 43,
        "subTopic": "כפל וחילוק",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה של: <strong> (-5) × 0 × (-12) </strong>?",
        "hint": "לפני שאתם מחשבים, הסתכלו היטב על המספרים שבתרגיל. האם יש שם 'מאפס'?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בתרגיל כפל ארוך (עם כמה גורמים), נוכל להסתכל על כל המכפלה כמקשה אחת.", "math_expression": "A × B × C" },
            { "verbal_explanation": "שלב 2: נשים לב שאחד הגורמים הוא אפס. חוק האפס בכפל קובע שמכפלה של כל מספר באפס מאפסת את כל התרגיל כולו.", "math_expression": "0" },
            { "verbal_explanation": "שלב 3: לכן אין צורך לחשב כמה זה 5 כפול 12, התשובה הסופית היא פשוט 0.", "math_expression": "0" }
        ],
        "final_answer": "0",
        "options": ["60", "60-", "0", "17-"],
        "correctAnswer": 2
    },
    {
        "id": 44,
        "subTopic": "כפל וחילוק",
        "difficulty": "High",
        "question_text": "מהו ה<strong>ממוצע</strong> של שלושת המספרים הבאים: <strong> -4, -6, -2 </strong>?",
        "hint": "כדי למצוא ממוצע, עלינו קודם כל לחבר את כל המספרים, ואז לחלק את התוצאה בכמות המספרים (3).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב קודם את הסכום הכולל. נחבר את שלושת החובות: 4- ועוד 6- זה 10-. נוסיף את ה-2- ונקבל 12-.", "math_expression": "(-4) + (-6) + (-2) = -12" },
            { "verbal_explanation": "שלב 2: כעת נחלק את הסכום שקיבלנו (-12) ב-3, שכן יש לנו 3 מספרים.", "math_expression": "-12 ÷ 3" },
            { "verbal_explanation": "שלב 3: נבצע חילוק: 12 לחלק ל-3 הם 4. שלילי לחלק לחיובי נותן תוצאה שלילית.", "math_expression": "-4" }
        ],
        "final_answer": "4-",
        "options": ["12-", "4-", "4", "6-"],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "subTopic": "כפל וחילוק",
        "difficulty": "Medium",
        "question_text": "חמישה שותפים לעסק צברו יחד חוב של <strong>50- שקלים</strong>. הם מחליטים לחלק את החוב שווה בשווה ביניהם. מה יהיה ה'רווח/הפסד' של <strong>כל שותף בנפרד</strong>?",
        "hint": "בנו תרגיל חילוק: חלקו את החוב השלילי (-50) למספר האנשים החיובי (5).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את התרגיל. החוב מיוצג על ידי מספר שלילי (-50), ומספר האנשים הוא חיובי (5).", "math_expression": "-50 ÷ 5" },
            { "verbal_explanation": "שלב 2: נבצע את החילוק. 50 לחלק ל-5 שווה 10.", "math_expression": "10" },
            { "verbal_explanation": "שלב 3: נבדוק את הסימנים: שלילי לחלק לחיובי שווה לשלילי. לכן, לכל אחד מהם יתווסף חוב של 10 שקלים.", "math_expression": "-10" }
        ],
        "final_answer": "10- (חוב של 10 שקלים)",
        "options": ["10 (רווח)", "10- (חוב)", "50-", "55-"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 4: שימוש בסוגריים (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "Low",
        "question_text": "חשבו: <strong> 5 + (-3 × 2) </strong><br><div style='text-align:center; margin:15px 0;'><svg width='180' height='40'><path d='M70,25 Q100,-10 130,25' fill='none' stroke='#b09151' stroke-width='2'/><text x='100' y='35' font-size='12' font-weight='bold' text-anchor='middle'>קודם סוגריים!</text></svg></div>",
        "hint": "הסוגריים מורים לנו לפתור קודם את תרגיל הכפל שנמצא בתוכם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל תמיד ממה שנמצא בתוך הסוגריים. נחשב את הכפל: מינוס 3 כפול 2 חיובי נותן מינוס 6.", "math_expression": "-3 × 2 = -6" },
            { "verbal_explanation": "שלב 2: נחזור לתרגיל המקורי ונחליף את הסוגריים בתוצאה שקיבלנו. התרגיל הוא כעת 5 ועוד מינוס 6.", "math_expression": "5 + (-6)" },
            { "verbal_explanation": "שלב 3: נפתור את תרגיל החיבור. חוב של 6 וכסף של 5 ישאירו אותנו בחוב של 1.", "math_expression": "-1" }
        ],
        "final_answer": "1-",
        "options": ["11", "1-", "4", "22-"],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "Medium",
        "question_text": "חשבו את הביטוי הבא: <strong> -10 - (-2 × -4) </strong>",
        "hint": "זהירות עם הסימנים בתוך הסוגריים: כפל של מינוס במינוס נותן פלוס. רק אחר כך בצעו את החיסור מחוץ לסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניגש לסוגריים. יש לנו כפל של מינוס 2 במינוס 4. חוק הסימנים אומר שמינוס כפול מינוס נותן פלוס, לכן נקבל 8 חיובי.", "math_expression": "-2 × (-4) = 8" },
            { "verbal_explanation": "שלב 2: נציב את התוצאה בתרגיל המקורי: מינוס 10 פחות התוצאה שקיבלנו (8).", "math_expression": "-10 - 8" },
            { "verbal_explanation": "שלב 3: נחשב את חיבור החובות: ירידה ממינוס 10 בעוד 8 צעדים מובילה למינוס 18.", "math_expression": "-18" }
        ],
        "final_answer": "18-",
        "options": ["2-", "18-", "2", "18"],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "High",
        "question_text": "חשבו: <strong> -4 × (3 - 8) </strong>",
        "hint": "פתרו קודם את תרגיל החיסור בתוך הסוגריים (זה ייתן תוצאה שלילית!), ואז הכפילו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: למרות שיש כפל מחוץ לסוגריים, חובה לבצע את הסוגריים קודם. נחשב 3 פחות 8. מכיוון שמחסרים גדול מקטן, התוצאה היא שלילית.", "math_expression": "3 - 8 = -5" },
            { "verbal_explanation": "שלב 2: כעת התרגיל שלנו הפך למינוס 4 כפול התוצאה שבסוגריים (מינוס 5).", "math_expression": "-4 × (-5)" },
            { "verbal_explanation": "שלב 3: נחשב את הכפל. מינוס כפול מינוס הוא פלוס, ו-4 כפול 5 הוא 20.", "math_expression": "20" }
        ],
        "final_answer": "20",
        "options": ["20-", "20", "4-", "15-"],
        "correctAnswer": 1
    },
    {
        "id": 49,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "Medium",
        "question_text": "פתרו את התרגיל: <strong> 12 ÷ (-2 - 4) </strong>",
        "hint": "קודם יש לחשב את סכום החובות בתוך הסוגריים (-2 ו- -4), ורק אז לבצע את החילוק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל בחישוב הביטוי שבסוגריים. מינוס 2 פחות 4 זו ירידה נוספת, מה שמביא אותנו למינוס 6.", "math_expression": "-2 - 4 = -6" },
            { "verbal_explanation": "שלב 2: נחזור לתרגיל השלם. אנו מתבקשים לחלק את 12 בתוצאה שקיבלנו (-6).", "math_expression": "12 ÷ (-6)" },
            { "verbal_explanation": "שלב 3: חיובי לחלק לשלילי ייתן שלילי. 12 לחלק ל-6 הם 2. לכן התוצאה היא 2-.", "math_expression": "-2" }
        ],
        "final_answer": "2-",
        "options": ["2", "2-", "6", "6-"],
        "correctAnswer": 1
    },
    {
        "id": 50,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "Low",
        "question_text": "מה הערך של הביטוי: <strong> -(5 - 9) </strong>?",
        "hint": "חשבו קודם את ה- (5 פחות 9). אחר כך הצמידו לתוצאה את סימן המינוס שמחכה בחוץ.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את מה שבתוך הסוגריים בלבד: 5 פחות 9 ייתן לנו מספר שלילי, מכיוון שחסרנו יותר ממה שיש.", "math_expression": "5 - 9 = -4" },
            { "verbal_explanation": "שלב 2: כעת ניקח את התוצאה ונוסיף לה את סימן המינוס שנמצא לפני הסוגריים.", "math_expression": "-(-4)" },
            { "verbal_explanation": "שלב 3: כזכור, מינוס שצמוד למינוס הופך את המספר לחיובי (הנגדי של 4- הוא 4).", "math_expression": "4" }
        ],
        "final_answer": "4",
        "options": ["4-", "4", "14", "14-"],
        "correctAnswer": 1
    },
    {
        "id": 51,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "High",
        "question_text": "חשבו את התרגיל הבא, הכולל סוגריים מרובעים (שעוטפים הכל): <strong> [-15 + (-5)] ÷ (-4) </strong>",
        "hint": "הסוגריים המרובעים מתנהגים כמו חדר סגור. פתרו קודם את כל מה שבתוכם, ואז חלקו ב-4-.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתמקד קודם בתוך הסוגריים המרובעים. יש לנו מינוס 15 ועוד מינוס 5. זהו חיבור של שני חובות.", "math_expression": "-15 + (-5) = -20" },
            { "verbal_explanation": "שלב 2: כעת נציב את התוצאה הכוללת (-20) במקום כל הסוגריים המרובעים, ונבצע את החילוק המבוקש.", "math_expression": "-20 ÷ (-4)" },
            { "verbal_explanation": "שלב 3: נחלק מספר שלילי במספר שלילי, מה שיתן תוצאה חיובית. 20 לחלק ל-4 הם 5.", "math_expression": "5" }
        ],
        "final_answer": "5",
        "options": ["5-", "5", "4", "10"],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "Medium",
        "question_text": "חשבו: <strong> -3 × (-2) + (-4) × 5 </strong>",
        "hint": "זהו תרגיל קלאסי של סדר פעולות. בצעו קודם את שתי פעולות הכפל (בנפרד זו מזו), ורק בסוף חברו את שתי התוצאות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הכפל הראשון: מינוס 3 כפול מינוס 2. שלילי כפול שלילי נותן פלוס 6.", "math_expression": "-3 × (-2) = 6" },
            { "verbal_explanation": "שלב 2: נחשב את הכפל השני: מינוס 4 כפול 5 חיובי. שלילי כפול חיובי נותן מינוס 20.", "math_expression": "-4 × 5 = -20" },
            { "verbal_explanation": "שלב 3: נחבר את שתי התוצאות שקיבלנו. יש לנו 6 ועוד מינוס 20.", "math_expression": "6 + (-20)" },
            { "verbal_explanation": "שלב 4: מכיוון שהחוב (20-) גדול מהרווח (6), התוצאה תהיה שלילית.", "math_expression": "-14" }
        ],
        "final_answer": "14-",
        "options": ["14", "14-", "26", "26-"],
        "correctAnswer": 1
    },
    {
        "id": 53,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "High",
        "question_text": "חשבו: <strong> 20 - [ 5 - (-3 × 2) ] </strong>",
        "hint": "התחילו תמיד מהחלק הפנימי ביותר! קודם הכפל שבסוגריים הפנימיים, אז החיסור בסוגריים המרובעים, ובסוף הפעולה שבחוץ.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתור קודם את הכפל שבתוך הסוגריים העגולים הפנימיים. מינוס 3 כפול 2 שווה מינוס 6.", "math_expression": "-3 × 2 = -6" },
            { "verbal_explanation": "שלב 2: נציב את התוצאה בתוך הסוגריים המרובעים. כעת מופיע לנו '5 פחות מינוס 6'. פחות מינוס הופך לפלוס.", "math_expression": "5 - (-6) = 5 + 6 = 11" },
            { "verbal_explanation": "שלב 3: סיימנו עם כל הסוגריים. כעת נחזור למספר שהמתין בחוץ מתחילת התרגיל (20) ונחסר ממנו את התוצאה שלנו (11).", "math_expression": "20 - 11 = 9" }
        ],
        "final_answer": "9",
        "options": ["9", "31", "9-", "15"],
        "correctAnswer": 0
    },
    {
        "id": 54,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "Low",
        "question_text": "מהי התוצאה של: <strong> (-6 + 6) × (-10) </strong>?",
        "hint": "הסתכלו היטב על מה שקורה בתוך הסוגריים. האם אתם מזהים שם מספרים נגדיים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב קודם את מה שבסוגריים. אנו מחברים מינוס 6 עם פלוס 6. אלו מספרים נגדיים שמבטלים זה את זה ולכן סכומם 0.", "math_expression": "-6 + 6 = 0" },
            { "verbal_explanation": "שלב 2: כעת נכפיל את התוצאה אפס במספר שנמצא מחוץ לסוגריים.", "math_expression": "0 × (-10)" },
            { "verbal_explanation": "שלב 3: לפי חוקי הכפל, אפס כפול כל מספר תמיד נותן אפס.", "math_expression": "0" }
        ],
        "final_answer": "0",
        "options": ["120-", "60-", "0", "120"],
        "correctAnswer": 2
    },
    {
        "id": 55,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "Medium",
        "question_text": "חשבו את תוצאת שבר החילוק הבא (קו השבר מתנהג כמו סוגריים סביב המונה וסביב המכנה): <strong> (-12 - 8) ÷ (-4 + 9) </strong>",
        "hint": "חשבו קודם את השבר השמאלי (המונה), ואז את השבר הימני (המכנה), ובסוף חלקו ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את תכולת הסוגריים השמאליים. מינוס 12 פחות 8 אומר ירידה נוספת, כלומר מינוס 20.", "math_expression": "-12 - 8 = -20" },
            { "verbal_explanation": "שלב 2: נחשב את תכולת הסוגריים הימניים. מינוס 4 ועוד 9 מוביל אותנו אל מעל האפס, ל-5 חיובי.", "math_expression": "-4 + 9 = 5" },
            { "verbal_explanation": "שלב 3: נחלק את התוצאות זו בזו: שלילי לחלק לחיובי ייתן שלילי.", "math_expression": "-20 ÷ 5 = -4" }
        ],
        "final_answer": "4-",
        "options": ["4", "4-", "5", "5-"],
        "correctAnswer": 1
    },
    {
        "id": 56,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "High",
        "question_text": "הציבו <strong> X = -2 </strong> בביטוי האלגברי <strong> 3X - 5 </strong> וחשבו את התוצאה.",
        "hint": "כאשר מציבים מספר שלילי בביטוי במקום אות, חובה להשתמש בסוגריים כדי לא להתבלבל בסימנים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחליף את האות X במספר (-2), ונזכור שבין 3 ל-X יש פעולת כפל נסתרת. נקפיד לשים את ה-(-2) בסוגריים.", "math_expression": "3 × (-2) - 5" },
            { "verbal_explanation": "שלב 2: נבצע קודם את פעולת הכפל לפי סדר הפעולות. חיובי כפול שלילי זה שלילי.", "math_expression": "-6 - 5" },
            { "verbal_explanation": "שלב 3: נחסיר 5 מתוך ה-6-. התוצאה היא חוב גדול יותר של 11-.", "math_expression": "-11" }
        ],
        "final_answer": "11-",
        "options": ["1-", "1", "11-", "11"],
        "correctAnswer": 2
    },
    {
        "id": 57,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "Medium",
        "question_text": "נתונים המספרים: <strong> A = -4 , B = -3 </strong>. חשבו את ערך הביטוי: <strong> A × B - A </strong>",
        "hint": "הציבו את המספרים בזהירות עם סוגריים. הביטוי ייראה כך: (-4) כפול (-3) פחות (-4).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הערכים בתוך הביטוי כדי לראות את התרגיל השלם במדויק.", "math_expression": "(-4) × (-3) - (-4)" },
            { "verbal_explanation": "שלב 2: נבצע את פעולת הכפל שבתחילת התרגיל. מינוס כפול מינוס הוא פלוס, ולכן נקבל 12.", "math_expression": "12 - (-4)" },
            { "verbal_explanation": "שלב 3: נזכור שחיסור של מספר שלילי הופך לחיבור. נהפוך את התרגיל ל-12 ועוד 4 ונחשב.", "math_expression": "12 + 4 = 16" }
        ],
        "final_answer": "16",
        "options": ["8", "16", "16-", "8-"],
        "correctAnswer": 1
    },
    {
        "id": 58,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "High",
        "question_text": "מהי התוצאה של: <strong> -|-5 × 2| </strong>?",
        "hint": "בדומה לסוגריים, פתרו קודם את תרגיל הכפל שבתוך הקווים. אחרי זה הוציאו ערך מוחלט, ורק בסוף הוסיפו את המינוס שבחוץ.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: קודם כל נבצע את הפעולה שבתוך קווי הערך המוחלט. מינוס 5 כפול 2 שווה למינוס 10.", "math_expression": "|-10|" },
            { "verbal_explanation": "שלב 2: כעת נחשב את הערך המוחלט של (-10). המרחק מהאפס הוא פשוט 10 חיובי.", "math_expression": "10" },
            { "verbal_explanation": "שלב 3: כמעט סיימנו! בואו לא נשכח את המינוס שהמתין לנו מתחילת התרגיל מחוץ לקווים. נצמיד אותו לתוצאה.", "math_expression": "-(10) = -10" }
        ],
        "final_answer": "10-",
        "options": ["10", "10-", "7", "7-"],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "Medium",
        "question_text": "האם התוצאה של <strong> (-4 - 2) × 3 </strong> שווה לתוצאה של <strong> -4 - 2 × 3 </strong>?",
        "hint": "הסוגריים משנים לחלוטין את סדר הפעולות! חשבו כל צד בנפרד והשוו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את צד ימין (עם הסוגריים). הסוגריים מחייבים חיסור קודם: מינוס 6 כפול 3 שווה 18-.", "math_expression": "(-6) × 3 = -18" },
            { "verbal_explanation": "שלב 2: נחשב את צד שמאל (בלי סוגריים). כאן הכפל קודם: מינוס 4 פחות (2 כפול 3), כלומר מינוס 4 פחות 6, שזה 10-.", "math_expression": "-4 - 6 = -10" },
            { "verbal_explanation": "שלב 3: התוצאות (18- ו- 10-) שונות לגמרי. זה מוכיח כמה סוגריים חשובים בסדר פעולות.", "math_expression": "-18 \u2260 -10" }
        ],
        "final_answer": "לא, התוצאות שונות",
        "options": ["כן, הן שוות", "לא, התוצאות שונות", "כן, זהו חוק הקיבוץ", "שתי התשובות שוות ל-0"],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "subTopic": "שימוש בסוגריים",
        "difficulty": "High",
        "question_text": "הטמפרטורה בתנור הייתה <strong>10 מעלות</strong>. היא <strong>צנחה ב-2 מעלות בכל שעה, במשך 6 שעות</strong>. מה הייתה הטמפרטורה בסוף? <br><div style='text-align:center; margin:15px 0;'><svg width='180' height='40'><text x='90' y='25' font-size='14' text-anchor='middle'>רמז: 10 - (2 × 6)</text></svg></div>",
        "hint": "חשבו קודם בכמה מעלות סך הכל ירדה הטמפרטורה (כפל), ואז חסרו את הכמות הזו מהטמפרטורה ההתחלתית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סך כל הירידה בטמפרטורה. היא ירדה ב-2 מעלות במשך 6 שעות, כלומר בסך הכל הירידה הייתה של 12 מעלות.", "math_expression": "2 × 6 = 12" },
            { "verbal_explanation": "שלב 2: ניקח את הטמפרטורה ההתחלתית (10) ונחסיר ממנה את סך הירידה (12).", "math_expression": "10 - 12" },
            { "verbal_explanation": "שלב 3: מכיוון שאנו מחסרים 12 מ-10, נרד מתחת לאפס ונגיע למינוס 2 מעלות.", "math_expression": "-2" }
        ],
        "final_answer": "2- מעלות",
        "options": ["2 מעלות", "2- מעלות", "12- מעלות", "8 מעלות"],
        "correctAnswer": 1
    }
];