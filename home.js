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
      const recommendations = document.getElementById('recommendation-list');
      const detailedRecommendations = document.getElementById('detailed-recommendations');
  
      slider.addEventListener('input', () => {
          const moodValue = parseInt(slider.value);
          let moodEmoji = '';
          let moodResponse = '';
          let detailedLinks = '';
  
          // Emoji and Recommendations
          if (moodValue <= 20) {
              moodEmoji = '😞';  
              moodResponse = "Feeling low? Let's lift your spirits!";
              detailedLinks = `
                  <p><b>🎵 Music:</b> <a href="https://www.youtube.com/watch?v=VY0K6vlrKXg" target="_blank">Relaxing Indian Classical Music</a></p>
                  <p><b>📖 Book:</b> <a href="https://www.amazon.in/Life-What-You-Make-Preeti/dp/8129119405" target="_blank">"Life is What You Make It" by Preeti Shenoy</a></p>
                  <p><b>🍲 Food:</b> Comforting Khichdi & Pakora</p>
              `;
  
          } else if (moodValue <= 40) {
              moodEmoji = '😕';
              moodResponse = "Feeling a bit off? Here's some comfort.";
              detailedLinks = `
                  <p><b>🎵 Music:</b> <a href="https://www.youtube.com/watch?v=1b2f9DRvaFs" target="_blank">Jagjit Singh's Best Ghazals</a></p>
                  <p><b>📖 Book:</b> <a href="https://www.amazon.in/Monk-Who-Sold-His-Ferrari/dp/817992162X" target="_blank">"The Monk Who Sold His Ferrari" by Robin Sharma</a></p>
                  <p><b>🍜 Food:</b> Hot Chai with Biscuits</p>
              `;
  
          } else if (moodValue <= 60) {
              moodEmoji = '😐';
              moodResponse = "Feeling neutral? Let's keep things calm.";
              detailedLinks = `
                  <p><b>🎵 Music:</b> <a href="https://www.youtube.com/watch?v=lTRiuFIWV54" target="_blank">Calm Lo-fi Beats</a></p>
                  <p><b>📖 Book:</b> <a href="https://www.amazon.in/Power-Now-Guide-Spiritual-Enlightenment/dp/8190105914" target="_blank">"The Power of Now" by Eckhart Tolle</a></p>
                  <p><b>🥗 Food:</b> Fresh Fruit Salad with Nuts</p>
              `;
  
          } else if (moodValue <= 80) {
              moodEmoji = '😊';
              moodResponse = "You're feeling great! Keep the vibe high.";
              detailedLinks = `
                  <p><b>🎵 Music:</b> <a href="https://www.youtube.com/watch?v=ZXID7h7TepU" target="_blank">Bollywood Party Playlist</a></p>
                  <p><b>📖 Book:</b> <a href="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834" target="_blank">"Atomic Habits" by James Clear</a></p>
                  <p><b>🍹 Food:</b> Mango Lassi & Masala Dosa</p>
              `;
  
          } else {
              moodEmoji = '😄';
              moodResponse = "You're feeling amazing! Spread the positivity.";
              detailedLinks = `
                  <p><b>🎵 Music:</b> <a href="https://www.youtube.com/watch?v=ovFSE8iW0zE" target="_blank">Punjabi Dance Bangers</a></p>
                  <p><b>📖 Book:</b> <a href="https://www.amazon.in/Ikigai-Hector-Garcia/dp/178633089X" target="_blank">"Ikigai" by Hector Garcia</a></p>
                  <p><b>🍨 Food:</b> Ice Cream with Chocolate Toppings</p>
              `;
          }
  
          // Update Emoji and Recommendations
          emoji.textContent = moodEmoji;
          detailedRecommendations.innerHTML = `<p>${moodResponse}</p>` + detailedLinks;
      });
  });
  