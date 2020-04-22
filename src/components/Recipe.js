import React from 'react'

const recipes = [
  {
    id: 1,
    title: 'Applesauce Chocolate Chip Banana Bread (Vegetarian)',
    summary: 'Naturally sweetened applesauce banana bread made with whole wheat flour and oatmeal.',
    baseIngredients: 
      [
        'cocounut oil',
        '1 heaping cut over ripe bananas',
        '1/3 cup honey',
        '1/3 cup (un)sweetened applesauce',
        '1 teaspoon vanilla',
        '1 egg',
        '3/4 cup unsweetened vanilla almond milk (or skim, coconut, etc.)',
        '1 1/2 cups whole wheat flour',
        '1 cup rolled oats',
        '1 1/2 teaspoons baking powder',
        '3/4 teaspoon baking soda',
        '1/4 teaspoon salt',
        '1 teaspoon ground cinnamon'
      ],
    extraIngredients: 
      [
        'flax seed',
        'sunflower seeds',
        'chocolate chips',
        'pb fit or peanutbutter'
      ],
    prepTime: '10 minutes',
    cookTime: '60 minutes',
    instructions: 
      [
        'Preheat oven to 350 degrees F. Spray 9-inch loaf pan with nonstick organic cooking spray.',
        'In large bowl combine mashed banana, applesauce, honey, egg, almond milk and vanilla until well combined and creamy.', 
        'In separate medium bowl whisk together whole wheat flour, oats, baking powder, baking soda, salt and cinnamon. Add wet ingredients to dry ingredients and mix until just combined.',
        'Pour into prepared loaf pan, sprinkle oats over top (if desired), and bake for 60-70 minutes or until toothpick inserted into center comes out clean with a few crumbs attached.',
        'Remove from oven and place on wire rack to cool completely. Cut into 12 slices and enjoy! Keep bread tightly wrapped to maintain moisture.'
      ],
    recipeNotes: 
      [
        'To make vegan: Use brown sugar, agave, or pure maple syrup instead of honey. Simply omit egg; the banana bread shopd still hold together just fine. However you can use a flax egg as well.',
        'To make gluten free: Use an all-purpose gluten free flour instead of whole wheat; make sure you also use gluten free oats and that all other ingredients are gluten/alcohol free (such as vanilla).'
      ],
    nutrition:
      [
        'Servings: 12 slices',
        'Serving size: 1 slice',
        'Calories: 133kcal',
        'Fat: 1.3g',
        'Carbohydrates: 27.6g',
        'Fiber: 2.8g',
        'Sugar: 10.1g',
        'Protein: 3.1g'
      ],
    source: 'https://www.ambitiouskitchen.com/whole-wheat-oatmeal-applesauce-banana-bread-healthy-vegan-friendly/'
  },
  {
    id: 2,
    title: 'Grilled Salmon with Honey-Soy Marinade',
    summary: 'Five and one are the magic numbers to remember for this incredibly easy salmon marinade. You need just six ingredients – five equal parts of honey, soy sauce, olive oil, brown sugar and butter, added to one clove of garlic, and you’re ready to give a fresh salmon fillet a quick 30-minute marinade makeover.',
    baseIngredients:
      [
        '1 tablespoon packed brown sugar',
        '1 tablespoon butter, melted',
        '1 tablespoon olive or vegetable oil',
        '1 tablespoon honey',
        '1 tablespoon soy sauce',
        '1 clove garlic, finely chopped',
        '1 large salmon fillet (about 2 lb), cut into 8 pieces'        
      ],
    extraIngredients: 
      [
        'thyme',
        'salt'
      ],
    prepTime: '10 minutes to 1 hour',
    cookTime: '10 to 20 minutes',
    instructions: 
      [
        'In small bowl, mix all ingredients except salmon.',
        'In shallow glass or plastic dish, place salmon. Pour marinade over salmon. Cover and refrigerate at least 30 minutes but no longer than 1 hour.',
        'Heat coals or gas grill. Remove salmon from marinade; reserve marinade. Place salmon, skin side down, on grill. Cover and grill over medium heat 10 to 20 minutes, brushing 2 or 3 times with marinade, until salmon flakes easily with fork. Discard any remaining marinade.'
      ],
    recipeNotes:
      [
        'Sprinkle the salmon with toasted white and black sesame seeds and a good shower of slivered green onions or torn fresh cilantro leaves for a pretty finish.',
        'Buying Fish: Flesh should be shiny, firm and spring back when touched. Avoid fish with dark edges or brown and yellowish discoloration. The contents should smell fresh and mild, not fishy or like ammonia.',
        'Look for wild salmon from Alaska in the summer time, farmed Scottish salmon year ‘round, or steelhead trout (which has the same red, rich flesh like salmon). When you cut the fillet into pieces make the thinner end, closest to the tail, into wider pieces. Put the thicker pieces on the grill for a few minutes before placing the thinner pieces.',
        'Salmon has a medium-firm texture and a full rich flavor.',
        'The brown sugar, butter and honey glaze will caramelize on the surface of the fish, along with the soy sauce it forms a savory, umami-rich coating.',
        'Try to use salmon fillets that are cut into an even thickness so they will all be ready at the same time.',
        'Fish generally takes about 10 minutes to grill for each inch of thickness. Add more time if the fillet is thicker; if you are grilling two thinner pieces, grill the fish for slightly less time.',
        'To remove skin from cooked fish, grab skin from tail end with tongs or fingers and gently peel off.',
        'The salmon can also be marinated and broiled instead of grilled.',
        'Not only does marinating salmon amp up the flavor and elevate into a “wow” entrée, but it’s really quick and easy to do. Marinating this salmon will keep it from drying out as it cooks, and the oil in the marinade will prevent it from sticking to the grill. Because the fish is already tender, it needs just 30 minutes—and no more than an hour—to absorb the sweet, complex flavors of this honey glazed salmon recipe.'
      ],
    nutrition:
      [

      ],
    source: 'https://www.bettycrocker.com/recipes/grilled-salmon-with-honey-soy-marinade/001ba701-3077-4d70-815b-942bc0f047f3'
  },
  // Caribbean Jerk Chicken NEXT!
  // https://www.tasteofhome.com/recipes/caribbean-jerk-chicken/
]

const Recipe = () => {
  return (
    <div>
        {recipes.map(recipe => 
          <ul key={recipe.id}>
              <h3>{recipe.title}</h3>
            <p>
              Summary: {recipe.summary}
            </p>
            <p>
              Base Ingredients: {recipe.baseIngredients}
            </p>
            <p>
              Extra Ingredients: {recipe.extraIngredients}
            </p>
            <p>
              Prep time: {recipe.prepTime}
            </p>
            <p>
              Cook time: {recipe.cookTime}
            </p>
            <p>
              Instructions: {recipe.instructuions}
            </p>
            <p>
              Notes: {recipe.recipeNotes}
            </p>
            <p>
              Nutrition: {recipe.nutrition}
            </p>
            <p>
              Source: {recipe.source}
            </p>
            {/* insert break line here */}
          </ul>
        )}
    </div>
  )
}

export default Recipe