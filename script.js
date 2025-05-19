document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
        {
    "question": " Implement a Rate Limiter",
    "description": "Used to throttle requests to prevent abuse.",
    "hint": "Use a queue or hashmap with timestamps.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
class RateLimiter {
  constructor(limit, interval) {
    this.limit = limit;
    this.interval = interval;
    this.requests = [];
  }

  allowRequest() {
    const now = Date.now();
    this.requests = this.requests.filter(t => now - t &lt; this.interval);
    if (this.requests.length &lt; this.limit) {
      this.requests.push(now);
      return true;
    }
    return false;
  }
}
</code></pre>
    `
  },
  {
    "question": " Detect Loop in Linked List",
    "description": "Classic data structure problem.",
    "hint": "Use Floyd’s cycle detection (two pointers).",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast &amp;&amp; fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
</code></pre>
    `
  },
  {
    "question": " Implement a Message Queue",
    "description": "Simulates asynchronous event handling.",
    "hint": "Use arrays with enqueue and dequeue methods.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
class MessageQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(msg) {
    this.queue.push(msg);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
</code></pre>
    `
  },
  {
    "question": " Merge K Sorted Arrays",
    "description": "Important for handling feeds in real-time apps.",
    "hint": "Use a min-heap (priority queue).",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function mergeKSorted(arrays) {
  const merged = [].concat(...arrays);
  return merged.sort((a, b) => a - b);
}
</code></pre>
    `
  },
  {
    "question": " Check if a String is a Palindrome",
    "description": "Basic string manipulation.",
    "hint": "Use two pointers from both ends.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left &lt; right) {
    if (str[left++] !== str[right--]) return false;
  }
  return true;
}
</code></pre>
    `
  },
  {
    "question": " Find Missing Number",
    "description": "Given numbers from 1 to N with one missing.",
    "hint": "Use sum formula or XOR.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function missingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}
</code></pre>
    `
  },
  {
    "question": " Group Anagrams",
    "description": "Common string problem.",
    "hint": "Sort characters and group by key.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function groupAnagrams(words) {
  let map = {};
  for (let word of words) {
    let sorted = word.split('').sort().join('');
    map[sorted] = map[sorted] || [];
    map[sorted].push(word);
  }
  return Object.values(map);
}
</code></pre>
    `
  },
  {
    "question": " Find First Unique Character",
    "description": "Used in Snapchat text processing.",
    "hint": "Use frequency map.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function firstUniqueChar(s) {
  const freq = {};
  for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;
  for (let i = 0; i &lt; s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }
  return -1;
}
</code></pre>
    `
  },
  {
    "question": " Rotate Image 90 Degrees",
    "description": "Matrix manipulation.",
    "hint": "Transpose then reverse rows.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function rotate(matrix) {
  const n = matrix.length;
  for (let i = 0; i &lt; n; i++) {
    for (let j = i; j &lt; n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let row of matrix) row.reverse();
}
</code></pre>
    `
  },
  {
    "question": " Validate Parentheses",
    "description": "Stack-based validation question.",
    "hint": "Push open, pop on close.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function isValid(s) {
  const stack = [];
  const map = {')': '(', '}': '{', ']': '['};
  for (let char of s) {
    if (map[char]) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
</code></pre>
    `
  },
  {
    "question": " Longest Substring Without Repeating Characters",
    "description": "Find the length of the longest substring with unique characters.",
    "hint": "Use sliding window with a set to track characters.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function lengthOfLongestSubstring(s) {
  let set = new Set(), maxLen = 0, left = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left++]);
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
</code></pre>
    `
  },
  {
    "question": " Two Sum",
    "description": "Find two indices such that their values add up to a target.",
    "hint": "Use a hashmap to store visited numbers.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in map) return [map[diff], i];
    map[nums[i]] = i;
  }
  return [];
}
</code></pre>
    `
  },
  {
    "question": " Find Peak Element",
    "description": "Find a peak element that is greater than its neighbors.",
    "hint": "Use binary search for O(log n) solution.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function findPeakElement(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) right = mid;
    else left = mid + 1;
  }
  return left;
}
</code></pre>
    `
  },
  {
    "question": " Maximum Depth of Binary Tree",
    "description": "Compute the depth of a binary tree.",
    "hint": "Use recursion to explore left and right depths.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
</code></pre>
    `
  },
  {
    "question": " Invert Binary Tree",
    "description": "Mirror a binary tree.",
    "hint": "Swap left and right nodes recursively.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function invertTree(root) {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}
</code></pre>
    `
  },
  {
    "question": " Find Intersection of Two Arrays",
    "description": "Return unique elements common to both arrays.",
    "hint": "Use Set to handle uniqueness and filter.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].filter(n => set2.has(n));
}
</code></pre>
    `
  },
  {
    "question": " Move Zeroes",
    "description": "Move all zeroes to the end while maintaining the order.",
    "hint": "Use two-pointer technique.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function moveZeroes(nums) {
  let lastNonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[lastNonZero]] = [nums[lastNonZero], nums[i]];
      lastNonZero++;
    }
  }
}
</code></pre>
    `
  },
  {
    "question": " Valid Palindrome",
    "description": "Check if a string is a palindrome, ignoring non-alphanumeric characters.",
    "hint": "Use regex and two pointers.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function isValidPalindrome(s) {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left++] !== s[right--]) return false;
  }
  return true;
}
</code></pre>
    `
  },
  {
    "question": " Maximum Subarray",
    "description": "Find the contiguous subarray with the largest sum.",
    "hint": "Use Kadane’s Algorithm.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function maxSubArray(nums) {
  let maxSum = nums[0], currSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
</code></pre>
    `
  },
  {
    "question": " Remove Duplicates from Sorted Array",
    "description": "Remove duplicates in-place from sorted array.",
    "hint": "Use two pointers, one slow and one fast.",
    "answer": `
<p><strong>Sample Answer (JavaScript):</strong></p>
<pre><code class="language-javascript">
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) nums[++i] = nums[j];
  }
  return i + 1;
}
</code></pre>
    `
  },
  {
    "question": " How do you maintain creativity and innovation in fast-paced environments like Snapchat?",
    "description": "Assesses adaptability and creative problem-solving in high-speed tech companies.",
    "hint": "Talk about your process for brainstorming, rapid prototyping, or collaborating with diverse teams.",
    "answer": `
