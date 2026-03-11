const questionsDB = [
    // ========================================================================
    // נושא: ביטויים אלגבריים | תת נושא: הצבה בביטוי (15 שאלות)
    // ========================================================================
    
    // שאלה 1
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי האלגברי:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">3x + 8</div>
        חשבו את ערך הביטוי עבור <span dir="ltr">x = 4</span>.`,
        options: [
            "20",
            "15",
            "24",
            "12"
        ],
        correctAnswer: 0,
        hint: "החליפו את האות במספר המצוין בשאלה. זכרו שבין מספר למשתנה קיימת פעולת כפל נסתרת.",
        solution_steps: [
            { verbal_explanation: "נציב את המספר הנתון במקום המשתנה בביטוי האלגברי.", math_expression: "x = 4 <br><br> 3 × 4 + 8" },
            { verbal_explanation: "לפי סדר פעולות חשבון, נבצע קודם את פעולת הכפל.", math_expression: "3 × 4 = 12" },
            { verbal_explanation: "נחבר את התוצאה למספר החופשי כדי לקבל את הערך הסופי של הביטוי.", math_expression: "12 + 8 = 20" }
        ],
        final_answer: "20"
    },
    
    // שאלה 2
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי האלגברי:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">5x - 12</div>
        חשבו את ערך הביטוי עבור <span dir="ltr">x = 2</span>.`,
        options: [
            "-2",
            "2",
            "22",
            "-10"
        ],
        correctAnswer: 0,
        hint: "הציבו את המספר. שימו לב לפעולת החיסור ולסימן התוצאה.",
        solution_steps: [
            { verbal_explanation: "נחליף את המשתנה במספר הנתון בתוך הביטוי.", math_expression: "x = 2 <br><br> 5 × 2 - 12" },
            { verbal_explanation: "נבצע את פעולת הכפל בראש ובראשונה.", math_expression: "5 × 2 = 10" },
            { verbal_explanation: "נחסר את המספרים. מכיוון שהמספר המוחסר גדול יותר, התוצאה תהיה שלילית.", math_expression: "10 - 12 = -2" }
        ],
        final_answer: "-2"
    },
    
    // שאלה 3
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי האלגברי:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">x² + 4</div>
        חשבו את ערך הביטוי עבור <span dir="ltr">x = 5</span>.`,
        options: [
            "29",
            "14",
            "25",
            "9"
        ],
        correctAnswer: 0,
        hint: "חזקה קודמת לחיבור. העלו את המספר הנתון בריבוע (כפלו אותו בעצמו) ואז חברו.",
        solution_steps: [
            { verbal_explanation: "נציב את המספר במקום המשתנה המועלה בריבוע.", math_expression: "x = 5 <br><br> 5² + 4" },
            { verbal_explanation: "נחשב את החזקה, כלומר את המספר כפול עצמו.", math_expression: "5² = 25" },
            { verbal_explanation: "נוסיף את המספר החופשי לתוצאת החזקה לקבלת הערך הסופי.", math_expression: "25 + 4 = 29" }
        ],
        final_answer: "29"
    },
    
    // שאלה 4
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי האלגברי:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">x² - 3x</div>
        חשבו את ערך הביטוי עבור ההצבה של מספר שלילי: <span dir="ltr">x = -2</span>.`,
        options: [
            "10",
            "2",
            "-2",
            "-10"
        ],
        correctAnswer: 0,
        hint: "הקפידו להציב מספר שלילי בתוך סוגריים! מספר שלילי בריבוע הופך לחיובי. כפל של שני מספרים שליליים נותן תוצאה חיובית.",
        solution_steps: [
            { verbal_explanation: "נציב את המספר השלילי הנתון במקום המשתנה בעזרת סוגריים.", math_expression: "x = -2 <br><br> (-2)² - 3 × (-2)" },
            { verbal_explanation: "נחשב את החזקה. מספר שלילי בריבוע הופך לחיובי.", math_expression: "(-2)² = 4" },
            { verbal_explanation: "נחשב את הכפל. מינוס כפול מינוס נותן פלוס.", math_expression: "-3 × (-2) = +6" },
            { verbal_explanation: "נחבר את התוצאות.", math_expression: "4 + 6 = 10" }
        ],
        final_answer: "10"
    },
    
    // שאלה 5
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי הכולל שני משתנים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">4x + 2y</div>
        חשבו את ערך הביטוי עבור ההצבות: <span dir="ltr">x = 3 , y = 5</span>.`,
        options: [
            "22",
            "14",
            "26",
            "19"
        ],
        correctAnswer: 0,
        hint: "הציבו כל מספר במקום המשתנה התואם שלו. בצעו את פעולות הכפל בנפרד ולבסוף חברו.",
        solution_steps: [
            { verbal_explanation: "נציב את שני הערכים במקומם המתאים בביטוי במקביל.", math_expression: "x = 3 , y = 5 <br><br> 4 × 3 + 2 × 5" },
            { verbal_explanation: "נחשב את פעולת הכפל הראשונה.", math_expression: "4 × 3 = 12" },
            { verbal_explanation: "נחשב את פעולת הכפל השנייה.", math_expression: "2 × 5 = 10" },
            { verbal_explanation: "נחבר את שתי המכפלות לקבלת הערך המלא.", math_expression: "12 + 10 = 22" }
        ],
        final_answer: "22"
    },
    
    // שאלה 6
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(x + 2)²</div>
        חשבו את ערך הביטוי עבור <span dir="ltr">x = 4</span>.`,
        options: [
            "36",
            "20",
            "16",
            "12"
        ],
        correctAnswer: 0,
        hint: "לפי סדר פעולות חשבון, יש לחשב קודם את מה שבתוך הסוגריים, ורק לאחר מכן להעלות את התוצאה בריבוע.",
        solution_steps: [
            { verbal_explanation: "נציב את המספר הנתון בתוך הסוגריים שבביטוי.", math_expression: "x = 4 <br><br> (4 + 2)²" },
            { verbal_explanation: "נבצע את פעולת החיבור הנמצאת בתוך הסוגריים.", math_expression: "4 + 2 = 6" },
            { verbal_explanation: "נעלה את התוצאה בחזקה השנייה.", math_expression: "6² = 36" }
        ],
        final_answer: "36"
    },
    
    // שאלה 7
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי הכולל שבר:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(2x - 4) / 3</div>
        חשבו את ערך הביטוי עבור <span dir="ltr">x = 5</span>.`,
        options: [
            "2",
            "4",
            "6",
            "1"
        ],
        correctAnswer: 0,
        hint: "הציבו במונה, חשבו את ערכו המלא, ובסוף חלקו את התוצאה במכנה.",
        solution_steps: [
            { verbal_explanation: "נציב את הערך הנתון במקום המשתנה במונה השבר.", math_expression: "x = 5 <br><br> (2 × 5 - 4) / 3" },
            { verbal_explanation: "נחשב את פעולת הכפל בתוך המונה.", math_expression: "2 × 5 = 10" },
            { verbal_explanation: "נשלים את החישוב במונה על ידי חיסור.", math_expression: "10 - 4 = 6" },
            { verbal_explanation: "נחלק את התוצאה שבמונה במכנה הנתון.", math_expression: "6 / 3 = 2" }
        ],
        final_answer: "2"
    },
    
    // שאלה 8
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">-x²</div>
        חשבו את ערך הביטוי עבור <span dir="ltr">x = 6</span>.`,
        options: [
            "-36",
            "36",
            "-12",
            "12"
        ],
        correctAnswer: 0,
        hint: "שימו לב היטב: סימן המינוס נמצא מחוץ למשתנה. העלו את המספר בריבוע קודם, ואז הוסיפו לו את סימן המינוס.",
        solution_steps: [
            { verbal_explanation: "נציב את המספר המבוקש. חזקה קודמת להכפלה בסימן השלילי.", math_expression: "x = 6 <br><br> -(6²)" },
            { verbal_explanation: "נחשב את החזקה של המספר באופן רגיל.", math_expression: "6² = 36" },
            { verbal_explanation: "נוסיף את סימן המינוס המקורי לתשובה שקיבלנו.", math_expression: "-36" }
        ],
        final_answer: "-36"
    },
    
    // שאלה 9
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי האלגברי:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">10 - 2x²</div>
        חשבו את ערך הביטוי עבור <span dir="ltr">x = 3</span>.`,
        options: [
            "-8",
            "8",
            "64",
            "-26"
        ],
        correctAnswer: 0,
        hint: "סדר הפעולות מחייב: קודם חזקה, אחר כך כפל, ובסוף חיסור.",
        solution_steps: [
            { verbal_explanation: "נציב את הערך הנתון במקום המשתנה בביטוי המורכב.", math_expression: "x = 3 <br><br> 10 - 2 × 3²" },
            { verbal_explanation: "נבצע את פעולת החזקה ראשונה.", math_expression: "3² = 9" },
            { verbal_explanation: "נבצע את הכפל של התוצאה במקדם הקודם לה.", math_expression: "2 × 9 = 18" },
            { verbal_explanation: "נבצע את פעולת החיסור המסיימת מהמספר ההתחלתי.", math_expression: "10 - 18 = -8" }
        ],
        final_answer: "-8"
    },
    
    // שאלה 10
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי עם שני משתנים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">x² - y²</div>
        חשבו את ערך הביטוי עבור ההצבות: <span dir="ltr">x = 5 , y = -4</span>.`,
        options: [
            "9",
            "41",
            "-9",
            "20"
        ],
        correctAnswer: 0,
        hint: "הציבו את המשתנים. זכרו להקיף את המספר השלילי בסוגריים לפני העלאתו בריבוע.",
        solution_steps: [
            { verbal_explanation: "נציב את המספרים במקומם המתאים. נשתמש בסוגריים למספר השלילי.", math_expression: "x = 5 , y = -4 <br><br> 5² - (-4)²" },
            { verbal_explanation: "נחשב את החזקה הראשונה.", math_expression: "5² = 25" },
            { verbal_explanation: "נחשב את החזקה השנייה. מספר שלילי כפול עצמו הוא חיובי.", math_expression: "(-4)² = 16" },
            { verbal_explanation: "נחסר את התוצאה השנייה מהראשונה לפי הביטוי המקורי.", math_expression: "25 - 16 = 9" }
        ],
        final_answer: "9"
    },
    
    // שאלה 11
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">2xy - x + 3y</div>
        חשבו את ערך הביטוי עבור ההצבות: <span dir="ltr">x = -2 , y = 4</span>.`,
        options: [
            "-2",
            "-10",
            "18",
            "-18"
        ],
        correctAnswer: 0,
        hint: "הציבו את הערכים בזהירות. בביטוי המכיל שני משתנים צמודים הכוונה היא למכפלה ביניהם.",
        solution_steps: [
            { verbal_explanation: "נציב את המספרים בביטוי, נשתמש בסוגריים כדי לא לבלבל סימנים.", math_expression: "x = -2 , y = 4 <br><br> 2 × (-2) × 4 - (-2) + 3 × 4" },
            { verbal_explanation: "נחשב את המכפלה המשולשת הראשונה.", math_expression: "2 × (-2) × 4 = -16" },
            { verbal_explanation: "נטפל בסימנים הרצופים: מינוס לפני המינוס הופך לפלוס.", math_expression: "- (-2) = +2" },
            { verbal_explanation: "נחשב את פעולת הכפל האחרונה.", math_expression: "3 × 4 = 12" },
            { verbal_explanation: "נחבר את כל התוצאות ליצירת הערך הסופי.", math_expression: "-16 + 2 + 12 = -2" }
        ],
        final_answer: "-2"
    },
    
    // שאלה 12
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי בחזקה שלישית:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">x³ - 10</div>
        חשבו את ערך הביטוי עבור <span dir="ltr">x = -2</span>.`,
        options: [
            "-18",
            "-2",
            "-14",
            "-12"
        ],
        correctAnswer: 0,
        hint: "מספר שלילי בחזקה אי-זוגית (כמו חזקת 3) שומר על הסימן השלילי שלו.",
        solution_steps: [
            { verbal_explanation: "נציב את המספר השלילי בתוך סוגריים המועלים בחזקה שלישית.", math_expression: "x = -2 <br><br> (-2)³ - 10" },
            { verbal_explanation: "נחשב את החזקה השלישית. כפל של שלושה מספרים שליליים נותן תוצאה שלילית.", math_expression: "(-2) × (-2) × (-2) = -8" },
            { verbal_explanation: "נבצע את פעולת החיסור הנדרשת כדי לסיים את התרגיל.", math_expression: "-8 - 10 = -18" }
        ],
        final_answer: "-18"
    },
    
    // שאלה 13
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי הכולל שורש:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">√(x² + y²)</div>
        חשבו את ערך הביטוי עבור ההצבות: <span dir="ltr">x = 3 , y = 4</span>.`,
        options: [
            "5",
            "7",
            "25",
            "12"
        ],
        correctAnswer: 0,
        hint: "חשבו קודם את ערך הביטוי שנמצא מתחת לשורש במלואו, ורק בסוף הוציאו שורש מהתוצאה.",
        solution_steps: [
            { verbal_explanation: "נציב את הערכים המבוקשים בתוך השורש הריבועי.", math_expression: "x = 3 , y = 4 <br><br> √(3² + 4²)" },
            { verbal_explanation: "נחשב את שתי החזקות בתוך השורש.", math_expression: "3² = 9 <br><br> 4² = 16" },
            { verbal_explanation: "נחבר את התוצאות שקיבלנו מתחת לשורש.", math_expression: "9 + 16 = 25" },
            { verbal_explanation: "נוציא שורש מן הסכום הכללי לקבלת התוצאה.", math_expression: "√25 = 5" }
        ],
        final_answer: "5"
    },
    
    // שאלה 14
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי כשבר אלגברי:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(x² - 1) / (x + 1)</div>
        חשבו את ערך הביטוי עבור <span dir="ltr">x = 5</span>.`,
        options: [
            "4",
            "5",
            "6",
            "24"
        ],
        correctAnswer: 0,
        hint: "הציבו את הערך במונה ובמכנה במקביל, חשבו כל אחד מהם, ובסוף בצעו חלוקה.",
        solution_steps: [
            { verbal_explanation: "נציב את הערך הנתון במקום המשתנה במונה ובמכנה השבר.", math_expression: "x = 5 <br><br> (5² - 1) / (5 + 1)" },
            { verbal_explanation: "נחשב את המונה, שכולל חזקה וחיסור.", math_expression: "5² = 25 <br><br> 25 - 1 = 24" },
            { verbal_explanation: "נחשב את המכנה הכולל פעולת חיבור פשוטה.", math_expression: "5 + 1 = 6" },
            { verbal_explanation: "נבצע את החלוקה הסופית של המונה במכנה.", math_expression: "24 / 6 = 4" }
        ],
        final_answer: "4"
    },
    
    // שאלה 15
    {
        topic: "algebraic_expr_172",
        subTopic: "הצבה בביטוי",
        question_text: `נתון הביטוי:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(2x - y)²</div>
        חשבו את ערך הביטוי עבור ההצבות: <span dir="ltr">x = 3 , y = 8</span>.`,
        options: [
            "4",
            "-4",
            "16",
            "-2"
        ],
        correctAnswer: 0,
        hint: "חשבו את כל מה שבתוך הסוגריים תחילה, ואז העלו את התוצאה הסופית בריבוע.",
        solution_steps: [
            { verbal_explanation: "נציב את שני הערכים הנתונים בתוך הסוגריים במקומם המתאים.", math_expression: "x = 3 , y = 8 <br><br> (2 × 3 - 8)²" },
            { verbal_explanation: "נחשב את פעולת הכפל שבתוך הסוגריים תחילה.", math_expression: "2 × 3 = 6" },
            { verbal_explanation: "נבצע את החיסור הפנימי.", math_expression: "6 - 8 = -2" },
            { verbal_explanation: "נעלה את התוצאה השלילית שקיבלנו בחזקה ריבועית זוגית לקבלת תשובה חיובית.", math_expression: "(-2)² = 4" }
        ],
        final_answer: "4"
    },

    // ========================================================================
    // נושא: ביטויים אלגבריים | תת נושא: פתיחת סוגריים (15 שאלות)
    // ========================================================================
    
    // שאלה 16
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי על ידי פתיחת סוגריים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">3(x + 4)</div>`,
        options: [
            "3x + 12",
            "3x + 4",
            "x + 12",
            "7x"
        ],
        correctAnswer: 0,
        hint: "הכפילו את המספר שמחוץ לסוגריים בכל אחד מהאיברים שנמצאים בתוך הסוגריים (חוק הפילוג).",
        solution_steps: [
            { verbal_explanation: "על פי חוק הפילוג, נכפול את המספר החיצוני באיבר הראשון שבסוגריים.", math_expression: "3 × x = 3x" },
            { verbal_explanation: "נכפול את המספר החיצוני באיבר השני שבסוגריים תוך שמירה על סימן החיבור.", math_expression: "3 × 4 = 12" },
            { verbal_explanation: "נחבר את שני החלקים ליצירת הביטוי הסופי המפושט.", math_expression: "3x + 12" }
        ],
        final_answer: "3x + 12"
    },
    
    // שאלה 17
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי הבא:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">-2(x - 5)</div>`,
        options: [
            "-2x + 10",
            "-2x - 10",
            "-2x - 5",
            "2x - 10"
        ],
        correctAnswer: 0,
        hint: "שימו לב לסימנים! מספר שלילי כפול מספר שלילי נותן תוצאה חיובית.",
        solution_steps: [
            { verbal_explanation: "נכפול את המספר השלילי החיצוני במשתנה הראשון.", math_expression: "-2 × x = -2x" },
            { verbal_explanation: "נכפול את המספר השלילי במספר השני שבסוגריים, שגם הוא שלילי. התוצאה תהיה חיובית.", math_expression: "-2 × (-5) = 10" },
            { verbal_explanation: "נרשום את הביטוי הסופי הכולל את שני החלקים שחישבנו.", math_expression: "-2x + 10" }
        ],
        final_answer: "-2x + 10"
    },
    
    // שאלה 18
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי הבא:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">x(x + 3)</div>`,
        options: [
            "x² + 3x",
            "2x + 3",
            "x² + 3",
            "3x²"
        ],
        correctAnswer: 0,
        hint: "כאשר כופלים משתנה בעצמו, מקבלים את המשתנה בחזקת שתיים (בריבוע).",
        solution_steps: [
            { verbal_explanation: "נכפול את המשתנה החיצוני באיבר הראשון שהוא המשתנה עצמו ליצירת חזקה.", math_expression: "x × x = x²" },
            { verbal_explanation: "נכפול את המשתנה החיצוני באיבר השני שהוא מספר חופשי.", math_expression: "x × 3 = 3x" },
            { verbal_explanation: "נחבר את התוצאות לביטוי אלגברי יחיד ומסודר.", math_expression: "x² + 3x" }
        ],
        final_answer: "x² + 3x"
    },
    
    // שאלה 19
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי הבא:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">-x(2x - 1)</div>`,
        options: [
            "-2x² + x",
            "-2x² - 1",
            "-2x² - x",
            "2x² + x"
        ],
        correctAnswer: 0,
        hint: "הכפילו את המשתנה השלילי בשני האיברים. זכרו שמינוס כפול מינוס שווה פלוס.",
        solution_steps: [
            { verbal_explanation: "נכפול את המשתנה השלילי החיצוני באיבר הראשון. המספר נשאר והמשתנה הופך לריבוע.", math_expression: "-x × 2x = -2x²" },
            { verbal_explanation: "נכפול את המשתנה השלילי באיבר השני שהוא שלילי גם כן. התוצאה תשנה סימן לחיובי.", math_expression: "-x × (-1) = x" },
            { verbal_explanation: "נרכיב את הביטוי הסופי המלא מהחלקים.", math_expression: "-2x² + x" }
        ],
        final_answer: "-2x² + x"
    },
    
    // שאלה 20
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי הבא:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">2(3x - 4y + 1)</div>`,
        options: [
            "6x - 8y + 2",
            "6x - 4y + 1",
            "5x - 6y + 3",
            "6x - 8y + 1"
        ],
        correctAnswer: 0,
        hint: "חוק הפילוג עובד גם על שלושה איברים. הכפילו את המספר שמחוץ לסוגריים בכל אחד ואחד מהם.",
        solution_steps: [
            { verbal_explanation: "נכפול את הגורם החיצוני באיבר הראשון שבסוגריים.", math_expression: "2 × 3x = 6x" },
            { verbal_explanation: "נכפול את הגורם החיצוני באיבר השני הכולל משתנה שונה וסימן שלילי.", math_expression: "2 × (-4y) = -8y" },
            { verbal_explanation: "נכפול את הגורם החיצוני במספר השלישי שהוא מספר חופשי.", math_expression: "2 × 1 = 2" },
            { verbal_explanation: "נחבר את כל המרכיבים ליצירת ביטוי מורחב ומפושט.", math_expression: "6x - 8y + 2" }
        ],
        final_answer: "6x - 8y + 2"
    },
    
    // שאלה 21
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי הבא:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">-(x² - 2x + 5)</div>`,
        options: [
            "-x² + 2x - 5",
            "-x² - 2x + 5",
            "x² + 2x - 5",
            "-x² + 2x + 5"
        ],
        correctAnswer: 0,
        hint: "סימן מינוס לפני סוגריים הוא למעשה הכפלה במינוס אחת. הפכו את הסימן של כל איבר בתוך הסוגריים.",
        solution_steps: [
            { verbal_explanation: "מינוס לפני סוגריים שווה ערך להכפלה במינוס אחד. נכפול באיבר הראשון כדי להפוך אותו לשלילי.", math_expression: "-1 × x² = -x²" },
            { verbal_explanation: "נכפול באיבר השני, שהוא שלילי במקור, ולכן יהפוך כעת לחיובי.", math_expression: "-1 × (-2x) = 2x" },
            { verbal_explanation: "נכפול באיבר השלישי, שהוא חיובי, ולכן יהפוך לשלילי.", math_expression: "-1 × 5 = -5" },
            { verbal_explanation: "נרשום את הביטוי החדש עם הסימנים ההפוכים המסודרים.", math_expression: "-x² + 2x - 5" }
        ],
        final_answer: "-x² + 2x - 5"
    },
    
    // שאלה 22
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי על ידי פתיחת סוגריים כפולים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(x + 2)(x + 3)</div>`,
        options: [
            "x² + 5x + 6",
            "x² + 6",
            "2x + 5",
            "x² + 6x + 5"
        ],
        correctAnswer: 0,
        hint: "הכפילו כל איבר בסוגריים הראשונים בכל איבר בסוגריים השניים, ולאחר מכן כנסו איברים דומים.",
        solution_steps: [
            { verbal_explanation: "נכפול את האיבר הראשון של הסוגריים השמאליים בכל איבר בסוגריים הימניים.", math_expression: "x × x = x² <br><br> x × 3 = 3x" },
            { verbal_explanation: "נכפול את האיבר השני של הסוגריים השמאליים בכל איבר בסוגריים הימניים.", math_expression: "2 × x = 2x <br><br> 2 × 3 = 6" },
            { verbal_explanation: "נחבר את כל התוצאות שקיבלנו לביטוי אחד ארוך.", math_expression: "x² + 3x + 2x + 6" },
            { verbal_explanation: "נכנס איברים דומים, כלומר נחבר את המשתנים הזהים בדרגתם.", math_expression: "3x + 2x = 5x <br><br> x² + 5x + 6" }
        ],
        final_answer: "x² + 5x + 6"
    },
    
    // שאלה 23
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי הבא:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(x - 4)(x + 5)</div>`,
        options: [
            "x² + x - 20",
            "x² - x - 20",
            "x² + 9x - 20",
            "x² - 20"
        ],
        correctAnswer: 0,
        hint: "הכפילו איבר-איבר. שימו לב היטב לסימנים בזמן ההכפלה ולאחר מכן בחיבור האיברים האמצעיים.",
        solution_steps: [
            { verbal_explanation: "נכפול את המשתנה מהסוגריים הראשונים בשני האיברים של הסוגריים השניים.", math_expression: "x × x = x² <br><br> x × 5 = 5x" },
            { verbal_explanation: "נכפול את המספר השלילי בשני האיברים בסוגריים המקבילים.", math_expression: "-4 × x = -4x <br><br> -4 × 5 = -20" },
            { verbal_explanation: "נרשום את הביטוי הכולל שנוצר.", math_expression: "x² + 5x - 4x - 20" },
            { verbal_explanation: "נכנס איברים דומים במרכז הביטוי.", math_expression: "5x - 4x = x <br><br> x² + x - 20" }
        ],
        final_answer: "x² + x - 20"
    },
    
    // שאלה 24
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי הבא (כפל של שני ביטויים שליליים):<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(x - 3)(x - 6)</div>`,
        options: [
            "x² - 9x + 18",
            "x² - 3x + 18",
            "x² + 9x - 18",
            "x² - 18"
        ],
        correctAnswer: 0,
        hint: "הכפלת שני מספרים שליליים תניב מספר חיובי בסוף הביטוי.",
        solution_steps: [
            { verbal_explanation: "נכפול את המשתנה מהסוגריים השמאליים בשני איברי הימין.", math_expression: "x × x = x² <br><br> x × (-6) = -6x" },
            { verbal_explanation: "נכפול את המספר השלילי בשני איברי הימין. מינוס כפול מינוס הוא פלוס.", math_expression: "-3 × x = -3x <br><br> -3 × (-6) = 18" },
            { verbal_explanation: "נחבר את כל המכפלות שקיבלנו ברצף.", math_expression: "x² - 6x - 3x + 18" },
            { verbal_explanation: "נכנס איברים דומים בעלי אותו משתנה.", math_expression: "-6x - 3x = -9x <br><br> x² - 9x + 18" }
        ],
        final_answer: "x² - 9x + 18"
    },
    
    // שאלה 25
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי הבא הכולל מקדם למשתנה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(2x + 1)(x + 3)</div>`,
        options: [
            "2x² + 7x + 3",
            "2x² + 6x + 3",
            "3x + 4",
            "2x² + 3"
        ],
        correctAnswer: 0,
        hint: "הכפילו באותה צורה. שימו לב שהכפלת שני איקס באיקס נותנת שני איקס בריבוע.",
        solution_steps: [
            { verbal_explanation: "נכפול את האיבר הראשון בעל המקדם באיברי הסוגריים השניים.", math_expression: "2x × x = 2x² <br><br> 2x × 3 = 6x" },
            { verbal_explanation: "נכפול את המספר החופשי באיברי הסוגריים השניים.", math_expression: "1 × x = x <br><br> 1 × 3 = 3" },
            { verbal_explanation: "נרשום את הביטוי המלא לפני כינוס איברים.", math_expression: "2x² + 6x + x + 3" },
            { verbal_explanation: "נכנס איברים דומים במרכז הביטוי לקבלת התשובה המפושטת.", math_expression: "2x² + 7x + 3" }
        ],
        final_answer: "2x² + 7x + 3"
    },
    
    // שאלה 26
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי הכולל מקדמים מרובים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(3x - 2)(2x + 5)</div>`,
        options: [
            "6x² + 11x - 10",
            "6x² - 4x - 10",
            "5x² + 11x - 10",
            "6x² + 15x - 10"
        ],
        correctAnswer: 0,
        hint: "הכפילו את המקדמים זה בזה בעת ביצוע חוק הפילוג. לאחר מכן כנסו איברים דומים במרכז.",
        solution_steps: [
            { verbal_explanation: "נכפול את האיבר המורכב הראשון באיברי הסוגריים המקבילים.", math_expression: "3x × 2x = 6x² <br><br> 3x × 5 = 15x" },
            { verbal_explanation: "נכפול את האיבר השני הכולל סימן שלילי באיברי הסוגריים המקבילים.", math_expression: "-2 × 2x = -4x <br><br> -2 × 5 = -10" },
            { verbal_explanation: "נרשום את כל המרכיבים כביטוי ארוך אחד.", math_expression: "6x² + 15x - 4x - 10" },
            { verbal_explanation: "נחבר את האיברים הדומים המכילים את המשתנה היחיד.", math_expression: "15x - 4x = 11x <br><br> 6x² + 11x - 10" }
        ],
        final_answer: "6x² + 11x - 10"
    },
    
    // שאלה 27
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי הבא המייצג נוסחת כפל מקוצר:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(x - 4)(x + 4)</div>`,
        options: [
            "x² - 16",
            "x² + 16",
            "x² - 8x - 16",
            "x² + 8x + 16"
        ],
        correctAnswer: 0,
        hint: "פתיחה רגילה של סוגריים תגרום לאיברים האמצעיים לבטל זה את זה. זהו המקור לנוסחת ההפרש בין ריבועים.",
        solution_steps: [
            { verbal_explanation: "נכפול כל איבר באיבר כדי לראות את התהליך המלא.", math_expression: "x × x = x² <br><br> x × 4 = 4x <br><br> -4 × x = -4x <br><br> -4 × 4 = -16" },
            { verbal_explanation: "נרשום את הביטוי הארוך עם כל התוצאות.", math_expression: "x² + 4x - 4x - 16" },
            { verbal_explanation: "נכנס איברים דומים. נבחין כי המספרים האמצעיים זהים ומנוגדים ולכן מתאפסים.", math_expression: "4x - 4x = 0 <br><br> x² - 16" }
        ],
        final_answer: "x² - 16"
    },
    
    // שאלה 28
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי הבא המייצג ריבוע של סכום:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(x + 3)(x + 3)</div>`,
        options: [
            "x² + 6x + 9",
            "x² + 9",
            "2x + 6",
            "x² + 3x + 9"
        ],
        correctAnswer: 0,
        hint: "ניתן להשתמש בחוק הפילוג המורחב ולכפול כל איבר באיבר, או להשתמש בנוסחת הכפל המקוצר.",
        solution_steps: [
            { verbal_explanation: "נשתמש בחוק הפילוג שלב אחרי שלב.", math_expression: "x × x = x² <br><br> x × 3 = 3x <br><br> 3 × x = 3x <br><br> 3 × 3 = 9" },
            { verbal_explanation: "נרשום את כל המרכיבים ברצף אחד.", math_expression: "x² + 3x + 3x + 9" },
            { verbal_explanation: "נכנס את האיברים הזהים במרכז המשוואה לקבלת הפתרון השלם.", math_expression: "x² + 6x + 9" }
        ],
        final_answer: "x² + 6x + 9"
    },
    
    // שאלה 29
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי המשלב פתיחת סוגריים כפולה וחיבור:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">2(x + 1) + 3(x - 2)</div>`,
        options: [
            "5x - 4",
            "5x - 6",
            "5x - 1",
            "5x + 4"
        ],
        correctAnswer: 0,
        hint: "פתחו את הזוג הראשון, לאחר מכן את הזוג השני בנפרד, ולבסוף כנסו את כל האיברים הדומים.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים הראשונים על ידי הכפלתם בשתיים.", math_expression: "2 × x + 2 × 1 = 2x + 2" },
            { verbal_explanation: "נפתח את הסוגריים השניים על ידי הכפלתם בשלוש.", math_expression: "3 × x + 3 × (-2) = 3x - 6" },
            { verbal_explanation: "נרשום את שני החלקים ברצף ונכנס איברים דומים.", math_expression: "2x + 2 + 3x - 6" },
            { verbal_explanation: "נחבר את המשתנים לחוד ואת המספרים לחוד.", math_expression: "2x + 3x = 5x <br><br> 2 - 6 = -4 <br><br> 5x - 4" }
        ],
        final_answer: "5x - 4"
    },
    
    // שאלה 30
    {
        topic: "algebraic_expr_172",
        subTopic: "פתיחת סוגריים",
        question_text: `פשטו את הביטוי המשלב פעולות שונות וסימן מינוס:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">4(x - 2) - (x + 5)</div>`,
        options: [
            "3x - 13",
            "3x - 3",
            "3x + 3",
            "5x - 13"
        ],
        correctAnswer: 0,
        hint: "זכרו שסימן המינוס שלפני הסוגריים השניים מתהפך את הסימנים של כל האיברים שבתוכם.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים הראשונים באופן הרגיל.", math_expression: "4x - 8" },
            { verbal_explanation: "נפתח את הסוגריים השניים. סימן השלילה הופך את כל הסימנים שבפנים.", math_expression: "-x - 5" },
            { verbal_explanation: "נרשום את כל המרכיבים יחד לפני הפעולה האחרונה.", math_expression: "4x - 8 - x - 5" },
            { verbal_explanation: "נכנס איברים דומים של משתנים ומספרים.", math_expression: "4x - x = 3x <br><br> -8 - 5 = -13 <br><br> 3x - 13" }
        ],
        final_answer: "3x - 13"
    },// ========================================================================
    // תת נושא 3: כינוס איברים (15 שאלות) - רמת פרימיום מורחבת (סיום הנושא)
    // ========================================================================
    
    // שאלה 31
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי הבא על ידי כינוס איברים דומים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">8x - 2x + 5x</div>`,
        options: [
            "11x",
            "15x",
            "x",
            "11x³"
        ],
        correctAnswer: 0,
        hint: "כאשר לכל האיברים יש בדיוק את אותו המשתנה, מבצעים את פעולות החשבון רק על המספרים (המקדמים) משמאל לימין, ומשאירים את המשתנה כפי שהוא.",
        solution_steps: [
            { verbal_explanation: "נזהה שכל האיברים בביטוי מכילים את אותו המשתנה, ולכן ניתן לחבר ולחסר אותם יחד. נתחיל בחיסור שני האיברים הראשונים.", math_expression: "8 - 2 = 6" },
            { verbal_explanation: "נוסיף לתוצאה שקיבלנו את המקדם של האיבר השלישי.", math_expression: "6 + 5 = 11" },
            { verbal_explanation: "נצמיד את התוצאה המספרית הסופית למשתנה המשותף כדי לקבל את הביטוי המפושט.", math_expression: "11x" }
        ],
        final_answer: "11x"
    },
    
    // שאלה 32
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי הבא הכולל משתנים ומספרים חופשיים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">7x + 12 - 3x - 5</div>`,
        options: [
            "4x + 7",
            "10x + 7",
            "4x + 17",
            "11x"
        ],
        correctAnswer: 0,
        hint: "הקפידו להפריד בין איברים: אי אפשר לחבר מספר עם משתנה. כנסו את המשתנים לחוד ואת המספרים החופשיים לחוד.",
        solution_steps: [
            { verbal_explanation: "נאגד ונחשב תחילה את כל האיברים המכילים את המשתנה.", math_expression: "7x - 3x = 4x" },
            { verbal_explanation: "כעת, נאגד ונחשב את כל המספרים החופשיים (אלו שאין להם משתנה צמוד).", math_expression: "12 - 5 = 7" },
            { verbal_explanation: "נרכיב את התשובה הסופית משני החלקים שחישבנו בנפרד, תוך שמירה על סימן החיבור.", math_expression: "4x + 7" }
        ],
        final_answer: "4x + 7"
    },
    
    // שאלה 33
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי הבא המכיל שני משתנים שונים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">5a - 2b + 3a + 6b</div>`,
        options: [
            "8a + 4b",
            "2a + 8b",
            "12ab",
            "8a - 4b"
        ],
        correctAnswer: 0,
        hint: "אותיות שונות מייצגות גדלים שונים. יש לאסוף את המשתנה הראשון בנפרד ואת המשתנה השני בנפרד.",
        solution_steps: [
            { verbal_explanation: "נסדר את הביטוי ונכנס את האיברים המכילים את המשתנה הראשון.", math_expression: "5a + 3a = 8a" },
            { verbal_explanation: "נכנס את האיברים המכילים את המשתנה השני. נתחיל מהמספר השלילי ונוסיף לו שש.", math_expression: "-2b + 6b = 4b" },
            { verbal_explanation: "נחבר את שני המרכיבים ליצירת הביטוי האלגברי הסופי.", math_expression: "8a + 4b" }
        ],
        final_answer: "8a + 4b"
    },
    
    // שאלה 34
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי הבא המשלב חזקות שונות:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">6x² - x + 2x² + 4x</div>`,
        options: [
            "8x² + 3x",
            "4x² + 5x",
            "11x³",
            "8x² - 3x"
        ],
        correctAnswer: 0,
        hint: "משתנה בריבוע ומשתנה ללא חזקה הם איברים מסוג שונה לחלוטין. כנסו ריבועים עם ריבועים, ומשתנים רגילים עם משתנים רגילים.",
        solution_steps: [
            { verbal_explanation: "נזהה את האיברים בעלי החזקה השנייה ונחבר אותם.", math_expression: "6x² + 2x² = 8x²" },
            { verbal_explanation: "נזהה את האיברים ממעלה ראשונה. נזכור שמשתנה ללא מספר הוא בעל מקדם של אחת.", math_expression: "-1x + 4x = 3x" },
            { verbal_explanation: "נאחד את שתי התוצאות לביטוי מפושט אחד.", math_expression: "8x² + 3x" }
        ],
        final_answer: "8x² + 3x"
    },
    
    // שאלה 35
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי הבא הכולל שברים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">x / 3 + 2x / 3 + x</div>`,
        options: [
            "2x",
            "3x",
            "1.5x",
            "x²"
        ],
        correctAnswer: 0,
        hint: "חברו קודם את שני השברים בעלי המכנה המשותף, ולאחר מכן הוסיפו להם את השלם.",
        solution_steps: [
            { verbal_explanation: "נחבר את המונים של שני השברים, מכיוון שיש להם מכנה משותף זהה.", math_expression: "(1x + 2x) / 3 = 3x / 3" },
            { verbal_explanation: "נצמצם את השבר שקיבלנו כדי להפוך אותו למספר שלם.", math_expression: "3x / 3 = 1x = x" },
            { verbal_explanation: "נוסיף את המשתנה האחרון בביטוי לתוצאה שקיבלנו מהשברים.", math_expression: "x + x = 2x" }
        ],
        final_answer: "2x"
    },
    
    // שאלה 36
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי הבא הכולל מספרים עשרוניים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">4.5y - 2.2y + 1.7y</div>`,
        options: [
            "4y",
            "3y",
            "4.5y",
            "5y"
        ],
        correctAnswer: 0,
        hint: "פעולת כינוס האיברים זהה לחלוטין גם כאשר המקדמים הם מספרים עשרוניים. בצעו את החישוב משמאל לימין.",
        solution_steps: [
            { verbal_explanation: "נחסר את המקדם של האיבר השני מהמקדם של האיבר הראשון.", math_expression: "4.5 - 2.2 = 2.3" },
            { verbal_explanation: "נוסיף לתוצאה את המקדם של האיבר השלישי.", math_expression: "2.3 + 1.7 = 4.0" },
            { verbal_explanation: "נרשום את התוצאה הסופית והשלמה כשהיא צמודה למשתנה.", math_expression: "4y" }
        ],
        final_answer: "4y"
    },
    
    // שאלה 37
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי על ידי פתיחת סוגריים וכינוס:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">5(x - 2) + 3x</div>`,
        options: [
            "8x - 10",
            "8x - 2",
            "2x - 10",
            "15x - 10"
        ],
        correctAnswer: 0,
        hint: "כאשר יש סוגריים, חובה לפתוח אותם תחילה בעזרת חוק הפילוג, ורק אז לכנס איברים דומים.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים על ידי הכפלת המספר החיצוני בכל אחד מהאיברים בפנים.", math_expression: "5 × x + 5 × (-2) = 5x - 10" },
            { verbal_explanation: "נרשום את הביטוי המלא לאחר פתיחת הסוגריים.", math_expression: "5x - 10 + 3x" },
            { verbal_explanation: "נכנס את האיברים המכילים את המשתנה לקבלת הביטוי המקוצר ביותר.", math_expression: "5x + 3x = 8x <br><br> 8x - 10" }
        ],
        final_answer: "8x - 10"
    },
    
    // שאלה 38
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי המורכב הבא:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">4(2x + 1) - 3(x - 5)</div>`,
        options: [
            "5x + 19",
            "5x - 11",
            "5x + 4",
            "11x + 19"
        ],
        correctAnswer: 0,
        hint: "שימו לב במיוחד לפתיחת הסוגריים השניים - המספר שמחוץ להם הוא שלילי ולכן יהפוך את הסימנים שבפנים.",
        solution_steps: [
            { verbal_explanation: "נפתח את מערכת הסוגריים הראשונה על ידי הכפלה בארבע.", math_expression: "4 × 2x + 4 × 1 = 8x + 4" },
            { verbal_explanation: "נפתח את מערכת הסוגריים השנייה. הכפלה במינוס שלוש הופכת את סימן המינוס פנימי לפלוס.", math_expression: "-3 × x + (-3) × (-5) = -3x + 15" },
            { verbal_explanation: "נרשום את כל האיברים יחד לקראת כינוס סופי.", math_expression: "8x + 4 - 3x + 15" },
            { verbal_explanation: "נחבר את המשתנים בנפרד ואת המספרים החופשיים בנפרד.", math_expression: "8x - 3x = 5x <br><br> 4 + 15 = 19 <br><br> 5x + 19" }
        ],
        final_answer: "5x + 19"
    },
    
    // שאלה 39
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי הכולל מינוס לפני סוגריים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">10x - (4x - 7)</div>`,
        options: [
            "6x + 7",
            "6x - 7",
            "14x - 7",
            "14x + 7"
        ],
        correctAnswer: 0,
        hint: "סימן החיסור שלפני הסוגריים שקול לכפל במינוס אחד. הוא משנה את הסימן של כל איבר הנמצא בתוך הסוגריים.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים. המשתנה החיובי הופך לשלילי, והמספר השלילי הופך לחיובי.", math_expression: "-1 × 4x = -4x <br><br> -1 × (-7) = 7" },
            { verbal_explanation: "נציב את התוצאות בביטוי המקורי במקום הסוגריים.", math_expression: "10x - 4x + 7" },
            { verbal_explanation: "נבצע חיסור בין המשתנים כדי להגיע לתשובה הסופית.", math_expression: "6x + 7" }
        ],
        final_answer: "6x + 7"
    },
    
    // שאלה 40
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `<strong>גיאומטריה ואלגברה:</strong><br>
        לפניכם משולש שאורכי צלעותיו נתונים באמצעות ביטויים אלגבריים.<br>
        <svg viewBox="0 0 200 150" width="100%" height="150" style="display:block; margin:15px auto; max-width:200px;">
            <polygon points="100,20 40,120 160,120" fill="rgba(240,249,255,0.7)" stroke="#0f172a" stroke-width="2"/>
            <text x="50" y="70" font-family="Arial" font-size="12" fill="#334155">x</text>
            <text x="140" y="70" font-family="Arial" font-size="12" fill="#334155">x + 4</text>
            <text x="80" y="140" font-family="Arial" font-size="12" fill="#334155">2x + 1</text>
        </svg>
        מהו הביטוי המפושט המייצג את <strong>היקף</strong> המשולש?`,
        options: [
            "4x + 5",
            "4x + 1",
            "3x + 5",
            "2x² + 5"
        ],
        correctAnswer: 0,
        hint: "היקף של צורה הוא סכום כל אורכי צלעותיה. חברו את שלושת הביטויים וכנסו איברים דומים.",
        solution_steps: [
            { verbal_explanation: "נבנה ביטוי המייצג את ההיקף (P) על ידי חיבור כל צלעות המשולש אחת לשנייה.", math_expression: "P = x + (x + 4) + (2x + 1)" },
            { verbal_explanation: "נכנס את כל האיברים המכילים את המשתנה יחד.", math_expression: "1x + 1x + 2x = 4x" },
            { verbal_explanation: "נחבר את המספרים החופשיים לקבלת הביטוי המלא והסופי להיקף.", math_expression: "4 + 1 = 5 <br><br> P = 4x + 5" }
        ],
        final_answer: "4x + 5"
    },
    
    // שאלה 41
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `<strong>גיאומטריה ואלגברה:</strong><br>
        לפניכם מלבן שאורכי צלעותיו הסמוכות נתונים בשרטוט.<br>
        <svg viewBox="0 0 200 120" width="100%" height="120" style="display:block; margin:15px auto; max-width:200px;">
            <rect x="40" y="30" width="120" height="60" fill="rgba(240,249,255,0.7)" stroke="#0f172a" stroke-width="2"/>
            <text x="95" y="20" font-family="Arial" font-size="12" fill="#334155">3x</text>
            <text x="170" y="65" font-family="Arial" font-size="12" fill="#334155">x + 2</text>
        </svg>
        מהו הביטוי המפושט המייצג את <strong>היקף</strong> המלבן?`,
        options: [
            "8x + 4",
            "4x + 2",
            "3x² + 6x",
            "6x + 4"
        ],
        correctAnswer: 0,
        hint: "במלבן יש ארבע צלעות, כאשר כל זוג צלעות נגדיות שוות זו לזו. היקף שווה לפעמיים האורך ועוד פעמיים הרוחב.",
        solution_steps: [
            { verbal_explanation: "נבנה ביטוי מקיף (P) הכולל פעמיים את הצלע הארוכה ופעמיים את הצלע הקצרה.", math_expression: "P = 2 × (3x) + 2 × (x + 2)" },
            { verbal_explanation: "נפתח את הסוגריים על ידי הכפלת המקדמים.", math_expression: "P = 6x + 2x + 4" },
            { verbal_explanation: "נכנס את האיברים הזהים כדי למצוא את היקף המלבן המפושט.", math_expression: "6x + 2x = 8x <br><br> P = 8x + 4" }
        ],
        final_answer: "8x + 4"
    },
    
    // שאלה 42
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי המתקדם הבא המשלב כפל משתנים וחזקות:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">2x(x + 3) - x(2x - 4) + 5x</div>`,
        options: [
            "15x",
            "4x² + 15x",
            "10x",
            "2x² + 10x"
        ],
        correctAnswer: 0,
        hint: "פתחו את שני זוגות הסוגריים. שימו לב שהכפלת משתנה במשתנה יוצרת חזקה ריבועית. כנסו הכל בסוף.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים הראשונים. משתנה כפול משתנה נותן תוצאה ריבועית.", math_expression: "2x × x + 2x × 3 = 2x² + 6x" },
            { verbal_explanation: "נפתח את הסוגריים השניים, תוך תשומת לב קפדנית למינוס שלפני המשתנה.", math_expression: "-x × 2x + (-x) × (-4) = -2x² + 4x" },
            { verbal_explanation: "נרשום את הביטוי במלואו לפני הכינוס.", math_expression: "2x² + 6x - 2x² + 4x + 5x" },
            { verbal_explanation: "נכנס את האיברים הריבועיים. ניתן לראות שהם מבטלים זה את זה לחלוטין.", math_expression: "2x² - 2x² = 0" },
            { verbal_explanation: "נחבר את כל שאר האיברים הרגילים לקבלת התשובה הסופית המפתיעה בפשטותה.", math_expression: "6x + 4x + 5x = 15x" }
        ],
        final_answer: "15x"
    },
    
    // שאלה 43
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי הארוך הבא:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">9x - 3 + 2y - 4x + 8 - 5y</div>`,
        options: [
            "5x - 3y + 5",
            "5x + 3y - 5",
            "13x + 7y + 11",
            "5x - 7y + 5"
        ],
        correctAnswer: 0,
        hint: "עבדו בצורה מסודרת: מצאו וסמנו קודם את כל המשתנים מהסוג הראשון, אחר כך את הסוג השני, ולבסוף את המספרים.",
        solution_steps: [
            { verbal_explanation: "נכנס תחילה אך ורק את האיברים המכילים את המשתנה הראשון בביטוי.", math_expression: "9x - 4x = 5x" },
            { verbal_explanation: "כעת נעבור לאיברים המכילים את המשתנה השני, ונחבר אותם בהתאם לסימנים.", math_expression: "2y - 5y = -3y" },
            { verbal_explanation: "לבסוף נסכם את כל המספרים החופשיים.", math_expression: "-3 + 8 = 5" },
            { verbal_explanation: "נרכיב את הפתרון משלושת החלקים שמצאנו.", math_expression: "5x - 3y + 5" }
        ],
        final_answer: "5x - 3y + 5"
    },
    
    // שאלה 44
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי הבא הכולל מקדמים בצורת שברים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(3/4)x - (1/4)x + 2</div>`,
        options: [
            "0.5x + 2",
            "x + 2",
            "2x + 2",
            "0.25x + 2"
        ],
        correctAnswer: 0,
        hint: "שלושה רבעים פחות רבע אחד שווה לשני רבעים. צמצמו את השבר אם אפשר.",
        solution_steps: [
            { verbal_explanation: "נחסר את המונים של השברים בעלי המכנה המשותף כדי לכנס את המשתנה.", math_expression: "(3 - 1)/4 × x = 2/4 × x" },
            { verbal_explanation: "נצמצם את השבר. שני רבעים שווים לחצי, אותו ניתן לכתוב כשבר עשרוני.", math_expression: "2/4 = 1/2 = 0.5" },
            { verbal_explanation: "נוסיף את המספר החופשי לתוצאת החיסור.", math_expression: "0.5x + 2" }
        ],
        final_answer: "0.5x + 2"
    },
    
    // שאלה 45
    {
        topic: "algebraic_expr_172",
        subTopic: "כינוס איברים",
        question_text: `פשטו את הביטוי האתגרי הכולל סוגריים בתוך סוגריים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">2x - (x - (3x + 1))</div>`,
        options: [
            "4x + 1",
            "-2x - 1",
            "4x - 1",
            "-2x + 1"
        ],
        correctAnswer: 0,
        hint: "בסוגריים מקוננים (אחד בתוך השני), תמיד מתחילים מהפנימיים ביותר. פתחו אותם, כנסו איברים, ורק אז פתחו את החיצוניים.",
        solution_steps: [
            { verbal_explanation: "נתחיל בפתיחת הסוגריים הפנימיים ביותר. סימן המינוס שלפניהם משנה את סימני האיברים שבפנים.", math_expression: "x - 3x - 1 = -2x - 1" },
            { verbal_explanation: "נציב את התוצאה בחזרה לתוך הביטוי, כך שכעת יש לנו רק זוג סוגריים אחד להתמודד איתו.", math_expression: "2x - (-2x - 1)" },
            { verbal_explanation: "נפתח את הסוגריים הנותרים. שוב, סימן השלילה בחוץ הופך את כל הסימנים בפנים לחיוביים.", math_expression: "2x + 2x + 1" },
            { verbal_explanation: "נכנס את האיברים הדומים פעם אחרונה לקבלת הפתרון הסופי בהחלט.", math_expression: "4x + 1" }
        ],
        final_answer: "4x + 1"
    }
];