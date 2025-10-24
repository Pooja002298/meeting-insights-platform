import re
from typing import List, Dict
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import NMF
from textblob import TextBlob

def summarize_text(text: str, n_sentences: int = 4) -> str:
    sentences = [s.strip() for s in re.split(r'(?<=[.!?]) +', text) if s.strip()]
    if not sentences:
        return ''
    vect = TfidfVectorizer().fit_transform(sentences)
    scores = vect.sum(axis=1).A1
    ranked_idx = scores.argsort()[::-1][:n_sentences]
    return ' '.join([sentences[i] for i in sorted(ranked_idx)])

def sentiment_analysis(text: str) -> Dict[str, float]:
    tb = TextBlob(text)
    return {"polarity": tb.sentiment.polarity, "subjectivity": tb.sentiment.subjectivity}

def extract_topics(docs: List[str], n_topics: int = 4, n_top_words: int = 6) -> List[str]:
    docs = [d for d in docs if d.strip()]
    if not docs:
        return []
    tfidf = TfidfVectorizer(max_df=0.95, min_df=1, stop_words='english')
    W = tfidf.fit_transform(docs)
    n_components = min(n_topics, max(1, W.shape[1]-1))
    nmf = NMF(n_components=n_components, random_state=0)
    nmf.fit(W)
    feature_names = tfidf.get_feature_names_out()
    topics = []
    for topic_idx, topic in enumerate(nmf.components_):
        top_features = [feature_names[i] for i in topic.argsort()[:-n_top_words - 1:-1]]
        topics.append(' '.join(top_features))
    return topics
