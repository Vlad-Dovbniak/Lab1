import { useState, useEffect } from 'react';

const Reviews = () => {
  const [comments, setComments] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true); 
  
  const variant = 11; 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
      .then(response => response.json())
      .then(data => {
        setComments(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Помилка:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="mt-8 max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-slate-100">
      <div className="mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        <h2 className="text-2xl font-bold text-slate-800">
          Відгуки роботодавців
        </h2>
      </div>
      
      <div className="space-y-4">
        {isLoading ? (
          <p className="text-slate-500 italic">Завантаження даних із сервера...</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="font-bold text-slate-700">{comment.email}</p>
              <p className="text-sm font-semibold text-slate-500 mb-2">{comment.name}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{comment.body}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Reviews;