<p><strong>Sample Answer:</strong></p>
<pre><code>
I thrive in fast-paced environments by setting short-term goals and maintaining an open mindset for experimentation. At university, I led a team hackathon where we ideated, built, and tested a social app in under 36 hours. I believe feedback loops and agile thinking are key to continuous innovation.
</code></pre>
    `
  },
  {
    "question": " What do you think makes Snapchat's culture different from other social platforms?",
    "description": "Evaluates your research and alignment with the company's mission and values.",
    "hint": "Mention Snapchat’s focus on privacy, visual communication, and ephemeral content.",
    "answer": `
<p><strong>Sample Answer:</strong></p>
<pre><code>
Snapchat stands out with its emphasis on authenticity and spontaneity. Its ephemeral content model encourages real, in-the-moment sharing rather than curated perfection. I admire the way the platform prioritizes user privacy and creativity, which resonates with my values.
</code></pre>
    `
  },
  {
    "question": " Tell us about a time when you had to challenge the status quo.",
    "description": "Tests your initiative and ability to bring change within a team or organization.",
    "hint": "Use the STAR method: Situation, Task, Action, Result.",
    "answer": `
<p><strong>Sample Answer:</strong></p>
<pre><code>
During a group project, our team stuck to an outdated UI/UX framework. I proposed using a modern, more responsive design system and created a prototype to demonstrate its benefits. The team adopted my solution, improving user interaction and engagement in our app.
</code></pre>
    `
  },
  {
    "question": " How do you stay up to date with the latest trends in technology and social media?",
    "description": "Evaluates your curiosity and commitment to growth.",
    "hint": "Mention newsletters, podcasts, communities, or projects you work on.",
    "answer": `
<p><strong>Sample Answer:</strong></p>
<pre><code>
I subscribe to newsletters like TechCrunch and The Verge, and I follow creators on platforms like Medium and Twitter. I also enjoy building side projects using the latest tools. For instance, I recently experimented with Web3 integrations and Snapchat AR Lens Studio.
</code></pre>
    `
  },
  {
    "question": " What’s your favorite Snapchat feature and how would you improve it?",
    "description": "Assesses user awareness, creativity, and product thinking.",
    "hint": "Pick a feature you genuinely like and suggest a thoughtful improvement.",
    "answer": `
<p><strong>Sample Answer:</strong></p>
<pre><code>
I love the Snap Map feature—it’s interactive and socially engaging. To improve it, I’d integrate real-time filters like live events or trending hangout spots based on user behavior, giving it even more context and making spontaneous meetups easier.
</code></pre>
    `
  }


    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});