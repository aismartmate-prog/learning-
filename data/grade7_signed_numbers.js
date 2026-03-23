const questionsDB = [
    // ==========================================
    // תת נושא 1: הערך המוחלט ומספרים נגדיים (10 שאלות)
    // ==========================================
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "question_text": "מהו הערך המוחלט של המספר (מינוס חמש) \\( |-5| \\)?&rlm;",
        "options": ["5", "-5", "0", "10"],
        "correctAnswer": 0,
        "hint": "ערך מוחלט הוא המרחק של המספר מהאפס על ציר המספרים. מרחק הוא תמיד חיובי.",
        "solution_steps": [
            { "verbal_explanation": "ערך מוחלט בודק כמה צעדים המספר רחוק מהאפס, ללא קשר לכיוון (ימינה או שמאלה).", "math_expression": "|-5|" },
            { "verbal_explanation": "המספר מינוס חמש נמצא חמישה צעדים שמאלה מהאפס.", "math_expression": "-5 \\rightarrow 0" },
            { "verbal_explanation": "מכיוון שמרחק לא יכול להיות שלילי, פשוט מסירים את סימן המינוס.", "math_expression": "5" },
            { "verbal_explanation": "לכן הערך המוחלט הוא חמש.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "question_text": "איזה מספר הוא הנגדי של המספר 12?&rlm;",
        "options": ["-12", "12", "0", "24"],
        "correctAnswer": 0,
        "hint": "מספר נגדי הוא מספר שנמצא באותו מרחק מהאפס, אבל בצד השני של הציר (עם סימן הפוך).",
        "solution_steps": [
            { "verbal_explanation": "המספר הנתון הוא מספר חיובי (פלוס שנים עשר).", "math_expression": "12" },
            { "verbal_explanation": "מספר נגדי משנה את הסימן מחיובי לשלילי, או משלילי לחיובי.", "math_expression": "+ \\rightarrow -" },
            { "verbal_explanation": "נוסיף סימן מינוס לפני המספר.", "math_expression": "-12" },
            { "verbal_explanation": "המספר הנגדי הוא מינוס שנים עשר.", "math_expression": "-12" }
        ],
        "final_answer": "-12"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "question_text": "חשבו את התרגיל הבא: \\( |-8| + |3| \\)&rlm;",
        "options": ["11", "-5", "5", "-11"],
        "correctAnswer": 0,
        "hint": "חשבו קודם את הערך המוחלט של כל מספר בנפרד (שניהם יהפכו לחיוביים), ורק אז חברו אותם.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הערך המוחלט של המספר השמאלי. המרחק של מינוס שמונה מאפס הוא שמונה.", "math_expression": "|-8| = 8" },
            { "verbal_explanation": "נחשב את הערך המוחלט של המספר הימני. המרחק של שלוש מאפס הוא שלוש.", "math_expression": "|3| = 3" },
            { "verbal_explanation": "נרשום את התרגיל מחדש עם התוצאות החיוביות.", "math_expression": "8 + 3" },
            { "verbal_explanation": "נחבר את המספרים הרגילים ונקבל את התשובה.", "math_expression": "11" }
        ],
        "final_answer": "11"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "question_text": "מה קורה כשמחברים מספר יחד עם המספר הנגדי שלו? (למשל \\( 7 + (-7) \\))&rlm;",
        "options": ["התוצאה תמיד 0", "התוצאה כפולה מהמספר", "התוצאה תלויה במספר", "התוצאה תמיד שלילית"],
        "correctAnswer": 0,
        "hint": "אם הלכתם 7 צעדים קדימה ואז 7 צעדים אחורה, לאן הגעתם?",
        "solution_steps": [
            { "verbal_explanation": "ניקח מספר כלשהו, למשל שבע.", "math_expression": "7" },
            { "verbal_explanation": "המספר הנגדי שלו הוא מינוס שבע.", "math_expression": "-7" },
            { "verbal_explanation": "נחבר אותם יחד.", "math_expression": "7 + (-7)" },
            { "verbal_explanation": "חיבור של מספר והנגדי שלו מבטל זה את זה ומחזיר אותנו לנקודת ההתחלה.", "math_expression": "0" }
        ],
        "final_answer": "התוצאה תמיד 0"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "question_text": "סמנו את המשפט הנכון לגבי הערך המוחלט של 0 (\\( |0| \\)):&rlm;",
        "options": ["הוא 0", "הוא אין-סוף", "אין לו ערך מוחלט", "הוא מספר חיובי קטן"],
        "correctAnswer": 0,
        "hint": "כמה צעדים רחוק האפס מהאפס?",
        "solution_steps": [
            { "verbal_explanation": "נשאל את עצמנו מהו המרחק של נקודת האפס מעצמה על ישר המספרים.", "math_expression": "|0|" },
            { "verbal_explanation": "הנקודה כבר נמצאת על האפס, לכן המרחק הוא אפס צעדים.", "math_expression": "0" },
            { "verbal_explanation": "אין צורך להוסיף פלוס או מינוס, אפס נשאר אפס.", "math_expression": "0" }
        ],
        "final_answer": "הוא 0"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "question_text": "חשבו את התרגיל הבא: \\( -|-4| \\)&rlm;",
        "options": ["-4", "4", "0", "16"],
        "correctAnswer": 0,
        "hint": "קודם מוצאים את הערך המוחלט שבתוך הקווים הישרים, ורק אז מוסיפים לו את המינוס שנמצא בחוץ.",
        "solution_steps": [
            { "verbal_explanation": "נתעלם כרגע מהמינוס החיצוני ונתמקד רק במה שבתוך הערך המוחלט.", "math_expression": "|-4|" },
            { "verbal_explanation": "הערך המוחלט של מינוס ארבע הוא ארבע חיובי.", "math_expression": "4" },
            { "verbal_explanation": "כעת נחזיר את המינוס שהיה מחוץ לקווים ונצמיד אותו לתוצאה.", "math_expression": "- (4)" },
            { "verbal_explanation": "התשובה הסופית הופכת לשלילית שוב.", "math_expression": "-4" }
        ],
        "final_answer": "-4"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "question_text": "איזה מהביטויים הבאים נותן את התוצאה הגדולה ביותר?&rlm;",
        "options": ["|-10|", "|7|", "9", "-12"],
        "correctAnswer": 0,
        "hint": "הפכו את כל המספרים עם הערך המוחלט למספרים רגילים (חיוביים) ואז השוו ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את האפשרות הראשונה: הערך המוחלט של מינוס עשר הוא עשר.", "math_expression": "|-10| = 10" },
            { "verbal_explanation": "נבדוק את האפשרות השנייה: הערך המוחלט של שבע הוא פשוט שבע.", "math_expression": "|7| = 7" },
            { "verbal_explanation": "האפשרות השלישית והרביעית הן תשע ומינוס שנים עשר, ללא שינוי.", "math_expression": "9 \\quad , \\quad -12" },
            { "verbal_explanation": "נשווה בין התוצאות שיצרנו. עשר הוא המספר הגדול ביותר מבין כולם.", "math_expression": "10" }
        ],
        "final_answer": "|-10|"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "question_text": "חשבו את התרגיל הבא: \\( |-6| - |2| \\)&rlm;",
        "options": ["4", "8", "-8", "-4"],
        "correctAnswer": 0,
        "hint": "חשבו את הערכים המוחלטים קודם, ואז בצעו את תרגיל החיסור הרגיל שביניהם.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הערך המוחלט של המספר הראשון.", "math_expression": "|-6| = 6" },
            { "verbal_explanation": "נחשב את הערך המוחלט של המספר השני.", "math_expression": "|2| = 2" },
            { "verbal_explanation": "נכתוב את התרגיל מחדש עם התוצאות.", "math_expression": "6 - 2" },
            { "verbal_explanation": "נבצע את החיסור הפשוט.", "math_expression": "4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "question_text": "האם ייתכן שערך מוחלט של מספר יהיה שלילי? (למשל שיהיה שווה ל- \\( -3 \\))?&rlm;",
        "options": ["לא, ערך מוחלט הוא תמיד חיובי או אפס", "כן, אם המספר בתוכו היה שלילי", "כן, אבל רק בשברים", "לא, ערך מוחלט הוא תמיד רק חיובי (אף פעם לא אפס)"],
        "correctAnswer": 0,
        "hint": "חשבו על משמעות המילה 'מרחק'. האם קיימים מרחקים שליליים?",
        "solution_steps": [
            { "verbal_explanation": "ערך מוחלט מודד את המרחק של מספר מנקודת האפס.", "math_expression": "\\text{Distance}" },
            { "verbal_explanation": "מרחק במציאות אינו יכול להיות מספר שלילי (אי אפשר ללכת מינוס שלושה מטרים).", "math_expression": "\\geq 0" },
            { "verbal_explanation": "לכן, התוצאה יכולה להיות רק מספר חיובי, או אפס אם לא זזנו כלל.", "math_expression": "+, 0" }
        ],
        "final_answer": "לא, ערך מוחלט הוא תמיד חיובי או אפס"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "הערך המוחלט ומספרים נגדיים",
        "question_text": "אם ידוע ש- \\( |A| = 7 \\), איזה מהמספרים הבאים יכול להיות המספר \\( A \\)?&rlm;",
        "options": ["7 או -7", "רק 7", "רק -7", "0"],
        "correctAnswer": 0,
        "hint": "שני מספרים נמצאים במרחק של 7 צעדים בדיוק מהאפס. אחד מימין ואחד משמאל.",
        "solution_steps": [
            { "verbal_explanation": "המשוואה אומרת שהמרחק של מספר מסוים מאפס הוא שבעה צעדים.", "math_expression": "|?| = 7" },
            { "verbal_explanation": "אם נלך מהאפס שבעה צעדים ימינה, נגיע למספר שבע החיובי.", "math_expression": "|7| = 7" },
            { "verbal_explanation": "אם נלך מהאפס שבעה צעדים שמאלה, נגיע למספר מינוס שבע.", "math_expression": "|-7| = 7" },
            { "verbal_explanation": "שתי התשובות מקיימות את התנאי ולכן שתיהן נכונות.", "math_expression": "7 \\quad , \\quad -7" }
        ],
        "final_answer": "7 או -7"
    },

    // ==========================================
    // תת נושא 2: חיבור וחיסור (10 שאלות)
    // ==========================================
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "חיבור וחיסור",
        "question_text": "חשבו את התרגיל הבא: \\( -5 + (-3) \\)&rlm;",
        "options": ["-8", "-2", "2", "8"],
        "correctAnswer": 0,
        "hint": "כשמחברים שני מספרים עם אותו סימן (כמו חוב ועוד חוב), הסכום גדל והסימן נשאר זהה.",
        "solution_steps": [
            { "verbal_explanation": "יש לנו מספר שלילי ואנו מוסיפים לו עוד מספר שלילי.", "math_expression": "-5 + (-3)" },
            { "verbal_explanation": "פלוס ומינוס צמודים הופכים לפעולת חיסור אחת ברורה.", "math_expression": "-5 - 3" },
            { "verbal_explanation": "אנו נמצאים במינוס חמש ויורדים עוד שלושה צעדים למטה בציר המספרים.", "math_expression": "-8" },
            { "verbal_explanation": "התוצאה היא חוב גדול יותר.", "math_expression": "-8" }
        ],
        "final_answer": "-8"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "חיבור וחיסור",
        "question_text": "חשבו את התרגיל הבא: \\( -10 + 4 \\)&rlm;",
        "options": ["-6", "6", "-14", "14"],
        "correctAnswer": 0,
        "hint": "אתם במינוס 10 ועולים 4 צעדים למעלה לכיוון האפס. מה יהיה המספר החדש?",
        "solution_steps": [
            { "verbal_explanation": "נתחיל מהמספר ההתחלתי השלילי.", "math_expression": "-10" },
            { "verbal_explanation": "פעולת החיבור אומרת שעלינו לזוז ימינה (לכיוון החיובי) על ציר המספרים.", "math_expression": "+ 4" },
            { "verbal_explanation": "מכיוון שהחוב גדול מהתוספת החיובית, התוצאה תישאר עדיין במינוס.", "math_expression": "10 - 4 = 6" },
            { "verbal_explanation": "נצמיד את סימן המינוס למספר.", "math_expression": "-6" }
        ],
        "final_answer": "-6"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "חיבור וחיסור",
        "question_text": "חשבו את התרגיל הבא: \\( 7 - (-2) \\)&rlm;",
        "options": ["9", "5", "-5", "-9"],
        "correctAnswer": 0,
        "hint": "חיסור של מספר שלילי שקול לחיבור. 'מינוס מינוס הופך לפלוס'.",
        "solution_steps": [
            { "verbal_explanation": "נשים לב לשני סימני המינוס הצמודים זה לזה.", "math_expression": "7 - (-2)" },
            { "verbal_explanation": "כאשר מחסרים כמות שלילית (כמו למחוק חוב), זה בעצם כמו להוסיף כמות חיובית.", "math_expression": "- (-) = +" },
            { "verbal_explanation": "נכתוב את התרגיל החדש עם סימן חיבור.", "math_expression": "7 + 2" },
            { "verbal_explanation": "נבצע את החיבור הרגיל.", "math_expression": "9" }
        ],
        "final_answer": "9"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "חיבור וחיסור",
        "question_text": "חשבו את התרגיל הבא: \\( -12 - 5 \\)&rlm;",
        "options": ["-17", "-7", "7", "17"],
        "correctAnswer": 0,
        "hint": "אתם במינוס 12, ויורדים למטה עוד 5 צעדים.",
        "solution_steps": [
            { "verbal_explanation": "המספר ההתחלתי הוא שלילי.", "math_expression": "-12" },
            { "verbal_explanation": "פעולת החיסור גורמת לנו לרדת עוד יותר למטה (לזוז שמאלה) על ישר המספרים.", "math_expression": "- 5" },
            { "verbal_explanation": "נחבר את המספרים בלי הסימנים שלהם כדי לראות את גודל הקפיצה הכולל מנקודת האפס.", "math_expression": "12 + 5 = 17" },
            { "verbal_explanation": "מאחר וזזנו רק שמאלה כל הזמן, התוצאה היא מינוס.", "math_expression": "-17" }
        ],
        "final_answer": "-17"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "חיבור וחיסור",
        "question_text": "חשבו את התרגיל הבא: \\( 15 + (-20) \\)&rlm;",
        "options": ["-5", "5", "35", "-35"],
        "correctAnswer": 0,
        "hint": "פלוס ומינוס הופכים למינוס. יש לכם 15 אבל אתם מנסים להחסיר 20.",
        "solution_steps": [
            { "verbal_explanation": "חיבור של מספר שלילי משמעותו לחסר את המספר.", "math_expression": "15 - 20" },
            { "verbal_explanation": "מכיוון שאנו מחסרים מספר גדול ממה שיש לנו, התוצאה תעבור אל מתחת לאפס.", "math_expression": "20 - 15 = 5" },
            { "verbal_explanation": "בגלל שחצינו את קו האפס אל הצד השמאלי, נוסיף סימן מינוס.", "math_expression": "-5" }
        ],
        "final_answer": "-5"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "חיבור וחיסור",
        "question_text": "חשבו את התרגיל הבא: \\( -8 - (-8) \\)&rlm;",
        "options": ["0", "-16", "16", "-64"],
        "correctAnswer": 0,
        "hint": "שני המינוסים האמצעיים הופכים לפלוס. התרגיל יהיה מינוס שמונה ועוד שמונה.",
        "solution_steps": [
            { "verbal_explanation": "נחליף את שני סימני המינוס הרצופים בסימן חיבור אחד ויחיד.", "math_expression": "-8 + 8" },
            { "verbal_explanation": "אנו נמצאים שמונה צעדים משמאל לאפס, והולכים שמונה צעדים ימינה.", "math_expression": "\\rightarrow" },
            { "verbal_explanation": "חיבור של מספר עם הנגדי שלו שווה תמיד לאפס.", "math_expression": "0" }
        ],
        "final_answer": "0"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "חיבור וחיסור",
        "question_text": "מה התוצאה של: \\( -2.5 + 4.5 \\)&rlm;",
        "options": ["2", "-2", "7", "-7"],
        "correctAnswer": 0,
        "hint": "זה כמו לומר 4.5 פחות 2.5 (אפשר לשנות את הסדר בחיבור).",
        "solution_steps": [
            { "verbal_explanation": "נחליף את הסדר של המספרים כדי שיהיה נוח יותר לראות את התרגיל (חוק החילוף).", "math_expression": "4.5 + (-2.5)" },
            { "verbal_explanation": "נשנה את הפלוס והמינוס הצמודים לפעולת חיסור רגילה.", "math_expression": "4.5 - 2.5" },
            { "verbal_explanation": "נחסר עשיריות ואז שלמים.", "math_expression": "5 - 5 = 0 \\quad , \\quad 4 - 2 = 2" },
            { "verbal_explanation": "התשובה השלמה היא שתיים.", "math_expression": "2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "חיבור וחיסור",
        "question_text": "חשבו את התרגיל הבא: \\( -1/2 - 1/2 \\)&rlm;",
        "options": ["-1", "0", "1", "-1/4"],
        "correctAnswer": 0,
        "hint": "מינוס חצי, ועוד ירידה של מינוס חצי.",
        "solution_steps": [
            { "verbal_explanation": "שני השברים הם בעלי סימן שלילי ופעולת חיסור, ולכן הם מצטרפים זה לזה לכיוון שמאל של הציר.", "math_expression": "-(1/2 + 1/2)" },
            { "verbal_explanation": "נחבר חצי ועוד חצי כדי לדעת את גודל הצעד הכולל שעשינו מהאפס.", "math_expression": "1/2 + 1/2 = 1" },
            { "verbal_explanation": "מאחר והלכנו רק שמאלה אל מתחת לאפס, נוסיף את סימן המינוס לתוצאה.", "math_expression": "-1" }
        ],
        "final_answer": "-1"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "חיבור וחיסור",
        "question_text": "חשבו את התרגיל הבא המורכב מ-3 מספרים: \\( 5 - 8 + (-3) \\)&rlm;",
        "options": ["-6", "0", "-16", "4"],
        "correctAnswer": 0,
        "hint": "פתרו משמאל לימין. קודם 5 פחות 8, ואז הוסיפו לתוצאה את המינוס 3.",
        "solution_steps": [
            { "verbal_explanation": "נחשב קודם את שני המספרים הראשונים, משמאל לימין.", "math_expression": "5 - 8 = -3" },
            { "verbal_explanation": "נכתוב את התרגיל המעודכן עם התוצאה שקיבלנו.", "math_expression": "-3 + (-3)" },
            { "verbal_explanation": "נהפוך את פלוס-מינוס למינוס אחד רגיל.", "math_expression": "-3 - 3" },
            { "verbal_explanation": "אנו במינוס שלוש, ויורדים עוד שלוש. הסכום הכולל הוא מינוס שש.", "math_expression": "-6" }
        ],
        "final_answer": "-6"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "חיבור וחיסור",
        "question_text": "איזה מספר חסר בתרגיל הבא: \\( -4 + ? = 2 \\)&rlm;",
        "options": ["6", "-2", "2", "-6"],
        "correctAnswer": 0,
        "hint": "ממינוס 4, כמה צעדים למעלה צריך לעלות כדי לחצות את האפס ולהגיע לפלוס 2?",
        "solution_steps": [
            { "verbal_explanation": "אנחנו נמצאים במינוס ארבע ורוצים להגיע לפלוס שתיים. אנו צריכים לעלות למעלה.", "math_expression": "-4 \\rightarrow 2" },
            { "verbal_explanation": "כדי להגיע ממינוס ארבע עד לאפס יש לעלות ארבעה צעדים.", "math_expression": "-4 + 4 = 0" },
            { "verbal_explanation": "מהאפס יש לעלות עוד שני צעדים כדי להגיע לשתיים.", "math_expression": "0 + 2 = 2" },
            { "verbal_explanation": "סך כל הצעדים שעלינו הוא ארבע פלוס שתיים.", "math_expression": "4 + 2 = 6" }
        ],
        "final_answer": "6"
    },

    // ==========================================
    // תת נושא 3: כפל וחילוק (10 שאלות)
    // ==========================================
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "כפל וחילוק",
        "question_text": "חשבו את התרגיל הבא: \\( -4 \\times 5 \\)&rlm;",
        "options": ["-20", "20", "-9", "1"],
        "correctAnswer": 0,
        "hint": "כפל של מספר חיובי במספר שלילי נותן תמיד תוצאה שלילית.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את המספרים זה בזה כאילו שניהם היו חיוביים (ללא סימן).", "math_expression": "4 \\times 5 = 20" },
            { "verbal_explanation": "נבדוק את הכלל של סימני הכפל. מינוס כפול פלוס מנצח ונותן מינוס.", "math_expression": "- \\times + = -" },
            { "verbal_explanation": "נצמיד את הסימן לתוצאת המספרים.", "math_expression": "-20" }
        ],
        "final_answer": "-20"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "כפל וחילוק",
        "question_text": "חשבו את התרגיל הבא: \\( -6 \\times (-3) \\)&rlm;",
        "options": ["18", "-18", "-9", "9"],
        "correctAnswer": 0,
        "hint": "כפל של מספר שלילי במספר שלילי מבטל את המינוסים ונותן תוצאה חיובית.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את המספרים בלי להתייחס לסימנים שלהם כרגע.", "math_expression": "6 \\times 3 = 18" },
            { "verbal_explanation": "נבדוק את כלל הסימנים. מינוס כפול מינוס מבטל את עצמו והופך לפלוס (חיובי).", "math_expression": "- \\times - = +" },
            { "verbal_explanation": "התוצאה תישאר כפי שחישבנו אותה, חיובית וללא סימן מינוס.", "math_expression": "18" }
        ],
        "final_answer": "18"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "כפל וחילוק",
        "question_text": "חשבו את התרגיל הבא: \\( -20 \\div 4 \\)&rlm;",
        "options": ["-5", "5", "-24", "16"],
        "correctAnswer": 0,
        "hint": "הכללים בחילוק זהים לכללים בכפל. מינוס לחלק לפלוס שווה מינוס.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את עשרים בארבע תוך התעלמות מסימני החשבון בתחילה.", "math_expression": "20 \\div 4 = 5" },
            { "verbal_explanation": "נבחן את הסימנים. אנו מחלקים מספר שלילי במספר חיובי. התוצאה חייבת להיות שלילית.", "math_expression": "- \\div + = -" },
            { "verbal_explanation": "נצרף את סימן המינוס לתשובה החשבונית שלנו.", "math_expression": "-5" }
        ],
        "final_answer": "-5"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "כפל וחילוק",
        "question_text": "חשבו את התרגיל הבא: \\( -15 \\div (-3) \\)&rlm;",
        "options": ["5", "-5", "-18", "12"],
        "correctAnswer": 0,
        "hint": "מינוס לחלק למינוס שווה לפלוס.",
        "solution_steps": [
            { "verbal_explanation": "נבצע פעולת חילוק רגילה של חמש עשרה בשלוש.", "math_expression": "15 \\div 3 = 5" },
            { "verbal_explanation": "לפי כללי חילוק של מספרים מכוונים, חלוקה של שני מספרים עם אותו סימן תיתן תוצאה חיובית.", "math_expression": "- \\div - = +" },
            { "verbal_explanation": "לכן התשובה תהיה פשוט חמש.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "כפל וחילוק",
        "question_text": "חשבו את התרגיל הבא בעל שלושה גורמים: \\( -2 \\times 3 \\times (-4) \\)&rlm;",
        "options": ["24", "-24", "10", "-10"],
        "correctAnswer": 0,
        "hint": "כפלו משמאל לימין. קודם שתיים שלילי כפול שלוש. קחו את התוצאה והכפילו בארבע שלילי.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את המכפלה הראשונה משמאל לימין.", "math_expression": "-2 \\times 3 = -6" },
            { "verbal_explanation": "נכתוב את התרגיל שוב עם התוצאה שקיבלנו.", "math_expression": "-6 \\times (-4)" },
            { "verbal_explanation": "נכפול את המספרים וניעזר בכלל לפיו מינוס כפול מינוס שווה פלוס.", "math_expression": "6 \\times 4 = 24" },
            { "verbal_explanation": "התוצאה חיובית.", "math_expression": "24" }
        ],
        "final_answer": "24"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "כפל וחילוק",
        "question_text": "מה קורה כשכופלים כל מספר שהוא (חיובי או שלילי) ב- \\( (-1) \\)?&rlm;",
        "options": ["הוא משנה את הסימן שלו לנגדי", "הוא הופך תמיד לשלילי", "הוא לא משתנה", "הוא תמיד הופך לחיובי"],
        "correctAnswer": 0,
        "hint": "נסו להכפיל 5 במינוס 1. עכשיו נסו להכפיל מינוס 5 במינוס 1. מה קרה בכל פעם?",
        "solution_steps": [
            { "verbal_explanation": "ניקח מספר חיובי, לדוגמה חמש, ונכפיל אותו במינוס אחת. נקבל מינוס חמש (הסימן התהפך).", "math_expression": "5 \\times (-1) = -5" },
            { "verbal_explanation": "ניקח מספר שלילי, לדוגמה מינוס עשר, ונכפיל אותו במינוס אחת. נקבל פלוס עשר (הסימן שוב התהפך).", "math_expression": "-10 \\times (-1) = 10" },
            { "verbal_explanation": "לכן, הכפלה במינוס אחת מחליפה את הסימן של כל מספר לסימן הנגדי שלו.", "math_expression": "+ \\rightarrow - \\quad , \\quad - \\rightarrow +" }
        ],
        "final_answer": "הוא משנה את הסימן שלו לנגדי"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "כפל וחילוק",
        "question_text": "חשבו את התרגיל הבא: \\( 0 \\div (-7) \\)&rlm;",
        "options": ["0", "-7", "לא מוגדר (אסור לחלק בזה)", "7"],
        "correctAnswer": 0,
        "hint": "אפס לחלק לכל מספר שווה תמיד לאפס. (זה שונה מחלוקה באפס, שאסורה).",
        "solution_steps": [
            { "verbal_explanation": "אפס מייצג 'כלום'. אם נחלק 'כלום' לשבעה חלקים (חיוביים או שליליים), בכל חלק לא יהיה כלום.", "math_expression": "0 \\div \\text{Any Number} = 0" },
            { "verbal_explanation": "לכן התוצאה נשארת אפס תמיד.", "math_expression": "0" }
        ],
        "final_answer": "0"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "כפל וחילוק",
        "question_text": "איזה מספר חסר בתרגיל הכפל: \\( ? \\times (-5) = 30 \\)&rlm;",
        "options": ["-6", "6", "-35", "-25"],
        "correctAnswer": 0,
        "hint": "התוצאה היא חיובית. מספר שלילי כפול איזה מספר ייתן תוצאה חיובית? (רק מספר שלילי אחר).",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בפעולה ההפוכה לכפל, שהיא חילוק, כדי למצוא את הגורם החסר.", "math_expression": "30 \\div (-5)" },
            { "verbal_explanation": "נחלק שלושים בחמש, ונקבל שש.", "math_expression": "30 \\div 5 = 6" },
            { "verbal_explanation": "נבדוק את הסימנים: מספר חיובי לחלק למספר שלילי נותן מספר שלילי.", "math_expression": "+ \\div - = -" },
            { "verbal_explanation": "המספר החסר הוא מינוס שש.", "math_expression": "-6" }
        ],
        "final_answer": "-6"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "כפל וחילוק",
        "question_text": "איזו מכפלה תיתן את התוצאה הגדולה ביותר (חיובית ככל האפשר)?&rlm;",
        "options": ["(-4) * (-4)", "4 * 3", "(-5) * 3", "10 * (-2)"],
        "correctAnswer": 0,
        "hint": "חשבו כל תרגיל. זכרו ששני מינוסים נותנים תוצאה חיובית יפה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את המכפלה הראשונה: שני מספרים שליליים נותנים חיובי.", "math_expression": "(-4) \\times (-4) = 16" },
            { "verbal_explanation": "נחשב את המכפלה השנייה: פעולה רגילה מלוח הכפל.", "math_expression": "4 \\times 3 = 12" },
            { "verbal_explanation": "האפשרויות השלישית והרביעית מורכבות מחיובי ושלילי ולכן התוצאה שלהן תהיה שלילית (קטנה מאפס).", "math_expression": "(-5) \\times 3 = -15 \\quad , \\quad 10 \\times (-2) = -20" },
            { "verbal_explanation": "נשווה בין כלל התוצאות שקיבלנו. שש עשרה הוא המספר הגדול ביותר.", "math_expression": "16" }
        ],
        "final_answer": "(-4) * (-4)"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "כפל וחילוק",
        "question_text": "חשבו את התרגיל הבא של שברים: \\( (-1/2) \\times (-1/2) \\)&rlm;",
        "options": ["1/4", "-1/4", "1", "-1"],
        "correctAnswer": 0,
        "hint": "כפלו מונה במונה, מכנה במכנה. אל תשכחו שמינוס כפול מינוס הוא פלוס.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את המספרים העליונים (מונים) זה בזה.", "math_expression": "1 \\times 1 = 1" },
            { "verbal_explanation": "נכפול את המספרים התחתונים (מכנים) זה בזה.", "math_expression": "2 \\times 2 = 4" },
            { "verbal_explanation": "נבדוק את הסימנים: מינוס כפול מינוס הופך לפלוס.", "math_expression": "- \\times - = +" },
            { "verbal_explanation": "התוצאה תהיה רבע אחד חיובי.", "math_expression": "1/4" }
        ],
        "final_answer": "1/4"
    },

    // ==========================================
    // תת נושא 4: שימוש בסוגריים (10 שאלות)
    // ==========================================
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "שימוש בסוגריים",
        "question_text": "חשבו את התרגיל הבא: \\( 5 - (-3 + 2) \\)&rlm;",
        "options": ["6", "4", "10", "0"],
        "correctAnswer": 0,
        "hint": "פתרו קודם את הסוגריים: כמה זה מינוס שלוש ועוד שתיים? רק אז עשו את החיסור מחוץ לסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "נפתור קודם כל את תרגיל החיבור שבתוך הסוגריים.", "math_expression": "-3 + 2 = -1" },
            { "verbal_explanation": "נכתוב את התרגיל המלא מחדש, כאשר נציב את מינוס אחת במקום הסוגריים כולם.", "math_expression": "5 - (-1)" },
            { "verbal_explanation": "שני סימני מינוס רצופים מוחלפים תמיד בסימן חיבור אחד.", "math_expression": "5 + 1" },
            { "verbal_explanation": "נבצע את תרגיל החיבור הרגיל ונסיים.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "שימוש בסוגריים",
        "question_text": "חשבו את התרגיל הבא: \\( (-4) \\times (2 - 5) \\)&rlm;",
        "options": ["12", "-12", "-8", "8"],
        "correctAnswer": 0,
        "hint": "חשבו קודם שתיים פחות חמש (התוצאה תהיה שלילית), ואז הכפילו במינוס ארבע.",
        "solution_steps": [
            { "verbal_explanation": "נתמקד בסוגריים. נחסר חמש מתוך שתיים.", "math_expression": "2 - 5 = -3" },
            { "verbal_explanation": "נכתוב את תרגיל הכפל המעודכן שלנו עם התוצאה החדשה.", "math_expression": "(-4) \\times (-3)" },
            { "verbal_explanation": "נכפול ארבע בשלוש ונקבל שנים עשר.", "math_expression": "4 \\times 3 = 12" },
            { "verbal_explanation": "מכפלה של שני גורמים שליליים מובילה לתוצאה חיובית ותקינה לחלוטין.", "math_expression": "12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "שימוש בסוגריים",
        "question_text": "חשבו את התרגיל הבא: \\( -(7 - 10) \\)&rlm;",
        "options": ["3", "-3", "-17", "17"],
        "correctAnswer": 0,
        "hint": "פתרו את מה שבתוך הסוגריים, ואל תשכחו את המינוס שמחכה בחוץ והופך את התוצאה.",
        "solution_steps": [
            { "verbal_explanation": "נפתור את פעולת החיסור שבתוך הסוגריים. אנו מחסרים מספר גדול ממספר קטן.", "math_expression": "7 - 10 = -3" },
            { "verbal_explanation": "כעת נוסיף את סימן המינוס שהמתין בסבלנות מחוץ לסוגריים.", "math_expression": "-(-3)" },
            { "verbal_explanation": "מינוס שמקדים מינוס מבטל אותו ומשנה את התוצאה לחיובית.", "math_expression": "3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "שימוש בסוגריים",
        "question_text": "חשבו את התרגיל: \\( 12 \\div (-2 + 6) \\)&rlm;",
        "options": ["3", "-3", "-6", "6"],
        "correctAnswer": 0,
        "hint": "פתרו את החיבור בסוגריים ואז חלקו את ה-12 בתוצאה.",
        "solution_steps": [
            { "verbal_explanation": "נכנס לתוך הסוגריים ונחשב מינוס שתיים פלוס שש. זה שקול לשש פחות שתיים.", "math_expression": "-2 + 6 = 4" },
            { "verbal_explanation": "נכתוב את תרגיל החילוק המלא מחדש.", "math_expression": "12 \\div 4" },
            { "verbal_explanation": "נבצע את החילוק מתוך לוח הכפל.", "math_expression": "3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "שימוש בסוגריים",
        "question_text": "חשבו את התרגיל המורכב הבא: \\( -2 \\times (5 - 8) - 4 \\)&rlm;",
        "options": ["2", "-10", "10", "-2"],
        "correctAnswer": 0,
        "hint": "קודם סוגריים (5 פחות 8), ואז הכפל במינוס 2, ורק בסוף החיסור של ה-4.",
        "solution_steps": [
            { "verbal_explanation": "נחשב קודם את פעולת החיסור שמתחבאת בתוך הסוגריים.", "math_expression": "5 - 8 = -3" },
            { "verbal_explanation": "נכתוב את התרגיל המעודכן ונבצע את פעולת הכפל הבאה בתור לפי סדר הפעולות.", "math_expression": "(-2) \\times (-3) - 4" },
            { "verbal_explanation": "נחשב את הכפל. מינוס כפול מינוס הוא פלוס.", "math_expression": "(-2) \\times (-3) = 6" },
            { "verbal_explanation": "נסיים את התרגיל עם הפעולה האחרונה שנשארה, שהיא החיסור.", "math_expression": "6 - 4 = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "שימוש בסוגריים",
        "question_text": "חשבו את התרגיל הבא: \\( (-5 + 5) \\times (-17) \\)&rlm;",
        "options": ["0", "-17", "17", "-34"],
        "correctAnswer": 0,
        "hint": "פתרו את הסוגריים קודם. מינוס חמש ועוד חמש מתאפסים. אפס כפול כל דבר הוא...?",
        "solution_steps": [
            { "verbal_explanation": "נחשב קודם כל את הפעולה שבתוך הסוגריים. חיבור של מספר ושל המספר הנגדי שלו.", "math_expression": "-5 + 5 = 0" },
            { "verbal_explanation": "התוצאה בתוך הסוגריים היא אפס. ניקח את האפס ונכפול אותו במספר שמחוץ לסוגריים.", "math_expression": "0 \\times (-17)" },
            { "verbal_explanation": "אפס כפול כל מספר בעולם נשאר לעד אפס.", "math_expression": "0" }
        ],
        "final_answer": "0"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "שימוש בסוגריים",
        "question_text": "האם התוצאה של \\( -(3 + 4) \\) שווה לתוצאה של \\( -3 + 4 \\)?&rlm;",
        "options": ["לא, התוצאות שונות", "כן, זה אותו הדבר", "כן, אבל רק במספרים קטנים", "אי אפשר לחשב"],
        "correctAnswer": 0,
        "hint": "חשבו את התרגיל הראשון (פתרו סוגריים ואז שימו מינוס). חשבו את השני. השוו.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את התרגיל הראשון: נחבר בתוך הסוגריים ואז נוסיף את סימן המינוס.", "math_expression": "3 + 4 = 7 \\Rightarrow -(7) = -7" },
            { "verbal_explanation": "נחשב את התרגיל השני: אנו נמצאים במינוס שלוש ועולים ארבעה צעדים ימינה.", "math_expression": "-3 + 4 = 1" },
            { "verbal_explanation": "נשווה בין התוצאות. מינוס שבע שונה מאחד.", "math_expression": "-7 \\neq 1" }
        ],
        "final_answer": "לא, התוצאות שונות"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "שימוש בסוגריים",
        "question_text": "חשבו את התרגיל הבא: \\( 10 - (-5 - 2) \\)&rlm;",
        "options": ["17", "3", "13", "7"],
        "correctAnswer": 0,
        "hint": "חשבו את התוצאה בתוך הסוגריים (מינוס חמש פחות שתיים), ואז חסרו את התוצאה מ-10.",
        "solution_steps": [
            { "verbal_explanation": "נחשב קודם את הפעולה שבתוך הסוגריים. ירידה של שתיים מנקודת המינוס חמש מביאה אותנו למינוס שבע.", "math_expression": "-5 - 2 = -7" },
            { "verbal_explanation": "נכתוב את התרגיל מחדש ונחליף את הסוגריים בתוצאה שקיבלנו.", "math_expression": "10 - (-7)" },
            { "verbal_explanation": "שני מינוסים רצופים הופכים לפלוס.", "math_expression": "10 + 7" },
            { "verbal_explanation": "נחבר את המספרים לתשובה מוגמרת.", "math_expression": "17" }
        ],
        "final_answer": "17"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "שימוש בסוגריים",
        "question_text": "חשבו את התרגיל הבא: \\( (-2) \\times (-3) \\times (-1) \\)&rlm;",
        "options": ["-6", "6", "-5", "5"],
        "correctAnswer": 0,
        "hint": "כפלו משמאל לימין. שני המינוסים הראשונים הופכים לפלוס, אבל המינוס השלישי הופך חזרה את התוצאה למינוס.",
        "solution_steps": [
            { "verbal_explanation": "נכפול קודם את שני המספרים הראשונים. מינוס כפול מינוס זה פלוס.", "math_expression": "(-2) \\times (-3) = 6" },
            { "verbal_explanation": "ניקח את התוצאה ונכפול אותה במספר השלישי שנותר בסוגריים.", "math_expression": "6 \\times (-1)" },
            { "verbal_explanation": "מספר חיובי כפול מספר שלילי שווה תמיד למספר שלילי.", "math_expression": "-6" }
        ],
        "final_answer": "-6"
    },
    {
        "topic": "directed_numbers_grade_7",
        "subTopic": "שימוש בסוגריים",
        "question_text": "מהי התוצאה של: \\( (-8) \\div (-2) + (-4) \\)&rlm;",
        "options": ["0", "-8", "8", "-4"],
        "correctAnswer": 0,
        "hint": "סדר פעולות קובע שחילוק קודם לחיבור. מינוס לחלק למינוס נותן תוצאה חיובית.",
        "solution_steps": [
            { "verbal_explanation": "חילוק קודם לחיבור, ולכן נבצע אותו ראשון. מספר שלילי חלקי שלילי נותן תוצאה חיובית.", "math_expression": "(-8) \\div (-2) = 4" },
            { "verbal_explanation": "נכתוב את התרגיל מחדש עם התוצאה שקיבלנו מהחילוק.", "math_expression": "4 + (-4)" },
            { "verbal_explanation": "חיבור של מינוס שקול לפעולת חיסור רגילה לגמרי.", "math_expression": "4 - 4" },
            { "verbal_explanation": "המספרים מתקזזים והתשובה היא אפס.", "math_expression": "0" }
        ],
        "final_answer": "0"
    }
];