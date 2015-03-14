package ECommerce;


import java.io.*;
import java.util.List;

import org.apache.mahout.cf.taste.impl.model.file.FileDataModel;
import org.apache.mahout.cf.taste.model.DataModel;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;
import org.apache.mahout.cf.taste.recommender.Recommender;

public class DPERecommender {

	public static void main(String[] args) throws Exception {
		
		if(args.length < 4)
		{
			throw new Exception("Invalid number of arguments [filename], [type], [userid], [no. of recommendations]");
		}
		// load up the file into a data model
		String fileName = args[0];
		DataModel model = new FileDataModel(new File(fileName));
		// get the type of recommender 
		String type = args[1];
		DPERecommenderBuilderConstructor builder;
		if(type.toLowerCase() == "slope")
		{
			builder = new DPESlopeRecommender();
		}
		else{
			builder = new DPEUserRecommender();
		}
		
		Recommender recommender = builder.GetRecommender(model);
		Integer userId = Integer.decode(args[2]);
		Integer noOfRecommendations = Integer.decode(args[3]);
		
		List<RecommendedItem> items = recommender.recommend(userId, noOfRecommendations);
				
		for(RecommendedItem recommendation : items) {
			System.out.println(recommendation);
		}
	}	
}
