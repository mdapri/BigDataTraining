package ECommerce;

import org.apache.mahout.cf.taste.common.TasteException;
import org.apache.mahout.cf.taste.model.DataModel;
import org.apache.mahout.cf.taste.recommender.Recommender;

public interface DPERecommenderBuilderConstructor {
	Recommender GetRecommender(DataModel model) throws TasteException;
}
