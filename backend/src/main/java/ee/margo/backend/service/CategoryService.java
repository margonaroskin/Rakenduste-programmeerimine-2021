package ee.margo.backend.service;

import ee.margo.backend.model.Category;
import ee.margo.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public void saveCategory(Category category){
        categoryRepository.save(category);
    }

    public List<Category> getcategories() { return categoryRepository.findAll(); }
}