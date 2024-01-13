import React, { Key } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Chip,
    Image,
    Link as NextUILink,
    Selection,
    SortDescriptor
} from "@nextui-org/react";

import { FaChevronDown } from "react-icons/fa";
import { SearchIcon } from "@/icons/search_icon";
import { columns, statusOptions, capitalize } from "@/helper/utils";
import { Product } from "@/models/product";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Link from "next/link";

const statusColorMap: any = {
    Temiz: "success",
    Boykot: "danger",
};

type ProductProps = {
    products: Product[],
}

export default function ListTile({ products }: ProductProps) {
    const [filterValue, setFilterValue] = React.useState("");
    const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
    const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
        column: "brand",
        direction: "ascending",
    });

    const [isLightbox, setIsLightbox] = React.useState<boolean>(false);
    const [lightboxImagePath, setlightboxImagePath] = React.useState<string>("");

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        return columns;
    }, []);

    const filteredItems: Product[] = React.useMemo(() => {
        let filteredProducts = [...products];

        if (hasSearchFilter) {
            filteredProducts = filteredProducts.filter((product) =>
                product.name.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredProducts = filteredProducts.filter((product) =>
                Array.from(statusFilter).includes(product.brand.risk),
            );
        }

        return filteredProducts;
    }, [products, hasSearchFilter, statusFilter, filterValue]);

    const items = React.useMemo(() => {
        return filteredItems;
    }, [filteredItems]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a: Product, b: Product): number => {
            /*   const first = a[sortDescriptor.column];
              const second = b[sortDescriptor.column];
              const cmp = first < second ? -1 : first > second ? 1 : 0; */
            if (sortDescriptor.column == "brand") {

                const first = a.name;
                const second = b.name;
                const cmp = first < second ? -1 : first > second ? 1 : 0;


                return sortDescriptor.direction === "descending" ? -cmp : cmp;
            } else if (sortDescriptor.column == "status") {
                const first = a.brand.risk;
                const second = b.brand.risk;
                const cmp = first < second ? -1 : first > second ? 1 : 0;


                return sortDescriptor.direction === "descending" ? -cmp : cmp;
            }

            return 0;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((product: Product, columnKey: Key) => {
        switch (columnKey) {
            case "name":
                return (
                    <Image
                        width={40}
                        height={40}
                        onClick={() => {
                            setIsLightbox(true);
                            setlightboxImagePath(`https://api.boykotaj.com.tr/storage/uploads${product.image.path}`)
                        }}
                        alt="NextUI hero Image with delay"
                        src={`https://api.boykotaj.com.tr/storage/uploads${product.image.path}`}
                    />
                );
            case "brand":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-medium capitalize">{product.name}</p>
                        <NextUILink
                            className="text-xs"
                            href={`/brands/${product.brand.slug}`}

                        /* `/brands/${product.brand.slug}` */

                        >
                            {product.brand.name}
                        </NextUILink>
                    </div >
                );
            case "risk":
                return (
                    <Chip className="capitalize" color={statusColorMap[product.brand.risk]} size="sm" variant="flat">
                        {product.brand.risk}
                    </Chip>
                );
            default:
                return product.name;
        }
    }, []);

    const onSearchChange = React.useCallback((value: string) => {
        if (value) {
            setFilterValue(value);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("")
    }, [])

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center gap-3">
                    <Input
                        isClearable
                        className="sm:max-w-[25%] md:max-w-[30%]"
                        placeholder="Ürün ara"
                        startContent={<SearchIcon />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <Dropdown
                    >
                        <DropdownTrigger className="flex">
                            <Button endContent={<FaChevronDown className="text-small" />} variant="flat">
                                Durum
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Table Columns"
                            closeOnSelect={false}
                            selectedKeys={statusFilter}
                            selectionMode="multiple"
                            onSelectionChange={setStatusFilter}
                        >
                            {statusOptions.map((status) => (
                                <DropdownItem key={status.uid} className="capitalize">
                                    {capitalize(status.name)}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        );
    }, [filterValue, onSearchChange, statusFilter, onClear]);

    return (
        <div className="container mx-auto flex flex-col gap-4">
            <Table
                aria-label="Example table with custom cells, pagination and sorting"
                isHeaderSticky
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                onSortChange={setSortDescriptor}
            >
                <TableHeader columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={"Ürün bulunamadı."} items={sortedItems}>
                    {(item) => (
                        <TableRow key={item._id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <Lightbox
                open={isLightbox}
                portal={{}}
                styles={{ container: { background: "rgba(0, 0, 0, 0.85)" } }}
                render={{
                    buttonNext() {
                        return null;
                    },
                    buttonPrev() {
                        return null;
                    },
                }}
                close={() => setIsLightbox(false)}
                index={0}
                labels={{ Next: "Next slide" }}
                slides={[
                    { src: lightboxImagePath },
                ]}
            />
        </div>

    );
}
