package ECommerce;

import org.apache.mahout.cf.taste.common.TasteException;
import org.apache.mahout.cf.taste.eval.RecommenderBuilder;
import org.apache.mahout.cf.taste.impl.neighborhood.NearestNUserNeighborhood;
import org.apache.mahout.cf.taste.impl.recommender.GenericUserBasedRecommender;
import org.apache.mahout.cf.taste.impl.similarity.PearsonCorrelationSimilarity;
import org.apache.mahout.cf.taste.model.DataModel;
import org.apache.mahout.cf.taste.neighborhood.UserNeighborhood;
import org.apache.mahout.cf.taste.recommender.Recommender;
import org.apache.mahout.cf.taste.similarity.UserSimilarity;

public class DPEUserRecommender implements DPERecommenderBuilderConstructor {

	@Override
	public Recommender GetRecommender(DataModel model) throws TasteException {
		RecommenderBuilder builder = new RecommenderBuilder()
		{
			@Override
			public Recommender buildRecommender(DataModel model) throws TasteException	{
				UserSimilarity similarity = new PearsonCorrelationSimilarity(model);
				UserNeighborhood neighbourhood = new NearestNUserNeighborhood(100, similarity, model);
				return new GenericUserBasedRecommender(model, neighbourhood, similarity);	
			}
		};
		
		return builder.buildRecommender(model);
	}

}
