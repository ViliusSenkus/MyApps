<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Brand;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    private function errorResponse(\Exception $e): JsonResponse
    {
        return response()->json([
            'error' => 'Server error - faux pas - ',
            'message' => $e->getMessage()
        ], 500);
    }

    public function index(): JsonResponse
    {
        try {
            $products = Product::paginate(15); //change number to reviel more or less products
            return response()->json($products);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function store(Request $request): JsonResponse
    {
        try {
            $product = Product::create($request->validated());
            return response()->json([
                'message' => 'Product created successfully',
                'product' => $product
            ], 201);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function show(Product $product)
    {
        try {
            return Product::find($product);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function update(Request $request, Product $product)
    {
        try {
            $old = $product->name;
            $product->update($request->all());
            return response('Product ' . $old . ' successfully changed to ' . $product->name, 201);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function destroy(Product $product)
    {
        try {
            $product->delete();
            return response('Product ' . $product->name . ' deleted successfully', 200);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    // MY FUNCTIONS

    public function withPurchase($id)
    {
        try {
            return Product::with('purchase')->find($id);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function withBrand($id)
    {
        try {
            return Product::with('brand')->find($id);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function withBrandAndManufacturer($id)
    {
        try {
            return Product::with(['brand.manufacturer'])
                ->find($id);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function withSpaces($id)
    {
        try {
            return Product::with('spaces')->find($id);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function withSuppliers($id)
    {
        try {
            return Product::with('suppliers')->find($id);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function withSuppliersAndSpaces($id)
    {
        try {
            return Product::with(['suppliers', 'spaces', 'purchase'])->find($id);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function withOrder($id)
    {
        try {
            return Product::with('order')->find($id);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function withPurchaseAndOrder($id)
    {
        try {
            return Product::with(['purchase', 'order'])->find($id);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function withFullDetails($id): JsonResponse
    {
        try {
            $product = Product::with([
                'suppliers',
                'spaces',
                'purchase',
                'order',
                'brand.manufacturer'
            ])->findOrFail($id);

            return response()->json($product);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
