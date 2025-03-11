// document.getElementById('loginForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   if (username === "" || password === "") {
//       alert("Please fill in both fields.");
//       return;
//   }

//   // Sample login logic (to be replaced with actual database logic)
//   if (username === "testuser" && password === "password123") {
//       alert("Login successful! Welcome to Mano Mitra.");
//       window.location.href = `home.html?user=${username}`; // Redirect after successful login
//   } else {
//       alert("Invalid username or password. Please try again.");
//   }
// });
//   const quotes = [
//     "Your limitation—it's only your imagination.",
//     "Push yourself, because no one else is going to do it for you.",
//     "Great things never come from comfort zones.",
//     "Dream it. Wish it. Do it.",
//     "Success doesn’t just find you. You have to go out and get it.",
//     "Don’t stop when you’re tired. Stop when you’re done.",
//     "Wake up with determination. Go to bed with satisfaction.",
//     "It’s going to be hard, but hard does not mean impossible.",
//     "The key to success is to focus on goals, not obstacles.",
//     "Don’t wait for opportunity. Create it."
//   ];

//   function generateQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     document.getElementById("quote-text").innerText = quotes[randomIndex];
//   }
// 
    // Function to generate a random meme
    function generateMeme() {
      const totalMemes = 300;  // Total number of memes in your folder
      const randomIndex = Math.floor(Math.random() * totalMemes); 
      document.getElementById('memeImage').src = `memes/${randomIndex}.jpg`;
  }
  document.addEventListener('DOMContentLoaded', () => {
    const emoji = document.getElementById('emoji');
    const slider = document.getElementById('moodSlider');

    const foodContent = document.getElementById('food-content');
    const musicContent = document.getElementById('music-content');
    const bookContent = document.getElementById('book-content');
    
    const foodImage = document.getElementById('food-image');
    const musicImage = document.getElementById('music-image');
    const bookImage = document.getElementById('book-image');

    const detailedRecommendations = document.getElementById('detailed-recommendations');

    slider.addEventListener('input', () => {
        const moodValue = parseInt(slider.value);
        let moodEmoji = '';
        let moodResponse = '';
        let foodSuggestion = '';
        let musicSuggestion = '';
        let bookSuggestion = '';
        let foodImgSrc = '';
        let musicImgSrc = '';
        let bookImgSrc = '';

        if (moodValue <= 20) {
            moodEmoji = '😞';  
            moodResponse = "Feeling low? Let's lift your spirits!";
            foodSuggestion = "Comforting Khichdi & Pakora";
            musicSuggestion = `<a href="https://www.youtube.com/watch?v=VY0K6vlrKXg" target="_blank">Relaxing Indian Classical Music</a>`;
            bookSuggestion = `<a href="https://www.amazon.in/Life-What-You-Make-Preeti/dp/8129119405" target="_blank">"Life is What You Make It"</a>`;
            
            foodImgSrc = "C:\Users\kolli\OneDrive\Documents\Personals\ManoMitra\Manomitra\images\khichdi.jpg";
            musicImgSrc = "./images/classical-music.jpg";
            bookImgSrc = "./images/Life_Is_What_Make_It.jpg";

        } else if (moodValue <= 40) {
            moodEmoji = '😕';
            moodResponse = "Feeling a bit off? Here's some comfort.";
            foodSuggestion = "Hot Chai with Biscuits";
            musicSuggestion = `<a href="https://www.youtube.com/watch?v=1b2f9DRvaFs" target="_blank">Jagjit Singh's Best Ghazals</a>`;
            bookSuggestion = `<a href="https://www.amazon.in/Monk-Who-Sold-His-Ferrari/dp/817992162X" target="_blank">"The Monk Who Sold His Ferrari"</a>`;
            
            foodImgSrc = "images/chai.jpg";
            musicImgSrc = "images/ghazals.jpg";
            bookImgSrc = "images/JH-580.jpg";

        } else if (moodValue <= 60) {
            moodEmoji = '😐';
            moodResponse = "Feeling neutral? Let's keep things calm.";
            foodSuggestion = "Fresh Fruit Salad with Nuts";
            musicSuggestion = `<a href="https://www.youtube.com/watch?v=lTRiuFIWV54" target="_blank">Calm Lo-fi Beats</a>`;
            bookSuggestion = `<a href="https://www.amazon.in/Power-Now-Guide-Spiritual-Enlightenment/dp/8190105914" target="_blank">"The Power of Now"</a>`;
            
            foodImgSrc = "images/salad.jpg";
            musicImgSrc = "images/lofi.jpg";
            bookImgSrc = "images/TPON_Cover_LG.jpg";

        } else if (moodValue <= 80) {
            moodEmoji = '😊';
            moodResponse = "You're feeling great! Keep the vibe high.";
            foodSuggestion = "Mango Lassi & Masala Dosa";
            musicSuggestion = `<a href="https://www.youtube.com/watch?v=ZXID7h7TepU" target="_blank">Bollywood Party Playlist</a>`;
            bookSuggestion = `<a href="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834" target="_blank">"Atomic Habits"</a>`;
            
            foodImgSrc = "images/Mango-Lassi-08589.jpg";
            musicImgSrc = "images/bwood.jpg";
            bookImgSrc = "images/atomic.jpeg";

        } else {
            moodEmoji = '😄';
            moodResponse = "You're feeling amazing! Spread the positivity.";
            foodSuggestion = "Ice Cream with Chocolate Toppings";
            musicSuggestion = `<a href="https://www.youtube.com/watch?v=ovFSE8iW0zE" target="_blank">Punjabi Dance Bangers</a>`;
            bookSuggestion = `<a href="https://www.amazon.in/Ikigai-Hector-Garcia/dp/178633089X" target="_blank">"Ikigai"</a>`;
            
            foodImgSrc = "images/icecream.jpg";
            musicImgSrc = "images/punjabi.jpg";
            bookImgSrc = "images/ikitai.jpg";
        }

        emoji.textContent = moodEmoji;
        detailedRecommendations.innerHTML = `<p>${moodResponse}</p>`;
        
        foodContent.innerHTML = `<p>${foodSuggestion}</p>`;
        musicContent.innerHTML = `<p>${musicSuggestion}</p>`;
        bookContent.innerHTML = `<p>${bookSuggestion}</p>`;

        foodImage.src = foodImgSrc;
        musicImage.src = musicImgSrc;
        bookImage.src = bookImgSrc;
    });
});
