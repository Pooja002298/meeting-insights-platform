from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans

def summarize_text(text: str, n_sentences=3) -> str:
    sentences = text.split(". ")
    if len(sentences) <= n_sentences:
        return text

    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(sentences)

    kmeans = KMeans(n_clusters=n_sentences, random_state=0)
    kmeans.fit(X)

    top_sentences = [sentences[i] for i in kmeans.labels_[:n_sentences]]
    return ". ".join(top_sentences)
