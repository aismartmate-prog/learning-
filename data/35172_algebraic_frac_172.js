const questionsDB = [
    // ========================================================================
    // נושא: שברים אלגבריים | תת נושא: תחום הצבה (15 שאלות מגוונות)
    // ========================================================================
    
    // שאלה 1 - בסיס
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `מצאו את תחום ההצבה של השבר האלגברי הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2x + 5</div>
            <div style="padding:0 8px;">x - 8</div>
        </div>`,
        options: [
            "x ≠ 8",
            "x ≠ -8",
            "x ≠ -2.5",
            "x ≠ 0"
        ],
        correctAnswer: 0,
        hint: "תחום הצבה נועד למנוע חלוקה באפס. התעלמו מהמונה. קחו את המכנה, השוו אותו לאפס, ומצאו איזה מספר אסור להציב.",
        solution_steps: [
            { verbal_explanation: "במתמטיקה חל איסור מוחלט לחלק באפס. לכן, עלינו לדרוש שהמכנה של השבר יהיה שונה מאפס.", math_expression: "x - 8 ≠ 0" },
            { verbal_explanation: "נעביר את המספר החופשי לאגף השני תוך החלפת סימנו, וכך נגלה את הערך האסור בהצבה.", math_expression: "x ≠ 8" }
        ],
        final_answer: "x ≠ 8"
    },

    // שאלה 2 - מקדם למשתנה
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `מצאו את תחום ההצבה של השבר הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">7</div>
            <div style="padding:0 8px;">3x + 12</div>
        </div>`,
        options: [
            "x ≠ -4",
            "x ≠ 4",
            "x ≠ -12",
            "x ≠ 3"
        ],
        correctAnswer: 0,
        hint: "בנו אי-שוויון עבור המכנה, העבירו את המספר החופשי לאגף ימין, וחלקו במקדם של הנעלם.",
        solution_steps: [
            { verbal_explanation: "נדרוש שכל הביטוי המופיע במכנה לא יקבל את הערך אפס.", math_expression: "3x + 12 ≠ 0" },
            { verbal_explanation: "נעביר את המספר שתים עשרה ימינה, מה שיהפוך אותו לשלילי.", math_expression: "3x ≠ -12" },
            { verbal_explanation: "נחלק בשלוש כדי לבודד את המשתנה ולמצוא את התחום.", math_expression: "x ≠ -4" }
        ],
        final_answer: "x ≠ -4"
    },

    // שאלה 3 - משתנה בלבד
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `מהו תחום ההצבה של הביטוי הבא?<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 1</div>
            <div style="padding:0 8px;">5x</div>
        </div>`,
        options: [
            "x ≠ 0",
            "x ≠ 5",
            "x ≠ -5",
            "x ≠ 1"
        ],
        correctAnswer: 0,
        hint: "המכנה מורכב מהכפלה של מספר במשתנה. איזה ערך של המשתנה יגרום למכפלה כולה להיות שווה לאפס?",
        solution_steps: [
            { verbal_explanation: "נדרוש שהמכנה במלואו יהיה שונה מאפס.", math_expression: "5x ≠ 0" },
            { verbal_explanation: "נחלק את שני האגפים בחמש. אפס לחלק לכל מספר נשאר תמיד אפס.", math_expression: "x ≠ 0" }
        ],
        final_answer: "x ≠ 0"
    },

    // שאלה 4 - הפרש ריבועים
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `מצאו את תחום ההצבה של השבר האלגברי (מכנה ממעלה שנייה):<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">3x</div>
            <div style="padding:0 8px;">x² - 49</div>
        </div>`,
        options: [
            "x ≠ 7 , x ≠ -7",
            "x ≠ 49 , x ≠ -49",
            "x ≠ 7",
            "x ≠ 0"
        ],
        correctAnswer: 0,
        hint: "כאשר המכנה כולל חזקה ריבועית, תקבלו שתי תשובות. העבירו אגפים והוציאו שורש ריבועי.",
        solution_steps: [
            { verbal_explanation: "נדרוש שהמכנה הריבועי לא יתאפס בשום מצב.", math_expression: "x² - 49 ≠ 0" },
            { verbal_explanation: "נעביר את המספר החופשי לאגף השני.", math_expression: "x² ≠ 49" },
            { verbal_explanation: "נוציא שורש כפול ונזכור שיש תוצאה חיובית ושלילית.", math_expression: "x ≠ ±7" },
            { verbal_explanation: "נפצל את התוצאה לשני הערכים האסורים.", math_expression: "x ≠ 7 , x ≠ -7" }
        ],
        final_answer: "x ≠ 7 , x ≠ -7"
    },

    // שאלה 5 - טרינום במכנה
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `מהו תחום ההצבה של הפונקציה הרציונלית הבאה?<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x</div>
            <div style="padding:0 8px;">x² - 9x + 20</div>
        </div>`,
        options: [
            "x ≠ 4 , x ≠ 5",
            "x ≠ -4 , x ≠ -5",
            "x ≠ 20 , x ≠ 9",
            "x ≠ 0"
        ],
        correctAnswer: 0,
        hint: "המכנה הוא משוואה ריבועית מלאה. פרקו את המכנה לגורמים: חפשו מספרים שמכפלתם עשרים וסכומם מינוס תשע.",
        solution_steps: [
            { verbal_explanation: "נבודד את המכנה ונדרוש את אי-התאפסותו.", math_expression: "x² - 9x + 20 ≠ 0" },
            { verbal_explanation: "נמצא את הגורמים (טרינום) שמכפלתם חיובית וסכומם שלילי: מינוס ארבע ומינוס חמש.", math_expression: "(x - 4)(x - 5) ≠ 0" },
            { verbal_explanation: "נפסול את הערכים המאפסים כל סוגריים בנפרד.", math_expression: "x ≠ 4 , x ≠ 5" }
        ],
        final_answer: "x ≠ 4 , x ≠ 5"
    },

    // שאלה 6 - הוצאת גורם משותף
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `מצאו את תחום ההצבה של הביטוי החסר מספר חופשי במכנה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">4</div>
            <div style="padding:0 8px;">x² + 6x</div>
        </div>`,
        options: [
            "x ≠ 0 , x ≠ -6",
            "x ≠ 0 , x ≠ 6",
            "x ≠ 6 , x ≠ -6",
            "x ≠ 4"
        ],
        correctAnswer: 0,
        hint: "במקום להסתבך עם נוסחאות, פשוט הוציאו את המשתנה כגורם משותף מחוץ לסוגריים והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "נרשום את התנאי ההכרחי למכנה הפונקציה.", math_expression: "x² + 6x ≠ 0" },
            { verbal_explanation: "נפרק לגורמים על ידי הוצאת המשתנה המשותף לחוץ.", math_expression: "x(x + 6) ≠ 0" },
            { verbal_explanation: "נפריד לשני תנאים עצמאיים: המשתנה מחוץ לסוגריים, והביטוי שבתוכם.", math_expression: "x ≠ 0 <br><br> x + 6 ≠ 0 ➔ x ≠ -6" }
        ],
        final_answer: "x ≠ 0 , x ≠ -6"
    },

    // שאלה 7 - תחום תמיד נכון
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `שאלה למחשבה עמוקה: מהו תחום ההצבה של השבר הבא?<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 2</div>
            <div style="padding:0 8px;">x² + 16</div>
        </div>`,
        options: [
            "כל מספר ממשי (אין מגבלה)",
            "x ≠ 4 , x ≠ -4",
            "x ≠ -16",
            "אין תחום הצבה (אף מספר לא מתאים)"
        ],
        correctAnswer: 0,
        hint: "האם יש מספר שמעלים אותו בריבוע (לערך חיובי), מוסיפים לו שש עשרה, ומקבלים אפס? חישבו האם המכנה יכול אי פעם להתאפס.",
        solution_steps: [
            { verbal_explanation: "נבדוק מתי המכנה עלול להתאפס.", math_expression: "x² + 16 = 0" },
            { verbal_explanation: "נעביר אגפים וננסה להוציא שורש.", math_expression: "x² = -16 <br><br> x = √(-16)" },
            { verbal_explanation: "מכיוון שאין שורש ממשי למספר שלילי, המכנה תמיד חיובי ולעולם לא יתאפס. מותר להציב הכל.", math_expression: "All x" }
        ],
        final_answer: "כל מספר ממשי (אין מגבלה)"
    },

    // שאלה 8 - חיבור שברים
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `מצאו את תחום ההצבה של הביטוי המורכב משני שברים:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">3</div>
                <div style="padding:0 8px;">x - 1</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">+</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">4</div>
                <div style="padding:0 8px;">x - 2</div>
            </div>
        </div>`,
        options: [
            "x ≠ 1 , x ≠ 2",
            "x ≠ -1 , x ≠ -2",
            "x ≠ 3 , x ≠ 4",
            "כל מספר"
        ],
        correctAnswer: 0,
        hint: "כאשר יש מספר שברים בפעולת חיבור, חובה שכל המכנים יהיו שונים מאפס במקביל. בדקו כל מכנה בנפרד.",
        solution_steps: [
            { verbal_explanation: "נבדוק את דרישת תחום ההצבה עבור השבר הראשון בלבד.", math_expression: "x - 1 ≠ 0 ➔ x ≠ 1" },
            { verbal_explanation: "נבדוק את דרישת תחום ההצבה עבור השבר השני בלבד.", math_expression: "x - 2 ≠ 0 ➔ x ≠ 2" },
            { verbal_explanation: "התחום הכולל דורש ששני התנאים יתקיימו יחד, כדי שאף שבר לא יקרוס.", math_expression: "x ≠ 1 , x ≠ 2" }
        ],
        final_answer: "x ≠ 1 , x ≠ 2"
    },

    // שאלה 9 - כיוונים הפוכים
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `מצאו את תחום ההצבה של הביטוי שבו המשתנה בסימן שלילי:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x</div>
            <div style="padding:0 8px;">10 - 2x</div>
        </div>`,
        options: [
            "x ≠ 5",
            "x ≠ -5",
            "x ≠ 10",
            "x ≠ 2"
        ],
        correctAnswer: 0,
        hint: "כאשר המשתנה נמצא בסימן שלילי במכנה, נוח יותר להעביר אותו לאגף השני כדי להפוך אותו לחיובי.",
        solution_steps: [
            { verbal_explanation: "נדרוש מהמכנה שלא לקבל את הערך אפס.", math_expression: "10 - 2x ≠ 0" },
            { verbal_explanation: "נעביר את המשתנה השלילי לאגף הימני כדי לפשט את העבודה.", math_expression: "10 ≠ 2x" },
            { verbal_explanation: "נחלק בשתיים ונמצא את התחום.", math_expression: "x ≠ 5" }
        ],
        final_answer: "x ≠ 5"
    },

    // שאלה 10 - ריבוע שלם
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `מהו תחום ההצבה של השבר, שבו המכנה הוא ריבוע שלם?<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">5</div>
            <div style="padding:0 8px;">x² - 14x + 49</div>
        </div>`,
        options: [
            "x ≠ 7",
            "x ≠ 7 , x ≠ -7",
            "x ≠ 49",
            "כל מספר"
        ],
        correctAnswer: 0,
        hint: "פרקו את המכנה לפי נוסחת כפל מקוצר או טרינום. תגלו שמדובר באותו גורם פעמיים, ולכן נפסל רק ערך אחד.",
        solution_steps: [
            { verbal_explanation: "נדרוש מהמכנה להיות שונה מאפס.", math_expression: "x² - 14x + 49 ≠ 0" },
            { verbal_explanation: "נזהה שמדובר בנוסחת כפל מקוצר של ריבוע הפרש.", math_expression: "(x - 7)² ≠ 0" },
            { verbal_explanation: "השורש של אפס הוא אפס יחיד, לכן נפסול רק ערך מספרי אחד.", math_expression: "x - 7 ≠ 0 ➔ x ≠ 7" }
        ],
        final_answer: "x ≠ 7"
    },

    // שאלה 11 - מציאת פונקציה מתוך תחום
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `<strong>הבנה קונספטואלית:</strong><br>
        ידוע שתחום ההצבה של פונקציה מסוימת הוא: <strong>x ≠ -3</strong>.<br>
        איזו מהפונקציות הבאות מתאימה לתחום הצבה זה?`,
        options: [
            "1 / (x + 3)",
            "1 / (x - 3)",
            "1 / (x² + 9)",
            "1 / (3x)"
        ],
        correctAnswer: 0,
        hint: "חשבו הפוך: איזה מכנה יתאפס ויקרוס אם נציב בו את המספר מינוס שלוש?",
        solution_steps: [
            { verbal_explanation: "אם התחום פוסל את המספר מינוס שלוש, הרי שהצבת המספר במכנה תיתן אפס.", math_expression: "Den(-3) = 0" },
            { verbal_explanation: "נבדוק את האפשרות הראשונה ונראה שהיא מתאפסת עבור ערך זה.", math_expression: "(-3) + 3 = 0" },
            { verbal_explanation: "לכן זו הפונקציה המתאימה." }
        ],
        final_answer: "1 / (x + 3)"
    },

    // שאלה 12 - שילוב משוואות ופונקציות
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `נתונה פונקציה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">f(x) =</div>
            <div style="display:inline-block; vertical-align:middle; margin-left:10px;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2x</div>
                <div style="padding:0 8px;">x² - 1</div>
            </div>
        </div><br><br>
        מהו תחום ההצבה של הפונקציה?`,
        options: [
            "x ≠ 1 , x ≠ -1",
            "x ≠ 1",
            "x ≠ 2",
            "x ≠ 0"
        ],
        correctAnswer: 0,
        hint: "סימון הפונקציה לא משנה את החוקים. המכנה הוא הפרש ריבועים. פרקו ופתרו.",
        solution_steps: [
            { verbal_explanation: "אנו בוחנים את המכנה בלבד, למרות סימון הפונקציה הכללי.", math_expression: "x² - 1 ≠ 0" },
            { verbal_explanation: "נפרק לפי נוסחת הפרש ריבועים או שנעביר אגפים.", math_expression: "x² ≠ 1" },
            { verbal_explanation: "נוציא שורש כפול ונקבל שני ערכים.", math_expression: "x ≠ 1 , x ≠ -1" }
        ],
        final_answer: "x ≠ 1 , x ≠ -1"
    },

    // שאלה 13 - הוצאת גורם והפרש ריבועים
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `מצאו את תחום ההצבה של השבר הבא (דורש פירוק דו-שלבי):<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x</div>
            <div style="padding:0 8px;">2x² - 18</div>
        </div>`,
        options: [
            "x ≠ 3 , x ≠ -3",
            "x ≠ 9 , x ≠ -9",
            "x ≠ 0 , x ≠ 3",
            "x ≠ 18"
        ],
        correctAnswer: 0,
        hint: "הוציאו תחילה את המספר שתיים כגורם משותף מחוץ לסוגריים, ולאחר מכן בדקו מתי הביטוי הנותר מתאפס.",
        solution_steps: [
            { verbal_explanation: "נדרוש שמכנה השבר לא יתאפס.", math_expression: "2x² - 18 ≠ 0" },
            { verbal_explanation: "נוציא שתיים מחוץ לסוגריים כדי לפשט את המבנה.", math_expression: "2(x² - 9) ≠ 0" },
            { verbal_explanation: "מספר שתיים אינו אפס, לכן רק הסוגריים מעניינים אותנו.", math_expression: "x² - 9 ≠ 0 <br><br> x² ≠ 9" },
            { verbal_explanation: "נוציא שורש לשתי התשובות.", math_expression: "x ≠ 3 , x ≠ -3" }
        ],
        final_answer: "x ≠ 3 , x ≠ -3"
    },

    // שאלה 14 - משוואה רציונלית מלאה
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `לפני שפותרים את המשוואה הבאה, חייבים לקבוע תחום הצבה. מהו?<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x + 5</div>
                <div style="padding:0 8px;">x² - 4x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin-left:10px;">= 2</div>
        </div>`,
        options: [
            "x ≠ 0 , x ≠ 4",
            "x ≠ 4 , x ≠ -4",
            "x ≠ -5",
            "x ≠ 2"
        ],
        correctAnswer: 0,
        hint: "גם במשוואה שלמה, המכנה קובע את תחום ההצבה. הוציאו גורם משותף מהמכנה המופיע בשבר.",
        solution_steps: [
            { verbal_explanation: "אנו בוחנים אך ורק את המכנה הקיים במשוואה.", math_expression: "x² - 4x ≠ 0" },
            { verbal_explanation: "נוציא את המשתנה המשותף כדי לפרק לגורמים.", math_expression: "x(x - 4) ≠ 0" },
            { verbal_explanation: "נפצל למציאת שני הערכים האסורים בחוק.", math_expression: "x ≠ 0 <br><br> x - 4 ≠ 0 ➔ x ≠ 4" }
        ],
        final_answer: "x ≠ 0 , x ≠ 4"
    },

    // שאלה 15 - חזקה שלישית (אתגר מעניין)
    {
        topic: "algebraic_fractions_172",
        subTopic: "תחום הצבה",
        question_text: `<strong>אתגר תחום הצבה:</strong><br>
        מהו תחום ההצבה של השבר שבו המכנה הוא ממעלה שלישית?<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x</div>
            <div style="padding:0 8px;">x³ - 25x</div>
        </div>`,
        options: [
            "x ≠ 0 , x ≠ 5 , x ≠ -5",
            "x ≠ 5 , x ≠ -5",
            "x ≠ 25",
            "x ≠ 0 , x ≠ 25"
        ],
        correctAnswer: 0,
        hint: "הוציאו את איקס כגורם משותף. בתוך הסוגריים תקבלו משוואה ריבועית של הפרש ריבועים. יהיו שלושה ערכים אסורים!",
        solution_steps: [
            { verbal_explanation: "נרשום את דרישת המכנה.", math_expression: "x³ - 25x ≠ 0" },
            { verbal_explanation: "נוציא משתנה מחוץ לסוגריים כדי להוריד את החזקות.", math_expression: "x(x² - 25) ≠ 0" },
            { verbal_explanation: "הגורם הראשון פוסל את המספר אפס.", math_expression: "x ≠ 0" },
            { verbal_explanation: "הגורם השני הוא הפרש ריבועים שפוסל עוד שני מספרים.", math_expression: "x² - 25 ≠ 0 ➔ x ≠ ±5" },
            { verbal_explanation: "נרשום את שלושת התנאים במשותף.", math_expression: "x ≠ 0 , x ≠ 5 , x ≠ -5" }
        ],
        final_answer: "x ≠ 0 , x ≠ 5 , x ≠ -5"
    },

    // ========================================================================
    // נושא: שברים אלגבריים | תת נושא: צמצום (15 שאלות מגוונות)
    // ========================================================================
    
    // שאלה 16 - צמצום משתנים פשוט
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר האלגברי הבא ככל הניתן:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">24x³</div>
            <div style="padding:0 8px;">8x²</div>
        </div>`,
        options: [
            "3x",
            "3",
            "16x",
            "3x²"
        ],
        correctAnswer: 0,
        hint: "חלקו את המספרים בנפרד. לגבי המשתנים: כשמחלקים חזקות עם אותו בסיס, מחסרים את המעריכים.",
        solution_steps: [
            { verbal_explanation: "נתחיל מחלוקת המקדמים המספריים במונה ובמכנה.", math_expression: "24 / 8 = 3" },
            { verbal_explanation: "נצמצם את המשתנים. חוקי חזקות קובעים שבחילוק מחסרים מעריכים.", math_expression: "x³ / x² = x^(3-2) = x" },
            { verbal_explanation: "התוצאה הסופית היא שילוב של המספר והמשתנה שנותר.", math_expression: "3x" }
        ],
        final_answer: "3x"
    },

    // שאלה 17 - הוצאת גורם במונה
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר על ידי פירוק:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">4x - 20</div>
            <div style="padding:0 8px;">4</div>
        </div>`,
        options: [
            "x - 5",
            "x - 20",
            "4x - 5",
            "x"
        ],
        correctAnswer: 0,
        hint: "אסור בתכלית האיסור לצמצם רק איבר אחד מתוך חיבור או חיסור! הוציאו קודם את המספר ארבע כגורם משותף במונה.",
        solution_steps: [
            { verbal_explanation: "נוציא את הגורם המשותף המקסימלי מתוך איברי המונה, שהוא ארבע.", math_expression: "4x - 20 = 4(x - 5)" },
            { verbal_explanation: "נרשום מחדש את השבר בצורתו המפורקת.", math_expression: "4(x - 5) / 4" },
            { verbal_explanation: "נצמצם את המספר ארבע מהמונה והמכנה במקביל לקבלת הביטוי הסופי.", math_expression: "x - 5" }
        ],
        final_answer: "x - 5"
    },

    // שאלה 18 - הוצאת משתנה
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² + 7x</div>
            <div style="padding:0 8px;">x</div>
        </div>`,
        options: [
            "x + 7",
            "x² + 7",
            "7x",
            "x"
        ],
        correctAnswer: 0,
        hint: "הוציאו משתנה מחוץ לסוגריים במונה כדי ליצור פעולת כפל המותרת בצמצום.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה על ידי הוצאת המשתנה המשותף לכל איבריו החוצה.", math_expression: "x(x + 7)" },
            { verbal_explanation: "נרשום את השבר בצורתו המפורקת המוכנה לצמצום.", math_expression: "x(x + 7) / x" },
            { verbal_explanation: "נצמצם את המשתנה הבודד מחוץ לסוגריים עם המשתנה היחיד במכנה.", math_expression: "x + 7" }
        ],
        final_answer: "x + 7"
    },

    // שאלה 19 - גורם בשני האגפים
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר על ידי הוצאת גורם משותף גם במונה וגם במכנה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">5x + 15</div>
            <div style="padding:0 8px;">10x + 30</div>
        </div>`,
        options: [
            "0.5",
            "2",
            "x + 3",
            "5x"
        ],
        correctAnswer: 0,
        hint: "פרקו את המונה בעזרת המספר חמש. פרקו את המכנה בעזרת המספר עשר. מה קורה לסוגריים שנוצרים?",
        solution_steps: [
            { verbal_explanation: "נוציא גורם משותף נפרד למונה ולמכנה.", math_expression: "Num = 5(x + 3) <br><br> Den = 10(x + 3)" },
            { verbal_explanation: "נרשום את השבר החדש הכולל את הפירוקים ופעולות הכפל.", math_expression: "5(x + 3) / 10(x + 3)" },
            { verbal_explanation: "הסוגריים זהים לחלוטין ולכן יצטמצמו. נשארנו עם שבר מספרי פשוט הניתן לחלוקה.", math_expression: "5 / 10 = 0.5" }
        ],
        final_answer: "0.5"
    },

    // שאלה 20 - הפרש ריבועים
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר הבא בעזרת נוסחת כפל מקוצר:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 64</div>
            <div style="padding:0 8px;">x - 8</div>
        </div>`,
        options: [
            "x + 8",
            "x - 8",
            "x - 56",
            "x + 64"
        ],
        correctAnswer: 0,
        hint: "המונה הוא 'הפרש ריבועים'. השתמשו בנוסחה לפירוקו לשני סוגריים המכפילים זה את זה, ואז צמצמו.",
        solution_steps: [
            { verbal_explanation: "נזהה שהמונה בנוי מתבנית של הפרש בין ריבועים, ונפרק אותו בהתאם לנוסחה הידועה.", math_expression: "x² - 8² = (x - 8)(x + 8)" },
            { verbal_explanation: "נציב את המונה המפורק מעל המכנה הנתון ליצירת שבר חדש.", math_expression: "(x - 8)(x + 8) / (x - 8)" },
            { verbal_explanation: "נצמצם את הסוגריים המכילים חיסור, אשר מופיעים במונה ובמכנה כאחד.", math_expression: "x + 8" }
        ],
        final_answer: "x + 8"
    },

    // שאלה 21 - טרינום מול בינום
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר הבא בעזרת פירוק טרינום:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 10x + 21</div>
            <div style="padding:0 8px;">x - 3</div>
        </div>`,
        options: [
            "x - 7",
            "x + 7",
            "x - 3",
            "x - 18"
        ],
        correctAnswer: 0,
        hint: "מצאו שני מספרים שכפלם שווה לעשרים ואחת חיובי וחיבורם שווה למינוס עשר. רשמו אותם בסוגריים וצמצמו.",
        solution_steps: [
            { verbal_explanation: "נבצע פירוק טרינום למונה. המספרים העונים לתנאים הנדרשים הם מינוס שבע ומינוס שלוש.", math_expression: "x² - 10x + 21 = (x - 7)(x - 3)" },
            { verbal_explanation: "נבנה את השבר מחדש עם המונה המפורק לקראת ביצוע צמצום.", math_expression: "(x - 7)(x - 3) / (x - 3)" },
            { verbal_explanation: "נצמצם את הגורם המשותף המופיע גם למעלה וגם למטה כמקשה אחת.", math_expression: "x - 7" }
        ],
        final_answer: "x - 7"
    },

    // שאלה 22 - היפוך סימנים (טריק -1)
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר המתוחכם הבא הכולל סימנים הפוכים:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 9</div>
            <div style="padding:0 8px;">9 - x</div>
        </div>`,
        options: [
            "-1",
            "1",
            "x",
            "0"
        ],
        correctAnswer: 0,
        hint: "המונה והמכנה דומים מאוד, אך הסימנים שלהם הפוכים בדיוק. מה קורה אם נוציא מינוס אחד מחוץ לסוגריים?",
        solution_steps: [
            { verbal_explanation: "המכנה הפוך בסימניו מאיברי המונה. נוציא מינוס אחד מהמכנה כגורם משותף כדי להשוות ביניהם.", math_expression: "9 - x = -1(x - 9)" },
            { verbal_explanation: "נרכיב את השבר מחדש כך שהסוגריים יהיו זהים לחלוטין.", math_expression: "(x - 9) / -1(x - 9)" },
            { verbal_explanation: "נצמצם את הסוגריים השלמים בשני האגפים. התוצאה היא אחת חלקי מינוס אחת.", math_expression: "1 / -1 = -1" }
        ],
        final_answer: "-1"
    },

    // שאלה 23 - היפוך סימנים בהפרש ריבועים
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר הבא (שימו לב לסדר האיברים):<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">25 - x²</div>
            <div style="padding:0 8px;">x - 5</div>
        </div>`,
        options: [
            "-x - 5",
            "x + 5",
            "x - 5",
            "-x + 5"
        ],
        correctAnswer: 0,
        hint: "פירוק המונה ייתן (5 פחות איקס) כפול (5 ועוד איקס). הסוגריים של החיסור הפוכים מהמכנה ולכן יניבו מינוס אחת בעת הצמצום.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה לפי נוסחת הפרש ריבועים, נשמור על סדר המספר והמשתנה כפי שהם.", math_expression: "25 - x² = (5 - x)(5 + x)" },
            { verbal_explanation: "הסוגריים הראשונים הם בדיוק ההיפוך של המכנה. צמצום של ביטויים הפוכים בחיסור שווה למינוס אחד.", math_expression: "(5 - x) / (x - 5) = -1" },
            { verbal_explanation: "נכפול את שארית המונה במינוס אחד ונפתח את הסוגריים.", math_expression: "-1 × (5 + x) = -x - 5" }
        ],
        final_answer: "-x - 5"
    },

    // שאלה 24 - ריבוע שלם
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר בעזרת זיהוי נוסחת כפל מקוצר או טרינום במונה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 12x + 36</div>
            <div style="padding:0 8px;">x - 6</div>
        </div>`,
        options: [
            "x - 6",
            "x + 6",
            "x - 12",
            "x"
        ],
        correctAnswer: 0,
        hint: "המונה הוא ריבוע שלם של הפרש. הוא בנוי כמכפלה של שני סוגריים זהים.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה לגורמים. מספרים שמכפלתם שלושים ושש וסכומם מינוס שתים עשרה הם מינוס שש כפול עצמו.", math_expression: "x² - 12x + 36 = (x - 6)(x - 6)" },
            { verbal_explanation: "נציב את הפירוק הכפול לתוך השבר המקורי מעל למכנה.", math_expression: "(x - 6)(x - 6) / (x - 6)" },
            { verbal_explanation: "נצמצם זוג סוגריים אחד מהמונה עם המכנה השלם.", math_expression: "x - 6" }
        ],
        final_answer: "x - 6"
    },

    // שאלה 25 - טרינום כפול
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר הדו-צדדי הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² + 5x + 6</div>
            <div style="padding:0 8px;">x² + 2x - 3</div>
        </div>`,
        options: [
            "(x + 2) / (x - 1)",
            "(x + 3) / (x + 1)",
            "(x + 6) / (x - 3)",
            "(x - 2) / (x - 1)"
        ],
        correctAnswer: 0,
        hint: "פרקו גם את המונה וגם את המכנה בעזרת טרינום. חפשו את הסוגריים המשותפים לשניהם וצמצמו אותם.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה. מספרים המכפילים לשש ומסתכמים לחמש הם שתיים ושלוש.", math_expression: "Num = (x + 2)(x + 3)" },
            { verbal_explanation: "נפרק את המכנה. מספרים המכפילים למינוס שלוש ומסתכמים לשתיים חיובי הם שלוש ומינוס אחד.", math_expression: "Den = (x - 1)(x + 3)" },
            { verbal_explanation: "נרכיב שבר חדש ונצמצם את הגורם המשותף המכיל את הפלוס שלוש.", math_expression: "(x + 2)(x + 3) / (x - 1)(x + 3) = (x + 2) / (x - 1)" }
        ],
        final_answer: "(x + 2) / (x - 1)"
    },

    // שאלה 26 - הוצאת גורם ואז הפרש ריבועים
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר המשלב הוצאת גורם משותף ונוסחת כפל מקוצר יחד:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2x² - 50</div>
            <div style="padding:0 8px;">x + 5</div>
        </div>`,
        options: [
            "2x - 10",
            "2x + 10",
            "x - 5",
            "2x - 25"
        ],
        correctAnswer: 0,
        hint: "שלב א': הוציאו שתיים כגורם משותף מהמונה. שלב ב': מה שנשאר בסוגריים הוא הפרש ריבועים - פרקו אותו. שלב ג': צמצמו ולבסוף פתחו סוגריים.",
        solution_steps: [
            { verbal_explanation: "נוציא את המספר שתיים כגורם משותף מחוץ לסוגריים במונה כדי להקל על הפירוק.", math_expression: "2x² - 50 = 2(x² - 25)" },
            { verbal_explanation: "נזהה שהביטוי בסוגריים הוא נוסחת הפרש ריבועים ונפרק אותו לחלוטין לשני חלקים.", math_expression: "2(x - 5)(x + 5)" },
            { verbal_explanation: "נציב את הפירוק המלא בשבר ונצמצם את הגורם המשותף החיובי עם המכנה הנתון.", math_expression: "2(x - 5)(x + 5) / (x + 5) = 2(x - 5)" },
            { verbal_explanation: "נפתח את הסוגריים שנותרו לקבלת התשובה הסופית כביטוי אלגנטי ללא סוגריים.", math_expression: "2x - 10" }
        ],
        final_answer: "2x - 10"
    },

    // שאלה 27 - הוצאת מקדם שלילי ממונה
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">-3x + 12</div>
            <div style="padding:0 8px;">x - 4</div>
        </div>`,
        options: [
            "-3",
            "3",
            "-3x",
            "x - 3"
        ],
        correctAnswer: 0,
        hint: "הוציאו את המקדם הראשי בשלמותו (כולל סימן המינוס) כגורם משותף מהמונה כדי שיישאר סוגריים זהים למכנה.",
        solution_steps: [
            { verbal_explanation: "נוציא את המינוס שלוש במלואו אל מחוץ לסוגריים במונה. זה יהפוך את סימן המספר החופשי.", math_expression: "-3x + 12 = -3(x - 4)" },
            { verbal_explanation: "נרשום את השבר במתכונתו החדשה.", math_expression: "-3(x - 4) / (x - 4)" },
            { verbal_explanation: "הסוגריים מתבטלים בזה אחר זה בצמצום ישיר, ונותר רק המספר השלילי כתוצאה מוחלטת.", math_expression: "-3" }
        ],
        final_answer: "-3"
    },

    // שאלה 28 - בעיה גיאומטרית הדורשת צמצום
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `<strong>הבנה גיאומטרית:</strong><br>
        שטח של מלבן מיוצג על ידי הביטוי <strong>x² + 8x + 15</strong>.<br>
        אורכה של אחת מצלעות המלבן הוא <strong>x + 3</strong>.<br>
        מהו הביטוי המייצג את הצלע השנייה של המלבן?`,
        options: [
            "x + 5",
            "x - 5",
            "x + 12",
            "x + 8"
        ],
        correctAnswer: 0,
        hint: "שטח מלבן הוא צלע כפול צלע. לכן, הצלע השנייה שווה לשטח חלקי הצלע הראשונה. צרו שבר וצמצמו אותו בעזרת טרינום.",
        solution_steps: [
            { verbal_explanation: "נבנה שבר שבו המונה הוא שטח המלבן והמכנה הוא הצלע הידועה כדי לחלץ את הצלע החסרה.", math_expression: "(x² + 8x + 15) / (x + 3)" },
            { verbal_explanation: "נפרק את המונה לפי טרינום. מספרים שמכפלתם חמש עשרה וסכומם שמונה הם שלוש וחמש.", math_expression: "(x + 3)(x + 5)" },
            { verbal_explanation: "נבצע צמצום של הסוגריים המשותפים. מה שנותר הוא אורכה של הצלע השנייה המבוקשת.", math_expression: "(x + 3)(x + 5) / (x + 3) = x + 5" }
        ],
        final_answer: "x + 5"
    },

    // שאלה 29 - חישוב לאחר צמצום
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `<strong>אתגר הצבה מתוחכם:</strong><br>
        נתון השבר האלגברי: <span dir="ltr" style="font-weight:bold;">(x² - 1) / (x + 1)</span><br>
        מה יהיה ערך הביטוי אם נציב בו <strong>x = 99</strong>?<br>
        (רמז: צמצמו את השבר קודם במקום לחשב חזקות גדולות)`,
        options: [
            "98",
            "100",
            "99",
            "9800"
        ],
        correctAnswer: 0,
        hint: "במקום להעלות תשעים ותשע בריבוע (קשה בלי מחשבון), פרקו את המונה, צמצמו את השבר, והציבו בביטוי הקצר שנשאר.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה לפי נוסחת הפרש ריבועים בסיסית.", math_expression: "x² - 1 = (x - 1)(x + 1)" },
            { verbal_explanation: "נצמצם את השבר במלואו לפני שניגש להצבה המספרית כדי להקל על הפעולה.", math_expression: "(x - 1)(x + 1) / (x + 1) = x - 1" },
            { verbal_explanation: "כעת, כשיש בידינו ביטוי פשוט להפליא, נציב בו את המספר הגדול שניתן ונקבל פתרון מידי.", math_expression: "99 - 1 = 98" }
        ],
        final_answer: "98"
    },

    // שאלה 30 - שילוב משתנה בחוץ וטרינום בפנים
    {
        topic: "algebraic_fractions_172",
        subTopic: "צמצום",
        question_text: `צמצמו את השבר המורכב הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x³ - 9x</div>
            <div style="padding:0 8px;">x² + 3x</div>
        </div>`,
        options: [
            "x - 3",
            "x + 3",
            "x² - 3",
            "x"
        ],
        correctAnswer: 0,
        hint: "שלב א': הוציאו איקס כגורם משותף גם מהמונה וגם מהמכנה. שלב ב': המונה שנותר הוא הפרש ריבועים - פרקו אותו. שלב ג': צמצמו כל מה שאפשר.",
        solution_steps: [
            { verbal_explanation: "נוציא את המשתנה הבודד כגורם משותף למעלה ולמטה כדי להוריד את רמת החזקה הכללית.", math_expression: "Num = x(x² - 9) <br><br> Den = x(x + 3)" },
            { verbal_explanation: "נפרק את הסוגריים שבמונה לפי נוסחת הפרש ריבועים מלאה.", math_expression: "x² - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "נרשום את השבר המלא עם כל הפירוקים שביצענו עד כה.", math_expression: "x(x - 3)(x + 3) / x(x + 3)" },
            { verbal_explanation: "נצמצם את המשתנה הבודד ואת סוגרי החיבור במקביל. יוותר רק גורם אחד כתוצאה סופית.", math_expression: "x - 3" }
        ],
        final_answer: "x - 3"
    },
    // ========================================================================
    // נושא: שברים אלגבריים | תת נושא: כפל (15 שאלות מושקעות)
    // ========================================================================
    
    // שאלה 31
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `חשבו וצמצמו את מכפלת השברים הבאה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2x</div>
                <div style="padding:0 8px;">5</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">10</div>
                <div style="padding:0 8px;">x²</div>
            </div>
        </div>`,
        options: [
            "4 / x",
            "4x",
            "20x / 5",
            "2 / x"
        ],
        correctAnswer: 0,
        hint: "בכפל שברים, כופלים מונה במונה ומכנה במכנה. לאחר מכן מצמצמים את המספרים ואת החזקות של המשתנה.",
        solution_steps: [
            { verbal_explanation: "נכפול את המונים זה בזה ואת המכנים זה בזה ליצירת שבר אחד שלם.", math_expression: "(2x × 10) / (5 × x²)" },
            { verbal_explanation: "נפשט את המונה ואת המכנה על ידי ביצוע פעולות הכפל האפשריות.", math_expression: "20x / 5x²" },
            { verbal_explanation: "נצמצם את המקדמים המספריים: עשרים לחלק לחמש שווה לארבע.", math_expression: "20 / 5 = 4" },
            { verbal_explanation: "נצמצם את המשתנה: איקס במונה ואיקס בריבוע במכנה משאירים איקס אחד במכנה.", math_expression: "x / x² = 1 / x" },
            { verbal_explanation: "נרכיב את השבר הסופי המפושט.", math_expression: "4 / x" }
        ],
        final_answer: "4 / x"
    },

    // שאלה 32
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `חשבו וצמצמו את המכפלה הבאה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">3x²</div>
                <div style="padding:0 8px;">4</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">8</div>
                <div style="padding:0 8px;">9x</div>
            </div>
        </div>`,
        options: [
            "2x / 3",
            "3x / 2",
            "6x",
            "24x / 36"
        ],
        correctAnswer: 0,
        hint: "נוח יותר לצמצם בהצלבה עוד לפני הכפל: בדקו אם המספר ארבע מצטמצם עם שמונה, ושלוש עם תשע.",
        solution_steps: [
            { verbal_explanation: "נכפול את המונים והמכנים יחד כדי לרכז את התרגיל תחת קו שבר אחד.", math_expression: "(3x² × 8) / (4 × 9x)" },
            { verbal_explanation: "נכפול את המספרים בנפרד לקבלת הביטוי המלא.", math_expression: "24x² / 36x" },
            { verbal_explanation: "נצמצם את השבר המספרי על ידי חלוקת המונה והמכנה בגורם המשותף הגדול ביותר, שהוא שתים עשרה.", math_expression: "24 / 36 = 2 / 3" },
            { verbal_explanation: "נצמצם את המשתנים. חזקה שנייה למעלה וחזקה ראשונה למטה משאירות משתנה בודד במונה.", math_expression: "x² / x = x" },
            { verbal_explanation: "נשלב את התוצאות לביטוי הסופי.", math_expression: "2x / 3" }
        ],
        final_answer: "2x / 3"
    },

    // שאלה 33
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `כפלו וצמצמו את השברים הבאים הכוללים סוגריים:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x + 2</div>
                <div style="padding:0 8px;">3</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">6</div>
                <div style="padding:0 8px;">x + 2</div>
            </div>
        </div>`,
        options: [
            "2",
            "x + 2",
            "3",
            "2x + 4"
        ],
        correctAnswer: 0,
        hint: "אין צורך לפתוח סוגריים! חפשו גורמים זהים לחלוטין במונה ובמכנה הנגדי, וצמצמו אותם כמקשה אחת.",
        solution_steps: [
            { verbal_explanation: "נרשום את המכפלה תחת קו שבר משותף. נתייחס לביטויים המורכבים כאל יחידה אחת בתוך סוגריים.", math_expression: "6(x + 2) / 3(x + 2)" },
            { verbal_explanation: "ניתן לראות בבירור שהסוגריים זהים גם במונה וגם במכנה. לכן, הם מבטלים זה את זה לחלוטין בצמצום.", math_expression: "(x + 2) / (x + 2) = 1" },
            { verbal_explanation: "נותרנו עם שבר מספרי פשוט של שש חלקי שלוש, נחשב אותו לקבלת התוצאה.", math_expression: "6 / 3 = 2" }
        ],
        final_answer: "2"
    },

    // שאלה 34
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `הכפילו את השברים הבאים ופשטו ככל האפשר:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">4x - 8</div>
                <div style="padding:0 8px;">x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x²</div>
                <div style="padding:0 8px;">x - 2</div>
            </div>
        </div>`,
        options: [
            "4x",
            "4",
            "x - 2",
            "4x²"
        ],
        correctAnswer: 0,
        hint: "הוציאו גורם משותף ממונה השבר הראשון. לאחר מכן, בצעו צמצום בהצלבה של הסוגריים ושל חזקות המשתנה.",
        solution_steps: [
            { verbal_explanation: "בשלב הראשון, נוציא את המספר ארבע כגורם משותף מהמונה של השבר השמאלי.", math_expression: "4x - 8 = 4(x - 2)" },
            { verbal_explanation: "נרשום את תרגיל הכפל המלא לאחר הפירוק.", math_expression: "(4(x - 2) × x²) / (x × (x - 2))" },
            { verbal_explanation: "נצמצם את הסוגריים הזהים לחלוטין ממונה וממכנה.", math_expression: "(x - 2) / (x - 2) = 1" },
            { verbal_explanation: "נצמצם את המשתנה הריבועי שבמונה עם המשתנה הבודד שבמכנה.", math_expression: "x² / x = x" },
            { verbal_explanation: "נרכיב את שאריות הצמצום למכפלה סופית אחת.", math_expression: "4 × x = 4x" }
        ],
        final_answer: "4x"
    },

    // שאלה 35
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `פשטו את המכפלה הבאה הכוללת הפרש ריבועים:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 9</div>
                <div style="padding:0 8px;">2x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">4x</div>
                <div style="padding:0 8px;">x - 3</div>
            </div>
        </div>`,
        options: [
            "2(x + 3)",
            "2(x - 3)",
            "x + 3",
            "4x(x + 3)"
        ],
        correctAnswer: 0,
        hint: "פרקו את הפרש הריבועים בשבר הראשון. לאחר מכן צמצמו את הסוגריים ואת המשתנה שמופיע כמקדם.",
        solution_steps: [
            { verbal_explanation: "נזהה ונפרק את המונה של השבר הראשון בעזרת נוסחת הפרש ריבועים מוכרת.", math_expression: "x² - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "נרשום את המכפלה כולה תחת קו שבר אחד לצורך סדר וארגון.", math_expression: "(4x(x - 3)(x + 3)) / 2x(x - 3)" },
            { verbal_explanation: "נצמצם את הסוגריים המכילים את פעולת החיסור הזהים בשני המקומות.", math_expression: "(x - 3) / (x - 3) = 1" },
            { verbal_explanation: "נצמצם את המשתנים הבודדים ואת המספרים החופשיים שנמצאים כמקדמים.", math_expression: "4x / 2x = 2" },
            { verbal_explanation: "נרשום את המקדם שנשאר יחד עם הסוגריים שנותרו במונה.", math_expression: "2(x + 3)" }
        ],
        final_answer: "2(x + 3)"
    },

    // שאלה 36
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `חשבו את המכפלה הבאה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 25</div>
                <div style="padding:0 8px;">x + 5</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">1</div>
                <div style="padding:0 8px;">x - 5</div>
            </div>
        </div>`,
        options: [
            "1",
            "x + 5",
            "x - 5",
            "0"
        ],
        correctAnswer: 0,
        hint: "כשמכפילים שברים, המכנים מוכפלים זה בזה ליצירת ביטוי אחד. איך נראה המכנה המשותף החדש ביחס למונה הראשון?",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה הריבועי של השבר הראשון על פי הנוסחה המתאימה.", math_expression: "x² - 25 = (x - 5)(x + 5)" },
            { verbal_explanation: "נבצע את פעולת הכפל שתאחד את שני המכנים לידי ביטוי אחד זהה למונה שפירקנו.", math_expression: "Den = (x + 5)(x - 5)" },
            { verbal_explanation: "נרשום את השבר המאוחד. נגלה שהמונה והמכנה זהים לחלוטין עתה.", math_expression: "((x - 5)(x + 5)) / ((x + 5)(x - 5))" },
            { verbal_explanation: "כאשר אנו מחלקים ביטוי בעצמו (בתנאי שאינו אפס), התוצאה היא תמיד אחת.", math_expression: "1" }
        ],
        final_answer: "1"
    },

    // שאלה 37
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `צמצמו את מכפלת השברים המורכבת מטרינומים:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 4x + 4</div>
                <div style="padding:0 8px;">x² - 4</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x + 2</div>
                <div style="padding:0 8px;">x - 2</div>
            </div>
        </div>`,
        options: [
            "1",
            "x - 2",
            "(x + 2) / (x - 2)",
            "-1"
        ],
        correctAnswer: 0,
        hint: "הקפידו על פירוק מוקפד לכל מרכיב. המונה השמאלי הוא ריבוע שלם, והמכנה השמאלי הוא הפרש ריבועים.",
        solution_steps: [
            { verbal_explanation: "נפרק תחילה את המונה השמאלי המהווה טרינום מיוחד של ריבוע הפרש.", math_expression: "x² - 4x + 4 = (x - 2)(x - 2)" },
            { verbal_explanation: "נפרק את המכנה השמאלי בעזרת נוסחת הפרש ריבועים לשני גורמים.", math_expression: "x² - 4 = (x - 2)(x + 2)" },
            { verbal_explanation: "נציב את כל הפירוקים לתוך תרגיל הכפל המלא שיצרנו.", math_expression: "((x - 2)(x - 2)(x + 2)) / ((x - 2)(x + 2)(x - 2))" },
            { verbal_explanation: "נצמצם את כל הזוגות התואמים. כל הגורמים במונה מתבטלים מול הגורמים במכנה במדויק.", math_expression: "1" }
        ],
        final_answer: "1"
    },

    // שאלה 38
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `חשבו את המכפלה הבאה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² + 5x + 6</div>
                <div style="padding:0 8px;">x + 3</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2</div>
                <div style="padding:0 8px;">x + 2</div>
            </div>
        </div>`,
        options: [
            "2",
            "x + 3",
            "x + 2",
            "4"
        ],
        correctAnswer: 0,
        hint: "בצעו פירוק טרינום למונה השמאלי. לאחר מכן, נסו לצמצם אותו עם שני המכנים השונים לפני ביצוע הכפל.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה הריבועי. המספרים המכפילים לשש ומסתכמים לחמש הם שתיים ושלוש.", math_expression: "x² + 5x + 6 = (x + 2)(x + 3)" },
            { verbal_explanation: "נרשום את המכפלה המלאה וניערך לפעולת צמצום אלכסונית וישירה.", math_expression: "(2(x + 2)(x + 3)) / ((x + 3)(x + 2))" },
            { verbal_explanation: "נצמצם את זוג הסוגריים הראשון עם מקבילו במכנה.", math_expression: "(x + 3) / (x + 3) = 1" },
            { verbal_explanation: "נצמצם את זוג הסוגריים השני, כך שיוותר רק המספר החופשי.", math_expression: "(x + 2) / (x + 2) = 1 <br><br> 2 × 1 × 1 = 2" }
        ],
        final_answer: "2"
    },

    // שאלה 39
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `אתגר סימנים הפוכים - פשטו את המכפלה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 7</div>
                <div style="padding:0 8px;">x + 1</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 1</div>
                <div style="padding:0 8px;">7 - x</div>
            </div>
        </div>`,
        options: [
            "1 - x",
            "x - 1",
            "x + 1",
            "-x - 1"
        ],
        correctAnswer: 0,
        hint: "שימו לב: שבע פחות איקס הפוך לאיקס פחות שבע. הוציאו מינוס אחד כגורם משותף. בנוסף, פרקו את המונה הימני.",
        solution_steps: [
            { verbal_explanation: "נזהה שהמכנה הימני הפוך לחלוטין בסימניו מהמונה השמאלי. נוציא מינוס אחד כגורם משותף כדי שיהיו זהים.", math_expression: "7 - x = -1(x - 7)" },
            { verbal_explanation: "נפרק את המונה הימני לפי נוסחת הפרש הריבועים הקלאסית.", math_expression: "x² - 1 = (x - 1)(x + 1)" },
            { verbal_explanation: "נציב את כל הפירוקים לתוך התרגיל הראשי ונבצע צמצום של הגורמים החופפים.", math_expression: "((x - 7)(x - 1)(x + 1)) / (-1(x + 1)(x - 7))" },
            { verbal_explanation: "נבטל את שני זוגות הסוגריים הזהים, ונחלק את מה שנותר במינוס אחד (פעולה השקולה להחלפת סימן פנימית).", math_expression: "(x - 1) / -1 = -x + 1 = 1 - x" }
        ],
        final_answer: "1 - x"
    },

    // שאלה 40
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `<strong>הבנה גיאומטרית (כפל שברים):</strong><br>
        אורך צלע מלבן מיוצג על ידי השבר: <span dir="ltr" style="font-weight:bold;">(x² - 4) / x²</span><br>
        רוחב המלבן מיוצג על ידי השבר: <span dir="ltr" style="font-weight:bold;">x / (x - 2)</span><br>
        מהו הביטוי המייצג את <strong>שטח המלבן</strong>?`,
        options: [
            "(x + 2) / x",
            "x + 2",
            "(x - 2) / x",
            "x / (x + 2)"
        ],
        correctAnswer: 0,
        hint: "שטח מלבן שווה למכפלת אורכו ברוחבו. הציבו את שני השברים בכפל, פרקו את המונה הראשון (הפרש ריבועים) וצמצמו עם ההצלבה.",
        solution_steps: [
            { verbal_explanation: "נבנה את ביטוי השטח על ידי כפל אלגברי בין צלעות המלבן.", math_expression: "Area = ((x² - 4) / x²) × (x / (x - 2))" },
            { verbal_explanation: "נפרק את המונה הראשון המהווה נוסחת כפל מקוצר ברורה.", math_expression: "x² - 4 = (x - 2)(x + 2)" },
            { verbal_explanation: "נרשום את המכפלה המסודרת תחת קו שבר משותף להקלת העבודה.", math_expression: "(x(x - 2)(x + 2)) / (x²(x - 2))" },
            { verbal_explanation: "נצמצם את הסוגריים המשותפים המכילים חיסור, וכן נצמצם איקס אחד ממונה וממכנה.", math_expression: "Area = (x + 2) / x" }
        ],
        final_answer: "(x + 2) / x"
    },

    // שאלה 41
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `כפלו וצמצמו את השברים הבאים הכוללים הוצאת גורם בשני שלבים:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2x + 6</div>
                <div style="padding:0 8px;">x² - 9</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 3</div>
                <div style="padding:0 8px;">2</div>
            </div>
        </div>`,
        options: [
            "1",
            "x + 3",
            "2",
            "x - 3"
        ],
        correctAnswer: 0,
        hint: "הוציאו שתיים מהמונה הראשון. פרקו את המכנה הראשון להפרש ריבועים. לאחר מכן הכל יצטמצם באורח פלא.",
        solution_steps: [
            { verbal_explanation: "נוציא את המספר שתיים כגורם משותף מתוך המונה של השבר השמאלי.", math_expression: "2x + 6 = 2(x + 3)" },
            { verbal_explanation: "נפרק את המכנה של השבר השמאלי לפי חוקי הפרש הריבועים.", math_expression: "x² - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "נאחד את המכפלה תוך הצבת הפירוקים וניגש למלאכת הצמצום.", math_expression: "(2(x + 3)(x - 3)) / (2(x - 3)(x + 3))" },
            { verbal_explanation: "כל הגורמים במונה תואמים במדויק לאלו שבמכנה, ולכן הכל מתבטל ומשאיר מספר שלם בלבד.", math_expression: "1" }
        ],
        final_answer: "1"
    },

    // שאלה 42
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `חשבו וצמצמו את המכפלה הבאה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - x - 20</div>
                <div style="padding:0 8px;">x² - 25</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 5</div>
                <div style="padding:0 8px;">x + 4</div>
            </div>
        </div>`,
        options: [
            "(x - 5) / (x + 5)",
            "1",
            "(x + 4) / (x + 5)",
            "(x - 5) / (x - 4)"
        ],
        correctAnswer: 0,
        hint: "פרקו את הטרינום במונה הראשון, ואת הפרש הריבועים במכנה הראשון. צמצמו בהצלבה עם השבר השני.",
        solution_steps: [
            { verbal_explanation: "נפרק את טרינום המונה. נחפש מספרים שמכפלתם מינוס עשרים וסכומם מינוס אחת.", math_expression: "x² - x - 20 = (x - 5)(x + 4)" },
            { verbal_explanation: "נפרק את המכנה הריבועי המוכר.", math_expression: "x² - 25 = (x - 5)(x + 5)" },
            { verbal_explanation: "נבנה את שבר המכפלה הכולל את הפירוקים וניגש לצמצם סוגריים תואמים משני צידי קו השבר.", math_expression: "((x - 5)(x + 4)(x - 5)) / ((x - 5)(x + 5)(x + 4))" },
            { verbal_explanation: "נבטל את שני זוגות הסוגריים המשותפים ונרשום את התוצאה שנשארה.", math_expression: "(x - 5) / (x + 5)" }
        ],
        final_answer: "(x - 5) / (x + 5)"
    },

    // שאלה 43
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `חשבו וצמצמו את המכפלה הבאה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">3x² - 12x</div>
                <div style="padding:0 8px;">x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">1</div>
                <div style="padding:0 8px;">x - 4</div>
            </div>
        </div>`,
        options: [
            "3",
            "3x",
            "12",
            "3 / x"
        ],
        correctAnswer: 0,
        hint: "הוציאו את הביטוי שלושה איקס כגורם משותף מתוך המונה הראשון כדי לפרק אותו לגורמים המצטמצמים בקלות.",
        solution_steps: [
            { verbal_explanation: "נזהה שניתן להוציא גם מספר וגם משתנה כגורם משותף במונה השמאלי החזק.", math_expression: "3x² - 12x = 3x(x - 4)" },
            { verbal_explanation: "נציב בשבר הכללי ונאחד עם מכפלת השבר השני (שהמונה שלו הוא אחת, ולכן אינו משפיע).", math_expression: "3x(x - 4) / x(x - 4)" },
            { verbal_explanation: "נצמצם את הסוגריים הכוללים חיסור עם מקביליהם, וכן את המשתנה הבודד במונה ובמכנה.", math_expression: "3x / x = 3" }
        ],
        final_answer: "3"
    },

    // שאלה 44
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `חשבו וצמצמו את המכפלה הבאה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² + 10x + 25</div>
                <div style="padding:0 8px;">2x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">4x²</div>
                <div style="padding:0 8px;">x + 5</div>
            </div>
        </div>`,
        options: [
            "2x(x + 5)",
            "2(x + 5)",
            "2x² + 5",
            "x(x + 5)"
        ],
        correctAnswer: 0,
        hint: "המונה הראשון הוא ריבוע שלם של סכום. בנוסף, צמצמו את המספר ארבע עם שתיים, ואת איקס בריבוע עם איקס בודד.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה השמאלי לפי תבנית הריבוע השלם. חמש ועוד חמש שווה עשר, וחמש כפול חמש שווה עשרים וחמש.", math_expression: "x² + 10x + 25 = (x + 5)(x + 5)" },
            { verbal_explanation: "נרשום את תרגיל הכפל כקו שבר מורחב ומרכזי.", math_expression: "(4x²(x + 5)(x + 5)) / (2x(x + 5))" },
            { verbal_explanation: "נצמצם את זוג הסוגריים היחיד המופיע משני צידי המתרס.", math_expression: "(4x²(x + 5)) / 2x" },
            { verbal_explanation: "נבצע חלוקה בין המקדמים (ארבע לחלק לשתיים) ונצמצם את המשתנה הריבועי עם הרגיל.", math_expression: "4x² / 2x = 2x" },
            { verbal_explanation: "נצרף את השארית של המקדם והמשתנה לסוגריים שנותרו במונה.", math_expression: "2x(x + 5)" }
        ],
        final_answer: "2x(x + 5)"
    },

    // שאלה 45
    {
        topic: "algebraic_fractions_172",
        subTopic: "כפל",
        question_text: `חשבו וצמצמו את המכפלה המסכמת הבאה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 7x + 10</div>
                <div style="padding:0 8px;">x² - 5x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">×</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x²</div>
                <div style="padding:0 8px;">x - 2</div>
            </div>
        </div>`,
        options: [
            "x",
            "x²",
            "1",
            "x - 5"
        ],
        correctAnswer: 0,
        hint: "זהו תרגיל הדורש פירוק של טרינום במונה אחד, ופירוק על ידי הוצאת גורם משותף במכנה השני. פרקו הכל בסבלנות ואז צמצמו.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה בעזרת טרינום. נחפש שני מספרים שמכפלתם עשר חיובי וסכומם מינוס שבע.", math_expression: "x² - 7x + 10 = (x - 2)(x - 5)" },
            { verbal_explanation: "נפרק את המכנה על ידי הוצאת משתנה בודד אל מחוץ לסוגריים רגילים.", math_expression: "x² - 5x = x(x - 5)" },
            { verbal_explanation: "נציב את תוצאות הפירוקים שלנו בתוך שבר כפל מאוחד וחזק.", math_expression: "(x²(x - 2)(x - 5)) / (x(x - 5)(x - 2))" },
            { verbal_explanation: "נצמצם את שני זוגות הסוגריים במקביל כיוון שהם זהים לחלוטין למעלה ולמטה.", math_expression: "x² / x" },
            { verbal_explanation: "נצמצם את החזקה של המשתנה הנותר, ונקבל את התשובה הסופית כמשתנה נקי ויחיד.", math_expression: "x" }
        ],
        final_answer: "x"
    },

    // ========================================================================
    // נושא: שברים אלגבריים | תת נושא: חילוק (15 שאלות מושקעות)
    // ========================================================================
    
    // שאלה 46
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `חשבו וצמצמו את תרגיל החילוק הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">5x</div>
                <div style="padding:0 8px;">2</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">10x²</div>
                <div style="padding:0 8px;">4</div>
            </div>
        </div>`,
        options: [
            "1 / x",
            "x",
            "5 / x²",
            "20 / x"
        ],
        correctAnswer: 0,
        hint: "בחילוק שברים, הופכים את פעולת החילוק לכפל, ואת השבר השני הופכים (מונה למכנה ומכנה למונה). לאחר מכן, פותרים כמו כפל רגיל.",
        solution_steps: [
            { verbal_explanation: "נמיר את פעולת החילוק לפעולת כפל, תוך היפוך מלא של השבר הימני (המחלק).", math_expression: "(5x / 2) × (4 / 10x²)" },
            { verbal_explanation: "נבצע את הכפל של המונים והמכנים בנפרד ליצירת שבר אחד.", math_expression: "(5x × 4) / (2 × 10x²) = 20x / 20x²" },
            { verbal_explanation: "נצמצם את המקדם המספרי עשרים הנמצא בשני האגפים.", math_expression: "20 / 20 = 1" },
            { verbal_explanation: "נצמצם את המשתנים בהתאם לחוקי חזקות. החזקה במכנה גדולה יותר, ולכן יישאר איקס למטה.", math_expression: "x / x² = 1 / x" }
        ],
        final_answer: "1 / x"
    },

    // שאלה 47
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `פתרו את תרגיל חילוק השברים הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">8x³</div>
                <div style="padding:0 8px;">3</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">4x</div>
                <div style="padding:0 8px;">9</div>
            </div>
        </div>`,
        options: [
            "6x²",
            "6x",
            "2x²",
            "24x²"
        ],
        correctAnswer: 0,
        hint: "הפכו לכפל עם הופכי. שימו לב לצמצום הצולב: תשע מצטמצם עם שלוש, ושמונה מצטמצם עם ארבע.",
        solution_steps: [
            { verbal_explanation: "נשנה את הפעולה לכפל ונחליף את המונה והמכנה בשבר השני בלבד.", math_expression: "(8x³ / 3) × (9 / 4x)" },
            { verbal_explanation: "נאחד את השברים תחת קו שבר ארוך ונהיה מוכנים לצמצום צולב.", math_expression: "(8x³ × 9) / (3 × 4x)" },
            { verbal_explanation: "נצמצם את המספרים: שמונה לחלק לארבע נותן שתיים, ותשע לחלק לשלוש נותן שלוש.", math_expression: "(2x³ × 3) / x" },
            { verbal_explanation: "נכפול את המספרים הנותרים ונצמצם את חזקת המשתנה על ידי חיסור המעריך האחד של המכנה.", math_expression: "6x³ / x = 6x²" }
        ],
        final_answer: "6x²"
    },

    // שאלה 48
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `חשבו את חילוק השברים המכילים סוגריים:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x + 4</div>
                <div style="padding:0 8px;">5</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x + 4</div>
                <div style="padding:0 8px;">15</div>
            </div>
        </div>`,
        options: [
            "3",
            "1/3",
            "x + 4",
            "15"
        ],
        correctAnswer: 0,
        hint: "היפוך השבר השני יעביר את הסוגריים הזהים למכנה, שם תוכלו לצמצם אותם במלואם עם הסוגריים במונה הראשון.",
        solution_steps: [
            { verbal_explanation: "נהפוך את החילוק לכפל תוך כדי היפוך מתמטי של השבר הימני המלא.", math_expression: "((x + 4) / 5) × (15 / (x + 4))" },
            { verbal_explanation: "נאחד את הביטויים ונקבל מערכת שבה יש סוגריים זהים בהצלבה.", math_expression: "(15(x + 4)) / (5(x + 4))" },
            { verbal_explanation: "הסוגריים מבטלים זה את זה בחלוקה ישירה.", math_expression: "(x + 4) / (x + 4) = 1" },
            { verbal_explanation: "נותרנו עם החלוקה המספרית הבסיסית אותה נחשב ללא בעיה.", math_expression: "15 / 5 = 3" }
        ],
        final_answer: "3"
    },

    // שאלה 49
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `חשבו וצמצמו את תרגיל החילוק המערב נוסחת כפל מקוצר:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 16</div>
                <div style="padding:0 8px;">3</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 4</div>
                <div style="padding:0 8px;">6</div>
            </div>
        </div>`,
        options: [
            "2x + 8",
            "2x - 8",
            "x + 4",
            "0.5x + 2"
        ],
        correctAnswer: 0,
        hint: "היפכו לכפל. פרקו את הפרש הריבועים בשבר הראשון. צמצמו את הסוגריים המשותפים ואת המספרים, ואל תשכחו לפתוח סוגריים בסוף.",
        solution_steps: [
            { verbal_explanation: "נשנה את התרגיל לכפל עם השבר ההופכי למחלק.", math_expression: "((x² - 16) / 3) × (6 / (x - 4))" },
            { verbal_explanation: "נפרק את המונה הריבועי השמאלי לנוסחת הפרש הריבועים הרגילה.", math_expression: "x² - 16 = (x - 4)(x + 4)" },
            { verbal_explanation: "נרשום את המכפלה תחת קו מוארך ונצמצם את המספרים שש ושלוש כדי לקבל שתיים במונה.", math_expression: "(6(x - 4)(x + 4)) / 3(x - 4) = 2(x - 4)(x + 4) / (x - 4)" },
            { verbal_explanation: "נצמצם את זוג הסוגריים הכולל חיסור, ונפתח את מה שנותר.", math_expression: "2(x + 4) = 2x + 8" }
        ],
        final_answer: "2x + 8"
    },

    // שאלה 50
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `חשבו וצמצמו את תרגיל החילוק הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">3x - 9</div>
                <div style="padding:0 8px;">x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 3</div>
                <div style="padding:0 8px;">x²</div>
            </div>
        </div>`,
        options: [
            "3x",
            "3",
            "x / 3",
            "3x²"
        ],
        correctAnswer: 0,
        hint: "היפכו לכפל, הוציאו את שלוש כגורם משותף במונה השמאלי, וצמצמו את הסוגריים ואת חזקות האיקס.",
        solution_steps: [
            { verbal_explanation: "נהפוך לכפל באמצעות ההופכי של השבר הימני הנתון.", math_expression: "((3x - 9) / x) × (x² / (x - 3))" },
            { verbal_explanation: "נוציא את שלוש כגורם משותף מהמונה השמאלי כדי שיהיה ניתן לצמצמו בהמשך.", math_expression: "3x - 9 = 3(x - 3)" },
            { verbal_explanation: "נאגד למכפלה כללית משותפת ונצמצם סוגריים מול סוגריים.", math_expression: "(3x²(x - 3)) / (x(x - 3))" },
            { verbal_explanation: "לאחר ביטול הסוגריים, נחלק את המשתנה הריבועי במונה במשתנה הרגיל שבמכנה ונקבל את התשובה.", math_expression: "3x² / x = 3x" }
        ],
        final_answer: "3x"
    },

    // שאלה 51
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `חשבו וצמצמו את השברים בעזרת טרינום (ריבוע שלם):<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 6x + 9</div>
                <div style="padding:0 8px;">2x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 3</div>
                <div style="padding:0 8px;">4x²</div>
            </div>
        </div>`,
        options: [
            "2x(x - 3)",
            "2x(x + 3)",
            "x(x - 3)",
            "2(x - 3)"
        ],
        correctAnswer: 0,
        hint: "המונה השמאלי הוא למעשה ריבוע של הפרש. פרקו אותו. לאחר היפוך השבר השני, צמצמו בהצלבה מספרים וסוגריים.",
        solution_steps: [
            { verbal_explanation: "נהפוך את החילוק לכפל באמצעות שבר הופכי.", math_expression: "((x² - 6x + 9) / 2x) × (4x² / (x - 3))" },
            { verbal_explanation: "נפרק את המונה השמאלי שהוא ריבוע מדויק של הפרש.", math_expression: "x² - 6x + 9 = (x - 3)(x - 3)" },
            { verbal_explanation: "נאחד את השברים ונבצע צמצום של הסוגריים.", math_expression: "(4x²(x - 3)(x - 3)) / (2x(x - 3)) = (4x²(x - 3)) / 2x" },
            { verbal_explanation: "נצמצם את המקדם המספרי ואת המשתנה מחוץ לסוגריים לקבלת הביטוי הסופי.", math_expression: "4x² / 2x = 2x <br><br> 2x(x - 3)" }
        ],
        final_answer: "2x(x - 3)"
    },

    // שאלה 52
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `חשבו וצמצמו חילוק מורכב עם שתי נוסחאות כפל מקוצר:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 25</div>
                <div style="padding:0 8px;">x² - 9</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x + 5</div>
                <div style="padding:0 8px;">x - 3</div>
            </div>
        </div>`,
        options: [
            "(x - 5) / (x + 3)",
            "(x + 5) / (x - 3)",
            "(x - 5) / (x - 3)",
            "(x - 3) / (x + 5)"
        ],
        correctAnswer: 0,
        hint: "היפכו לכפל. פרקו את שני ההפרשים הריבועיים בשבר השמאלי (מונה ומכנה) וצמצמו אותם בהצלבה מול השבר הימני ההפוך.",
        solution_steps: [
            { verbal_explanation: "נבצע שינוי לפעולת כפל בעזרת השבר ההופכי.", math_expression: "((x² - 25) / (x² - 9)) × ((x - 3) / (x + 5))" },
            { verbal_explanation: "נפרק את שני החלקים של השבר השמאלי בעזרת נוסחת כפל מקוצר מפורסמת.", math_expression: "Num = (x - 5)(x + 5) <br><br> Den = (x - 3)(x + 3)" },
            { verbal_explanation: "נרשום הכל בשבר יחיד גדול לקראת הצמצום המורחב.", math_expression: "((x - 5)(x + 5)(x - 3)) / ((x - 3)(x + 3)(x + 5))" },
            { verbal_explanation: "נבטל במקביל את הזוגות התואמים במונה ובמכנה ונרשום את התוצאה המזוקקת.", math_expression: "(x - 5) / (x + 3)" }
        ],
        final_answer: "(x - 5) / (x + 3)"
    },

    // שאלה 53
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `חשבו וצמצמו את תרגיל החילוק הבא המשלב טרינום:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² + 7x + 10</div>
                <div style="padding:0 8px;">x - 1</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x + 2</div>
                <div style="padding:0 8px;">x² - 1</div>
            </div>
        </div>`,
        options: [
            "(x + 5)(x + 1)",
            "(x - 5)(x - 1)",
            "x + 5",
            "(x + 5) / (x + 1)"
        ],
        correctAnswer: 0,
        hint: "היפכו לכפל. פרקו את הטרינום, פרקו את הפרש הריבועים (במונה החדש) וצמצמו.",
        solution_steps: [
            { verbal_explanation: "נהפוך לכפל באמצעות ההופכי של השבר הימני המורכב.", math_expression: "((x² + 7x + 10) / (x - 1)) × ((x² - 1) / (x + 2))" },
            { verbal_explanation: "נפרק את הטרינום במונה השמאלי למציאת מספרים שמכפלתם עשר וסכומם שבע.", math_expression: "x² + 7x + 10 = (x + 2)(x + 5)" },
            { verbal_explanation: "נפרק את המונה הימני (שהיה קודם מכנה) בעזרת הפרש ריבועים.", math_expression: "x² - 1 = (x - 1)(x + 1)" },
            { verbal_explanation: "נאחד ונסדר את כל המרכיבים המפורקים לשבר כפל גדול.", math_expression: "((x + 2)(x + 5)(x - 1)(x + 1)) / ((x - 1)(x + 2))" },
            { verbal_explanation: "נצמצם את זוגות הסוגריים החופפים ונישאר עם מכפלה של שני סוגריים במונה.", math_expression: "(x + 5)(x + 1)" }
        ],
        final_answer: "(x + 5)(x + 1)"
    },

    // שאלה 54
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `אתגר חילוק וסימנים הפוכים - פשטו:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 8</div>
                <div style="padding:0 8px;">x + 2</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">8 - x</div>
                <div style="padding:0 8px;">x² - 4</div>
            </div>
        </div>`,
        options: [
            "2 - x",
            "x - 2",
            "-x - 2",
            "x + 2"
        ],
        correctAnswer: 0,
        hint: "לאחר הפיכת השבר, הוציאו מינוס אחד כגורם משותף כדי לטפל בביטוי 'שמונה פחות איקס'. לאחר מכן, צמצמו.",
        solution_steps: [
            { verbal_explanation: "נהפוך את החילוק לפעולת כפל תוך כדי היפוך מתמטי של המחלק.", math_expression: "((x - 8) / (x + 2)) × ((x² - 4) / (8 - x))" },
            { verbal_explanation: "נוציא מינוס אחד מהמכנה הימני החדש כדי להשוות אותו למונה השמאלי ההפוך לו בסימניו.", math_expression: "8 - x = -1(x - 8)" },
            { verbal_explanation: "נפרק את המונה הימני ההפרש-ריבועי לשני גורמים.", math_expression: "x² - 4 = (x - 2)(x + 2)" },
            { verbal_explanation: "נבצע את כל הצמצומים הנדרשים בביטוי המשותף שיצרנו.", math_expression: "((x - 8)(x - 2)(x + 2)) / (-1(x + 2)(x - 8)) = (x - 2) / -1" },
            { verbal_explanation: "נחלק במינוס אחד ונפתח את הסוגריים לקבלת תשובה חיובית למראה.", math_expression: "-x + 2 = 2 - x" }
        ],
        final_answer: "2 - x"
    },

    // שאלה 55
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `חלוקת שבר בביטוי שלם (ללא שבר מצד ימין):<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 36</div>
                <div style="padding:0 8px;">x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div>(x + 6)</div>
            </div>
        </div>`,
        options: [
            "(x - 6) / x",
            "(x + 6) / x",
            "x / (x - 6)",
            "x - 6"
        ],
        correctAnswer: 0,
        hint: "ביטוי שלם הוא כמו שבר שהמכנה שלו הוא אחת. לכן, כשהופכים אותו לכפל, הוא עובר למכנה.",
        solution_steps: [
            { verbal_explanation: "נרשום את הביטוי השלם כשבר מדומה בעל מכנה של אחת.", math_expression: "(x + 6) = (x + 6) / 1" },
            { verbal_explanation: "נהפוך את החילוק לכפל ואת השבר המדומה להופכי שלו.", math_expression: "((x² - 36) / x) × (1 / (x + 6))" },
            { verbal_explanation: "נפרק את המונה הריבועי משמאל בעזרת הפרש ריבועים.", math_expression: "x² - 36 = (x - 6)(x + 6)" },
            { verbal_explanation: "נצמצם בהצלבה את הסוגריים הזהים ונרשום את השבר שנותר כפתרון סופי.", math_expression: "(x - 6)(x + 6) / (x(x + 6)) = (x - 6) / x" }
        ],
        final_answer: "(x - 6) / x"
    },

    // שאלה 56
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `חשבו וצמצמו את חילוק השברים הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2x² + 8x</div>
                <div style="padding:0 8px;">x - 3</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x + 4</div>
                <div style="padding:0 8px;">x² - 9</div>
            </div>
        </div>`,
        options: [
            "2x(x + 3)",
            "2x(x - 3)",
            "x(x + 3)",
            "2(x + 3)"
        ],
        correctAnswer: 0,
        hint: "היפכו לכפל, הוציאו גורם משותף ממונה ראשון, ופרקו הפרש ריבועים במונה השני. צמצמו הכול.",
        solution_steps: [
            { verbal_explanation: "נהפוך את התרגיל לכפל בעזרת היפוך שברים מדויק.", math_expression: "((2x² + 8x) / (x - 3)) × ((x² - 9) / (x + 4))" },
            { verbal_explanation: "נוציא גורם משותף (שני איקס) מתוך המונה השמאלי.", math_expression: "2x² + 8x = 2x(x + 4)" },
            { verbal_explanation: "נפרק את המונה הימני (שהיה מכנה קודם) לנוסחת הפרש ריבועים כפולה.", math_expression: "x² - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "נאחד את השבר ונצמצם את זוגות הסוגריים החופפים באלכסון ובישירות.", math_expression: "(2x(x + 4)(x - 3)(x + 3)) / ((x - 3)(x + 4))" },
            { verbal_explanation: "נרשום את התוצאה שנותרה במונה לאחר ניקוי כל הסוגריים שהצטמצמו.", math_expression: "2x(x + 3)" }
        ],
        final_answer: "2x(x + 3)"
    },

    // שאלה 57
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `<strong>הבנה גיאומטרית (חילוק שברים):</strong><br>
        שטח מלבן נתון על ידי הביטוי: <span dir="ltr" style="font-weight:bold;">(x² - 1) / x</span><br>
        אורך המלבן נתון על ידי הביטוי: <span dir="ltr" style="font-weight:bold;">(x + 1) / x²</span><br>
        מהו הביטוי המייצג את <strong>רוחב המלבן</strong>?`,
        options: [
            "x(x - 1)",
            "x(x + 1)",
            "x - 1",
            "x / (x - 1)"
        ],
        correctAnswer: 0,
        hint: "רוחב מלבן שווה לשטח חלקי האורך. בצעו חילוק בין שני השברים (זכרו להפוך לכפל).",
        solution_steps: [
            { verbal_explanation: "נבנה את התרגיל על ידי חלוקת השטח הנתון באורך הידוע לנו.", math_expression: "Width = ((x² - 1) / x) : ((x + 1) / x²)" },
            { verbal_explanation: "נהפוך את הפעולה לכפל של השבר ההופכי כדי להקל על החישוב האלגברי.", math_expression: "((x² - 1) / x) × (x² / (x + 1))" },
            { verbal_explanation: "נפרק את המונה השמאלי לפי נוסחת הפרש ריבועים מתאימה.", math_expression: "x² - 1 = (x - 1)(x + 1)" },
            { verbal_explanation: "נצמצם את הסוגריים, וכן נצמצם את חזקות המשתנה הבודד במונה מול המכנה.", math_expression: "(x²(x - 1)(x + 1)) / (x(x + 1)) = x(x - 1)" }
        ],
        final_answer: "x(x - 1)"
    },

    // שאלה 58
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `חשבו וצמצמו את תרגיל החילוק הבא המורכב מטרינום:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 10x + 25</div>
                <div style="padding:0 8px;">x² - 4</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 5</div>
                <div style="padding:0 8px;">x + 2</div>
            </div>
        </div>`,
        options: [
            "(x - 5) / (x - 2)",
            "(x + 5) / (x - 2)",
            "(x - 5) / (x + 2)",
            "1"
        ],
        correctAnswer: 0,
        hint: "היפכו את השבר השני לכפל. המונה הראשון הוא ריבוע שלם של הפרש. המכנה הראשון הוא הפרש ריבועים.",
        solution_steps: [
            { verbal_explanation: "נהפוך לכפל באמצעות כתיבת הופכי השבר המחלק.", math_expression: "((x² - 10x + 25) / (x² - 4)) × ((x + 2) / (x - 5))" },
            { verbal_explanation: "נפרק את המונה הריבועי השמאלי לנוסחת כפל מקוצר - ריבוע של הפרש.", math_expression: "x² - 10x + 25 = (x - 5)(x - 5)" },
            { verbal_explanation: "נפרק את המכנה הריבועי השמאלי להפרש ריבועים בסיסי.", math_expression: "x² - 4 = (x - 2)(x + 2)" },
            { verbal_explanation: "נצמצם את זוגות הסוגריים החופפים בשבר המאוחד כדי להגיע לצורה הנקייה ביותר שלו.", math_expression: "((x - 5)(x - 5)(x + 2)) / ((x - 2)(x + 2)(x - 5)) = (x - 5) / (x - 2)" }
        ],
        final_answer: "(x - 5) / (x - 2)"
    },

    // שאלה 59
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `חשבו וצמצמו את השברים בעזרת פירוק מתקדם:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">4x² - 16</div>
                <div style="padding:0 8px;">x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">:</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2x + 4</div>
                <div style="padding:0 8px;">3x</div>
            </div>
        </div>`,
        options: [
            "6(x - 2)",
            "6(x + 2)",
            "3(x - 2)",
            "12x"
        ],
        correctAnswer: 0,
        hint: "במונה הראשון הוציאו ארבע כגורם משותף ואז פרקו את הסוגריים להפרש ריבועים. במונה השני הוציאו שתיים.",
        solution_steps: [
            { verbal_explanation: "נהפוך את פעולת החילוק לכפל בהופכי באופן הרגיל.", math_expression: "((4x² - 16) / x) × (3x / (2x + 4))" },
            { verbal_explanation: "נפרק את המונה הראשי בשני שלבים: קודם גורם משותף ואז נוסחת כפל.", math_expression: "4x² - 16 = 4(x² - 4) = 4(x - 2)(x + 2)" },
            { verbal_explanation: "נפרק את המכנה החדש על ידי הוצאת גורם משותף פשוט.", math_expression: "2x + 4 = 2(x + 2)" },
            { verbal_explanation: "נצמצם את המשתנים הבודדים, את הסוגריים החופפים, ונחלק את המקדמים ארבע ושתיים זה בזה.", math_expression: "(4(x - 2)(x + 2) × 3x) / (x × 2(x + 2)) = (12(x - 2)) / 2 = 6(x - 2)" }
        ],
        final_answer: "6(x - 2)"
    },

    // שאלה 60
    {
        topic: "algebraic_fractions_172",
        subTopic: "חילוק",
        question_text: `<strong>שבר קומות מורכב:</strong> פשטו את הביטוי הבא, המורכב משבר המונח מעל לשבר אחר:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="border-bottom:4px solid #0f172a; padding-bottom:5px; margin-bottom:5px;">
                <div style="display:inline-block; text-align:center;">
                    <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² - 9</div>
                    <div style="padding:0 8px;">x</div>
                </div>
            </div>
            <div>
                <div style="display:inline-block; text-align:center;">
                    <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x + 3</div>
                    <div style="padding:0 8px;">x²</div>
                </div>
            </div>
        </div>`,
        options: [
            "x(x - 3)",
            "(x - 3) / x",
            "x(x + 3)",
            "x²(x - 3)"
        ],
        correctAnswer: 0,
        hint: "קו השבר המרכזי והעבה הוא בדיוק כמו פעולת חילוק רגילה `(:)`. רשמו אותו כתרגיל חילוק אופקי רגיל ואז פתרו.",
        solution_steps: [
            { verbal_explanation: "נתרגם את שבר הקומות לצורת כתיבה אופקית ונוחה יותר לעבודה מתמטית.", math_expression: "((x² - 9) / x) : ((x + 3) / x²)" },
            { verbal_explanation: "נהפוך את הפעולה לכפל בהופכי של השבר התחתון המקורי.", math_expression: "((x² - 9) / x) × (x² / (x + 3))" },
            { verbal_explanation: "נפרק את המונה הריבועי לשני גורמים כנדרש מנוסחת הפרש ריבועים.", math_expression: "x² - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "נצמצם את זוג הסוגריים החופף ואת חזקות המשתנה משני צידי קו השבר המרכזי.", math_expression: "(x²(x - 3)(x + 3)) / (x(x + 3)) = x(x - 3)" }
        ],
        final_answer: "x(x - 3)"
    },
    // ========================================================================
    // נושא: שברים אלגבריים | תת נושא: חיבור וחיסור (15 שאלות) - סיום הפרק
    // ========================================================================
    
    // שאלה 61 - מכנה משותף זהה
    {
        topic: "algebraic_fractions_172",
        subTopic: "חיבור וחיסור",
        question_text: `חשבו ופשטו את סכום השברים הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2x + 1</div>
                <div style="padding:0 8px;">5</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">+</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">3x + 4</div>
                <div style="padding:0 8px;">5</div>
            </div>
        </div>`,
        options: [
            "x + 1",
            "5x + 5",
            "(5x + 5) / 10",
            "(x + 5) / 5"
        ],
        correctAnswer: 0,
        hint: "כאשר המכנה משותף וזהה מראש, פשוט חברו את המונים יחד מעל אותו המכנה (אל תחברו מכנים!). לאחר מכן נסו להוציא גורם משותף ולצמצם.",
        solution_steps: [
            { verbal_explanation: "מכיוון ששני השברים בעלי מכנה חמש זהה, נחבר את המונים ישירות מעל מכנה יחיד משותף.", math_expression: "(2x + 1 + 3x + 4) / 5" },
            { verbal_explanation: "נכנס איברים דומים בתוך המונה החדש שנוצר.", math_expression: "(5x + 5) / 5" },
            { verbal_explanation: "נוציא את המספר חמש כגורם משותף במונה ונצמצם אותו עם המכנה לקבלת תשובה סופית.", math_expression: "5(x + 1) / 5 = x + 1" }
        ],
        final_answer: "x + 1"
    },// ========================================================================
    // תת נושא 4: חיבור וחיסור (15 שאלות) - גרסה מתוקנת (ללא מילים באנגלית)
    // ========================================================================
    
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `חשבו ופשטו את סכום השברים הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2x + 1</div>
                <div style="padding:0 8px;">5</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">+</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">3x + 4</div>
                <div style="padding:0 8px;">5</div>
            </div>
        </div>`,
        options: [
            "x + 1",
            "5x + 5",
            "(5x + 5) / 10",
            "(x + 5) / 5"
        ],
        correctAnswer: 0,
        hint: "כאשר המכנה משותף וזהה מראש, פשוט חברו את המונים יחד מעל אותו המכנה. לאחר מכן נסו להוציא גורם משותף ולצמצם.",
        solution_steps: [
            { verbal_explanation: "מכיוון ששני השברים בעלי מכנה חמש זהה, נחבר את המונים ישירות מעל מכנה יחיד משותף.", math_expression: "(2x + 1 + 3x + 4) / 5" },
            { verbal_explanation: "נכנס איברים דומים בתוך המונה החדש שנוצר.", math_expression: "(5x + 5) / 5" },
            { verbal_explanation: "נוציא את המספר חמש כגורם משותף במונה ונצמצם אותו עם המכנה לקבלת תשובה סופית.", math_expression: "5(x + 1) / 5 = x + 1" }
        ],
        final_answer: "x + 1"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `חשבו ופשטו את חיסור השברים הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">7x + 2</div>
                <div style="padding:0 8px;">3</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">-</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 4</div>
                <div style="padding:0 8px;">3</div>
            </div>
        </div>`,
        options: [
            "2x + 2",
            "2x - 2/3",
            "8x - 2",
            "(6x - 2) / 3"
        ],
        correctAnswer: 0,
        hint: "זהירות! סימן המינוס שלפני השבר השני שייך לכל המונה שלו. שימו את המונה השני בתוך סוגריים לפני שתחסרו.",
        solution_steps: [
            { verbal_explanation: "נאחד לשבר אחד, ונציב את המונה השני בתוך סוגריים בגלל סימן החיסור המשפיע על כולו.", math_expression: "(7x + 2 - (x - 4)) / 3" },
            { verbal_explanation: "נפתח את הסוגריים במונה. המינוס הופך את כל הסימנים שבפנים.", math_expression: "(7x + 2 - x + 4) / 3" },
            { verbal_explanation: "נכנס איברים דומים במונה המאוחד.", math_expression: "(6x + 6) / 3" },
            { verbal_explanation: "נוציא את הגורם המשותף שש במונה ונצמצם אותו מול המכנה.", math_expression: "6(x + 1) / 3 = 2(x + 1) = 2x + 2" }
        ],
        final_answer: "2x + 2"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `חשבו את סכום השברים הבא הדורש מכנה משותף:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x</div>
                <div style="padding:0 8px;">2</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">+</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x</div>
                <div style="padding:0 8px;">3</div>
            </div>
        </div>`,
        options: [
            "5x / 6",
            "2x / 5",
            "x / 5",
            "x / 6"
        ],
        correctAnswer: 0,
        hint: "מצאו מכנה משותף למספרים שתיים ושלוש (שהוא שש). הרחיבו כל שבר במספר המתאים וחברו.",
        solution_steps: [
            { verbal_explanation: "המכנה המשותף הקטן ביותר למספרים שתיים ושלוש הוא שש. נרחיב כל שבר בהתאם.", math_expression: "(x × 3) / (2 × 3) + (x × 2) / (3 × 2)" },
            { verbal_explanation: "נרשום את השברים לאחר ההרחבה שלהם למכנה המשותף.", math_expression: "3x / 6 + 2x / 6" },
            { verbal_explanation: "כעת, כשהמכנים זהים, נחבר את המונים ישירות.", math_expression: "(3x + 2x) / 6 = 5x / 6" }
        ],
        final_answer: "5x / 6"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `פשטו את הביטוי הבא המשלב שבר ומספר שלם:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">x +</div>
            <div style="display:inline-block; vertical-align:middle; margin-left:10px;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 4</div>
                <div style="padding:0 8px;">4</div>
            </div>
        </div>`,
        options: [
            "(5x - 4) / 4",
            "(2x - 4) / 4",
            "5x / 4",
            "(x - 4) / 4x"
        ],
        correctAnswer: 0,
        hint: "כדי לחבר מספר שלם לשבר, יש להפוך גם אותו לשבר. המכנה של איבר בודד הוא תמיד אחת.",
        solution_steps: [
            { verbal_explanation: "נציג את המשתנה השלם כשבר עם מכנה אחת כדי שנוכל לבצע הרחבה.", math_expression: "x / 1 + (x - 4) / 4" },
            { verbal_explanation: "נרחיב את השבר השמאלי פי ארבעה כדי להגיע למכנה משותף של ארבע.", math_expression: "4x / 4 + (x - 4) / 4" },
            { verbal_explanation: "נאחד את שני השברים ונסכם את איברי המונה המשותף.", math_expression: "(4x + x - 4) / 4 = (5x - 4) / 4" }
        ],
        final_answer: "(5x - 4) / 4"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `פשטו את ביטוי החיסור הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">5</div>
                <div style="padding:0 8px;">x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">-</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2</div>
                <div style="padding:0 8px;">x</div>
            </div>
        </div>`,
        options: [
            "3 / x",
            "3 / x²",
            "7 / x",
            "3x"
        ],
        correctAnswer: 0,
        hint: "המכנים זהים (המשתנה איקס). חסרו את המונים ורשמו מעל המכנה המשותף.",
        solution_steps: [
            { verbal_explanation: "מכיוון שהמכנה משותף ללא צורך בהרחבות, נאחד לשבר אחד ישיר.", math_expression: "(5 - 2) / x" },
            { verbal_explanation: "נבצע את פעולת החיסור הפשוטה במונה לקבלת התוצאה.", math_expression: "3 / x" }
        ],
        final_answer: "3 / x"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `חשבו את החיבור הבא (שימו לב לחזקות השונות במכנה):<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">3</div>
                <div style="padding:0 8px;">x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">+</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">4</div>
                <div style="padding:0 8px;">x²</div>
            </div>
        </div>`,
        options: [
            "(3x + 4) / x²",
            "7 / x³",
            "7 / x²",
            "(3 + 4x) / x²"
        ],
        correctAnswer: 0,
        hint: "המכנה המשותף חייב להכיל את החזקה הגבוהה ביותר של המשתנה (איקס בריבוע). במה צריך לכפול את השבר הראשון?",
        solution_steps: [
            { verbal_explanation: "המכנה המשותף הקטן ביותר המכיל את שני המכנים הוא המשתנה בריבוע.", math_expression: "x²" },
            { verbal_explanation: "נרחיב רק את השבר הראשון על ידי הכפלת המונה והמכנה שלו במשתנה החסר.", math_expression: "(3 × x) / (x × x) = 3x / x²" },
            { verbal_explanation: "נחבר את שני השברים שעתה יש להם מכנה אחיד לחלוטין.", math_expression: "3x / x² + 4 / x² = (3x + 4) / x²" }
        ],
        final_answer: "(3x + 4) / x²"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `פשטו את ביטוי החיסור הבא בעזרת מציאת מכנה משותף:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">5</div>
                <div style="padding:0 8px;">2x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">-</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">1</div>
                <div style="padding:0 8px;">3x</div>
            </div>
        </div>`,
        options: [
            "13 / 6x",
            "4 / x",
            "4 / -x",
            "13 / 5x"
        ],
        correctAnswer: 0,
        hint: "המכנה המשותף לשתיים ולשלוש הוא שש. מכיוון ששניהם מכילים איקס, המכנה המשותף הכולל יהיה שישה איקס.",
        solution_steps: [
            { verbal_explanation: "הגורם המשותף המינימלי המכיל גם את המשתנה וגם את כפולות המספרים הוא שישה איקס.", math_expression: "6x" },
            { verbal_explanation: "נרחיב את השבר הראשון פי שלושה, ואת השבר השני פי שניים כדי להגיע למכנה הנבחר.", math_expression: "(5 × 3) / 6x - (1 × 2) / 6x" },
            { verbal_explanation: "נבצע את פעולת החיסור במונה מעל המכנה המשותף לקבלת התשובה.", math_expression: "(15 - 2) / 6x = 13 / 6x" }
        ],
        final_answer: "13 / 6x"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `<strong>בעיה גיאומטרית (חיבור שברים):</strong><br>
        אורכי צלעותיו של משולש נתונים על ידי השברים: <span dir="ltr">2/x , 3/x , 1/2x</span><br>
        מהו הביטוי המייצג את סכום כל הצלעות?`,
        options: [
            "11 / 2x",
            "6 / 2x",
            "5.5 / x",
            "11 / x"
        ],
        correctAnswer: 0,
        hint: "סכום הוא חיבור. המכנה המשותף לשלושת השברים יהיה שני איקס. הרחיבו את שני השברים הראשונים פי שתיים.",
        solution_steps: [
            { verbal_explanation: "נבנה את הביטוי כסכום כלל צלעות המשולש הנתונות לנו.", math_expression: "2/x + 3/x + 1/2x" },
            { verbal_explanation: "המכנה המשותף והנוח ביותר הוא שני איקס. נרחיב את שני השברים הראשונים על ידי הכפלתם פי שניים.", math_expression: "4/2x + 6/2x + 1/2x" },
            { verbal_explanation: "כעת, כשכל המכנים אחידים, נחבר את כל המונים יחד כדי למצוא את הסכום השלם.", math_expression: "(4 + 6 + 1) / 2x = 11 / 2x" }
        ],
        final_answer: "11 / 2x"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `אתגר החלפת סימנים וחיבור:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">4x</div>
                <div style="padding:0 8px;">x - 5</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">+</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">20</div>
                <div style="padding:0 8px;">5 - x</div>
            </div>
        </div>`,
        options: [
            "4",
            "4x + 20",
            "(4x + 20) / (x - 5)",
            "-4"
        ],
        correctAnswer: 0,
        hint: "המכנים דומים אך הפוכים בסימנם. הוציאו מינוס אחד מהמכנה של השבר השני כדי להפוך אותו. סימן החיבור של השבר יהפוך לחיסור.",
        solution_steps: [
            { verbal_explanation: "המכנה השני הוא ההיפוך המדויק של הראשון. נוציא ממנו מינוס כגורם משותף כדי להשוות אותם.", math_expression: "5 - x = -(x - 5)" },
            { verbal_explanation: "המינוס שהוצאנו עולה למעלה והופך את פעולת החיבור המרכזית לפעולת חיסור.", math_expression: "4x / (x - 5) - 20 / (x - 5)" },
            { verbal_explanation: "נאחד את השברים בעלי המכנה הזהה כעת לביטוי אלגברי יחיד.", math_expression: "(4x - 20) / (x - 5)" },
            { verbal_explanation: "נוציא ארבע כגורם משותף מהמונה ונגלה כי הסוגריים מצטמצמים באופן מושלם.", math_expression: "4(x - 5) / (x - 5) = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `חשבו ופשטו את חיבור השברים הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">3</div>
                <div style="padding:0 8px;">x - 2</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">+</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">4</div>
                <div style="padding:0 8px;">x + 2</div>
            </div>
        </div>`,
        options: [
            "(7x - 2) / (x² - 4)",
            "7 / (2x)",
            "(7x + 2) / (x² - 4)",
            "7 / (x² - 4)"
        ],
        correctAnswer: 0,
        hint: "המכנה המשותף הוא מכפלת שני המכנים. הרחיבו את השבר הראשון במכנה השני, ואת השבר השני במכנה הראשון (הצלבה).",
        solution_steps: [
            { verbal_explanation: "כדי למצוא מכנה משותף, נכפול את המכנים זה בזה, ונרחיב כל שבר בעזרת המכנה הנגדי לו.", math_expression: "(3(x + 2)) / ((x - 2)(x + 2)) + (4(x - 2)) / ((x + 2)(x - 2))" },
            { verbal_explanation: "נאחד הכל לשבר אחד גדול ונפתח את הסוגריים הנמצאים במונה.", math_expression: "(3x + 6 + 4x - 8) / ((x - 2)(x + 2))" },
            { verbal_explanation: "נכנס איברים דומים במונה החדש שיצרנו.", math_expression: "(7x - 2) / ((x - 2)(x + 2))" },
            { verbal_explanation: "נזהה שהמכנה הוא נוסחת הפרש ריבועים ונרשום אותו בצורתו המקוצרת והסופית.", math_expression: "(7x - 2) / (x² - 4)" }
        ],
        final_answer: "(7x - 2) / (x² - 4)"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `פשטו את ביטוי החיבור הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x - 1</div>
                <div style="padding:0 8px;">x² - 9</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">+</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2</div>
                <div style="padding:0 8px;">x - 3</div>
            </div>
        </div>`,
        options: [
            "(3x + 5) / (x² - 9)",
            "(x + 1) / (x² - 9)",
            "(3x - 1) / (x² - 9)",
            "(x + 5) / (x - 3)"
        ],
        correctAnswer: 0,
        hint: "הימנעו מהרחבות ענק! פרקו קודם את המכנה הראשון. תגלו שהשבר השני צריך רק הרחבה אחת פשוטה.",
        solution_steps: [
            { verbal_explanation: "נפרק את המכנה הריבועי של השבר השמאלי כדי להבין ממה הוא מורכב באמת.", math_expression: "x² - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "נבחין כי המכנה של השבר הימני כבר כלול במכנה המפורק. לכן, הוא יהיה המכנה המשותף שלנו.", math_expression: "(x - 3)(x + 3)" },
            { verbal_explanation: "נרחיב רק את השבר הימני בחלק שחסר לו, שהוא הסוגריים החיוביים.", math_expression: "(x - 1) / (x² - 9) + 2(x + 3) / (x² - 9)" },
            { verbal_explanation: "נאחד לשבר אחד, נפתח סוגריים במונה ונכנס איברים דומים לקבלת התוצאה.", math_expression: "(x - 1 + 2x + 6) / (x² - 9) = (3x + 5) / (x² - 9)" }
        ],
        final_answer: "(3x + 5) / (x² - 9)"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `חשבו ופשטו את תרגיל החיסור הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">6</div>
                <div style="padding:0 8px;">x² + 2x</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">-</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">3</div>
                <div style="padding:0 8px;">x</div>
            </div>
        </div>`,
        options: [
            "-3 / (x + 2)",
            "3 / x²",
            "-3 / x",
            "-3 / (x(x + 2))"
        ],
        correctAnswer: 0,
        hint: "הוציאו משתנה מהמכנה הראשון כגורם משותף. לאחר מכן, גלו שאת השבר השני יש להרחיב רק בסוגריים.",
        solution_steps: [
            { verbal_explanation: "נפרק את המכנה השמאלי לגורמיו על ידי הוצאת המשתנה מחוץ לסוגריים.", math_expression: "x² + 2x = x(x + 2)" },
            { verbal_explanation: "המכנה המשותף הנדרש לשני השברים הוא המכנה המפורק במלואו.", math_expression: "x(x + 2)" },
            { verbal_explanation: "השבר הימני חסר את הסוגריים ולכן נרחיב אותו בהתאם. השבר השמאלי נשאר כמות שהוא.", math_expression: "6 / (x(x + 2)) - 3(x + 2) / (x(x + 2))" },
            { verbal_explanation: "נאחד את השברים ונבצע את החיסור תוך פתיחת סוגריים זהירה במונה.", math_expression: "(6 - 3x - 6) / (x(x + 2))" },
            { verbal_explanation: "המספרים החופשיים מתבטלים. נצמצם את המשתנה הנותר במונה עם המשתנה במכנה לקבלת תשובה חדה.", math_expression: "-3x / (x(x + 2)) = -3 / (x + 2)" }
        ],
        final_answer: "-3 / (x + 2)"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `פשטו את חיבור השברים הבא המשלב טרינום במכנה:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">2</div>
                <div style="padding:0 8px;">x - 4</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">+</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">3</div>
                <div style="padding:0 8px;">x² - x - 12</div>
            </div>
        </div>`,
        options: [
            "(2x + 9) / ((x - 4)(x + 3))",
            "5 / (x² - x - 12)",
            "(2x + 5) / ((x - 4)(x + 3))",
            "5 / (x - 4)"
        ],
        correctAnswer: 0,
        hint: "פרקו את הטרינום במכנה הימני. תראו שהוא מכיל את המכנה השמאלי בתוכו. לכן הרחיבו רק את השבר השמאלי.",
        solution_steps: [
            { verbal_explanation: "נפרק את המכנה הריבועי של השבר הימני. מספרים שמכפלתם מינוס שתים עשרה וסכומם מינוס אחת.", math_expression: "x² - x - 12 = (x - 4)(x + 3)" },
            { verbal_explanation: "נזהה שהמכנה הימני מכיל את המכנה השמאלי במלואו, ולכן הוא ישמש כמכנה המשותף.", math_expression: "(x - 4)(x + 3)" },
            { verbal_explanation: "נרחיב את השבר השמאלי בסוגריים החסרים לו ונחבר יחד לשבר המאחד את הכל.", math_expression: "(2(x + 3) + 3) / ((x - 4)(x + 3))" },
            { verbal_explanation: "נפתח את הסוגריים שבמונה ונכנס איברים דומים כמיטב המסורת האלגברית.", math_expression: "(2x + 6 + 3) / ((x - 4)(x + 3)) = (2x + 9) / ((x - 4)(x + 3))" }
        ],
        final_answer: "(2x + 9) / ((x - 4)(x + 3))"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `<strong>הבנה עמוקה:</strong> פשטו את סכום השברים הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x</div>
                <div style="padding:0 8px;">x + 5</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">+</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">5</div>
                <div style="padding:0 8px;">x + 5</div>
            </div>
        </div>`,
        options: [
            "1",
            "x + 5",
            "(x + 5) / 10",
            "0"
        ],
        correctAnswer: 0,
        hint: "המכנים זהים לגמרי. חברו את המונים כפי שהם, ושימו לב לקשר המפתיע בינם לבין המכנה שנוצר.",
        solution_steps: [
            { verbal_explanation: "המכנה משותף וזהה מראש, ולכן נאחד את השברים ללא הרחבות כלל.", math_expression: "(x + 5) / (x + 5)" },
            { verbal_explanation: "אנו רואים כי המונה והמכנה זהים לחלוטין. ביטוי המחולק בעצמו, שווה תמיד לאחת.", math_expression: "1" }
        ],
        final_answer: "1"
    },
    {
        topic: "algebraic_frac_172",
        subTopic: "חיבור וחיסור",
        question_text: `פשטו את ביטוי החיסור המסכם הבא:<br><br>
        <div dir="ltr" style="display:inline-block; text-align:center; vertical-align:middle; font-weight:bold; font-size:1.4em;">
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">x² + 9</div>
                <div style="padding:0 8px;">x - 3</div>
            </div>
            <div style="display:inline-block; vertical-align:middle; margin:0 10px;">-</div>
            <div style="display:inline-block; vertical-align:middle;">
                <div style="border-bottom:2px solid #0f172a; padding:0 8px;">6x</div>
                <div style="padding:0 8px;">x - 3</div>
            </div>
        </div>`,
        options: [
            "x - 3",
            "x + 3",
            "x² - 6x + 9",
            "(x - 3) / x"
        ],
        correctAnswer: 0,
        hint: "החיסור ייצור במונה נוסחת כפל מקוצר של ריבוע שלם. לאחר מכן תוכלו לצמצם אותו בנוחות עם המכנה המשותף.",
        solution_steps: [
            { verbal_explanation: "המכנים זהים ולכן נבצע איחוד וחיסור ישיר של המונים אל תוך ביטוי אחד מסודר.", math_expression: "(x² + 9 - 6x) / (x - 3)" },
            { verbal_explanation: "נסדר את המונה באופן יורד ונזהה שמדובר בנוסחת כפל מקוצר של ריבוע הפרש.", math_expression: "x² - 6x + 9 = (x - 3)²" },
            { verbal_explanation: "נציב את הפירוק החדש אל המונה ונצמצם אותו עם המכנה הזהה לו.", math_expression: "(x - 3)² / (x - 3) = x - 3" }
        ],
        final_answer: "x - 3"
    }
];